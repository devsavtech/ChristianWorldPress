'use client';

import React from 'react';

const TextImageSection = () => {
  return (
    <section id="featured-promotion" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-8 sm:mt-12">
          
          {/* Book Details Section */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Praying with the Women of the Bible for 30 Days
            </h3>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Resolve to grow closer to God — a 30-day study with women of Scripture
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-accent">
                $11.99
              </span>
              <span className="text-lg sm:text-xl text-muted-foreground line-through">
                $21.99
              </span>
              <span className="text-lg sm:text-xl font-semibold text-accent">
                Save 45%
              </span>
            </div>
            
            <button className="w-full sm:w-auto bg-primary text-primary-foreground font-semibold py-3 px-8 rounded transition-all duration-200 hover:bg-primary/90 uppercase text-sm tracking-wide">
              Add to Cart
            </button>
          </div>
          
          {/* Book Image Section */}
          <div className="flex-shrink-0 flex justify-center w-full lg:w-auto">
            <div className="relative w-full max-w-[450px] lg:max-w-[550px] xl:max-w-[650px]">
              <img 
                src="/promotionbooks/promotionbook-1.webp" 
                alt="Featured Promotion Book Cover"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;