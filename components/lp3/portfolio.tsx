"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Popup } from "@/components/lp-1/popup";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { ClassicButton } from "../ui/classicbutton";
import { BookOpen, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="w-full bg-[#fdfdfd] py-15 border-t border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="container max-w-7xl mx-auto px-6 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            BOOKS PUBLISHED BY <span className="text-[#8B0000] relative">CHRISTIAN WORLD PRESS</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-slate-600 font-medium">
            Our portfolio reflects the work we’ve done for Christian authors from different backgrounds, ministries, and life experiences.
          </p>
        </motion.div>
      </div>

      {/* Slider Area */}
      <div className="relative flex flex-col items-center justify-center px-4">
        
        {/* Red backdrop - Positioned behind images only */}
        <div
          className="absolute rounded-[20px] z-0"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(460px, 40vw, 640px)",
            top: "-36px",
            bottom: "40px", // Ends just before the dots
            background: "#8b0000",
          }}
        />

        <div className="w-full max-w-6xl relative z-10 flex flex-col items-center">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Pagination]}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // Link to the custom div below
            pagination={{
              el: ".portfolio-pagination",
              clickable: true,
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
              <SwiperSlide key={index} className="flex justify-center pb-10">
                <div className="relative rounded-xl overflow-hidden bg-gray-900 w-[200px] aspect-[2/3] transition-all duration-500 shadow-2xl">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover Zoom Overlay */}
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

          {/* CUSTOM DOTS LOCATION: Below Red Backdrop, Above Buttons */}
          <div className="portfolio-pagination mt-4 flex justify-center gap-2 h-8 items-center" />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row gap-4 justify-center mt-12 px-6">
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

      {/* Custom Styles for the Pagination Dots */}
      <style jsx global>{`
        .portfolio-pagination .swiper-pagination-bullet {
          background: #d1d5db !important; /* Light Grey for inactive */
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .portfolio-pagination .swiper-pagination-bullet-active {
          background: #8b0000 !important; /* Brand Red for active */
          width: 25px; /* Pill shape for the active dot */
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}