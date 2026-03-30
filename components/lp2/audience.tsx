import img3 from './audience/3.webp';
import img4 from './audience/4.webp';
import img5 from './audience/5.webp';
import img6 from './audience/6.webp';
import img7 from './audience/7.webp';
import google from './audience/google.png'; 
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useCountAnimation } from "@/hooks/useCountAnimation"
import { useRef } from "react"

export function Audience() {
    const sectionRef = useRef<HTMLElement>(null)
    const titlesCount = useCountAnimation(100, 2000, "+", sectionRef)
    const retailersCount = useCountAnimation(40000, 2500, "+", sectionRef)
    const countriesCount = useCountAnimation(220, 2000, "+", sectionRef)
  return (
    <section ref={sectionRef}  className="relative py-20 bg-white text-center overflow-hidden">
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
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-7 md:pt-8 border-t border-border/20 place-items-center">
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
        </div>
      </div>
    </section>
  );
}
