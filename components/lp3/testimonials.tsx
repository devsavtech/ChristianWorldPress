"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ClassicButton } from "@/components/ui/classicbutton";
import { BookOpen, MessageCircle } from "lucide-react";
import { Popup } from "../global/popup";
export default function Testimonials2() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const toggleLiveChat = () => {
    if (typeof window !== "undefined" && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call("maximize");
    }
  };
  const testimonials = [
    {
      name: "Hannah Thompson",
      role: "Book Author",
      quote:
        "I spent years putting off my book because I thought publishing would be confusing and expensive. I was wrong. The team walked me through every step, answered every question, and helped me publish a book I’m genuinely proud of. For the first time, my story felt real.",
      images: ["/lp3/book_2.webp"],
    },
    {
      name: "Michael Carter ",
      role: "First-Time Author",
      quote:
        "I had the idea for my book for years, but I kept putting it off because I had no clue where to start. They took my rough draft and turned it into something that looked and felt like a real book. The process was clear, fast, and far less stressful than I expected.",
      images: ["/lp3/book_3.webp"],
    },
    {
      name: "Sara Bennett",
      role: "Children’s Book Author",
      quote:
        "I came in with an unfinished manuscript and no confidence. They helped me shape the story, improve the writing, and create a cover that actually fit the book. Seeing it published for the first time was surreal.",
      images: ["/lp3/book_4.webp"],
    },
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden py-15">
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] text-black font-extrabold text-center mb-4">
        OVER <span className="text-[#8B0000]">1,000 BOOKS</span> PUBLISHING
        STORIES WORLDWIDE
      </h2>
      <p className="max-w-3xl text-center text-lg text-gray-700 mb-10">
        We’ve helped more than 1,000 authors turn unfinished manuscripts into
        published books. From editing and design to publishing and marketing, we
        guide authors through every step so they can launch with confidence and
        keep full control of their work.
      </p>

      <div className="w-full max-w-5xl mx-auto mb-8 relative px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          className="w-full"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 pb-12">
                {/* Left Side: Content */}
                <div className="flex-1 w-full md:min-w-[300px]">
                  <div className="mb-1 font-extrabold text-black text-2xl">
                    {t.name}
                  </div>
                  <div className="mb-6 text-gray-500 text-lg">{t.role}</div>
                  <div className="text-[#8B0000] mb-4">
                    <svg
                      width="45"
                      height="45"
                      viewBox="0 0 45 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 26.25C15.3921 26.25 18.75 22.8921 18.75 18.75C18.75 14.6079 15.3921 11.25 11.25 11.25C7.10786 11.25 3.75 14.6079 3.75 18.75C3.75 24.375 6.5625 28.125 11.25 33.75"
                        stroke="#8B0000"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M33.75 26.25C37.8921 26.25 41.25 22.8921 41.25 18.75C41.25 14.6079 37.8921 11.25 33.75 11.25C29.6079 11.25 26.25 14.6079 26.25 18.75C26.25 24.375 29.0625 28.125 33.75 33.75"
                        stroke="#8B0000"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="italic text-gray-800 text-xl leading-relaxed relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Right Side: Image */}
                <div className="flex-1 flex items-center justify-center w-full px-2 md:px-0">
                  <div className="relative w-full max-w-[500px] group">
                    {/* Use a wrapper that maintains image proportions without forcing a height */}
                    <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-xl bg-white transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={t.images[0]}
                        alt={t.name}
                        width={800} // Natural reference width
                        height={600} // Natural reference height
                        className="w-full h-auto object-contain block"
                        priority={i === 0} // Loads the first testimonial image instantly
                      />
                    </div>

                    {/* Optional: Subtle decorative element for desktop */}
                    <div className="absolute -inset-4 bg-[#8B0000]/5 -z-10 rounded-full blur-3xl opacity-0 md:opacity-100" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Dots (Matches your original CSS) */}
        <div className="custom-pagination flex justify-center gap-3 mt-4" />
      </div>
      <div className="flex flex-row md:flex-row gap-3 md:gap-4 items-center mt-2">
        <ClassicButton
          variant="primary"
          icon={BookOpen}
          className="popup_button"
          onClick={() => setIsPopupOpen(true)}
        >
          Publish Your Book
        </ClassicButton>
        <ClassicButton
          onClick={toggleLiveChat}
          variant="outline"
          icon={MessageCircle}
          className="chat_button"
        >
          Talk to Us
        </ClassicButton>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 !important;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          width: 40px;
          background: #8b0000 !important;
        }
      `}</style>
    </section>
  );
}
