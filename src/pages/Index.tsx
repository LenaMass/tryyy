
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Clock, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Services Overview */}
        <section className="py-20 bg-neutral-50">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Our Services</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Comprehensive solutions for setting up and running your business in Saudi Arabia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Company Incorporation */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm card-hover">
                <h3 className="text-xl font-bold mb-4">1. Company Incorporation</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 bg-soft-purple rounded-full flex items-center justify-center mr-4">
                      <Shield size={20} className="text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Self-Guided Setup (DIY)</h4>
                      <p className="text-sm text-neutral-600">
                        AI-driven platform for companies that want to set up independently.
                      </p>
                      <Link to="/services/self-guided-setup" className="text-sm text-purple-500 hover:text-purple-600 mt-1 inline-flex items-center">
                        Learn more <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 bg-soft-green rounded-full flex items-center justify-center mr-4">
                      <CheckCircle2 size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Agency-Assisted Setup</h4>
                      <p className="text-sm text-neutral-600">
                        Managed by experts, ensuring full compliance.
                      </p>
                      <Link to="/services/agency-assisted-setup" className="text-sm text-purple-500 hover:text-purple-600 mt-1 inline-flex items-center">
                        Learn more <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 bg-soft-yellow rounded-full flex items-center justify-center mr-4">
                      <Clock size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Expert Document Check</h4>
                      <p className="text-sm text-neutral-600">
                        Document check by expert within 48 hours for self-guided setup clients.
                      </p>
                      <Link to="/services/expert-document-check" className="text-sm text-purple-500 hover:text-purple-600 mt-1 inline-flex items-center">
                        Learn more <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Post Operations Support */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm card-hover">
                <h3 className="text-xl font-bold mb-4">2. Post Operations Support</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 bg-soft-blue rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Government Relations Officer (GRO) Management</h4>
                      <p className="text-sm text-neutral-600">
                        Handling renewals, legal compliance, and documentation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 bg-soft-peach rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">HR Outsourcing (HRO)</h4>
                      <p className="text-sm text-neutral-600">
                        Payroll management, employee visas, and Saudization tracking.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link to="/services/post-operations-support" className="text-purple-500 hover:text-purple-600 font-medium inline-flex items-center">
                      Learn more about Post-Operations Support 
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Solutions */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">AI-Backed Solutions</h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Leveraging cutting-edge AI to make business setup faster and more efficient.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm card-hover">
                <div className="h-14 w-14 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">The Base</h3>
                <p className="text-neutral-600">
                  Step-by-Step Company Setup – Guided workflow from registration to launch + AI Agent
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm card-hover">
                <div className="h-14 w-14 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fareed AI</h3>
                <p className="text-neutral-600">
                  Your company setup expert who can guide you with anything related to setup and compliance.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/ai-solutions">
                <Button className="bg-purple-300 hover:bg-purple-400 text-white">
                  Explore AI Solutions
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-cta-pattern text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Ready to start your business in Saudi Arabia?</h2>
              <p className="text-lg mb-8 text-white/90">
                Get your personalized business setup plan in just 30 seconds with our free quiz.
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

export default Index;
