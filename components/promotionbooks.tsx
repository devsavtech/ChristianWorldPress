'use client';

import React from 'react';

const TextImageSection = () => {
  return (
    <section id="featured-promotion" className=" bg-background relative overflow-hidden pt-10">
      <div className="flex flex-col md:flex-row w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center w-ful">

              {/* Book Image Section */}
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
            <div className="relative w-full">
              <img 
                src="/promotionbooks/promotionbook-2.png" 
                alt="Featured Promotion Book Cover"
                className="w-full h-auto object-contain"
              />
              {/* <div className="absolute inset-0 flex flex-col items-start justify-center pl-0 sm:pl-0 md:pl-0 lg:pl-15">
                <div className="bg-opacity-50 text-white p-2 rounded">
                  <p className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold">$14.99</p>
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
          
          {/* Book Details Section */}
          <div className="flex flex-col justify-center h-full w-full text-center mt-6 p-6 sm:text-center md:text-center lg:text-left lg:pb-5">
            <h3 className="sm:text-2xl md:text-2xl font-serif font-bold text-foreground mb-4">
              Marriage On The Rock: Couple's Discussion Guide
            </h3>
            
            <p className="text-base max-w-3xl sm:text-lg text-muted-foreground mb-6">
             Society demands years of training for careers, yet offers almost none for our most vital commitment: marriage. In an era of "disposable" relationships, where can couples find lasting answers?
            </p>
            
            <button 
              className="w-40 h-12 bg-primary text-primary-foreground font-semibold py-3 px-8 rounded transition-all duration-200 hover:bg-primary/90 uppercase text-sm tracking-wide mx-auto sm:mx-auto md:mx-auto lg:mx-0"
              onClick={() => window.open('https://www.amazon.com/Marriage-Rock-Couples-Discussion-Guide/dp/1790349907/ref=sr_1_10?crid=4BQFQ1RE7MOC&dib=eyJ2IjoiMSJ9.CZHdf7AjCgLuj_IZtWZpvmn7mqBjDwd1hIVsyoRfzuHIH57WObprvN_GtYwLNVrYCwuaEmls0UqMQ7GDDA9LULs0qnPR6IDSAksz4s6TrWRBkr-kyQnxPQg1ecRsfoky5-bKaCO018j0emEvGBfYRNl8L_xE85BllfedEn2jDH4V4gPAsgQIFb9ebDf6-Ui5LM9_f7FzbYInj89xCAms7P7aJ7evgNLZpideonicHac.LG21w20a4kS_i8UrLadOGOsjMqQoWbEk0oVUM4PbKqM&dib_tag=se&keywords=independently+published+books+on+christian&qid=1768430814&sprefix=independently+published+books+on+christian%2Caps%2C330&sr=8-10', '_blank')}
            >
              BUY NOW
            </button>
          </div>
          
      


        </div>
      </div>
    </section>
  );
};

export default TextImageSection;