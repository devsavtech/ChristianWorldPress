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
    }, 50); // Adjust speed here (lower = faster)

    return () => clearInterval(timer);
  }, [shouldAnimate]);

  const faqs = [
    {
      question: "What is the process of Self Publishing?",
      answer: "The process of self publishing a book is simple. You need to create an account, sign into the account, choose your plan, get in touch with the team, communicate your specifications, wait for the customized layout, and start working as soon as you get the layout."
    },
    {
      question: "Do you people provide book marketing services?",
      answer: "Yes, our team of professional marketers is always ready to provide the top marketing services for people. We provide you with a proper plan, which covers the execution and expected results at the end of the campaign."
    },
    {
      question: "Will my data be safe and confidential?",
      answer: "Our customer’s safety is our top priority. Once you close the deal with us, your work becomes our work, and we keep our things very private. Confidentiality of your content is one thing that you will never have to worry about while working with KDP."
    },
    {
      question: "How much time will it take to publish my book?",
      answer: "The average time for book completion is almost 2 months, but it is when all other things from both parties are kept constant. Team Haymarket ensures time management, and if you acquire to complete your project earlier than 2 months, then the plan can be customized and adjusted accordingly"
    },
    {
      question: "How much time will it take to publish my book?",
      answer: "The average time for book completion is almost 2 months, but it is when all other things from both parties are kept constant. Team Haymarket ensures time management, and if you acquire to complete your project earlier than 2 months, then the plan can be customized and adjusted accordingly."
    },
    {
      question: "What are the basics of designing a book cover?",
      answer: "The outlook must always be relevant to the content. If a novel is a romantic comedy, the cover must have a calming vibe. If the novel has a dark romance, the cover must be subtly spicy. Similarly, if the novel is a recipe book, the cover must be of food. The cover of a book must not only be good enough to grab attention, but also it should be relevant to the content in the book."
    },
    {
      question: "Do I need different barcodes for eBook and print binding books?",
      answer: "Yes, you need to have a separate barcode for hardcover books and Paperback books, as both formats are completely different. As far as eBook is concerned, you do not need to have a barcode for that."
    },
    {
      question: "Is having an Author’s Website a vital decision?",
      answer: "Yes, having an author website is a very beneficial aspect of one’s career as an author. There are times when readers/viewers require credibility, and that is when the author’s website and social media presence play a role. To have a vital increase in reach, it is important to think like the audience."
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
              {animatedText}
              <span className="animate-pulse">|</span>
            </h2>
          )}
          
          {/* Fallback static text for when not animating */}
          {!shouldAnimate && (
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif">
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