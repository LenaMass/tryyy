
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h1 className="heading-lg mb-6">About AKID</h1>
              <p className="text-lg text-neutral-600 mb-4">
                AKID is revolutionizing how businesses set up in Saudi Arabia through our innovative AI-powered platform and expert-guided services.
              </p>
              <p className="text-neutral-600 mb-4">
                Our mission is to eliminate the traditional complexities, delays, and excessive costs associated with business setup in the region, making the process accessible, transparent, and efficient for entrepreneurs and companies of all sizes.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Approach */}
        <section className="py-16">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">AI-Powered Efficiency</h3>
                  <p className="text-neutral-600">
                    We leverage cutting-edge artificial intelligence to automate and streamline the business registration process, reducing human error and saving valuable time. Our AI systems are continuously updated with the latest regulatory changes to ensure compliance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Expert Human Touch</h3>
                  <p className="text-neutral-600">
                    While we embrace technology, we understand the importance of human expertise. Our team of experienced Government Relations Officers (GROs) and legal experts provide supervision and support, ensuring your business setup meets all requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Transparency & Control</h3>
                  <p className="text-neutral-600">
                    We believe in complete transparency throughout the business setup process. Our platform provides real-time updates, clear cost breakdowns, and detailed explanations of each step, giving you full control and visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Advantage */}
        <section className="py-16 bg-neutral-50">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Why Choose AKID?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-soft-purple rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Speed & Efficiency</h3>
                  <p className="text-neutral-600">
                    Our AI-driven platform reduces the business setup timeline from months to weeks, and in some cases, days.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-soft-blue rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
                  <p className="text-neutral-600">
                    By automating many aspects of the process, we significantly reduce costs compared to traditional consulting services.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-soft-green rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Full Compliance</h3>
                  <p className="text-neutral-600">
                    Our systems ensure your business meets all legal and regulatory requirements, minimizing the risk of penalties or delays.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-soft-yellow rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Global Accessibility</h3>
                  <p className="text-neutral-600">
                    Our digital platform allows you to manage your business setup from anywhere in the world, without requiring physical presence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-cta-pattern text-white">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-6">Start Your Business Journey Today</h2>
              <p className="text-lg mb-8 text-white/90">
                Take the first step toward establishing your business in Saudi Arabia with our streamlined, AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/start-quiz" 
                  className="bg-white text-purple-500 hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  Take the Quiz Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link 
                  to="/services" 
                  className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Explore Our Services
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

export default About;
