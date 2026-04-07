"use client";

import { Navbar } from "@/components/lp2/navbar";
import { Hero } from "@/components/lp2/hero";
import { Journey } from "@/components/lp2/journey";
import { Services } from "@/components/lp2/services";
import { Experience } from "@/components/lp2/experience";
import { Audience } from "@/components/lp2/audience";
import { Plan } from "@/components/lp2/plan";
import { Process } from "@/components/lp2/process";
import { Testimonials } from "@/components/lp2/testimonials";
import { FAQ } from "@/components/lp2/faq";
import { Footer } from "@/components/lp2/footer";
import { BookSlider } from "@/components/lp2/book-slider";
import { Popup } from "@/components/global/popup";
import { useState, useEffect } from "react";
import ChatButton from "@/components/chatbutton";

export default function Lp2Page() {
    const [showPopup, setShowPopup] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      // Simulate loading completion
      const timer = setTimeout(() => {
        setIsLoading(false);` `
      }, 1500);
      
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="min-h-screen bg-white">
     {/* Page Loader */}
      {isLoading && (
        <div 
          className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center"
          style={{
            backgroundColor: '#0c0a09'
          }}
        >
          <div className="spinner text-center p-8">
            <img 
              src="/logo/Chrisitan World Press Logo.png" 
              alt="Christian World Press Logo"
              className="w-[150px] h-auto mb-6"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'text-2xl font-bold animate-pulse';
                fallback.textContent = 'Christian World Press';
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            />
            {/* Loading Progress Bar - Match image width */}
            <div className="w-[150px] h-1.5 bg-[#3d3b37] rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-[#8b0000] rounded-full" 
                   style={{ 
                     width: '0%',
                     animation: 'loadingBarOnce 1.5s ease-in-out forwards'
                   }}>
              </div>
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Services />
        <BookSlider />
        <Experience />
        <Audience />
        <Plan />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <ChatButton />
      <Footer />
       {showPopup && <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
    </div>
  );
}
