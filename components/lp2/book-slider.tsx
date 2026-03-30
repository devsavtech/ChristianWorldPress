"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import { Popup } from "@/components/lp-1/popup";

const books = [
  { title: "A Year of Positive Thinking", img: "/newreleasebooks/thebookofenoch.jpg" },
  { title: "Rise Above Wilderness", img: "/newreleasebooks/thewisdomofsolomon.jpg" },
  { title: "The Cosmic View of Albert Einstein", img: "/newreleasebooks/dayswithjesus.jpg" },
  { title: "Made to Impress", img: "/newreleasebooks/adatewithdestiny.jpg" },
  { title: "Under a Thousand Suns", img: "/newreleasebooks/biblestories.jpg" },
  { title: "The Hidden Mathematics of Everyday Life", img: "/newreleasebooks/timothyalberino.jpg" },
  { title: "A Million to One", img: "/newreleasebooks/bridgesoflove.jpg" },
  { title: "Never Ending Sky", img: "/newreleasebooks/sacredmoments.jpg" },
  { title: "The Art of Love", img: "/newreleasebooks/marriageontherock.jpg" },
  { title: "Raven's Mark", img: "/newreleasebooks/christianhymns.jpg" },
];

const CARD_WIDTHS: Record<number, number> = {
  0: 200,
  1: 175, "-1": 175,
  2: 148, "-2": 148,
  3: 115, "-3": 115,
};
const CARD_SCALES: Record<number, number> = {
  0: 1,
  1: 0.95, "-1": 0.95,
  2: 0.88, "-2": 0.88,
  3: 0.76, "-3": 0.76,
};
const CARD_OPACITY: Record<number, number> = {
  0: 1,
  1: 1, "-1": 1,
  2: 0.88, "-2": 0.88,
  3: 0.6, "-3": 0.6,
};
const CARD_Z: Record<number, number> = {
  0: 4,
  1: 3, "-1": 3,
  2: 2, "-2": 2,
  3: 1, "-3": 1,
};

export function BookSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  const total = books.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);
  const [showPopup, setShowPopup] = useState(false);
  const toggleLiveChat = () => {
    if (typeof window !== 'undefined' && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call('maximize');
    }
  };
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) setActiveIndex((i) => (i + 1) % total);
    }, 3000);
  }, [total]);

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetInterval]);

  const handlePrev = () => { prev(); resetInterval(); };
  const handleNext = () => { next(); resetInterval(); };

  const getBook = (offset: number) =>
    books[((activeIndex + offset) % total + total) % total];

  const slots = [-3, -2, -1, 0, 1, 2, 3];

  return (
    <section className="bg-[#f5f5f5] py-20 relative overflow-hidden">

      {/* Header */}
      <div className="text-center mb-16 px-6">
        <svg width="80" height="16" viewBox="0 0 80 16" fill="none" className="mb-5 inline-block">
          <path
            d="M2 8 Q10 2 18 8 Q26 14 34 8 Q42 2 50 8 Q58 14 66 8 Q74 2 78 8"
            stroke="#8b0000" strokeWidth="2.5" strokeLinecap="round" fill="none"
          />
        </svg>
        <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 mb-5 leading-tight font-serif max-w-3xl mx-auto">
          Books Published by Christian World Press
        </h2>
        <p className="text-gray-500 text-sm md:text-[0.95rem] max-w-2xl mx-auto leading-relaxed">
          Our portfolio reflects the work we’ve done for Christian authors from different backgrounds, ministries, and life experiences. Each book represents a message of faith, encouragement, and purpose brought to life. 
        </p>
      </div>

      {/* Slider */}
      <div
        className="relative flex items-center justify-center px-4"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Red backdrop */}
        <div
          className="absolute rounded-[20px] z-0"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(460px, 40vw, 640px)",
            top: "-36px",
            bottom: "-36px",
            background: "#8b0000",
          }}
        />

        {/* Projects label */}
        <span
          className="absolute z-10 text-white font-bold text-[0.85rem] uppercase tracking-[0.18em]"
          style={{ left: "50%", transform: "translateX(-50%)", top: "-22px", whiteSpace: "nowrap" }}
        >
          Projects
        </span>

        {/* Prev arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute z-20 bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
          style={{ left: "50%", marginLeft: "clamp(-310px, -20vw, -230px)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute z-20 bg-white rounded-full w-11 h-11 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
          style={{ right: "50%", marginRight: "clamp(-310px, -20vw, -230px)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex items-center justify-center gap-4 relative z-10">
          {slots.map((offset, slotPos) => {
            const book = getBook(offset);
            const bookIdx = ((activeIndex + offset) % total + total) % total;
            const isCenter = offset === 0;
            const isHovered = hoveredSlot === slotPos;
            const cardW = CARD_WIDTHS[offset];

            return (
              <div
                key={`${bookIdx}-${slotPos}`}
                onClick={isCenter ? undefined : offset < 0 ? handlePrev : handleNext}
                onMouseEnter={() => setHoveredSlot(slotPos)}
                onMouseLeave={() => setHoveredSlot(null)}
                className="flex-shrink-0"
                style={{
                  transform: `scale(${isHovered && !isCenter ? CARD_SCALES[offset] * 1.06 : CARD_SCALES[offset]})`,
                  opacity: CARD_OPACITY[offset],
                  zIndex: isHovered ? 10 : CARD_Z[offset],
                  cursor: isCenter ? "default" : "pointer",
                  transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease, z-index 0s",
                }}
              >
                <div
                  className="relative rounded-xl overflow-hidden bg-gray-900"
                  style={{
                    width: `${cardW}px`,
                    aspectRatio: "2 / 3",
                    border: isCenter ? "3px solid rgba(255,255,255,0.95)" : "none",
                    boxShadow: isHovered
                      ? "0 36px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,160,74,0.3)"
                      : isCenter
                      ? "0 28px 72px rgba(0,0,0,0.5)"
                      : Math.abs(offset) <= 1
                      ? "0 14px 36px rgba(0,0,0,0.32)"
                      : "0 6px 20px rgba(0,0,0,0.22)",
                    transition: "box-shadow 0.4s ease",
                  }}
                >
                  {/* Cover image — zooms on hover */}
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover block"
                    style={{
                      transform: isHovered ? "scale(1.12)" : "scale(1)",
                      transition: "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                      if (t.parentElement) {
                        t.parentElement.style.background = `hsl(${(bookIdx * 47) % 360},40%,22%)`;
                        t.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:14px;text-align:center;color:#fff;font-size:0.8rem;font-family:'Georgia',serif;font-weight:600;line-height:1.4;">${book.title}</div>`;
                      }
                    }}
                  />

                  {/* Dark gradient overlay — fades in on hover */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: isHovered
                        ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0) 0%, transparent 100%)",
                      transition: "background 0.4s ease",
                    }}
                  />

                  {/* Shine sweep */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: isHovered
                        ? "linear-gradient(115deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)"
                        : "transparent",
                      transition: "background 0.55s ease",
                    }}
                  />

                  {/* Title — slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 pointer-events-none">
                    <p
                      className="text-white text-center font-semibold leading-snug"
                      style={{
                        fontSize: `${Math.max(0.58, cardW / 290)}rem`,
                        fontFamily: "'Georgia', serif",
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateY(0px)" : "translateY(10px)",
                        transition: "opacity 0.35s ease, transform 0.35s ease",
                        textShadow: "0 1px 8px rgba(0,0,0,0.7)",
                      }}
                    >
                    </p>
                  </div>

                  {/* Gold bottom glow */}
                  <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{
                      height: "3px",
                      background: isHovered
                        ? "linear-gradient(to right, transparent, #c8a04a, transparent)"
                        : "transparent",
                      transition: "background 0.4s ease",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {books.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveIndex(i); resetInterval(); }}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: activeIndex === i ? "24px" : "8px",
              height: "8px",
              background: activeIndex === i ? "#8b0000" : "#ccc",
            }}
          />
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 px-6">
        <Button  onClick={() => setShowPopup(true)} className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold tracking-widest px-12 py-6 text-sm w-full sm:w-auto transition-colors duration-200">
          Get A Quote
        </Button>
        <Button onClick={toggleLiveChat} variant="outline" className="text-black border-2 border-black hover:bg-black hover:text-white rounded-sm uppercase font-bold tracking-widest px-12 py-6 text-sm w-full sm:w-auto transition-colors duration-200 chat_button">
          Live Chat
        </Button>
      </div>
     {showPopup && <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
    </section>
  );
}