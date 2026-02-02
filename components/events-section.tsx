"use client";

import { Calendar, MapPin, Video, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Asheville Christian Writers Conference",
    date: "February 27 – March 1, 2026",
    location: "Blue Ridge Mountains, North Carolina",
    description:
      "A well-known gathering offering spiritual encouragement and publishing insight in a retreat-style setting.",
  },
  {
    id: 2,
    title: "Carolina Christian Writers Conference",
    date: "March 6–7, 2026",
    location: "Spartanburg, South Carolin",
    description:
      "An intimate conference focused on writing craft, spiritual growth, and meaningful connections between writers and industry professionals.",
  },
  {
    id: 3,
    title: "Blue Lake Christian Writers Retreat",
    date: "March 18–21, 2026",
    location: "Andalusia, Alabama",
    description:
      "A quiet, reflective retreat designed for writers seeking focused time, encouragement, and spiritual renewal.",
  },
  {
    id: 4,
    title: "Mid-South Christian Writers Conference",
    date: "March 20–21, 2026",
    location: "Collierville, Tennessee",
    description:
      "A practical, teaching-oriented conference that serves writers across genres with sessions led by experienced professionals.",
  },
  {
    id: 5,
    title: "Vision Christian Writers Conference",
    date: "March 27–31, 2026",
    location: "Felton, California",
    description:
      "A multi-day conference covering both creative and technical aspects of writing. Sessions range from storytelling fundamentals to advanced topics that spark imagination and depth.",
  },
  {
    id: 6,
    title: "European Christian Rights Fair",
    date: "March 16–17, 2026",
    location: "Krakow, Poland",
    description:
      "A focused international event centered on publishing, translation, and rights. Brings together Christian publishers, agents, and industry professionals for networking and rights discussions.",
  },
  {
    id: 7,
    title: "Write His Answer Conference",
    date: "June 17–20, 2026",
    virtualEvent: "Virtual Event",
    description:
      "An online conference focused on helping writers clearly communicate God's message with faith, integrity, and confidence.",
  },
  {
    id: 8,
    title: "Hans Christian Andersen Awards",
    date: "August 6–9, 2026",
    location: "Ottawa, Canada",
    description:
      "One of the most respected international honors in children’s literature, presented during the 40th IBBY World Congress. Celebrates lifelong contributions to writing and illustration for young readers.",
  },
  {
    id: 9,
    title: "British Christian Writers Conference",
    date: "September 4–5, 2026",
    location: "Collierville, Tennessee",
    description:
      "A UK-based conference bringing together Christian writers for teaching, encouragement, and community across the Atlantic.",
  },

  {
    id: 10,
    title: "Cascade Christian Writers Spring Conference",
    date: "2026 – Virtual Event",
    description:
      "A virtual gathering bringing together writers, editors, and agents for education, encouragement, and industry insight. Accessible learning designed to support writers wherever they are.",
  },
  {
    id: 11,
    title: "Blue Ridge Mountains Christian Writers Conference",
    date: "2026",
    location: "Blue Ridge Mountains",
    description:
      "A well-established conference offering in-depth workshops on writing, publishing, and ministry-focused communication. Includes sessions on writing for Christian organizations and outreach platforms.",
  },
  {
    id: 12,
    title: "Reedsy Writing Contests",
    date: "2026",
    virtualEvent: "Various Locations / Online",
    description:
      "A series of themed monthly writing contests offering Christian writers opportunities to practice craft, gain visibility, and receive professional feedback throughout the year.",
  },
];

export function EventsSection() {
  const { displayedText, isTyping, sectionRef } =
    useTypingAnimation("Upcoming Events");
  const [showAllEvents, setShowAllEvents] = useState(false);

  const displayedEvents = showAllEvents ? events : events.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/10 border-y border-border relative overflow-hidden"
    >
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
            Join us at industry-leading gatherings where Christian writers,
            publishers, and ministry leaders come together to learn, connect,
            and grow. Throughout the year, we participate in conferences and
            virtual events that support authors at every stage of their calling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedEvents.map((event) => (
            <Card
              key={event.id}
              className="
                group relative overflow-hidden
                bg-transparent
                border-2 border-border
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
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    {/* Left Content */}
                    <div className="space-y-2 p-4 sm:space-y-3 min-h-[100px]">
                      <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground min-h-[2rem]">
                        {event.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground pt-1 sm:pt-2 max-w-[500px]">
                        {event.description}
                      </p>
                    </div>
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

                  <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground relative mt-auto">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border"></div>
                    <div className="flex items-start gap-2 pl-4 min-w-[180px]">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="break-words leading-tight flex-1">
                        {event.date}
                      </span>
                    </div>
                    {event.id !== 7 &&
                      event.id !== 10 &&
                      event.id !== 9 &&
                      event.id !== 11 &&
                      event.id !== 12 && (
                        <div className="flex items-start gap-2 pl-4 min-w-[180px]">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="break-words leading-tight flex-1">
                            {event.location}
                          </span>
                        </div>
                      )}
                    {event.virtualEvent && (
                      <div className="flex items-start gap-2 pl-4 min-w-[180px]">
                        <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="break-words leading-tight flex-1">
                          {event.virtualEvent}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {events.length > 6 && (
          <div className="w-full flex justify-center mt-8 sm:mt-10 md:mt-12">
            <Button
              onClick={() => setShowAllEvents(!showAllEvents)}
              variant="default"
              className="
                bg-[#7f0101] text-white
                border-[#7f0101]
                transition-all duration-300
                hover:bg-[#990101]
                hover:border-[#990101]
                text-sm sm:text-base
                px-6 sm:px-8
                py-2.5 sm:py-3
                flex items-center gap-2
              "
            >
              {showAllEvents ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less Events
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show More Events
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
