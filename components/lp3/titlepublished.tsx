"use client"

import { useRef } from "react"
import { useCountAnimation } from "@/hooks/useCountAnimation"

export function TitlePublished() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Assuming your hook handles the suffix internally or you append it in the JSX
  const titlesCount = useCountAnimation(1000, 2000, "+", sectionRef)
  const retailersCount = useCountAnimation(1000, 2500, "+", sectionRef)
  const countriesCount = useCountAnimation(600, 2000, "+", sectionRef)

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[400px] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Dark Overlay Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/img/Our Books Section.jpg')`,
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center">
          
          {/* Titles Published */}
          <div className="flex-1 px-8 py-6 md:py-0">
            <div className="inline-block">
              <div className="text-4xl md:text-5xl font-bold text-[#E31E24] mb-2">
                {titlesCount.count}
              </div>
              <div className="w-8 h-[2px] bg-[#E31E24] mx-auto mb-4" />
              <p className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-white uppercase leading-relaxed">
               Distribution Partners
              </p>
            </div>
          </div>

          {/* Vertical Divider 1 */}
          <div className="hidden md:block w-[1px] h-24 bg-white/10" />

          {/* Retailers Reached */}
          <div className="flex-1 px-8 py-6 md:py-0">
            <div className="inline-block">
              <div className="text-4xl md:text-5xl font-bold text-[#E31E24] mb-2">
                {retailersCount.count.toLocaleString()}
              </div>
              <div className="w-8 h-[2px] bg-[#E31E24] mx-auto mb-4" />
              <p className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-white uppercase leading-relaxed">
              Published Books   
              </p>
            </div>
          </div>

          {/* Vertical Divider 2 */}
          <div className="hidden md:block w-[1px] h-24 bg-white/10" />

          {/* Global Countries */}
          <div className="flex-1 px-8 py-6 md:py-0">
            <div className="inline-block">
              <div className="text-4xl md:text-5xl font-bold text-[#E31E24] mb-2">
                {countriesCount.count}
              </div>
              <div className="w-8 h-[2px] bg-[#E31E24] mx-auto mb-4" />
              <p className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-white uppercase leading-relaxed">
                 Authors onboarded 
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}