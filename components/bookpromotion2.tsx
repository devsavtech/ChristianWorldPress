'use client';

import React from 'react';

const TextImageSection = () => {
  return (
    <section id="featured-promotion" className=" bg-background relative overflow-hidden">
      <div className="mx-auto">
        
        <div className="flex flex-col-reverse lg:flex-row  items-center justify-between mt-3">
          
          {/* Book Details Section */}
          <div className="flex-1 max-w-2xl lg:text-left ml-3 lg:px-6 md:px-0 mt-3">
            <h3 className="sm:text-2xl md:text-2xl font-serif font-bold text-foreground mb-4">
              The Bible Study Journal Advent Calendar
            </h3>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Make this December your most spiritually significant yet. Our Advent Calendar Bible Study Journal is designed to help you dedicate just five minutes a day—from December 1st to the 25th—to deepening your connection with God.
            </p>
            
            <button 
              className="w-[200px] sm:w-auto bg-primary text-primary-foreground font-semibold py-3 px-8 rounded transition-all duration-200 hover:bg-primary/90 uppercase text-sm tracking-wide mb-5"
              onClick={() => window.open('https://www.amazon.com/dp/B0FF36YHM5/ref=sspa_dk_rhf_search_pt_sub_16/?_encoding=UTF8&ie=UTF8&psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9yaGZfc2VhcmNoX3BlcnNvbmFsaXplZA%3D%3D&pd_rd_w=x1pDe&pd_rd_wg=agDsp&pd_rd_r=f0744a1b-c96c-4a96-bc76-d8496761d30b&content-id=amzn1.sym.74b85f4a-bfbe-49a3-8252-7e9927a19318&ref_=sspa_dk_rhf_search_pt_sub', '_blank')}
            >
                  BUY NOW
            </button>
          </div>
          
          {/* Book Image Section */}
          <div className="flex-shrink-0 flex justify-center w-full lg:w-auto">
            <div className="relative w-full max-w-[450px] lg:max-w-[550px] xl:max-w-[610px]">
              <img 
                src="/promotionbooks/Book 1.webp" 
                alt="Featured Promotion Book Cover"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center pl-8">
                <div className="bg-opacity-50 text-white p-2 rounded mb-2">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl font-semibold sm:ml-0 md:ml-0">$15.99</p>
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
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;