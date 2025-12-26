import React from 'react';
import { Quote, MapPin } from 'lucide-react';
import { TestimonialProps } from '../types';

const SuccessStory: React.FC<TestimonialProps> = ({ quote, role, location }) => (
  <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-blue/50 hover:border-brand-blue transition-colors group">
    <Quote className="w-8 h-8 text-brand-blue mb-4 group-hover:text-brand-orange transition-colors" />
    <p className="text-gray-700 italic mb-6 text-lg">"{quote}"</p>
    <div>
      <p className="font-bold text-brand-dark text-lg">{role}</p>
      <div className="flex items-center text-gray-500 text-base mt-1">
        <MapPin className="w-4 h-4 mr-1 text-brand-blue" />
        {location}
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark">Trusted by Contractors</h2>
          <p className="text-gray-600 mt-2 text-lg">Delivering excellence to major industrial and commercial projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessStory 
            quote="Ghosh Group delivered our PIR panels to the Riyadh site in just 3 days. The paperwork was perfect."
            role="Procurement Manager"
            location="Industrial Warehouse, Riyadh"
          />
          <SuccessStory 
            quote="Passed Civil Defense inspection immediately. The fire-rated panels are exactly as specified."
            role="Project Engineer"
            location="Manufacturing Plant, Dammam"
          />
          <SuccessStory 
            quote="We were worried about importing from UAE, but their door-to-door service made it seamless."
            role="Main Contractor"
            location="Logistics Park, Jeddah"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;