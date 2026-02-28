"use client";

import React, { useState, useEffect } from "react";

interface PageData {
  front: React.ReactNode;
  back: React.ReactNode;
}

interface FlipBookProps {
  className?: string;
  title?: string;
  content?: (string | null)[];
  coverImage?: string;
  pageImages?: (string | null)[];
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
  const renderPage = (contentIndex: number) => {
    // Check for image first
    if (pageImages && pageImages[contentIndex]) {
      return (
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${pageImages[contentIndex]})`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        />
      );
    }
    // Check for text content
    if (content && content[contentIndex]) {
      return (
        <div className="w-full h-full bg-white shadow-inner p-2 sm:p-3 md:p-4 overflow-hidden">
          <div 
            className="w-full h-full text-[7px] sm:text-[9px] md:text-[10px] lg:text-xs leading-snug text-black whitespace-pre-wrap font-serif" 
            style={{ opacity: 1, textAlign: 'left', overflow: 'hidden' }}
          >
            {content[contentIndex]}
          </div>
        </div>
      );
    }
    // No content - return blank white page
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
      back: renderPage(0),
    },
    {
      front: renderPage(1),
      back: renderPage(2),
    },
    {
      front: renderPage(3),
      back: renderPage(4),
    },
    {
      front: renderPage(5),
      back: renderPage(6),
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
          marginLeft: isOpen ? "50vw" : "0",
        }}
      >
        <style jsx>{`
          /* Page fold hover effects */
          .page-front:hover .page-fold-right {
            width: 40px !important;
            height: 40px !important;
            background-image: linear-gradient(45deg, #fefefe 0%, #f2f2f2 49%, #ffffff 50%, #ffffff 100%) !important;
          }
          .page-back:hover .page-fold-left {
            width: 40px !important;
            height: 40px !important;
            background-image: linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #f2f2f2 51%, #fefefe 100%) !important;
          }
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
                .book-container.book-open {
              margin-left: 40vw !important;
            }
            .book-container:not(.book-open) {
              margin-left: 0 !important;
            }
          }

          @media (min-width: 820px) {
                .book-container.book-open {
              margin-left: 38vw !important;
            }
            .book-container:not(.book-open) {
              margin-left: 0 !important;
            }
          }
          /* Large devices (desktops, 1024px and up) */
          @media (min-width: 1024px) {
            .book-container {
              width: min(25vw, 280px) !important;
              height: min(65vh, 420px) !important;
            }
                .book-container.book-open {
              margin-left: 22vw !important;
            }
            .book-container:not(.book-open) {
              margin-left: 0 !important;
            }
          }
          /* Extra large devices (large desktops, 1280px and up) */
          @media (min-width: 1280px) {
            .book-container {
              width: min(20vw, 320px) !important;
              height: min(70vh, 480px) !important;
            }
                .book-container.book-open {
              margin-left: 18vw !important;
            }
            .book-container:not(.book-open) {
              margin-left: 0 !important;
            }
          }
        `}</style>
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
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
                  className={`absolute inset-0 rounded-r-sm overflow-hidden ${isActive ? "cursor-pointer" : ""} page-front`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                    boxShadow: isActive ? "-5px 0 15px rgba(0,0,0,0.15), -2px 0 5px rgba(0,0,0,0.1)" : "none",
                    background: "linear-gradient(to right, #d9d9d9 0%, #f9f9f9 3%, #ffffff 8%, #ffffff 100%)",
                  }}
                  onClick={isActive ? goNext : undefined}
                >
                  {page.front}
                  {/* Page fold right */}
                  <div 
                    className="page-fold-right"
                    style={{
                      position: "absolute",
                      width: "0px",
                      height: "0px",
                      top: 0,
                      right: 0,
                      borderLeftWidth: "1px",
                      borderLeftColor: "#dddddd",
                      borderLeftStyle: "solid",
                      borderBottomWidth: "1px",
                      borderBottomColor: "#dddddd",
                      borderBottomStyle: "solid",
                      boxShadow: "-5px 5px 10px #dddddd",
                      transition: "all 0.3s ease",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                {/* Back */}
                <div
                  className={`absolute inset-0 rounded-l-sm overflow-hidden ${isLastFlipped ? "cursor-pointer" : ""} page-back`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg) translateZ(1px)",
                    boxShadow: isLastFlipped ? "5px 0 15px rgba(0,0,0,0.15), 2px 0 5px rgba(0,0,0,0.1)" : "none",
                    background: "linear-gradient(to right, #ffffff 0%, #ffffff 92%, #f9f9f9 97%, #d9d9d9 100%)",
                  }}
                  onClick={isLastFlipped ? goPrev : undefined}
                >
                  {page.back}
                  {/* Page fold left */}
                  <div 
                    className="page-fold-left"
                    style={{
                      position: "absolute",
                      width: "0px",
                      height: "0px",
                      top: 0,
                      left: 0,
                      borderRightWidth: "1px",
                      borderRightColor: "#dddddd",
                      borderRightStyle: "solid",
                      borderBottomWidth: "1px",
                      borderBottomColor: "#dddddd",
                      borderBottomStyle: "solid",
                      boxShadow: "5px 5px 10px #dddddd",
                      transition: "all 0.3s ease",
                      pointerEvents: "none",
                    }}
                  />
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
