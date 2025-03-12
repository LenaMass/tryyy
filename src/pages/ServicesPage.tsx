
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6 animate-fade-in">Our Services</h1>
              <p className="text-xl text-neutral-600 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Comprehensive solutions for setting up and running your business in Saudi Arabia.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Incorporation Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="mb-16 max-w-3xl mx-auto">
              <h2 className="heading-md mb-4">1. Company Incorporation</h2>
              <p className="text-lg text-neutral-600">
                Choose the setup approach that works best for your business needs, timeline, and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Self-Guided Setup */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 bg-soft-purple rounded-full flex items-center justify-center mb-6">
                  <Zap size={24} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Self-Guided Setup (DIY)</h3>
                <p className="text-neutral-600 mb-4">
                  AI-driven platform for companies that want to set up independently.
                </p>
                <Link to="/services/self-guided-setup" className="inline-flex items-center text-purple-500 hover:text-purple-600 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              {/* Agency-Assisted Setup */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 bg-soft-green rounded-full flex items-center justify-center mb-6">
                  <Shield size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Agency-Assisted Setup</h3>
                <p className="text-neutral-600 mb-4">
                  Managed by experts, ensuring full compliance.
                </p>
                <Link to="/services/agency-assisted-setup" className="inline-flex items-center text-purple-500 hover:text-purple-600 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              {/* Expert Document Check */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 bg-soft-yellow rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Document Check</h3>
                <p className="text-neutral-600 mb-4">
                  Document check by expert within 48 hours for self-guided setup clients.
                </p>
                <Link to="/services/expert-document-check" className="inline-flex items-center text-purple-500 hover:text-purple-600 font-medium">
                  Learn more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Post Operations Support */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="mb-16 max-w-3xl mx-auto">
              <h2 className="heading-md mb-4">2. Post Operations Support</h2>
              <p className="text-lg text-neutral-600">
                Once your business is set up, we'll help you maintain compliance and manage operations efficiently.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-xl border border-neutral-200 shadow-sm max-w-4xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Government Relations Officer (GRO) Management</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <span>Renewals & Compliance – Stay up to date with license, visa, and permit renewals.</span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <span>Regulatory Support – Ensure full compliance with Saudi business laws.</span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <span>Documentation & Government Liaison – Manage filings, approvals, and official interactions.</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">HR Outsourcing (HRO) Services</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <span>Payroll Processing – Ensure accurate and timely salary payments.</span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <span>Employee Visa Services – Manage visa applications, renewals, and legal requirements.</span>
                    </li>
                    <li className="flex">
                      <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                      <span>Saudization Tracking – Monitor compliance with national workforce regulations.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/services/post-operations-support">
                  <Button className="bg-purple-300 hover:bg-purple-400 text-white">
                    Learn More About Post-Operations Support
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

export default ServicesPage;
