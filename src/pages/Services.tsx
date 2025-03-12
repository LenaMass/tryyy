
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6">Our Services</h1>
              <p className="text-lg text-neutral-600">
                Comprehensive solutions to establish and operate your business in Saudi Arabia efficiently and in full compliance with local regulations.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Incorporation */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">1. Company Incorporation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Self-Guided Setup */}
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="h-12 w-12 bg-soft-purple rounded-full flex items-center justify-center mb-4">
                      <Shield size={24} className="text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Self-Guided Setup (DIY)</h3>
                    <p className="text-neutral-600 mb-4">
                      AI-driven platform for companies that want to set up independently.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check size={18} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Step-by-step guided process</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                        <span>AI assistant support</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-purple-500 mt-1 mr-2 flex-shrink-0" />
                        <span>Detailed instructions for each step</span>
                      </li>
                    </ul>
                    <Link 
                      to="/services/self-guided-setup" 
                      className="text-purple-500 hover:text-purple-600 font-medium inline-flex items-center"
                    >
                      Learn more 
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
                
                {/* Agency-Assisted Setup */}
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="h-12 w-12 bg-soft-green rounded-full flex items-center justify-center mb-4">
                      <Check size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Agency-Assisted Setup</h3>
                    <p className="text-neutral-600 mb-4">
                      Managed by experts, ensuring full compliance.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check size={18} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Expert-led end-to-end setup</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Handling of all documentation</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Government authority coordination</span>
                      </li>
                    </ul>
                    <Link 
                      to="/services/agency-assisted-setup" 
                      className="text-purple-500 hover:text-purple-600 font-medium inline-flex items-center"
                    >
                      Learn more 
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
                
                {/* Expert Document Check */}
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="h-12 w-12 bg-soft-yellow rounded-full flex items-center justify-center mb-4">
                      <Clock size={24} className="text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Expert Document Check</h3>
                    <p className="text-neutral-600 mb-4">
                      Document check by expert within 48 hours for self-guided setup clients.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check size={18} className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Professional review within 48 hours</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Error identification and correction</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Compliance verification</span>
                      </li>
                    </ul>
                    <Link 
                      to="/services/expert-document-check" 
                      className="text-purple-500 hover:text-purple-600 font-medium inline-flex items-center"
                    >
                      Learn more 
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Post Operations Support */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">2. Post Operations Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* GRO Management */}
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="h-12 w-12 bg-soft-blue rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Government Relations Officer (GRO) Management</h3>
                    <p className="text-neutral-600 mb-4">
                      Handling renewals, legal compliance, and documentation.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>License and permit renewals</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Government communications</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Regulatory compliance monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* HR Outsourcing */}
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="h-12 w-12 bg-soft-peach rounded-full flex items-center justify-center mb-4">
                      <Users size={24} className="text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">HR Outsourcing (HRO)</h3>
                    <p className="text-neutral-600 mb-4">
                      Payroll management, employee visas, and Saudization tracking.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check size={18} className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Payroll processing and management</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Employee visa processing</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-orange-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Saudization compliance and tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link 
                  to="/services/post-operations-support" 
                  className="button-primary inline-flex items-center"
                >
                  Learn More About Post-Operations Support
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-cta-pattern text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-6">Ready to Start Your Business in Saudi Arabia?</h2>
              <p className="text-lg mb-8 text-white/90">
                Take our quick quiz to determine the best legal structure, timeline, and cost for your business setup.
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

export default Services;
