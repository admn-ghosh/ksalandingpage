import React from 'react';
import { Home, LayoutGrid, Flame, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { ProductCardProps } from '../types';

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-blue shadow-sm hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center mb-4 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-dark mb-4">{title}</h3>
    <ul className="space-y-3 flex-grow">
      {description.map((item, idx) => (
        <li key={idx} className="flex gap-3 items-start text-base text-gray-600">
          <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProductGrid: React.FC = () => {
  const products = [
    {
      title: "PUR Roof Sandwich Panel",
      description: [
        "Lightweight insulated roof panel for factories, warehouses and commercial buildings across Saudi Arabia.",
        "Provides strong thermal performance with fast installation and competitive overall cost.",
        "Suitable where energy efficiency and quick roof closure are priorities and standard fire performance is acceptable."
      ],
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "PUR Wall Sandwich Panel",
      description: [
        "Versatile wall panel for industrial sheds, boundary walls and service buildings in Saudi climates.",
        "Available with smooth or profiled finishes for clean façades and easy maintenance.",
        "Good option for economical insulated walls with a neat, durable appearance."
      ],
      icon: <LayoutGrid className="w-6 h-6" />
    },
    {
      title: "PIR Roof Sandwich Panel",
      description: [
        "High‑performance roof panel with improved fire resistance compared with standard PUR systems.",
        "Preferred for logistics warehouses, retail developments and high‑occupancy buildings in Riyadh, Jeddah and other major cities.",
        "Helps satisfy stricter consultant specifications on fire and thermal performance."
      ],
      icon: <Flame className="w-6 h-6" />
    },
    {
      title: "PIR Wall Sandwich Panel",
      description: [
        "Fire‑resistant wall panel for commercial buildings, food‑processing plants and cold stores in Saudi Arabia.",
        "Excellent thermal insulation supports efficient HVAC design in high ambient temperatures.",
        "Often selected where authorities and insurers require both insulation and enhanced fire performance."
      ],
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Rockwool Roof Sandwich Panel",
      description: [
        "Roof panel with non‑combustible Rockwool core for projects demanding the highest level of fire safety.",
        "Suitable for refineries, process plants, power facilities and other critical infrastructure across the Kingdom.",
        "Provides thermal and acoustic insulation while supporting stringent fire‑rating requirements."
      ],
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Rockwool Wall Sandwich Panel",
      description: [
        "Fire‑rated wall panel offering maximum protection for industrial, commercial and institutional buildings.",
        "Ideal for fire walls, plant rooms and façades where regulations call for non‑combustible construction.",
        "Delivers good sound reduction and stable performance under high temperatures and harsh weather."
      ],
      icon: <LayoutGrid className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Sandwich panel types for Saudi projects</h2>
          <p className="text-gray-600 text-xl">
            Choose from a complete range of roof and wall sandwich panels, each optimised for specific Saudi applications and performance needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;