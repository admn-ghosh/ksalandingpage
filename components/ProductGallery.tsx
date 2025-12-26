import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const ProductGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll amount adjusted for smaller item width (approx 250px)
      const scrollAmount = direction === 'left' ? -250 : 250;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // --- CONFIGURATION ---
  // 1. Name your photos: gallery-1.jpg, gallery-2.jpg, ... gallery-8.jpg
  // 2. Upload them to your server root
  const myImages = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-5.jpg",
    "/gallery-6.jpg",
    "/gallery-7.jpg",
    "/gallery-8.jpg",
  ];

  // Fallback images (Unsplash) in case your custom photo isn't uploaded yet
  const placeholders = [
    "https://images.unsplash.com/photo-1535928628005-779953086eb0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1626265774643-f1943e315ce2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80",
  ];

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="gallery" className="py-16 bg-brand-dark relative border-t-8 border-brand-blue">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-blue mb-2 font-bold uppercase tracking-wider text-sm">
              <Camera className="w-4 h-4" /> Ready Stock & Projects
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our Products in Action
            </h2>
            <p className="text-gray-400 text-base">
              Browse our ready stock and recent deliveries across the Kingdom.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-brand-dark flex items-center justify-center transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-brand-blue text-brand-dark hover:bg-white hover:text-brand-dark flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-brand-blue/20"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {myImages.map((url, index) => (
            <div 
              key={index} 
              // Dimensions adjusted: ~5 images per row on large screens (min-w-[200px] to 240px)
              // min-w-[160px] on mobile allows seeing 2.5 items
              className="min-w-[160px] md:min-w-[200px] lg:min-w-[240px] snap-center group relative rounded-lg overflow-hidden shadow-lg border border-white/10 hover:border-brand-blue transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                <img 
                  src={imageErrors[index] ? placeholders[index] : url} 
                  onError={() => handleImageError(index)}
                  alt={`Product View ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-center md:justify-start gap-2 items-center">
           <div className="h-1 w-24 bg-gray-700 rounded-full overflow-hidden">
             <div className="h-full bg-brand-blue w-1/3 animate-pulse"></div>
           </div>
           <p className="text-[10px] text-gray-500 uppercase tracking-widest">Swipe</p>
        </div>

      </div>
    </section>
  );
};

export default ProductGallery;