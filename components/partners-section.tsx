"use client"

import { Button } from "@/components/ui/button"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"
import React, { useState, useEffect, useCallback } from "react"

const partnerLogos = [
  { name: "Cloudinary", src: "/newsliderlogos/logo-1.png" },
  { name: "Appwrite", src: "/newsliderlogos/logo-2.png" },
  { name: "Hostinger", src: "/newsliderlogos/logo-3.png" },
  { name: "Stream", src: "/newsliderlogos/logo-4.png" },
  { name: "Docker", src: "/newsliderlogos/logo-5.png" },
  { name: "Brand Seven", src: "/newsliderlogos/logo-6.png" },
  { name: "Brand Eight", src: "/newsliderlogos/logo-7.png" },
  { name: "Brand Eight", src: "/newsliderlogos/logo-8.png" },
  { name: "Brand Eight", src: "/newsliderlogos/logo-9.png" },
  { name: "Brand Eight", src: "/newsliderlogos/logo-10.png" },
  { name: "Brand Eight", src: "/newsliderlogos/logo-11.png" },
  { name: "Brand Eight", src: "/newsliderlogos/logo-12.png" },
]

export function PartnersSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Trusted Distribution Partners")
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [isClient, setIsClient] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);

    // Check if prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShouldAnimate(false);
    }
  }, []);

  useEffect(() => {
    setIsClient(true);

    // Initial check for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShouldAnimate(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Calculate responsive values
  const getResponsiveValues = () => {
    if (!isClient) return { gap: 16, logoHeight: 40, paddingY: 24, fadeWidth: 96, columns: 7 };

    let gap = 16;
    let logoHeight = 40;
    let paddingY = 24;
    let fadeWidth = 96;
    let columns = 7;

    if (windowWidth < 320) { // Extra small phones (iPhone SE, etc.)
      gap = 6;
      logoHeight = 20;
      paddingY = 12;
      fadeWidth = 24;
      columns = 4;
    } else if (windowWidth < 360) { // Very small phones
      gap = 8;
      logoHeight = 22;
      paddingY = 14;
      fadeWidth = 28;
      columns = 5;
    } else if (windowWidth < 400) { // Small phones
      gap = 10;
      logoHeight = 24;
      paddingY = 16;
      fadeWidth = 32;
      columns = 5;
    } else if (windowWidth < 480) { // Standard phones
      gap = 12;
      logoHeight = 26;
      paddingY = 18;
      fadeWidth = 36;
      columns = 6;
    } else if (windowWidth < 640) { // Larger phones
      gap = 14;
      logoHeight = 28;
      paddingY = 20;
      fadeWidth = 40;
      columns = 6;
    } else if (windowWidth < 768) { // Tablets
      gap = 16;
      logoHeight = 32;
      paddingY = 22;
      fadeWidth = 48;
      columns = 7;
    } else if (windowWidth < 1024) { // Small laptops
      gap = 20;
      logoHeight = 36;
      paddingY = 24;
      fadeWidth = 64;
      columns = 7;
    } else if (windowWidth < 1280) { // Laptops
      gap = 24;
      logoHeight = 40;
      paddingY = 28;
      fadeWidth = 80;
      columns = 7;
    } else if (windowWidth < 1536) { // Desktops
      gap = 28;
      logoHeight = 44;
      paddingY = 32;
      fadeWidth = 96;
      columns = 7;
    } else { // Large screens
      gap = 32;
      logoHeight = 48;
      paddingY = 36;
      fadeWidth = 112;
      columns = 7;
    }

    return { gap, logoHeight, paddingY, fadeWidth, columns };
  };

  // Calculate animation duration based on screen width
  const getAnimationDuration = () => {
    if (!isClient || !shouldAnimate) return 0;

    if (windowWidth < 320) return 20;
    if (windowWidth < 360) return 22;
    if (windowWidth < 480) return 25;
    if (windowWidth < 640) return 28;
    if (windowWidth < 768) return 30;
    if (windowWidth < 1024) return 32;
    if (windowWidth < 1280) return 34;
    if (windowWidth < 1536) return 36;
    return 38;
  };

  const { gap, logoHeight, paddingY, fadeWidth, columns } = getResponsiveValues();
  const animationDuration = getAnimationDuration();

  // Calculate how many brand copies we need based on columns
  const getBrandCopies = () => {
    const copiesNeeded = Math.ceil(columns * 2 / partnerLogos.length);
    const result = [];
    for (let i = 0; i < copiesNeeded; i++) {
      result.push(...partnerLogos);
    }
    return result;
  };

  // Calculate total width for single set of brands
  const calculateBrandsWidth = () => {
    return partnerLogos.length * (logoHeight * 2.5 + gap) - gap;
  };

  // Handle image loading error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.warn(`Failed to load partner logo: ${target.alt}`);
  };

  return (
    <section ref={sectionRef} id="partners" className="py-10 sm:py-10 md:py-10 lg:py-10 bg-card/10 border-y border-border relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('/img/Distribution & Global Reach Section.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Trusted Distribution Partners */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-6 sm:mb-6 md:mb-6 text-center min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          
          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden bg-[#f5f1e8] rounded-lg" style={{ paddingTop: `${paddingY}px`, paddingBottom: `${paddingY}px` }}>
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              {/* Marquee Wrapper - Conditionally animated */}
              <div
                className="flex items-center"
                style={{
                  gap: `${gap}px`,
                  animation: shouldAnimate ? `marquee ${animationDuration}s linear infinite` : 'none',
                }}
              >
                {getBrandCopies().map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0"
                    style={{
                      opacity: 1,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <img
                      src={partner.src || "/placeholder.svg"}
                      alt={partner.name}
                      className="w-auto object-contain"
                      style={{
                        height: `${logoHeight}px`,
                        width: 'auto',
                        maxWidth: `${logoHeight * 3}px`,
                        minWidth: `${logoHeight * 2.5}px`,
                      }}
                      loading="lazy"
                      decoding="async"
                      onError={handleImageError}
                    />
                  </div>
                ))}
              </div>

              {/* Static fallback for reduced motion or no animation */}
              {!shouldAnimate && (
                <div
                  className="flex items-center justify-center w-full mt-4"
                  style={{ gap: `${gap}px` }}
                >
                  {partnerLogos.slice(0, Math.min(columns, partnerLogos.length)).map((partner, index) => (
                    <div
                      key={`${partner.name}-${index}`}
                      className="flex-shrink-0"
                    >
                      <img
                        src={partner.src || "/placeholder.svg"}
                        alt={partner.name}
                        className="w-auto object-contain"
                        style={{
                          height: `${logoHeight}px`,
                          width: 'auto',
                          maxWidth: `${logoHeight * 2.5}px`,
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Fade edges - Only show if animating */}
            {shouldAnimate && (
              <>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-[#f5f1e8] via-[#f5f1e8]/90 to-transparent z-10"
                  style={{
                    width: `${fadeWidth}px`,
                    top: `${paddingY}px`,
                    bottom: `${paddingY}px`,
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-[#f5f1e8] via-[#f5f1e8]/90 to-transparent z-10"
                  style={{
                    width: `${fadeWidth}px`,
                    top: `${paddingY}px`,
                    bottom: `${paddingY}px`,
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* Partner Stores */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-5 md:mb-6 uppercase">Partner Stores</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              Our books are available in leading Christian and national bookstores across the globe.
            </p>
            <Button className="btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
              FIND A STORE NEAR YOU
            </Button>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
              {storeLogos.map((store, index) => {
                const isLastOdd =
                  storeLogos.length % 2 !== 0 &&
                  index === storeLogos.length - 1

                return (
                  <div
                    key={store.name}
                    className={isLastOdd ? "col-span-2 flex justify-center" : ""}
                  >
                    <div
                      className={`
                        h-10 sm:h-12
                        flex items-center justify-center
                        bg-card/80 transition-colors rounded
                        p-3 sm:p-4
                        ${isLastOdd ? "w-1/2" : "w-full"}
                      `} >
                      <img
                        src={store.src || "/placeholder.svg"}
                        alt={store.name}
                        className="h-5 sm:h-8 object-contain"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-5 md:mb-6 uppercase">Traditional Publishers</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              We work alongside respected Christian publishers to expand the reach of transformative literature.
            </p>
            <div className="space-y-2 sm:space-y-3">
              {["Joey Jaymes", "Greg Pai", "Rebekah Davis", "Jimmy Evans", "Victoria Vossey"].map((publisher) => (
                <div key={publisher} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span>{publisher}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
    
  )
}

// SS Animation (placed outside component)
const marqueeStyles = `
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  /* Reduce motion support */
  @media (prefers-reduced-motion: reduce) {
    .marquee-animation {
      animation: none !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = marqueeStyles;
  document.head.appendChild(styleSheet);
}