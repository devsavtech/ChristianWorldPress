"use client"

import { Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const events = [
  {
    id: 1,
    title: "Christian Publishing Summit 2024",
    date: "May 15-17, 2024",
    location: "Nashville, Tennessee",
    description:
      "Join industry leaders for discussions on trends, distribution, and future of Christian publishing.",
  },
  {
    id: 2,
    title: "Author Workshop: Crafting Your Message",
    date: "June 8, 2024",
    location: "Central/North Texas",
    description:
      "Learn how to effectively communicate your faith-based message through powerful Christian literature.",
  },
  {
    id: 3,
    title: "Bookstore Conference & Networking Event",
    date: "June 22-23, 2024",
    location: "Atlanta, Georgia",
    description:
      "Meet with Christian bookstore owners and explore partnership opportunities.",
  },
]

export function EventsSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Upcoming Events")

  return (
    <section ref={sectionRef} id="events" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/10 border-y border-border relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/img/Partner Store Section Prompt.jpg')`,
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
            Join us at industry-leading events where we gather together to discuss the latest trends, challenges, and innovations in Christian publishing. 
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {events.map((event) => (
            <Card
              key={event.id}
              className="
                group relative overflow-hidden
                bg-transparent
                border border-border/60
                transition-colors duration-500
                hover:border-accent/60
                active:border-accent/60
                touch-manipulation
              "
            >
              {/* Animated background fill */}
              <div
                className="
                  absolute inset-0
                  bg-card
                  scale-x-0
                  origin-left
                  transition-transform duration-700 ease-out
                  group-hover:scale-x-100
                  group-active:scale-x-100
                "
              />

              <CardContent className="relative z-10 p-4 sm:p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-5 md:gap-6">
                  
                  {/* Left Content */}
                  <div className="space-y-2 sm:space-y-3 flex-1">
                    <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground">
                      {event.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground pt-1 sm:pt-2">
                      {event.description}
                    </p>
                  </div>

                  {/* Button */}
                  {/* <Button
                    variant="outline"
                    className="
                      border-primary text-primary
                      bg-transparent
                      transition-all duration-300
                      group-hover:bg-primary
                      group-hover:text-primary-foreground
                      text-xs sm:text-sm
                      px-3 sm:px-4 md:px-6
                      py-2 sm:py-2.5
                      w-full md:w-auto
                      flex-shrink-0
                    "
                  >
                    LEARN MORE
                  </Button> */}

                  <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
