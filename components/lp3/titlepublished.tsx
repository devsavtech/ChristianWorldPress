"use client";

import { useRef } from "react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { motion, useScroll, useTransform } from "framer-motion";

export function TitlePublished() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax Effect for Background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const titlesCount = useCountAnimation(6000, 2000, "+", sectionRef);
  const retailersCount = useCountAnimation(1000, 2500, "+", sectionRef);
  const countriesCount = useCountAnimation(600, 2000, "+", sectionRef);

  const stats = [
    { label: "Books Sold", value: titlesCount.count },
    { label: "Published Books", value: retailersCount.count.toLocaleString() },
    { label: "Authors Onboarded", value: countriesCount.count },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200px] flex items-center justify-center overflow-hidden bg-black py-16"
    >
      {/* Parallax Background Layer */}
      <motion.div
        style={{ 
            y,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('/img/Our Books Section.jpg')` 
        }}
        className="absolute inset-0 bg-cover bg-center scale-110"
      />

      {/* Animated Floating Particles (Subtle) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bg-white rounded-full blur-xl"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center justify-center text-center">
          
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative flex flex-col items-center group"
            >
              {/* Number with Pulse Glow */}
              <div className="relative">
                <div className="text-5xl md:text-5xl font-black text-[#E31E24] mb-3 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                {/* Hidden glow that appears on hover/active */}
                <div className="absolute inset-0 bg-[#E31E24] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* Animated Divider */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "2rem" }}
                transition={{ delay: 0.5 + idx * 0.2, duration: 0.8 }}
                className="h-[3px] bg-[#E31E24] mb-5 shadow-[0_0_10px_rgba(227,30,36,0.5)]" 
              />

              <p className="text-[11px] md:text-xs tracking-[0.3em] font-bold text-white/90 uppercase leading-relaxed transition-colors group-hover:text-white">
                {stat.label}
              </p>

              {/* Vertical Divider Logic for Desktop */}
              {idx < 2 && (
                <div className="hidden md:block absolute -right-[1px] top-1/2 -translate-y-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}