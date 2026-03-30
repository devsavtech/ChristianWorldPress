"use client";

import Image from "next/image";

export function Partners() {
  const logos = [
    { src: "/lp3/image8.webp", alt: "Amazon Kindle" },
    { src: "/lp3/image9.webp", alt: "Barnes & Noble" },
    { src: "/lp3/image10.webp", alt: "Google Play Books" },
    { src: "/lp3/image11.webp", alt: "Apple Books" },
    { src: "/lp3/image12.webp", alt: "Bunindie" },
  ];

  // repeat logos 2x for seamless loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-white py-8 px-4 flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 mx-auto">
        
        {/* LEFT TEXT */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto md:min-w-[200px] shrink-0">
          <span className="text-2xl md:text-3xl font-extrabold leading-tight text-black text-center md:text-right">
            BOOK <span className="text-[#8B0000]">PUBLISHING</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>PARTNERS
          </span>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block h-16 w-1 bg-gradient-to-b from-[#8B0000] to-[#8B0000]/60 rounded-full" />

        {/* LOGO MARQUEE */}
        <div className="flex overflow-hidden w-full relative">
          <div className="flex animate-marquee">
            {repeatedLogos.map((logo, i) => (
              <div key={i} className="shrink-0 px-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={50}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
      .animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
      `}</style>
    </section>
  );
}