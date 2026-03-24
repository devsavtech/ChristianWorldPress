"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

// npm install embla-carousel-react

const testimonials = [
  {
    name: "Daniel Carter",
    text: "The entire publishing process felt organized and straightforward. My book turned out exactly how I hoped.",
    rating: 5,
  },
  {
    name: "Rebecca Moore",
    text: "They took my rough manuscript and turned it into something truly professional. I couldn't be happier with the result.",
    rating: 5,
  },
  {
    name: "Melissa Grant",
    text: "The editing and formatting made a huge difference. My book feels polished and ready for readers.",
    rating: 5,
  },
  {
    name: "Kevin Brooks",
    text: "I appreciated how simple they made everything. Publishing didn't feel overwhelming at all.",
    rating: 5,
  },
  {
    name: "Laura Bennett",
    text: "They really understood my vision and helped bring it to life. The final product exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Michael Turner",
    text: "From cover design to final publishing, everything was handled professionally and on time.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    text: "As a first-time author, I felt supported every step of the way. That made all the difference.",
    rating: 5,
  },
  {
    name: "Jonathan Reed",
    text: "My book looks and reads better than I imagined. The attention to detail really shows.",
    rating: 5,
  },
  {
    name: "Emily Dawson",
    text: "They helped me turn my message into a book I'm proud to share. The process was smooth and well guided.",
    rating: 5,
  },
];

export function Testimonials() {
  const { displayedText, isTyping, sectionRef } =
    useTypingAnimation("What Our Authors Say");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
    dragFree: false,
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">
          {displayedText || " "}
          {isTyping && <span className="animate-pulse">|</span>}
        </h2>
        <p className="mt-2 text-gray-500">
          Real stories from people who published with us
        </p>
      </div>

      {/* Embla viewport */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                // 1 card on mobile, 2 on md, 3 on lg
                className="flex-shrink-0 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                           bg-[#f4f6f9] rounded-[1.75rem] p-8 flex flex-col gap-4"
              >
                <span className="text-[80px] font-serif text-[#8b0000] leading-none">
                  "
                </span>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-[#f5a524] text-[#f5a524]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {t.text}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-[#8b0000]">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
                     hover:bg-gray-100 disabled:opacity-30 transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Dots */}
        <div className="flex gap-2 items-center">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-200 ${
                i === selectedIndex
                  ? "w-4 h-3 bg-[#8b0000]"
                  : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center
                     hover:bg-gray-100 disabled:opacity-30 transition"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
}