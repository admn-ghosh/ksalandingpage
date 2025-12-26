import React from 'react';

export interface LeadFormData {
  name: string;
  companyName: string;
  projectCity: string;
  mobileNumber: string;
  productType: string;
}

export interface ProductCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

export interface TestimonialProps {
  quote: string;
  role: string;
  location: string;
}

// Augment window for GTM
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}