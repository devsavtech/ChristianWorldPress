"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import Image from "next/image";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import Client1 from "../public/clients/client1.jpg";
import Client2 from "../public/clients/client7.jpg";
import Client3 from "../public/clients/client3.jpg";
import Client4 from "../public/clients/client4.jpg";
import Client5 from "../public/clients/client5.jpg";
import Client6 from "../public/clients/client6.jpg";

const authors = [
  {
    id: 1,
    name: "Andre Weisbrod",
    image: Client6,
    link: "https://authorandre.com/",
  },
  {
    id: 2,
    name: "Robert Coleridge",
    image: Client2,
    link: "https://robertcoleridgeauthor.com/",
  },
  {
    id: 3,
    name: "Rebekah Davis",
    image: Client3,
    link: "https://www.amazon.com/stores/Rebekah-Davis/author/B08PTD72NF?ref=sr_ntt_srch_lnk_1&qid=1772122144&sr=1-1&shoppingPortalEnabled=true",
  },
  {
    id: 4,
    name: "Jimmy Evans",
    image: Client4,
    link: "https://www.amazon.com/stores/Jimmy-Evans/author/B001JSDIGK?ref=sr_ntt_srch_lnk_2&qid=1772122168&sr=1-2&shoppingPortalEnabled=true",
  },
  {
    id: 5,
    name: "Victoria Vossey",
    image: Client5,
    link: "https://www.amazon.com/stores/Victoria-Vossey/author/B0D31VYLWF?ref=sr_ntt_srch_lnk_1&qid=1772122186&sr=1-1&shoppingPortalEnabled=true",
  },
  {
    id: 6,
    name: "Joey Jaymes",
    image: Client1,
    link: "https://www.amazon.com/stores/Joey-Jaymes/author/B0DGG2NXH5?ref=sr_ntt_srch_lnk_1&qid=1772058581&sr=1-1&shoppingPortalEnabled=true",
  },
];

export function FeaturedAuthorsSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation(
    "Best Upcoming Authors"
  );

  return (
    <section
      ref={sectionRef}
      id="authors"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/20 border-y border-border relative overflow-hidden"
    >
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
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Meet the voices behind our most impactful works
          </p>
        </div>

        <div className="md:max-w-5xl mx-auto">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {authors.map((author) => (
              <a
                key={author.id}
                href={author.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] lg:w-[calc(16.666%-10px)] h-full"
              >
                <Card className="bg-card border-border pt-0! overflow-hidden hover:border-accent/50 active:border-accent/50 transition-colors touch-manipulation h-full cursor-pointer">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="overflow-hidden bg-muted aspect-square shrink-0">
                      <Image
                        src={author.image}
                        alt={author.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-2 sm:p-4 text-center flex-1 flex items-center justify-center min-h-[60px]">
                      <h3 className="font-serif font-bold text-[12px] sm:text-sm lg:text-base text-foreground leading-tight">
                        {author.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
