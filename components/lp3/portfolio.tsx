"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Popup } from "@/components/lp-1/popup";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { ClassicButton } from "../ui/classicbutton";
import { BookOpen, MessageCircle } from "lucide-react";

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

export function Portfolio() {
  const [showPopup, setShowPopup] = useState(false);

  const toggleLiveChat = () => {
    if (typeof window !== "undefined" && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call("maximize");
    }
  };

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden py-15">

      {/* Header */}
      <div className="text-center mb-16 px-6">
        <svg width="80" height="16" viewBox="0 0 80 16" fill="none" className="mb-5 inline-block">
          <path
            d="M2 8 Q10 2 18 8 Q26 14 34 8 Q42 2 50 8 Q58 14 66 8 Q74 2 78 8"
            stroke="#8b0000"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
          <span className="text-black">Books Published by</span><span className="text-[#8B0000]"> Christian World Press</span>
        </h2>

        <p className="max-w-3xl text-center text-lg text-gray-700 mb-10">
          Our portfolio reflects the work we’ve done for Christian authors from different backgrounds, ministries, and life experiences.
        </p>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center px-4">

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

        {/* Swiper Slider */}
        <div className="w-full max-w-6xl relative z-10">

          <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            breakpoints={{
              0: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.2,
              slideShadows: false,
            }}
            className="w-full"
          >
            {books.map((book, index) => (
              <SwiperSlide key={index} className="flex justify-center">

                <div className="relative rounded-xl overflow-hidden bg-gray-900 w-[200px] aspect-[2/3] transition-all duration-500">

                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Zoom */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="w-full h-full object-cover scale-100 hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition duration-500" />

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row sm:flex-row gap-4 justify-center mt-18 px-6">
        <ClassicButton
        variant="primary"
        icon={BookOpen}
          onClick={() => setShowPopup(true)}
          className="popup_button"
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

      {showPopup && <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />}

    </section>
  );
}