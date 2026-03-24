"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

// npm install lucide-react (already installed)

const faqs = [
  {
    question: "Are you a traditional publisher or a self-publishing support team?",
    answer:
      "Christian World Press works with independent Christian authors to help them publish and promote their books. You maintain control of your work while we guide you through the process.",
    category: "General",
  },
  {
    question: "Do you work with first-time Christian authors?",
    answer:
      "Yes. Many of the authors we work with are publishing for the first time. We provide simple, step-by-step guidance to make the process clear and manageable.",
    category: "General",
  },
  {
    question: "Will I keep full rights to my book?",
    answer:
      "Yes. You retain full ownership and rights to your book. Our role is to support you in publishing and sharing your message.",
    category: "Rights",
  },
  {
    question: "How long does the publishing process take?",
    answer:
      "Timelines vary depending on the stage of your manuscript and the services you need, but most projects are completed within a few weeks to a few months.",
    category: "Process",
  },
  {
    question: "Can you help if my manuscript isn't finished yet?",
    answer:
      "Absolutely. Whether you have a rough draft or just an idea, we can help you organize and prepare your content for publication.",
    category: "Process",
  },
  {
    question: "Will my book be available on major platforms?",
    answer:
      "Yes. We help prepare your book for distribution across major online platforms so it can reach readers worldwide.",
    category: "Distribution",
  },
  {
    question: "What types of Christian books do you work with?",
    answer:
      "We work with a wide range of faith-based books including devotionals, testimonies, Christian living, teaching materials, and inspirational works.",
    category: "General",
  },
  {
    question: "Do you offer marketing or promotion services?",
    answer:
      "Yes. We offer promotional support to help increase visibility and connect your book with the right audience.",
    category: "Marketing",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply fill out the consultation form, and our team will guide you through the next steps based on your goals.",
    category: "Process",
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`group border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#8b0000] shadow-lg shadow-[#8b0000]/10"
          : "border-gray-200 hover:border-[#8b0000]/40 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #8b0000 0%, #6b0000 100%)"
            : "white",
        }}
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
            isOpen
              ? "bg-white/20 text-white"
              : "bg-[#8b0000]/10 text-[#8b0000] group-hover:bg-[#8b0000]/20"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className={`flex-1 font-semibold text-sm md:text-base leading-snug transition-colors duration-200 ${
            isOpen ? "text-white" : "text-gray-800"
          }`}
        >
          {faq.question}
        </span>

        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-white/20 text-white rotate-0"
              : "bg-gray-100 text-gray-500 group-hover:bg-[#8b0000]/10 group-hover:text-[#8b0000]"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      {/* Answer panel */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "300px" : "0px" }}
      >
        <div className="px-6 py-5 bg-white border-t border-gray-100">
          <div className="flex gap-4">
            {/* Accent line */}
            <div className="w-0.5 bg-[#8b0000]/20 rounded-full flex-shrink-0" />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation(
    "Frequently Asked Questions"
  );
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Split into two columns
  const col1 = faqs.slice(0, Math.ceil(faqs.length / 2));
  const col2 = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: "#8b0000", filter: "blur(80px)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
        style={{ background: "#8b0000", filter: "blur(60px)", transform: "translate(-30%, 30%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            {displayedText || " "}
            {isTyping && (
              <span className="text-[#8b0000] animate-pulse">|</span>
            )}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Have questions about publishing your book? Here are clear answers to
            help you move forward with confidence.
          </p>

          {/* Stats row */}
        </div>

        {/* Two-column FAQ grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {col1.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {col2.map((faq, i) => {
              const globalIndex = i + col1.length;
              return (
                <FAQItem
                  key={globalIndex}
                  faq={faq}
                  index={globalIndex}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA
        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-sm">
            <p className="text-gray-600 text-sm mb-4">
              Still have questions? We're here to help.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-[#8b0000] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#6b0000] active:scale-95 transition-all duration-200"
            >
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}