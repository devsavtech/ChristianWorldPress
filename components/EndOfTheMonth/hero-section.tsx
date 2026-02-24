"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useCountAnimation } from "@/hooks/useCountAnimation"
import Link from "next/link"
import { Popup } from "./popup"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const titlesCount = useCountAnimation(100, 4000, "+", sectionRef)
  const retailersCount = useCountAnimation(40000, 4000, "+", sectionRef)
  const countriesCount = useCountAnimation(220, 4000, "+", sectionRef)

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 20, 16, 0.8), rgba(26, 20, 16, 0.6)), url('/img/Our Books Section.jpg')`,
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full">
        <div className="gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 text-center md:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight xl:w-9/12">
                End-of-Month Sale... <span className="text-red-500">28% Off</span> <br />All Author Promotion Services
              </h1>
              <p className="text-base sm:text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto md:mx-0">
                Your calling deserves visibility. Christian World Press features Christian authors who write with purpose and conviction. For a limited time, receive 28% off our author spotlight and promotional packages.
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-3 sm:gap-4">
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 flex items-center gap-1 cursor-pointer"
              >
                <span>Claim This Offer</span> <span className="text-xl sm:text-xl md:text-2xl">★</span>
              </button>
            </div>

            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-7 md:pt-8 border-t border-border/20">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{titlesCount.count}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Titles Published</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{retailersCount.count}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Retailers Reached</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{countriesCount.count}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* <div className="hidden md:block">
            <div className="relative h-96">
              <img
                src="/img/The Cover  Hero Section 2.png"
                alt="Christian Books"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
