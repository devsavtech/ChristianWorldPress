"use client"

import { Truck, Handshake, Globe } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const methods = [
  {
    id: 1,
    title: "Ingram Content Network",
    description:
      "Through our partnership with Ingram, we distribute your books to major retailers, libraries, and online platforms globally.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Direct Partnerships",
    description:
      "We work directly with Christian bookstores, ministries, and organizations to distribute our books effectively.",
    icon: Handshake,
  },
  {
    id: 3,
    title: "Global Distribution",
    description:
      "Our global network spans over 220 countries, ensuring that Christian literature is delivered to readers around the world with efficiency and care.",
    icon: Globe,
  },
]

export function DistributionSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Distribution Methods")

  return (
    <section ref={sectionRef} id="distribution" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('/img/Distribution & Global Reach Section.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 text-center min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {methods.map((method) => {
            const IconComponent = method.icon

            return (
              <Card
                key={method.id}
                className="
                  group relative overflow-hidden
                  bg-card/70
                  border border-border/60
                  transition-colors duration-500
                  hover:border-accent/60
                  active:border-accent/60
                  touch-manipulation
                "
              >
                {/* Hover Fill Layer - Red */}
                <div
                  className="
                    absolute inset-0
                    bg-[#8b0000]
                    scale-0
                    origin-top-right
                    transition-transform duration-700 ease-out
                    group-hover:scale-100
                    group-active:scale-100
                    rounded-lg
                  "
                />

                {/* Card Content */}
                <div className="relative z-10">
                  <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 bg-primary/10 rounded transition-colors group-hover:bg-white/20 group-active:bg-white/20">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary transition-colors group-hover:text-white group-active:text-white" />
                      </div>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground transition-colors group-hover:text-white group-active:text-white">
                      {method.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed transition-colors group-hover:text-white/90 group-active:text-white/90">
                      {method.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
