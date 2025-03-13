from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Allows frontend to communicate with backend

# MySQL Database Configuration
app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# Define User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    message = db.Column(db.Text, nullable=False)

# Create tables (run once)
with app.app_context():
    db.create_all()

# Function to send email
def send_email(name, email, message):
    sender_email = os.getenv("EMAIL_USER")
    sender_password = os.getenv("EMAIL_PASS")
    recipient_email = os.getenv("RECIPIENT_EMAIL")

    msg = EmailMessage()
    msg.set_content(f"New User Submission:\n\nName: {name}\nEmail: {email}\nMessage: {message}")
    msg["Subject"] = "New User Submission"
    msg["From"] = sender_email
    msg["To"] = recipient_email

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, sender_password)
            server.send_message(msg)
        print("Email sent successfully!")
    except Exception as e:
        print(f"Failed to send email: {e}")

# Route to save user data
@app.route("/submit", methods=["POST"])
def submit():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "All fields are required"}), 400

    # Save user data in the database
    new_user = User(name=name, email=email, message=message)
    db.session.add(new_user)
    db.session.commit()

    # Send an email
    send_email(name, email, message)

    return jsonify({"success": "Data saved and email sent"}), 200

# Route to retrieve all user data
@app.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    user_list = [{"id": user.id, "name": user.name, "email": user.email, "message": user.message} for user in users]
    return jsonify(user_list)

if __name__ == "__main__":
    app.run(debug=True)
