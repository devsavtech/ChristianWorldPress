
"use client";

import React, { useState, useEffect, useCallback } from "react";

const brands = [
  { id: 1, name: "Cloudinary", nameLogo: "/brands/cl-2.png" },
  // { id: 2, name: "Appwrite", nameLogo: "/brands/cl-3.png" },
  { id: 3, name: "Hostinger", nameLogo: "/brands/cl-4.png" },
  { id: 4, name: "Stream", nameLogo: "/brands/cl-5.png" },
  { id: 5, name: "Docker", nameLogo: "/brands/cl-6.png" },
  // { id: 6, name: "Brand Six", nameLogo: "/brands/cl-7.png" },
  { id: 7, name: "Brand Seven", nameLogo: "/brands/cl-10.png" },
];

export default function Brands() {
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
    const copiesNeeded = Math.ceil(columns * 2 / brands.length);
    const result = [];
    for (let i = 0; i < copiesNeeded; i++) {
      result.push(...brands);
    }
    return result;
  };

  // Calculate total width for single set of brands
  const calculateBrandsWidth = () => {
    return brands.length * (logoHeight * 2.5 + gap) - gap;
  };

  // Handle image loading error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.style.opacity = '0.3';
    console.warn(`Failed to load brand logo: ${target.alt}`);
  };

  return (
    <section
      className="relative w-full bg-primary overflow-hidden"
      style={{
        paddingTop: `${paddingY}px`,
        paddingBottom: `${paddingY}px`
      }}
    >
      {/* Container for better control */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-sm md:text-base lg:text-lg text-white mb-6 md:mb-8 lg:mb-10 tracking-wider">
          TRUSTED BY LEADING BRANDS
        </h2>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Marquee Wrapper - Conditionally animated */}
          <div
            className="flex items-center"
            style={{
              gap: `${gap}px`,
              animation: shouldAnimate ? `marquee ${animationDuration}s linear infinite` : 'none',
            }}
          >
            {getBrandCopies().map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0"
                style={{
                  opacity: 1,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (windowWidth >= 768) { // Only on desktop
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={brand.nameLogo}
                  alt={brand.name}
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
              {brands.slice(0, Math.min(columns, brands.length)).map((brand) => (
                <div
                  key={brand.id}
                  className="opacity-80 flex-shrink-0"
                >
                  <img
                    src={brand.nameLogo}
                    alt={brand.name}
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
              className="pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10"
              style={{
                width: `${fadeWidth}px`,
                top: `${paddingY}px`,
                bottom: `${paddingY}px`,
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-primary via-primary/90 to-transparent z-10"
              style={{
                width: `${fadeWidth}px`,
                top: `${paddingY}px`,
                bottom: `${paddingY}px`,
              }}
            />
          </>
        )}
      </div>

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${calculateBrandsWidth()}px));
          }
        }
        
        /* Reduce motion support */
        @media (prefers-reduced-motion: reduce) {
          .marquee-animation {
            animation: none !important;
          }
        }
        
        /* Better performance for animations */
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}