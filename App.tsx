import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ProductGallery from './components/ProductGallery';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import InfoSections from './components/InfoSections';
import FAQ from './components/FAQ';
import TrustSection from './components/TrustSection';
import { Globe, Handshake } from 'lucide-react';

// --- CONFIGURATION ---
// When you upload the file to your server, name it 'ghosh-group-logo.png' 
// and change this line to: const LOGO_URL = "/ghosh-group-logo.png";
const LOGO_URL = "https://ghoshgroups.com/wp-content/uploads/2021/11/ghosh-group-logo.png";

// Simple sticky header component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm md:bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Logo Image with specific dimensions and error handling */}
          {!imgError ? (
            <img 
              src={LOGO_URL} 
              alt="Ghosh Group" 
              className="h-16 md:h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
            />
          ) : (
             <div className="flex flex-col items-center leading-none text-brand-blue">
               <div className="flex items-center gap-1">
                 <span className="text-3xl md:text-4xl font-bold tracking-tighter">GH</span>
                 <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 text-brand-blue">
                   <Globe className="w-full h-full absolute opacity-20" />
                   <Handshake className="w-3/4 h-3/4 relative z-10" />
                 </div>
                 <span className="text-3xl md:text-4xl font-bold tracking-tighter">SH</span>
               </div>
               <span className="text-xs md:text-sm font-bold tracking-[0.4em] text-brand-dark mt-1">GROUP</span>
            </div>
          )}
          
          {/* Tagline - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block border-l-2 border-brand-dark/20 pl-4 h-12 flex flex-col justify-center">
            <p className="text-sm font-bold text-brand-dark uppercase tracking-wider leading-tight">Serving All KSA</p>
            <p className="text-xs text-brand-dark/80 font-medium leading-tight">Factory Direct Sandwich Panels</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={scrollToForm}
            className="bg-brand-dark hover:bg-gray-800 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg transition-transform hover:scale-105 flex items-center gap-2 border border-brand-dark"
          >
            Get Best Price
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  const [imgError, setImgError] = useState(false);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="col-span-1 md:col-span-2">
          <div className="flex justify-center md:justify-start mb-6">
             {!imgError ? (
               <img 
                src={LOGO_URL} 
                alt="Ghosh Group Logo" 
                className="h-20 w-auto brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
             ) : (
               <div className="flex flex-col items-center leading-none text-white">
                 <div className="flex items-center gap-1">
                   <span className="text-4xl font-bold tracking-tighter">GH</span>
                   <div className="relative flex items-center justify-center w-10 h-10 text-white">
                     <Globe className="w-full h-full absolute opacity-20" />
                     <Handshake className="w-3/4 h-3/4 relative z-10" />
                   </div>
                   <span className="text-4xl font-bold tracking-tighter">SH</span>
                 </div>
                 <span className="text-sm font-bold tracking-[0.4em] text-gray-400 mt-1">GROUP</span>
               </div>
             )}
          </div>
          <p className="mb-4 max-w-sm mx-auto md:mx-0 leading-relaxed">The leading manufacturer and supplier of sandwich panels, steel products, and cold storage solutions serving the entire GCC region with ISO 9001:2015 certified quality.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-4 text-lg">Quick Links</h5>
          <ul className="space-y-3 text-sm">
            <li>
              <button onClick={() => scrollToId('products')} className="hover:text-white transition-colors text-left focus:outline-none">
                PUR/PIR Sandwich Panels
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId('products')} className="hover:text-white transition-colors text-left focus:outline-none">
                Rockwool Fire-Rated Panels
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId('gallery')} className="hover:text-white transition-colors text-left focus:outline-none">
                Our Project Gallery
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId('faq')} className="hover:text-white transition-colors text-left focus:outline-none">
                FAQ & Support
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold mb-4 text-lg">Contact KSA</h5>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="mailto:admin@ghoshgroups.com" className="hover:text-white transition-colors">
                admin@ghoshgroups.com
              </a>
            </li>
            <li>Supply: Riyadh, Jeddah, NEOM, Dammam</li>
            <li>
              <a href="https://wa.me/971503773552" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WhatsApp: +971 50 377 3552
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()} Ghosh Group. All Rights Reserved.
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <TrustSection />
        <ProductGrid />
        <ProductGallery />
        <InfoSections />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;