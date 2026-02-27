"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import FlipBook from "./3d-flip-book";
import Client2 from "../public/clients/client7.jpg";
import Client6 from "../public/clients/client6.jpg";
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

const upcomingAuthors = [
  {
    id: 1,
    name: "Andre Weisbrod",
    image: Client6,
    bookTitle: "Helping my UnBlief",
    bookContent: [],
    coverImage: "/bookcoverofclients/andre.jpg",
    pageImages: [
      "/bookandre/page1.png",
      "/bookandre/page2.png",
      "/bookandre/page3.png",
    ],
  },
  {
    id: 2,
    name: "Robert Coleridge",
    image: Client2,
    bookTitle: "Solo Scripture",
    bookContent: [],
    coverImage: "/bookcoverofclients/robert.jpg",
    pageImages: [
      "/bookrobert/page1.png",
      "/bookrobert/page2.png",
      "/bookrobert/page3.png",
      "/bookrobert/page4.png",
    ],
  },
];

export function UpcomingBestSettlers() {
  const [selectedAuthor, setSelectedAuthor] = useState<
    (typeof upcomingAuthors)[0] | null
  >(null);
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Upcoming Best Sellers");

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-card/20 border-y border-border relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/img/Distribution & Global Reach Section.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: "10px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {upcomingAuthors.map((author) => (
            <Card
              key={author.id}
              className="bg-card border-border overflow-hidden hover:border-accent/50 transition-colors h-full w-full max-w-[280px] p-0"
            >
              <CardContent className="p-0">
                <div className="overflow-hidden bg-muted aspect-[4/3]">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={280}
                    height={210}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-foreground mb-2">
                    {author.name}
                  </h3>
                  <p className="text-lg sm:text-base text-muted-foreground mb-3">
                    {author.bookTitle}
                  </p>
                  <button
                    className="px-4 py-1.5 text-xs text-white rounded transition-colors cursor-pointer"
                    style={{ backgroundColor: "#8b0000" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#6d0000"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#8b0000"}
                    onClick={() => {
                      if (selectedAuthor?.id === author.id) {
                        setSelectedAuthor(null);
                      } else {
                        setSelectedAuthor(author);
                      }
                    }}
                  >
                    {selectedAuthor?.id === author.id ? "Close Book" : "Preview Book"}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedAuthor && (
          <div className="mt-8 flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold mb-4">
              {selectedAuthor.bookTitle}
            </h3>
            <FlipBook
              title={selectedAuthor.bookTitle}
              content={selectedAuthor.bookContent}
              coverImage={selectedAuthor.coverImage}
              pageImages={selectedAuthor.pageImages}
              authorName={selectedAuthor.name}
              onClose={() => setSelectedAuthor(null)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
