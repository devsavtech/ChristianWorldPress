import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { Button } from "../ui/button";
import { Popup } from "@/components/lp-1/popup";
import { useState } from "react";
import { ClassicButton } from "../ui/classicbutton";
import { BookOpen, MessageCircle } from "lucide-react";

export function Process() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const toggleLiveChat = () => {
    if (typeof window !== "undefined" && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call("maximize");
    }
  };
  const { displayedText, isTyping, sectionRef } = useTypingAnimation(
    "Simple Steps to Publish Your Book ",
  );
  const steps = [
    {
      number: "01",
      title: "Idea & Manuscript Review",
      description:
        "We start by understanding your message, your goals, and where you are in the writing process.",
    },
    {
      number: "02",
      title: "Planning & Direction",
      description:
        "Together, we outline a clear publishing plan according to your book.",
    },
    {
      number: "03",
      title: "Editing & Design",
      description:
        "We edit your manuscript while preserving your voice and design your book cover and interior layout.",
    },
    {
      number: "04",
      title: "Production & Pre-Launch",
      description:
        "Your book is prepared for publication across major platforms. This includes setup and technical details.",
    },
    {
      number: "05",
      title: "Launch & Post-Launch",
      description:
        "Your book is released and made available to readers. We continue to support you with guidance and visibility.",
    },
    {
      number: "06",
      title: "Marketing & Growth",
      description:
        "We help you promote your book through targeted marketing strategies, audience building, and ongoing optimization to increase visibility, sales, and long-term success.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">
          {/* {displayedText || " "}
          {isTyping && <span className="animate-pulse">|</span>} */}
          Simple Steps to Publish Your Book
        </h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          From your first idea to a published book, we walk with you every step
          of the way.
        </p>

        {/* Winding Road Visualization (Simplified with CSS) */}
        <div className="relative">
          {/* Dashed line connecting steps (hidden on mobile, visible on lg) */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg flex flex-col items-center text-center transition-transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-[#8b0000] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-black mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <ClassicButton
              onClick={toggleLiveChat}
              icon={MessageCircle}
              variant="outline"
              className="chat_button "
            >
              Live Chat
            </ClassicButton>
            <ClassicButton
              variant="primary"
              icon={BookOpen}
              onClick={() => setIsPopupOpen(true)}
              className="popup_button"
            >
              Publish Your Book
            </ClassicButton>
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
