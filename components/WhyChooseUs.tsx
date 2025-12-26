import React from 'react';
import { Factory, ShieldCheck, Sun, Building2, Wrench } from 'lucide-react';

const FeatureItem: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="flex gap-4 items-start p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Direct manufacturer for KSA",
      description: "Panels are produced in our ISO 9001:2015 facility and supplied straight to projects across Saudi Arabia, avoiding middle‑man delays and extra cost.",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Civil Defence compliant solutions",
      description: "PUR, PIR and Rockwool sandwich panels are tested and approved to meet fire and safety requirements used in Saudi and GCC projects.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Designed for Saudi climate",
      description: "Panel systems are engineered for high temperatures, sand and coastal humidity, making them suitable for locations such as Riyadh, Jeddah, Dammam and Al Khobar.",
      icon: <Sun className="w-6 h-6" />
    },
    {
      title: "Experience with mega‑projects",
      description: "Ghosh Group supports large industrial facilities, logistics hubs and Vision 2030‑driven developments, supplying thousands of square metres of sandwich panels into Saudi Arabia.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "End‑to‑end technical support",
      description: "The technical team assists with panel selection, thickness, spans and accessories so drawings are completed faster and in line with project requirements.",
      icon: <Wrench className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Why Saudi contractors choose Ghosh Group</h2>
          <p className="text-xl text-gray-700">
            As a focused sandwich panel supplier to Saudi Arabia, Ghosh Group helps keep projects on specification and on schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;