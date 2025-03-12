
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Zap, BrainCircuit } from 'lucide-react';

const SelfGuidedSetupPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6 animate-fade-in">Self-Guided Setup (DIY)</h1>
              <p className="text-xl text-neutral-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Launch Your Business in Saudi Arabia – The Smart, AI-Powered Way!
              </p>
              <p className="text-lg text-neutral-700 font-medium mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Incorporate Your Company with Ease – 100% Self-Guided & Hassle-Free
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-neutral-600 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <span className="inline-flex items-center">
                  <Zap size={16} className="text-purple-500 mr-1" /> AI-Driven
                </span>
                <span className="inline-flex items-center">
                  <CheckCircle2 size={16} className="text-purple-500 mr-1" /> Step-by-Step Workflow
                </span>
                <span className="inline-flex items-center">
                  <CheckCircle2 size={16} className="text-purple-500 mr-1" /> Expert Support
                </span>
                <span className="inline-flex items-center">
                  <CheckCircle2 size={16} className="text-purple-500 mr-1" /> Legal Knowledge Base
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Our DIY Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="mb-12 max-w-3xl mx-auto">
              <h2 className="heading-md mb-4 text-center">Why Choose Our DIY Incorporation Platform?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="h-12 w-12 bg-soft-purple rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                    <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Step-by-Step Company Setup</h3>
                <p className="text-neutral-600">
                  Guided workflow from registration to launch, breaking down the complex setup process into simple, manageable steps.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="h-12 w-12 bg-soft-green rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                    <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Cost & Timeline Estimator</h3>
                <p className="text-neutral-600">
                  Know the expenses & duration upfront with our accurate cost calculator and timeline predictor.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="h-12 w-12 bg-soft-blue rounded-full flex items-center justify-center mb-6">
                  <BrainCircuit size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fareed AI – Your Smart Business Assistant</h3>
                <p className="text-neutral-600">
                  24/7 compliance & advisory support from our AI assistant specialized in Saudi business regulations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="h-12 w-12 bg-soft-amber rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Document Check</h3>
                <p className="text-neutral-600">
                  Get approval from certified GRO professionals who review your documents within 48 hours.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="h-12 w-12 bg-soft-purple rounded-full flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                    <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Knowledge Base</h3>
                <p className="text-neutral-600">
                  Stay informed on laws, compliance & regulations with our continually updated resource library.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-4">How It Works?</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200 hidden md:block"></div>
                
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <div className="flex-shrink-0 flex items-start md:items-center">
                    <div className="h-16 w-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold">1</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex-grow">
                    <h3 className="text-xl font-bold mb-3">Start Your Business Setup</h3>
                    <p className="text-neutral-600">
                      Answer a few quick questions and select your preferred setup model to begin the journey of establishing your business in Saudi Arabia.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <div className="flex-shrink-0 flex items-start md:items-center">
                    <div className="h-16 w-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold">2</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex-grow">
                    <h3 className="text-xl font-bold mb-3">Instant Cost & Timeline Estimation</h3>
                    <p className="text-neutral-600">
                      💰 Get an accurate cost breakdown in 30 seconds<br />
                      📅 View your setup timeline based on selected services
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <div className="flex-shrink-0 flex items-start md:items-center">
                    <div className="h-16 w-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold">3</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex-grow">
                    <h3 className="text-xl font-bold mb-3">Legal & Compliance Checklist</h3>
                    <p className="text-neutral-600">
                      📑 Get a personalized document checklist<br />
                      ⚖️ View mandatory legal & regulatory steps to stay compliant
                    </p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <div className="flex-shrink-0 flex items-start md:items-center">
                    <div className="h-16 w-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold">4</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex-grow">
                    <h3 className="text-xl font-bold mb-3">AI-Powered Fareed Assistant</h3>
                    <p className="text-neutral-600">
                      🤖 Fareed AI helps with:<br />
                      ✅ Company registration guidance<br />
                      ✅ Saudization & compliance tracking<br />
                      ✅ Government portal activations<br />
                      ✅ Real-time updates on legal changes
                    </p>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <div className="flex-shrink-0 flex items-start md:items-center">
                    <div className="h-16 w-16 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold">5</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex-grow">
                    <h3 className="text-xl font-bold mb-3">Expert GRO Document Check (Optional)</h3>
                    <p className="text-neutral-600">
                      🔍 Have our certified GRO professionals review your documents within 48 hours to ensure compliance and accuracy.
                    </p>
                  </div>
                </div>
                
                {/* Step 6 */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                  <div className="flex-shrink-0 flex items-start md:items-center">
                    <div className="h-16 w-16 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold">6</div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm flex-grow">
                    <h3 className="text-xl font-bold mb-3">Launch Your Business</h3>
                    <p className="text-neutral-600">
                      🎉 Congratulations! Your company is ready to operate in Saudi Arabia 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Go DIY Section */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-4">Why Go DIY with Us?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="h-10 w-10 bg-soft-purple rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-500">
                    <path d="M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 6.5L17.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6.5L6.5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 17.5L6.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 17.5L17.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save Up to 90% on Consulting Costs</h3>
                  <p className="text-neutral-600">No expensive lawyers or agents needed. Our DIY solution eliminates the high fees typically charged by traditional consultants.</p>
                </div>
              </div>
              
              <div className="flex items-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="h-10 w-10 bg-soft-green rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-600">
                    <path d="M21 2L3 10.53V11.51L14.5 14.5L17.5 22.5H18.48L21 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Full Transparency</h3>
                  <p className="text-neutral-600">No hidden fees or surprise costs. All expenses are presented upfront so you can budget accurately for your business setup.</p>
                </div>
              </div>
              
              <div className="flex items-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="h-10 w-10 bg-soft-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                    <path d="M14 16C14 17.1046 12.8807 18 11.5 18C10.1193 18 9 17.1046 9 16M22 12H21M16.7294 5.55071L17.5 5M6.27059 5.55071L5.5 5M12 3V2M7.5 20.5C5.01472 20.5 3 18.4853 3 16V11C3 8.51472 5.01472 6.5 7.5 6.5H16.5C18.9853 6.5 21 8.51472 21 11V16C21 18.4853 18.9853 20.5 16.5 20.5H7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI-Driven Efficiency</h3>
                  <p className="text-neutral-600">Get instant answers and guidance 24/7 with our AI assistant, eliminating the waiting periods typical with human consultants.</p>
                </div>
              </div>
              
              <div className="flex items-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="h-10 w-10 bg-soft-amber rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-600">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compliance Made Simple</h3>
                  <p className="text-neutral-600">Avoid fines with automated compliance monitoring that keeps you informed of your obligations and any regulatory changes.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Comparison Table */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-4">Fareed AI vs. Traditional Consulting</h2>
            </div>
            
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-xl border border-neutral-200 shadow-sm">
                <thead>
                  <tr className="bg-neutral-50 border-b border-neutral-200">
                    <th className="text-left p-4 font-bold">Service</th>
                    <th className="text-center p-4 font-bold text-neutral-600">Traditional Consulting</th>
                    <th className="text-center p-4 font-bold text-purple-500">Our DIY Platform</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 font-medium">Initial Consultation</td>
                    <td className="p-4 text-center">1,500 - 3,000 SAR</td>
                    <td className="p-4 text-center text-green-600 font-medium">✅ Free</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 font-medium">Business Setup Cost Estimate</td>
                    <td className="p-4 text-center">5,000 - 10,000 SAR</td>
                    <td className="p-4 text-center text-green-600 font-medium">✅ Free & Instant</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 font-medium">Legal & Compliance Advisory</td>
                    <td className="p-4 text-center">5,000 - 20,000 SAR</td>
                    <td className="p-4 text-center text-green-600 font-medium">✅ Included</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 font-medium">Timeline & Documentation Checklist</td>
                    <td className="p-4 text-center">2,000 - 5,000 SAR</td>
                    <td className="p-4 text-center text-green-600 font-medium">✅ Always Updated</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="p-4 font-medium">Government Portal Guidance</td>
                    <td className="p-4 text-center">3,000 - 7,000 SAR</td>
                    <td className="p-4 text-center text-green-600 font-medium">✅ AI Step-by-Step Guide</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Total Cost</td>
                    <td className="p-4 text-center font-bold">20,500 - 60,000 SAR</td>
                    <td className="p-4 text-center bg-purple-50 text-purple-600 font-bold rounded-b-lg">Only 690 SAR/month</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="text-center mt-6 text-green-600 font-medium">
                ✓ AI-Powered &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Expert Reviewed &nbsp;&nbsp;|&nbsp;&nbsp; ✓ 100% Digital & Instant
              </div>
            </div>
          </div>
        </section>
        
        {/* Knowledge Base */}
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="heading-md mb-4">Knowledge Base – Everything You Need to Know</h2>
              <p className="text-lg text-neutral-600">
                Access our comprehensive library of resources on Saudi business regulations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-purple-200 hover:shadow-sm transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-bold mb-3">Saudi Business Laws & Compliance</h3>
                <p className="text-neutral-600 mb-4">Understand the legal framework governing businesses in Saudi Arabia.</p>
                <Button variant="link" className="text-purple-500 p-0">
                  Explore Articles <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-purple-200 hover:shadow-sm transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-bold mb-3">Licensing & Registration Procedures</h3>
                <p className="text-neutral-600 mb-4">Step-by-step guides for obtaining necessary business licenses.</p>
                <Button variant="link" className="text-purple-500 p-0">
                  Explore Articles <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-purple-200 hover:shadow-sm transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg font-bold mb-3">Saudization & Employment Rules</h3>
                <p className="text-neutral-600 mb-4">Navigate workforce nationalization requirements and labor laws.</p>
                <Button variant="link" className="text-purple-500 p-0">
                  Explore Articles <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 hover:border-purple-200 hover:shadow-sm transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-bold mb-3">Tax, VAT & Financial Regulations</h3>
                <p className="text-neutral-600 mb-4">Understand your tax obligations and financial reporting requirements.</p>
                <Button variant="link" className="text-purple-500 p-0">
                  Explore Articles <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <p className="text-lg font-medium text-neutral-700 mb-6">
                🛠 Stay Updated with the Latest Legal Insights!
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-cta-pattern text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">Start Your Business Today!</h2>
              <p className="text-lg mb-8 text-white/90">
                ⚡ No Agents. No Delays. No Hidden Fees.
              </p>
              <p className="text-sm font-medium mb-8 text-white/80">
                📍 100% Online &nbsp;|&nbsp; 🕒 24/7 AI Support &nbsp;|&nbsp; 💰 Affordable
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  to="/start-quiz" 
                  className="button-primary bg-white text-purple-500 hover:bg-neutral-100"
                >
                  Start my company now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                
                <Link 
                  to="/contact" 
                  className="button-secondary border-white text-white hover:bg-white/10"
                >
                  Contact an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SelfGuidedSetupPage;
