'use client';

import React from 'react';

const TextImageSection = () => {
  return (
    <section id="featured-promotion" className=" bg-background relative overflow-hidden">
      <div className="flex flex-col md:flex-row w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center w-full">
          
          {/* Book Details Section */}
          <div className="flex flex-col justify-center h-full w-full text-center mt-4 p-6 lg:text-left lg: order-2 md:order-none lg:order-1">
            <h3 className="sm:text-2xl md:text-2xl font-serif font-bold text-foreground mb-4">
              The Bible Study Journal Advent Calendar
            </h3>
            
            <p className="text-base max-w-3xl sm:text-lg text-muted-foreground mb-6">
              Make this December your most spiritually significant yet. Our Advent Calendar Bible Study Journal is designed to help you dedicate just five minutes a day—from December 1st to the 25th—to deepening your connection with God.
            </p>
            
            <button 
              className="w-40 h-12 bg-primary text-primary-foreground font-semibold py-3 px-8 rounded transition-all duration-200 hover:bg-primary/90 uppercase text-sm tracking-wide mx-auto sm:mx-auto md:mx-auto lg:mx-0"
              onClick={() => window.open('https://www.amazon.com/dp/B0FF36YHM5/ref=sspa_dk_rhf_search_pt_sub_16/?_encoding=UTF8&ie=UTF8&psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9yaGZfc2VhcmNoX3BlcnNvbmFsaXplZA%3D%3D&pd_rd_w=x1pDe&pd_rd_wg=agDsp&pd_rd_r=f0744a1b-c96c-4a96-bc76-d8496761d30b&content-id=amzn1.sym.74b85f4a-bfbe-49a3-8252-7e9927a19318&ref_=sspa_dk_rhf_search_pt_sub', '_blank')}
            >
              BUY NOW
            </button>
          </div>
          
          {/* Book Image Section */}
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full order-1 md:order-none lg:order-2">
            <div className="relative w-full">
              <img 
                src="/promotionbooks/promotionbook-1.png" 
                alt="Featured Promotion Book Cover"
                className="w-full h-auto object-contain"
              />
              {/* <div className="absolute inset-0 flex flex-col items-start justify-center pl-0 sm:pl-0 md:pl-0 lg:pl-12">
                <div className="bg-opacity-50 text-white p-2 rounded">
                  <p className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold">$15.99</p>
                </div>
                <div className="flex gap-1.5 justify-center pl-3">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 md:w-4 md:h-4 lg:w-6 lg:h-6 fill-yellow-500"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.5l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;