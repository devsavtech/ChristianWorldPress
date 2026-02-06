"use client";

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import { motion } from "framer-motion";
import { Popup } from "./popup"; // Import the popup component


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const swiperRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [showPopup, setShowPopup] = useState(false) // State to control popup visibility
  const [isFormFocused, setIsFormFocused] = useState(false) // Track form interaction
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  })
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const swiperInstance = useRef<any>(null);
  
  // Check if device is mobile - use useEffect to avoid SSR issues
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-slide functionality - now handled by Swiper's native autoplay
  useEffect(() => {
    if (isFormFocused || isMobile) return; // Don't auto-slide when form is focused or on mobile

    // Swiper handles the autoplay and hover pause natively
    // No custom interval needed
  }, [isFormFocused, isMobile]);

  // Track mouse position (only on desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (sectionRef.current?.contains(e.target as Node)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      setIsVisible(true);
      if (swiperRef.current?.contains(e.target as Node)) {
        setIsHovering(true);
      }
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    const handleSwiperMouseEnter = (e: MouseEvent) => {
      if (swiperRef.current?.contains(e.target as Node)) {
        setIsHovering(true);
      }
    };

    const handleSwiperMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    sectionRef.current?.addEventListener('mouseenter', handleMouseEnter);
    sectionRef.current?.addEventListener('mouseleave', handleMouseLeave);
    swiperRef.current?.addEventListener('mouseenter', handleSwiperMouseEnter);
    swiperRef.current?.addEventListener('mouseleave', handleSwiperMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      sectionRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      sectionRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      swiperRef.current?.removeEventListener('mouseenter', handleSwiperMouseEnter);
      swiperRef.current?.removeEventListener('mouseleave', handleSwiperMouseLeave);
    };
  }, [isMobile]);

  // Common function to handle popup opening
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  // Handle form focus/blur to pause auto-sliding
  const handleFormFocus = () => {
    setIsFormFocused(true);
  };

  const handleFormBlur = () => {
    setIsFormFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare the request body
     const requestBody = {
        name: formData.name, //for Name
        email: formData.email, //for email
        phone: formData.phone, //for Phone no
        brief: formData.message, //for Message
        domain: "www.christianworldpress.com",//domain,
        tag : "Landing Page",
        brand: "christianworldpress.com"//brand,
      }

      const response = await fetch("/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Success
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form after successful submission
        setFormData({ name: "", email: "", phone: "", message: "" });
        console.log('Form submitted successfully');
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 3000);
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again later.",
      });
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render cursor on mobile devices
  if (isMobile) {
    return (
      <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(26, 20, 16, 0.8), rgba(26, 20, 16, 0.6)), url('/lp-1/backgroundlp-1.webp')`,
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 md:p-8 w-full">
          <div className="gap-8 items-center">
            {/* Slider Container */}
            <div ref={swiperRef}>
              <Swiper
                modules={[]}
                spaceBetween={0}
                slidesPerView={1}
                className="w-full rounded-xl"
                onSwiper={(swiper) => {
                  swiperInstance.current = swiper;
                }}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                }}
              >
                {/* First Slide */}
                <SwiperSlide>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="md:w-[45%] space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
                      <div className="space-y-2 sm:space-y-3">
                        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                         Black History Month Special: 50% Off All Publishing Services
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                         This Black History Month, we honor the legacy, faith, and stories that have shaped generations. Christian World Press is offering 50% off all publishing and marketing services to support authors who are ready to share faith-driven messages with the world. Your story matters. Your voice deserves to be heard.
                        </p>
                      </div>

                      <div className="flex justify-center mb-3 md:justify-start gap-2 sm:gap-3">
                        <button 
                          onClick={handleOpenPopup}
                          className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                          START PUBLISHING TODAY
                        </button>
                      </div>
                    </div>
                    
                    {/* Image on the right side */}
                    <div className="md:w-1/2 flex justify-center">
                      <img 
                        src="/lp-1/rightimageofherosectionlp-1.webp" 
                        alt="Christian publishing partnership" 
                        className="w-full max-w-[280px] h-auto rounded-lg shadow-lg object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                {/* Second Slide */}
                <SwiperSlide>
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-6">
                    <div className="md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
                      <div className="space-y-1 sm:space-y-3">
                        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                          Spread the Gospels Worldwide Through Reliable Christian Publishing
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                          Christian World Press is passionate about creating books that strengthen your faith. Our goal is to provide resources that help you grow spiritually and live out your faith with purpose. Each title we publish is a tool to help you on your faith journey.
                        </p>
                      </div>

                      <div className="flex justify-center md:justify-start gap-2 sm:gap-3">
                        <button 
                          onClick={handleOpenPopup}
                          className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                          START PUBLISHING TODAY
                        </button>
                      </div>
                    </div>
                    
                    {/* Form on the right side */}
                    <div className="mb-2 w-full max-w-sm">
                      <form onSubmit={handleSubmit} className="bg-background p-4 rounded-lg border border-border shadow-sm">
                        <h3 className="text-sm font-semibold mb-1 text-foreground">Get In Touch</h3>
                        <div className="space-y-1">
                          <div>
                            <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">Name</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              autoComplete="name"
                              className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs"
                              placeholder="Your name" 
                              onFocus={handleFormFocus}
                              onBlur={handleFormBlur}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">Email</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              autoComplete="email"
                              className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs"
                              placeholder="Your email" 
                              onFocus={handleFormFocus}
                              onBlur={handleFormBlur}
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1">Phone</label>
                            <input 
                              type="tel"
                              id="phone" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                              placeholder="Your phone number"
                              onFocus={handleFormFocus}
                              onBlur={handleFormBlur}
                            />
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">Message</label>
                            <textarea 
                              id="message" 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={2}
                              autoComplete="off"
                              className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs"
                              placeholder="Your message" 
                              onFocus={handleFormFocus}
                              onBlur={handleFormBlur}
                            ></textarea>
                          </div>
                          <div className="flex justify-center">
                            <button 
                              type="submit" 
                              className="w-auto bg-accent text-white py-2 px-15 rounded hover:bg-accent/90 transition-colors font-medium text-xs"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>
          </div>
          
        </div>
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 20, 16, 0.8), rgba(26, 20, 16, 0.6)), url('/lp-1/backgroundlp-1.webp')`,
          backgroundPosition: "center",
        }}
      />

      {/* Custom Cursor with Framer Motion - Only on desktop */}
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-50 flex items-center justify-center"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            x: "-50%",
            y: "-50%"
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovering ? 1.5 : 1,
            opacity: 1,
            backgroundColor: "#ef4444",
            width: "32px",
            height: "32px",
            borderRadius: "9999px",
            boxShadow: isHovering ? "0 0 20px rgba(239, 68, 68, 0.8)" : "none"
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            duration: 0.2
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <svg 
              className="w-4 h-4 text-white"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M15 19l-7-7 7-7" 
              ></path>
            </svg>
            <svg 
              className="w-4 h-4 text-white ml-1"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7" 
              ></path>
            </svg>
          </div>
        </motion.div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-6 md:p-8 w-full">
        <div className="gap-8 items-center">
          {/* Slider Container */}
          <div ref={swiperRef}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              className="w-full rounded-xl cursor-none"
              grabCursor={true}
              onSwiper={(swiper) => {
                swiperInstance.current = swiper;
              }}
              autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false, // Continue autoplay after user interaction
                }}
            >
              {/* First Slide */}
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
                    <div className="space-y-2 sm:space-y-3">
                      <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                        Black History Month Special: 50% Off All Publishing Services
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                       This Black History Month, we honor the legacy, faith, and stories that have shaped generations. Christian World Press is offering 50% off all publishing and marketing services to support authors who are ready to share faith-driven messages with the world. Your story matters. Your voice deserves to be heard.
                      </p>
                    </div>

                    <div className="flex justify-center mb-3 md:justify-start gap-2 sm:gap-3">
                      <button 
                        onClick={handleOpenPopup}
                        className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                        Start Publishing Today
                      </button>
                    </div>
                  </div>
                  
                  {/* Image on the right side */}
                  <div className="md:w-1/2 flex justify-center">
                    <img 
                      src="/lp-1/rightimageofherosectionlp-1.webp" 
                      alt="Christian publishing partnership" 
                      className="w-full max-w-[280px] h-auto rounded-lg shadow-lg object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>

              {/* Second Slide */}
              <SwiperSlide>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-6">
                  <div className="md:w-[45%] space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
                    <div className="space-y-1 sm:space-y-3">
                      <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                        Spread the Gospels Worldwide Through Reliable Christian Publishing
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0">
                        Christian World Press is passionate about creating books that strengthen your faith. Our goal is to provide resources that help you grow spiritually and live out your faith with purpose. Each title we publish is a tool to help you on your faith journey.
                      </p>
                    </div>

                    <div className="flex justify-center md:justify-start gap-2 sm:gap-3">
                      <button 
                        onClick={handleOpenPopup}
                        className="btn-primary text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                        START PUBLISHING TODAY
                      </button>
                    </div>
                  </div>
                  
                  {/* Form on the right side */}
                  <div className="mb-2 w-full max-w-[340px] flex justify-center mx-auto">
                    <form onSubmit={handleSubmit} className="w-full bg-background p-4 rounded-lg border border-border shadow-sm">
                      <h3 className="text-sm font-semibold mb-1 text-foreground">Get In Touch</h3>
                      
                      {submitStatus.type && (
                        <div
                          className={`p-3 rounded text-xs ${
                            submitStatus.type === "success"
                              ? "bg-green-100 text-green-800 border border-green-300"
                              : "bg-red-100 text-red-800 border border-red-300"
                          }`}
                        >
                          {submitStatus.message}
                        </div>
                      )}
                      
                      <div className="space-y-1">
                        <div>
                          <label htmlFor="name" className="block text-xs font-medium text-foreground mb-1">Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs" 
                            placeholder="Your name" 
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1">Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs" 
                            placeholder="Your email" 
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-medium text-foreground mb-1">Phone</label>
                          <input 
                            type="tel"
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs"
                            placeholder="Your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1">Message</label>
                          <textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={2} 
                            autoComplete="off"
                            className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs" 
                            placeholder="Your message" 
                          ></textarea>
                        </div>
                        <div className="flex justify-center">
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-auto bg-accent text-white py-2 px-15 rounded hover:bg-accent/90 transition-colors font-medium text-xs disabled:opacity-50"
                          >
                            {isSubmitting ? "SENDING..." : "Send"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
        
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </section>
  )
}