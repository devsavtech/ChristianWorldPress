import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Are you a traditional publisher or a self-publishing support team?",
      answer: "We support independent authors through the publishing process. You retain control of your book and we guide you throughout. Stay with us for more help."
    },
    {
      question: "Do you work with first-time authors?",
      answer: "Yes, we welcome authors at all stages of their career, including first-time writers who need guidance."
    },
    {
      question: "Will I keep full rights to my book?",
      answer: "Absolutely. You retain 100% of your copyright and all royalties."
    },
    {
      question: "How long does the publishing process take?",
      answer: "It typically depends on the services required, but on average, the process takes a few months from manuscript to publication."
    },
    {
      question: "Can you help if my manuscript isn't finished yet?",
      answer: "Yes, we offer editing and developmental services to help you bring your manuscript to completion."
    },
    {
      question: "Will my book be available on major platforms?",
      answer: "Yes, we ensure distribution to major retailers including Amazon, Barnes & Noble, Apple Books, and more."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a publishing process with questions on self-publishing. We're sure clear answers to help you understand what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="mb-4 bg-[#8b0000] text-white border-none rounded-md overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white text-gray-700 border border-gray-200 rounded-b-md">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center items-center">
            <img 
              src="/stack-of-old-christian-books-leather-bound.jpg" 
              alt="Stack of Christian Books" 
              loading="lazy"
              className="w-full max-w-md rounded-lg shadow-xl object-cover h-[500px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
