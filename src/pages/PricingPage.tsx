
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Shield, Zap, BrainCircuit } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6 animate-fade-in">Simple, Transparent Pricing</h1>
              <p className="text-xl text-neutral-600 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Choose the plan that works best for your business needs in Saudi Arabia.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pricing Plans */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Self-Guided Plan */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="h-12 w-12 bg-soft-purple rounded-full flex items-center justify-center mb-6">
                  <Zap size={24} className="text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Self-Guided Setup</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">690 SAR</span>
                  <span className="text-neutral-600">/month</span>
                </div>
                <p className="text-neutral-600 mb-6">
                  AI-driven platform for companies that want to set up independently.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Step-by-Step Setup Workflow</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Instant Cost & Timeline Estimator</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Compliance Checklists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                    <span>AI-Powered Fareed Assistant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-purple-500 mr-3 flex-shrink-0 mt-1" />
                    <span>Knowledge Base Access</span>
                  </li>
                </ul>
                <Link to="/services/self-guided-setup" className="block w-full">
                  <Button className="bg-purple-300 hover:bg-purple-400 text-white w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
              
              {/* Quick Fix Package */}
              <div className="bg-white p-8 rounded-xl border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300 relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
                <div className="h-12 w-12 bg-soft-green rounded-full flex items-center justify-center mb-6">
                  <Shield size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Agency-Assisted Setup</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Starting at 3,500 SAR</span>
                </div>
                <p className="text-neutral-600 mb-6">
                  Expert-managed setup ensuring full legal compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Entity Licensing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>GM Appointment & Visa Processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Saudization & Government Portals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Bank Account Assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Fareed AI Support</span>
                  </li>
                </ul>
                <Link to="/services/agency-assisted-setup" className="block w-full">
                  <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                    Choose Plan
                  </Button>
                </Link>
              </div>
              
              {/* Turnkey Package */}
              <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="h-12 w-12 bg-soft-yellow rounded-full flex items-center justify-center mb-6">
                  <BrainCircuit size={24} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Turnkey Solutions</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">Custom Pricing</span>
                </div>
                <p className="text-neutral-600 mb-6">
                  Complete end-to-end setup and operational support.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Everything in Agency-Assisted Plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Special Approvals for Restricted Activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Sponsorship Transfer for Existing Employees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Government Relations Officer (GRO) Service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-1" />
                    <span>Office Space Matching</span>
                  </li>
                </ul>
                <Link to="/services" className="block w-full">
                  <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Add-On Services */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-md mb-4">Additional Services</h2>
              <p className="text-lg text-neutral-600">
                Enhance your setup with these specialized add-on services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Expert Document Check */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="mr-6">
                  <div className="h-10 w-10 bg-soft-purple rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 size={20} className="text-purple-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Expert Document Check</h3>
                  <p className="text-neutral-600 mb-4">
                    Get your documents reviewed by certified GRO professionals within 48 hours.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">500 SAR per submission</span>
                    <Link to="/services/expert-document-check">
                      <Button variant="link" className="text-purple-500 p-0">
                        Learn more <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* GRO Management */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="mr-6">
                  <div className="h-10 w-10 bg-soft-green rounded-full flex items-center justify-center mb-2">
                    <Shield size={20} className="text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">GRO Management</h3>
                  <p className="text-neutral-600 mb-4">
                    Ongoing compliance, renewals, and government liaison services.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">1,200 SAR per month</span>
                    <Link to="/services/post-operations-support">
                      <Button variant="link" className="text-green-600 p-0">
                        Learn more <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* HR Outsourcing */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="mr-6">
                  <div className="h-10 w-10 bg-soft-blue rounded-full flex items-center justify-center mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                      <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21V19C22.9986 17.1771 21.7079 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13C17.7105 3.58317 19.0053 5.17799 19.0053 7.005C19.0053 8.83201 17.7105 10.4268 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">HR Outsourcing (HRO)</h3>
                  <p className="text-neutral-600 mb-4">
                    Payroll, Saudization, and employee visa management services.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Starting at 1,500 SAR per month</span>
                    <Link to="/services/post-operations-support">
                      <Button variant="link" className="text-blue-600 p-0">
                        Learn more <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Market Research */}
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="mr-6">
                  <div className="h-10 w-10 bg-soft-amber rounded-full flex items-center justify-center mb-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-600">
                      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Market Research & Analysis</h3>
                  <p className="text-neutral-600 mb-4">
                    Comprehensive market insights for your industry in Saudi Arabia.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Custom Pricing</span>
                    <Button variant="link" className="text-amber-600 p-0">
                      Contact Us <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-md text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Can I switch between plans?</h3>
                  <p className="text-neutral-600">
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the change will take effect at the end of your current billing cycle.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Are there any hidden fees?</h3>
                  <p className="text-neutral-600">
                    No, we pride ourselves on transparency. All costs associated with your plan are clearly listed. Government fees for registration, visas, and other official documents are separate and will be detailed during the setup process.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">What's the difference between Self-Guided and Agency-Assisted?</h3>
                  <p className="text-neutral-600">
                    The Self-Guided plan provides AI-driven tools, templates, and guidance for you to manage the setup process independently. The Agency-Assisted plan includes expert consultants who handle the setup process for you, ensuring a hands-off experience with higher success rates and faster processing.
                  </p>
                </div>
                
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Do I need ongoing GRO services after setup?</h3>
                  <p className="text-neutral-600">
                    While not mandatory, GRO services are highly recommended for foreign companies operating in Saudi Arabia. They help maintain compliance with changing regulations, handle renewals, and manage official government interactions, reducing the risk of penalties or operational disruptions.
                  </p>
                </div>
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
                Take our quick quiz to discover the ideal setup strategy for your business needs.
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

export default PricingPage;
