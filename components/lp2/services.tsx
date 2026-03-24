import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Popup } from "@/components/lp-1/popup";

const services = [
  {
    title: "Book Writing",
    description:
      "Have an idea or message but not sure how to structure it? We help Christian authors organize their thoughts into manuscripts ready for publication.",
    image: "/lp2/BookWriting.webp",
  },
  {
    title: "Book Editing & Proofreading",
    description:
      "We refine your manuscript while preserving your voice. Our editing process focuses on clarity, flow, grammar, and structure so your message is communicated effectively.",
    image: "/lp2/BookEditing.webp",
  },
  {
    title: "Book Cover Design",
    description:
      "Your cover is the first impression. We create designs that reflect your message, resonate with your audience, and stand out across digital and print platforms.",
    image: "/lp2/BookCover.webp",
  },
  {
    title: "Book Illustrations",
    description:
      "Add depth and visual storytelling to your book. Ideal for children’s books, devotionals, and faith-based content that benefits from engaging visuals.",
    image: "/lp2/BookIllustrations.webp",
  },
  {
    title: "Book Publishing",
    description:
      "We guide you through the final steps of turning your manuscript into a published book. From formatting to platform setup, we prepare your book for global availability.",
    image: "/lp2/BookPublishing.webp",
  },
  {
    title: "Book Printing",
    description:
      "For authors who want physical copies, we ensure your book is print-ready with proper formatting, layout, and professional-quality production.",
    image: "/lp2/BookPrinting.webp",
  },
];

export function Services() {
  const [showAllServices, showPopupsetShowAllServices] = useState(false);
  const displayServices = showAllServices ? services : services.slice(0, 6);
  const [showPopup, setShowPopup] = useState(false);
  const toggleLiveChat = () => {
    if (typeof window !== 'undefined' && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call('maximize');
    }
  };
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8b0000] mb-6">
          Everything You Need to Publish as a Christian Author
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto mb-16">
          Christian World Press supports Christian authors at every stage of
          their publishing journey. We understand that every message is unique,
          and your book deserves more than a one-size-fits-all approach. Our
          goal is to help you publish while maintaining the integrity of your
          message and full ownership of your work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-16">
          {displayServices.map((service) => (
            <div className="bg-white rounded-xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-shadow duration-300 relative mt-12 flex flex-col items-start text-left">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-xl hover:-translate-y-2 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-[#8b0000] font-bold  mt-12 mb-4 w-full">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <button className="mt-auto w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#8b0000] hover:text-white hover:border-[#8b0000] transition-colors self-end group">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
        {services.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button
              className="rounded-full w-12 h-12 flex items-center justify-center p-0 border border-gray-300 text--white  transition-all duration-300"
              onClick={() => setShowAllServices(!showAllServices)}
            >
              {showAllServices ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </Button>
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Button 
            onClick={toggleLiveChat}
            variant="outline"
            className="text-black border-black hover:bg-black hover:text-white rounded-sm uppercase font-semibold px-8 py-4"
          >
            Live Chat
          </Button>
          <Button 
            onClick={() => setShowPopup(true)}
            className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold px-8 py-4">
            Get A Quote
          </Button>
        </div>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </section>
  );
}
