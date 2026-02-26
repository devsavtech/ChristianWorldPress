"use client";

import React, { useState } from "react";

interface PageData {
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipBook: React.FC<{ className?: string }> = ({ className = "" }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  const pages: PageData[] = [
    {
      front: (
        <div
          className="w-full h-full flex flex-col justify-end p-8 text-white"
          style={{
            background:
              "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
          }}
        >
          <h1 className="text-3xl font-bold mb-2 font-serif">The Unrevealed</h1>
          <p className="text-lg opacity-80">Suspense Novel</p>
          <p className="text-sm mt-4 opacity-60">By Horace Gaspar Feliu</p>
        </div>
      ),
      back: (
        <div className="w-full h-full bg-gradient-to-bl from-white to-gray-50" />
      ),
    },
    {
      front: (
        <div className="w-full h-full p-8 flex flex-col bg-gradient-to-br from-white to-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 font-serif">
            Copyright
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            © 2024 Horace Gaspar Feliu. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-4">
            No part of this publication may be reproduced, distributed, or
            transmitted in any form or by any means without prior written
            permission.
          </p>
          <div className="mt-auto text-center text-xs text-gray-400">
            Page 1
          </div>
        </div>
      ),
      back: (
        <div className="w-full h-full p-8 flex flex-col bg-gradient-to-bl from-white to-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">
            First Edition: January 2024
            <br />
            ISBN: 978-3-16-148410-0
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-4">
            This is a work of fiction. Names, characters, and incidents are
            products of the author&apos;s imagination.
          </p>
          <div className="mt-auto text-center text-xs text-gray-400">
            Page 2
          </div>
        </div>
      ),
    },
    {
      front: (
        <div className="w-full h-full p-8 flex flex-col bg-gradient-to-br from-white to-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 font-serif">
            Acknowledgements
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I would like to express my deepest gratitude to everyone who
            supported me throughout this journey. To my family, whose unwavering
            belief in my dreams kept me going.
          </p>
          <div className="mt-auto text-center text-xs text-gray-400">
            Page 3
          </div>
        </div>
      ),
      back: (
        <div className="w-full h-full p-8 flex flex-col bg-gradient-to-bl from-white to-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">
            Special thanks to the team at Mystery House Publishing for bringing
            this vision to life.
          </p>
          <div className="mt-auto text-center text-xs text-gray-400">
            Page 4
          </div>
        </div>
      ),
    },
    {
      front: (
        <div className="w-full h-full p-8 flex flex-col bg-gradient-to-br from-white to-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 font-serif">
            Dedication
          </h2>
          <p className="text-lg text-gray-700 italic leading-relaxed text-center mt-12">
            &ldquo;To those who seek truth in shadows,
            <br />
            and find light in the unrevealed.&rdquo;
          </p>
          <div className="mt-auto text-center text-xs text-gray-400">
            Page 5
          </div>
        </div>
      ),
      back: (
        <div className="w-full h-full p-8 flex flex-col bg-gradient-to-bl from-white to-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">
            May this story remind us all that sometimes the greatest mysteries
            are the ones we hide from ourselves.
          </p>
          <div className="mt-auto text-center text-xs text-gray-400">
            Page 6
          </div>
        </div>
      ),
    },
    {
      front: (
        <div className="w-full h-full p-8 flex flex-col bg-gradient-to-br from-white to-gray-50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 font-serif">
            Prologue
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            The rain fell in sheets against the window of the old Victorian
            house. Detective Sarah Mitchell stared at the envelope on her
            desk...
          </p>
          <div className="mt-auto text-center text-xs text-gray-400">
            Page 7
          </div>
        </div>
      ),
      back: (
        <div
          className="w-full h-full flex flex-col justify-center items-center p-8 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)",
          }}
        >
          <h3 className="text-xl font-bold mb-4 font-serif">The Unrevealed</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            A gripping tale of mystery, suspense, and the secrets that bind us.
          </p>
        </div>
      ),
    },
  ];

  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const isOpen = currentPage > 0;

  return (
    <div
      className={`flex flex-col items-center justify-center py-20 ${className}`}
    >
      <div
        className="relative transition-all duration-700 ease-out sm:transition-none"
        style={{
          width: "min(50vw, 280px)",
          height: "min(55vh, 350px)",
          perspective: "1500px",
          marginLeft: isOpen ? "30vw" : "0",
        }}
      >
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
                  className={`absolute inset-0 rounded-r-sm shadow-lg overflow-hidden ${
                    isActive ? "cursor-pointer" : ""
                  }`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                  onClick={isActive ? goNext : undefined}
                >
                  {page.front}
                </div>
                {/* Back */}
                <div
                  className={`absolute inset-0 rounded-l-sm shadow-lg overflow-hidden ${
                    isLastFlipped ? "cursor-pointer" : ""
                  }`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
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
