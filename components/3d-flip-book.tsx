"use client";

import React, { useState, useEffect } from "react";

interface PageData {
  front: React.ReactNode;
  back: React.ReactNode;
}

interface FlipBookProps {
  className?: string;
  title?: string;
  content?: string[];
  coverImage?: string;
  pageImages?: string[];
  authorName?: string;
  onClose?: () => void;
}

const FlipBook: React.FC<FlipBookProps> = ({ 
  className = "", 
  title = "The Unrevealed", 
  content = [],
  coverImage,
  pageImages,
  authorName,
  onClose
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  // Reset to cover page when author changes
  useEffect(() => {
    setCurrentPage(0);
  }, [authorName, coverImage]);

  const defaultContent = content.length >= 3 ? content : ["Chapter 1", "Chapter 2", "Chapter 3"];

  // Helper to render page content (image or text)
  const renderPage = (pageNum: number, isBack: boolean = false) => {
    // Map pageNum to image index: page 0 uses images 0,1; page 1 uses images 2,3
    const imgIndex = pageNum * 2 + (isBack ? 1 : 0);
    // Add padding-top for Andre Weisbrod's page 3 (index 2, front side)
    const isAndrePage3 = authorName === "Andre Weisbrod" && pageNum === 2 && !isBack;
    if (pageImages && pageImages[imgIndex]) {
      return (
        <div
          className={`w-full h-full ${isAndrePage3 ? "pt-2" : ""}`}
          style={{
            backgroundImage: `url(${pageImages[imgIndex]})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />
      );
    }
    // No text content - return blank white page
    return <div className="w-full h-full bg-white shadow-inner" />;
  };

  const pages: PageData[] = [
    {
      front: coverImage ? (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <div
          className="w-full h-full flex flex-col justify-end p-6 text-white"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          }}
        >
          <h1 className="text-xl sm:text-2xl font-bold mb-2 font-serif">{title}</h1>
          <p className="text-xs sm:text-sm opacity-80">By {title}</p>
        </div>
      ),
      back: <div className="w-full h-full bg-[#f5f5f0] shadow-inner" />,
    },
    {
      front: renderPage(0),
      back: renderPage(0, true),
    },
    {
      front: renderPage(1),
      back: renderPage(1, true),
    },
    {
      front: <div className="w-full h-full bg-[#f5f5f0] shadow-inner" />,
      back: <div className="w-full h-full bg-[#f5f5f0] shadow-inner" />,
    },
  ];

  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === totalPages - 1 && onClose) {
      // On last page, clicking goes back to first page (close book)
      setCurrentPage(0);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isOpen = currentPage > 0;

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`relative transition-all duration-1000 ease-out book-container ${isOpen ? 'book-open' : ''}`}
        style={{
          width: "50vw",
          height: "auto",
          maxHeight: "80vh",
          aspectRatio: "2/3",
          perspective: "1500px",
          marginLeft: isOpen ? "50vw" : "0",
        }}
      >
        <style jsx>{`
          /* Small devices (phones, 640px and up) */
          @media (min-width: 640px) {
            .book-container {
              width: min(50vw, 280px) !important;
              height: min(70vh, 420px) !important;
            }
            .book-container.book-open {
              margin-left: 20vw !important;
            }
            .book-container:not(.book-open) {
              margin-left: 0 !important;
            }
          }
          /* Medium devices (tablets, 768px and up) */
          @media (min-width: 768px) {
            .book-container {
              width: min(45vw, 320px) !important;
              height: min(75vh, 480px) !important;
            }
          }
          /* Large devices (desktops, 1024px and up) */
          @media (min-width: 1024px) {
            .book-container {
              width: min(25vw, 280px) !important;
              height: min(65vh, 420px) !important;
            }
          }
          /* Extra large devices (large desktops, 1280px and up) */
          @media (min-width: 1280px) {
            .book-container {
              width: min(20vw, 320px) !important;
              height: min(70vh, 480px) !important;
            }
          }
        `}</style>
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(5deg)",
          }}
        >
          {pages.map((page, index) => {
            const isFlipped = currentPage > index;
            const isActive = currentPage === index;
            const isLastFlipped = isFlipped && currentPage === index + 1;

            return (
              <div
                key={index}
                className="absolute inset-0 will-change-transform"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                  transformOrigin: "left center",
                  transition: "transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)",
                  zIndex: isFlipped ? index : totalPages - index,
                  pointerEvents: isActive || isLastFlipped ? "auto" : "none",
                }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 rounded-r-sm overflow-hidden ${isActive ? "cursor-pointer" : ""}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                    boxShadow: isActive ? "-5px 0 15px rgba(0,0,0,0.15), -2px 0 5px rgba(0,0,0,0.1)" : "none",
                  }}
                  onClick={isActive ? goNext : undefined}
                >
                  {page.front}
                </div>
                {/* Back */}
                <div
                  className={`absolute inset-0 rounded-l-sm overflow-hidden ${isLastFlipped ? "cursor-pointer" : ""}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    boxShadow: isLastFlipped ? "5px 0 15px rgba(0,0,0,0.15), 2px 0 5px rgba(0,0,0,0.1)" : "none",
                  }}
                  onClick={isLastFlipped ? goPrev : undefined}
                >
                  {page.back}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
