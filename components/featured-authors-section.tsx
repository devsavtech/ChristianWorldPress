"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const authors = [
  {
    id: 1,
    name: "Dr. Samuel Lee",
    description: "Biblical scholar with 30 years of ministry experience",
    image: "/placeholder.svg?key=8uyny",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    description: "Speaker and author passionate about faith and discipleship",
    image: "/placeholder.svg?key=2mywd",
  },
  {
    id: 3,
    name: "James Thompson",
    description: "Theologian dedicated to contemporary Christian issues",
    image: "/placeholder.svg?key=qk87b",
  },
]

export function FeaturedAuthorsSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Featured Authors")

  return (
    <section ref={sectionRef} id="authors" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/20 border-y border-border relative overflow-hidden">
      {/* Background image with overlay */}
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
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Meet the voices behind our most impactful works
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {authors.map((author) => (
            <Card
              key={author.id}
              className="bg-card border-border overflow-hidden hover:border-accent/50 active:border-accent/50 transition-colors touch-manipulation"
            >
              <CardContent className="p-0">
                <div className="h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
                  <img
                    src={author.image || "/placeholder.svg"}
                    alt={author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 text-center space-y-2">
                  <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground">{author.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{author.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
