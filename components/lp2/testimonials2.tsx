import Image from "next/image";
import { useState } from "react";

export default function Testimonials2() {
  return (
       <section className="w-full bg-white flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden py-15">
        <h2 className="text-3xl md:text-4xl  lg:text-[2.6rem] text-black font-extrabold text-center mb-4">
          OVER <span className="text-[#8B0000]">1,000 BOOKS</span> PUBLISHED
          WORLDWIDE
        </h2>
        <p className="max-w-3xl text-center text-lg text-gray-700 mb-10">
          With a proven track record of publishing over 1,000 books across
          various platforms, our dedication to quality and success is clear.
          Discover what our clients have to say and see how our collaborative
          approach has helped bring countless stories to life.
        </p>
        <TestimonialSlider />
      </section>
      
  );
}
function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const testimonials = [
   
    {
      name: "Shannon L Carter",
      role: "Book Author",
      quote: "They took my rough manuscript and turned it into something truly professional. I couldn't be happier with the result.",
      images: ["/lp3/book_2.webp", "/lp3/image14.webp"],
    },
    {
      name: "Mark Cabrera",
      role: "Book Author",
      quote: "The editing and formatting made a huge difference. My book feels polished and ready for readers.",
      images: ["/lp3/book_3.webp", "/lp3/image14.webp"],
    },
    {
      name: "Susan Merson",
      role: "Book Author",
      quote: "I am incredibly grateful with the support and guidance of Christian World Press. My book turned out to be a success and I am very happy with the results.",
      images: ["/lp3/book_4.webp", "/lp3/image14.webp"],
    },
    { 
      name: "Ed White",
      role: "Book Author",
      quote: "The entire publishing process felt organized and straightforward. My book turned out exactly how I hoped.",
      images: ["/lp3/book_5.png", "/lp3/image123.webp"],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-8 relative">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full shrink-0 flex flex-col md:flex-row items-center justify-center gap-12 px-4"
            >
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
              <div className="flex-1 flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
                <div className="flex flex-col items-center gap-3 w-full max-w-auto">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={t.images[0]}
                      alt="Book 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col items-center gap-3 w-full max-w-[240px]">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={t.images[1]}
                      alt="Book 2"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === i
                ? "w-10 bg-[#8B0000]"
                : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}