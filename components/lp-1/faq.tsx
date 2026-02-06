'use client';

import { useState, useEffect, useRef } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [animatedText, setAnimatedText] = useState('');
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const fullText = "Frequently Asked Questions";

  // Intersection Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Text typing animation effect - only runs when in viewport
  useEffect(() => {
    if (!shouldAnimate) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setAnimatedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust speed here (lower = faster)

    return () => clearInterval(timer);
  }, [shouldAnimate]);

  const faqs = [
    {
      question: "What is Christian World Press?",
      answer: "Christian World Press is a faith-centered publishing and distribution platform that helps Christian authors publish and share their books with readers around the world."
    },
    {
      question: "Who can publish with Christian World Press?",
      answer: "We primarily work with Christian authors, pastors, ministry leaders, and faith-based writers who want to share messages rooted in biblical values and spiritual growth."
    },
    {
      question: "What services does Christian World Press offer?",
      answer: "Our services may include editing, formatting, cover design, publishing support, marketing, and global distribution to help authors bring their books to readers effectively."
    },
    {
      question: "Do I keep the rights to my book?",
      answer: "Yes. Authors generally retain the rights to their work while Christian World Press assists with publishing and distribution."
    },
    {
      question: "Will my book be available worldwide?",
      answer: "Christian World Press aims to provide global distribution, making books available through online retailers, bookstores, and libraries where possible."
    },
    {
      question: "Do you work with first-time authors?",
      answer: "Absolutely. Many of our authors are publishing their first book, and we guide them step by step through the process."
    },
    {
      question: "How do I get started?",
      answer: "You can get started by contacting Christian World Press through the website and sharing details about your manuscript or publishing goals."
    }
  ];

  const toggleFAQ = (index: number) => {
    // If the clicked FAQ is already open, close it; otherwise, open it (and close any others)
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section ref={sectionRef} id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          {/* Animated text version - only shows when animation should run */}
          {shouldAnimate && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em] text-center">
              {animatedText}
              <span className="animate-pulse">|</span>
            </h2>
          )}
          
          {/* Fallback static text for when not animating */}
          {!shouldAnimate && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em] text-center">
              Frequently <span className="text-accent">Asked Questions</span>
            </h2>
          )}
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border rounded-lg transition duration-500 overflow-hidden ${
                openIndex === index ? 'bg-background border-accent' : 'bg-background border-border'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="inline-flex items-center justify-between text-left w-full transition duration-500 hover:text-accent p-6"
              >
                <h5 className="text-foreground font-medium">{faq.question}</h5>
                <div className="flex items-center">
                  <svg
                    className={`w-5 h-5 text-foreground transition duration-500 ${
                      openIndex === index ? 'hidden' : 'block'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    className={`w-5 h-5 text-foreground transition duration-500 ${
                      openIndex === index ? 'block' : 'hidden'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </button>
              
              <div
                className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <div className="px-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && faqs.length > 5 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-[#8b0000] text-white rounded font-medium hover:bg-[#8b0000]/90 transition-colors flex items-center gap-2 cursor-pointer"
            >
              Show All FAQs
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7" 
                ></path>
              </svg>
            </button>
          </div>
        )}

        {showAll && faqs.length > 5 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-3 bg-[#8b0000] text-white rounded font-medium hover:bg-[#8b0000]/90 transition-colors flex items-center gap-2 cursor-pointer"
            >
              Show Less
              <svg 
                className="w-4 h-4 ml-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 15l7-7 7 7" 
                ></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;