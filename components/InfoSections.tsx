import React from 'react';
import { Truck, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const InfoSections: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Projects and Deliveries - REVERSED: Gold Background, Dark Text */}
      <section className="py-16 bg-brand-blue text-brand-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               <div className="w-16 h-16 bg-brand-dark/10 rounded-full flex items-center justify-center mb-6">
                 <Truck className="w-8 h-8 text-brand-dark" />
               </div>
               <h2 className="text-3xl font-bold mb-6 text-brand-dark">Projects and deliveries in Saudi Arabia</h2>
               <p className="text-lg text-brand-dark/90 mb-6 leading-relaxed font-medium">
                 Ghosh Group supplies sandwich panels throughout Saudi Arabia, supporting new builds, extensions and retrofit work.
               </p>
               <ul className="space-y-4 mb-8">
                 {[
                   "Regular shipments to NEOM, Riyadh, Jeddah, Dammam, Al Khobar and other industrial clusters.",
                   "Experience with warehouses, logistics hubs, factories, cold rooms, showrooms and residential compounds in the Kingdom.",
                   "Panels are packed, documented and dispatched so they arrive ready for installation on Saudi project sites."
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 items-start">
                     <CheckCircle className="w-6 h-6 text-brand-dark flex-shrink-0 mt-1" />
                     <span className="text-brand-dark/90">{item}</span>
                   </li>
                 ))}
               </ul>
               <p className="text-brand-dark font-bold text-lg border-l-4 border-brand-dark pl-4 bg-white/20 p-4 rounded-r-lg mb-8">
                 Many clients now treat Ghosh Group as their preferred sandwich panel supplier in Saudi Arabia for repeat projects and long‑term partnerships.
               </p>
               
               <button 
                 onClick={scrollToForm}
                 className="bg-brand-dark text-white hover:bg-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
               >
                 Get Best Price for Your Saudi Project <ArrowRight className="w-5 h-5" />
               </button>
            </div>
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border-4 border-white/30 bg-brand-dark/20 h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80" 
                alt="Logistics truck in Saudi Arabia desert" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-1/2">
               <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mb-6">
                 <FileText className="w-8 h-8 text-brand-dark" />
               </div>
               <h2 className="text-3xl font-bold text-brand-dark mb-6">Technical support and documentation</h2>
               <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                 Every Saudi project has different structural, thermal and fire requirements, so technical guidance is part of the service.
               </p>
               <ul className="space-y-4">
                 {[
                   "Recommendations on panel thickness, spans, fixing details and accessory selection for roof and wall systems.",
                   "Datasheets, fire test reports and performance information available for PUR, PIR and Rockwool sandwich panels.",
                   "Support with reviewing BOQ and drawings so quotations and supplies match actual project needs."
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 items-start">
                     <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                     <span className="text-gray-700 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-200 h-[400px]">
               <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80" 
                alt="Indian engineer reviewing documents in warehouse factory" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;