import React from 'react';
import { Award } from 'lucide-react';

const TrustSection: React.FC = () => (
  <section className="bg-brand-light py-12 border-b border-brand-blue/20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Certified Quality You Can Trust</h2>
      <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
        Ghosh Group holds certifications that give Saudi clients confidence in long‑term performance and compliance.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
        {[
          "Industrial License – Umm Al Quwain",
          "Dubai Municipality Conformity",
          "QRS Certified",
          "ISO 9001:2015"
        ].map((cert, i) => (
          <div key={i} className="flex items-center gap-2 bg-white px-6 py-4 rounded-full shadow-md border border-brand-blue/30 hover:border-brand-blue transition-colors">
            <Award className="w-6 h-6 text-brand-blue" />
            <span className="font-semibold text-brand-dark text-base md:text-lg">{cert}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-600 max-w-2xl mx-auto">
        These approvals support smoother consultant and authority reviews on Saudi projects.
      </p>
    </div>
  </section>
);

export default TrustSection;