import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useState } from "react";
import { Form } from "./form";

export function Experience() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation(
    "Ready to Share Your Message as a Christian Author?"
  );
  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {/* {displayedText || " "}
              {isTyping && <span className="animate-pulse">|</span>} */}
              Ready to Share Your Message as a Christian Author?
            </h2>
            <p className="text-lg text-gray-300 mx-auto lg:mx-0 max-w-2xl">
              Your book has the power to encourage, inspire, and reach lives. Let Christian World
              Press help you take the next step with clear guidance and a simple publishing process.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md w-full mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0">
            <Form />
          </div>

        </div>
      </div>
    </section>
  );
}