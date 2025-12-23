import React from 'react';
import LeadForm from './LeadForm';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-blue min-h-[90vh] flex items-center py-12 lg:py-0 overflow-hidden border-b-8 border-brand-dark">
      {/* Background Image with Gold Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Industrial Factory Warehouse Saudi Arabia" 
          className="w-full h-full object-cover opacity-10"
        />
        {/* Rich Gold Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-[#dfb941] to-brand-blue/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content - Now Dark Blue text on Gold Background */}
          {/* Increased pt-20 to pt-32 to account for larger header on mobile */}
          <div className="w-full lg:w-3/5 text-brand-dark space-y-8 pt-32 lg:pt-0">
            <div className="inline-block bg-brand-dark text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-2 shadow-md">
              #1 Supplier in GCC
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-dark drop-shadow-sm">
              Sandwich Panel Supplier in Saudi Arabia for <span className="text-white drop-shadow-md underline decoration-brand-dark/20 underline-offset-4">NEOM, Riyadh & Jeddah</span> Projects
            </h1>
            
            <p className="text-lg text-brand-dark/90 leading-relaxed max-w-3xl font-medium">
              Ghosh Group is a DCD‑approved manufacturer and sandwich panel supplier in Saudi Arabia, working with contractors, consultants and project owners across NEOM, Riyadh, Jeddah, Dammam, Al Khobar, Mecca and Medina.
            </p>
            
            <p className="text-lg text-brand-dark/90 leading-relaxed max-w-3xl border-l-4 border-brand-dark pl-4 font-medium">
              PUR, PIR and Rockwool roof and wall panels are produced in our ISO‑certified facility and shipped with reliable lead times for industrial, commercial and cold‑room projects in the Kingdom.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="w-full lg:w-2/5 mt-8 lg:mt-0">
            <LeadForm />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;