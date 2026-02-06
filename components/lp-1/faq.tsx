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
      question: "What is The Process Of Self Publishing?",
      answer: "Self-publishing involves several key steps: writing and editing your manuscript, formatting it for publication, designing a cover, obtaining an ISBN, uploading to publishing platforms (like Amazon KDP, IngramSpark), and marketing your book to readers."
    },
    {
      question: "Do You People Provide Book Marketing Services?",
      answer: "Yes, we offer comprehensive book marketing services including social media promotion, email campaigns, book launch strategies, Amazon advertising, book reviews, and influencer outreach to help your book reach its target audience."
    },
    {
      question: "Do I Need Different Barcodes For EBook And Print Binding Books?",
      answer: "eBooks don't require barcodes, but print books do need ISBN barcodes on the back cover. Each format (hardcover, paperback) needs its own unique ISBN, though you can use the same base ISBN family for your book."
    },
    {
      question: "Will My Data Be Safe And Confidential?",
      answer: "Absolutely. We take data privacy seriously and implement industry-standard security measures. Your manuscript, personal information, and payment details are encrypted and stored securely. We never share your data with third parties without your consent."
    },
    {
      question: "How Much Time Will It Take To Publish My Book?",
      answer: "The timeline varies based on your book's readiness. If your manuscript is polished, formatting and uploading can take 1-2 weeks. Including editing, cover design, and ISBN registration, the full process typically takes 4-8 weeks from start to publication."
    },
    {
      question: "What Are The Basics Of Designing A Book Cover?",
      answer: "A great book cover needs: a compelling central image, clear readable title and author name, appropriate genre styling, professional typography, correct dimensions for your format, and both front cover and spine design for print books. It should grab attention and communicate your book's essence instantly."
    },
    {
      question: "How Can I Get An ISBN?",
      answer: "You can purchase ISBNs from your country's official ISBN agency (Bowker in the US, Nielsen in UK). Alternatively, platforms like Amazon KDP offer free ISBNs, though you'll be listed as the publisher. Buying your own ISBN gives you full publishing rights and ownership."
    },
    {
      question: "Where Will My Book Be Available For Purchase?",
      answer: "Your book can be distributed to major retailers including Amazon, Barnes & Noble, Apple Books, Google Play Books, Kobo, and many independent bookstores. We can help you choose the right distribution channels based on your goals and target audience."
    },
    {
      question: "Can I Self Publish A Book For Free?",
      answer: "Yes, you can self-publish for free using platforms like Amazon KDP, Draft2Digital, or Smashwords. However, investing in professional editing, cover design, and formatting significantly improves your book's quality and sales potential."
    },
    {
      question: "Can I Self Publish Graphic Novels?",
      answer: "Absolutely! Graphic novels and comics can be self-published through platforms like Amazon KDP, ComiXology, and specialized comic publishers. Ensure your files are high-resolution, properly formatted, and meet the platform's specifications for the best results."
    },
    {
      question: "Is Having An Author's Website A Vital Decision?",
      answer: "Yes, an author website is crucial for building your brand, connecting with readers, showcasing your books, collecting email subscribers, and establishing credibility. It serves as your home base on the internet and gives you control over your online presence."
    },
    {
      question: "What is A Book's Video Trailer?",
      answer: "A book trailer is a short promotional video (30-90 seconds) that creates excitement about your book, similar to a movie trailer. It uses visuals, music, and text to convey your book's theme, genre, and hook, helping to attract readers on social media and websites."
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