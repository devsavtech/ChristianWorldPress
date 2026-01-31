'use client';

import React from 'react';
const HeroBookPromo = () => {
  return (
    <section id="new-releases" className="py-4 bg-background relative overflow-hidden">
      <div className="mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mt-8 sm:mt-12">
          {/* Book Image Section */}
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full max-w-2xl">
            <div className="relative w-full max-w-[450px] lg:max-w-[550px] xl:max-w-[650px]">
              <img 
                src="/promotionbooks/promotionbook-2.webp" 
                alt="Featured Promotion Book Cover"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center pl-8">
                <div className="bg-opacity-50 text-white p-2 rounded mb-2">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl font-semibold sm:ml-0 md:ml-0">$14.99</p>
                </div>
                <div className="flex gap-1 lg:ml-16 justify-center sm:ml-0 md:ml-0">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-yellow-500"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Book Details Section */}
          <div className="flex-1 max-w-2xl lg:text-left">
            <h3 className="sm:text-2xl md:text-2xl font-serif font-bold text-foreground mb-4">
              Marriage On The Rock: Couple's Discussion Guide
            </h3>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Society demands years of training for careers, yet offers almost none for our most vital commitment: marriage. In an era of "disposable" relationships, where can couples find lasting answers?
            </p>
            
            <button className="w-[200px] sm:w-auto bg-primary text-primary-foreground font-semibold py-3 px-8 rounded transition-all duration-200 hover:bg-primary/90 uppercase text-sm tracking-wide">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBookPromo;