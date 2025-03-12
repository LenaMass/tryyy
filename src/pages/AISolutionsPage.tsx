
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, BrainCircuit, Zap } from 'lucide-react';

const AISolutionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6 animate-fade-in">AI-Backed Solutions</h1>
              <p className="text-xl text-neutral-600 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Intelligent tools to streamline your business setup and compliance in Saudi Arabia.
              </p>
            </div>
          </div>
        </section>
        
        {/* The Base Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="inline-block bg-soft-purple rounded-lg p-2 mb-4">
                  <Zap size={24} className="text-purple-500" />
                </div>
                <h2 className="heading-md mb-4">The Base</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Step-by-Step Company Setup – Guided workflow from registration to launch with our AI Agent.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="bg-soft-purple text-purple-500 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Structured step-by-step workflow tailored to your business type</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-soft-purple text-purple-500 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Real-time document validation and compliance checking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-soft-purple text-purple-500 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Automated form preparation and submission guidance</span>
                  </li>
                </ul>
                <Link to="/start-quiz">
                  <Button className="bg-purple-300 hover:bg-purple-400 text-white">
                    Get Started <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <img src="/placeholder.svg" alt="The Base Platform" className="w-full h-auto rounded-lg mb-6" />
                <h3 className="text-xl font-bold mb-2">Intelligent Setup Workflow</h3>
                <p className="text-neutral-600">
                  Our platform guides you through every step of the setup process, from business entity selection to 
                  final registration. AI-powered checks ensure your documents meet all regulatory requirements before submission.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fareed AI Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 rounded-xl border border-neutral-200 bg-white p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-soft-green rounded-lg p-6 mb-6">
                  <Bot size={42} className="text-green-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">24/7 Compliance Support</h3>
                <p className="text-neutral-600 text-center mb-6">
                  Fareed AI is available around the clock to answer your questions and provide guidance on
                  regulatory compliance, documentation, and business setup procedures.
                </p>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <div className="flex items-start mb-3">
                    <div className="bg-neutral-200 h-8 w-8 rounded-full flex-shrink-0 mr-3"></div>
                    <div className="bg-neutral-100 rounded-lg p-3 text-sm">
                      How do I register for VAT in Saudi Arabia?
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-100 h-8 w-8 rounded-full flex-shrink-0 mr-3 flex items-center justify-center">
                      <Bot size={16} className="text-purple-500" />
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-sm">
                      To register for VAT in Saudi Arabia, you'll need to access the ZATCA portal. I'll guide you through the 
                      step-by-step process and help prepare the required documents...
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="inline-block bg-soft-green rounded-lg p-2 mb-4">
                  <BrainCircuit size={24} className="text-green-600" />
                </div>
                <h2 className="heading-md mb-4">Fareed AI</h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Your company setup expert who can guide you with anything related to setup and compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="bg-soft-green text-green-600 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>24/7 access to regulatory and compliance guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-soft-green text-green-600 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Real-time notifications of regulatory changes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-soft-green text-green-600 p-1 rounded-full mr-3 flex-shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span>Document reviews and validation assistance</span>
                  </li>
                </ul>
                <Link to="/start-quiz">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Chat with Fareed <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-cta-pattern text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Experience the power of AI in business setup</h2>
              <p className="text-lg mb-8 text-white/90">
                Start with our free quiz to get your personalized business setup plan in just 30 seconds.
              </p>
              <Link 
                to="/start-quiz" 
                className="inline-flex items-center bg-white text-purple-500 hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Take the Quiz Now
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISolutionsPage;
