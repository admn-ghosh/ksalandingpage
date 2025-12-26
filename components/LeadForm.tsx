import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, MapPin, User, Building2, Phone, Package } from 'lucide-react';
import { LeadFormData } from '../types';

const FORM_ENDPOINT = "https://formsubmit.co/ajax/admin@ghoshgroups.com";

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    companyName: '',
    projectCity: 'Riyadh',
    mobileNumber: '',
    productType: 'PUR Sandwich Panels',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New KSA Quote Request: ${formData.companyName}`,
          _template: 'table',
          _captcha: 'false' // Disables the "Are you a robot?" page
        })
      });

      if (response.ok) {
        setStatus('success');
        
        // GTM Conversion Event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17430994937/JhdOCOC9h6gbEPm_3_dA'
          });
          console.log('GTM Conversion Fired');
        }
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div id="lead-form" className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-brand-blue text-center animate-in fade-in zoom-in duration-300 scroll-mt-36">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Quote Request Received</h3>
        <p className="text-gray-600 mb-6">Our KSA Sales Team will review your requirements and call you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-brand-blue font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div id="lead-form" className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-brand-dark relative z-10 scroll-mt-36">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-brand-dark leading-tight">Get a factory‑direct quote for your Saudi project</h3>
        <p className="text-base text-gray-600 mt-2">
          Share your project location, panel type and area, and receive a detailed quotation from our team dedicated to Saudi Arabia.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Company Name */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Building2 className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="companyName"
            required
            placeholder="Company Name (Required)"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Mobile Number */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            name="mobileNumber"
            required
            placeholder="e.g. +966 5X XXX XXXX"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* City Dropdown */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <select
            name="projectCity"
            value={formData.projectCity}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-white appearance-none cursor-pointer"
          >
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="NEOM">NEOM</option>
            <option value="Dammam">Dammam</option>
            <option value="Al Khobar">Al Khobar</option>
            <option value="Mecca">Mecca</option>
            <option value="Medina">Medina</option>
            <option value="Other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
          </div>
        </div>

        {/* Product Type */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Package className="h-5 w-5 text-gray-400" />
          </div>
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-white appearance-none cursor-pointer"
          >
            <option value="PUR Sandwich Panels">PUR Sandwich Panels</option>
            <option value="PIR Sandwich Panels (Fire Rated)">PIR Sandwich Panels (Fire Rated)</option>
            <option value="Rockwool Panels">Rockwool Panels (High Fire Safety)</option>
            <option value="Cold Storage Panels">Cold Storage Panels</option>
            <option value="Fire-Rated Panels">Fire-Rated Panels (Civil Defense)</option>
            <option value="Corrugated Roof/Wall">Corrugated Roof & Wall Panels</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-brand-orange hover:bg-yellow-500 text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform transition hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" /> Sending...
            </>
          ) : (
            <>
              Get Best Price <Send className="h-5 w-5" />
            </>
          )}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-center text-sm mt-2">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
        
        <p className="text-sm text-center text-gray-500 mt-4">
          Direct from Factory • No Middlemen • Instant Quote
        </p>
      </form>
    </div>
  );
};

export default LeadForm;