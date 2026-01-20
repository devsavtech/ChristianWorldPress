"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images 
import Client1 from "../public/clients/client1.jpg"
import Client2 from "../public/clients/client2.jpg"
import Client3 from "../public/clients/client3.png"
import Client4 from "../public/clients/client4.png"
import Client5 from "../public/clients/client5.jpg"
import Image from "next/image";


const authors = [
  {
    id: 1,
    name: "Joey Jaymes",
    image: Client1,
  },
  {
    id: 3,
    name: "Greg Pai",
    image: Client3,
  },
  {
    id: 2,
    name: "Rebekah Davis",
    image: Client4,
  },
  {
    id: 3,
    name: "Jimmy Evans",
    image: Client5,
  },
]

export function FeaturedAuthorsSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Featured Authors")

  // Slider 
  const featuredSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          {/* <Slider {...featuredSlider}> */}
            {authors.map((author) => (
                <Card
                  key={author.id}
                  className="bg-card border-border !pt-0 overflow-hidden hover:border-accent/50 active:border-accent/50 transition-colors touch-manipulation"
                >
                  <CardContent className="p-0">
                    <div className="h-120 xl:h-60 overflow-hidden bg-muted">
                      <Image
                        src={author.image}
                        alt={author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-4 !pb-0 text-center space-y-2">
                      <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground">{author.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{author.description}</p>
                    </div>
                  </CardContent>
                </Card>
            ))}
          {/* </Slider> */}
        </div>
      </div>
    </section>
  )
}
