<?php
// Database connection settings
$servername = "localhost";
$username = "your_database_user";  // Replace with your database username
$password = "your_database_password";  // Replace with your database password
$dbname = "website_data";

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Prevent SQL injection
$name = $conn->real_escape_string($name);
$email = $conn->real_escape_string($email);
$message = $conn->real_escape_string($message);

// Save data to database
$sql = "INSERT INTO responses (name, email, message) VALUES ('$name', '$email', '$message')";
if ($conn->query($sql) === TRUE) {
    // Prepare email
    $to = "merlenax@gmail.com"; // Your email
    $subject = "New Form Submission from $name";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email\r\nReply-To: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your response has been submitted and emailed!";
    } else {
        echo "Error sending email.";
    }
} else {
    echo "Error saving data: " . $conn->error;
}

$conn->close();
?>
