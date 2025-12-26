import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-brand-dark pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-orange flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Which areas in Saudi Arabia do you supply sandwich panels to?",
      answer: "We supply sandwich panels across the Kingdom, including NEOM, Riyadh, Jeddah, Dammam, Al Khobar, Mecca, Medina and other industrial and project hubs."
    },
    {
      question: "How can I request a quotation for my Saudi project?",
      answer: "Share your project location, panel type and approximate area via our enquiry form or WhatsApp, and our KSA team will send a detailed factory‑direct quotation."
    },
    {
      question: "What minimum order quantity do you require for deliveries within Saudi Arabia?",
      answer: "Minimum quantities depend on panel type and destination, but most Saudi shipments start from a few thousand square metres; our team can confirm feasibility once you share project details."
    },
    {
      question: "What is the typical delivery time to NEOM, Riyadh, Jeddah and Dammam?",
      answer: "Typical lead time ranges from a few days to a few weeks depending on stock, production load and site location, and is confirmed at the time of quotation."
    },
    {
      question: "Do you handle transport and documentation for Saudi deliveries?",
      answer: "Yes, we arrange transport, export documentation and coordination so panels arrive at your Saudi site ready for offloading and installation."
    },
    {
      question: "What is the difference between PUR, PIR and Rockwool sandwich panels?",
      answer: "PUR offers economical insulation, PIR combines insulation with enhanced fire performance, and Rockwool provides non‑combustible cores for projects with the highest fire‑safety requirements."
    },
    {
      question: "Which sandwich panel type is recommended for Saudi climate and coastal areas?",
      answer: "For most industrial and commercial roofs and walls, PIR or Rockwool with suitable coatings is recommended in hot, coastal and high‑humidity Saudi environments."
    },
    {
      question: "Are your sandwich panels approved by Civil Defence and suitable for Saudi standards?",
      answer: "Our PUR, PIR and Rockwool systems are tested and approved to fire and safety requirements used in Saudi and GCC projects, supporting smoother Civil Defence reviews."
    },
    {
      question: "Can you provide test reports and datasheets for consultants in Saudi Arabia?",
      answer: "Yes, we share datasheets, fire test reports and performance documentation so consultants can complete their technical submissions and approvals."
    },
    {
      question: "Do you support installation and provide fixing details?",
      answer: "We provide fixing details, span recommendations and accessory guidelines, while installation is carried out by the contractor’s site team or nominated installer."
    },
    {
      question: "Do you supply flashings, fasteners and accessories with the panels?",
      answer: "Yes, matching flashings, fasteners and related accessories can be supplied along with panels to ensure a complete roofing and cladding package."
    },
    {
      question: "What warranty do you offer on sandwich panels supplied to Saudi projects?",
      answer: "Warranty terms depend on panel type, coating and application, and are specified clearly in our quotation and order confirmation."
    },
    {
      question: "How do you handle damages or shortages on site in Saudi Arabia?",
      answer: "Any transit damages or shortages reported with proper documentation are reviewed by our team, and approved replacements are coordinated for prompt dispatch."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">Frequently Asked Questions</h2>
        <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-sm border border-gray-100 mb-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4 font-medium">Didn’t find your question?</p>
          <a 
            href="https://wa.me/971503773552" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-dark transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with our KSA team on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;