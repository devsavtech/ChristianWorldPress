"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useCountAnimation } from "@/hooks/useCountAnimation"
import Link from "next/link"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titlesCount = useCountAnimation(100, 2000, "+", sectionRef)
  const retailersCount = useCountAnimation(40000, 2500, "+", sectionRef)
  const countriesCount = useCountAnimation(220, 2000, "+", sectionRef)

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
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
                Spread the Gospels Worldwide Through Reliable Christian Publishing
              </h1>
              <p className="text-base sm:text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto md:mx-0">
                Christian World Press is passionate about creating books that strengthen your faith. Our goal is to provide resources that help you grow spiritually and live out your faith with purpose. Each title we publish is a tool to help you on your faith journey.
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-3 sm:gap-4">
              <Link href="/#books" className="btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
                EXPLORE OUR BOOKS
              </Link>
            </div>

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
