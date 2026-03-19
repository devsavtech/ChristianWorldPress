import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Book Writing",
    description:
      "Many authors have powerful ideas but need help organizing them into a structured manuscript. Our team assists authors in developing their content and preparing manuscripts that are ready for the next stages of editing and publishing.",
    image: "/lp-2/Book Writing.webp",
  },
  {
    title: "Book Editing & Proofreading",
    description:
      "Editing is an essential step before publishing. Our editors review manuscripts carefully to improve clarity, grammar, and structure while maintaining the author's voice and message.",
    image: "/lp-2/Book Editing & Proofreading.webp",
  },
  {
    title: "Book Cover Design",
    description:
      "Your book cover is often the first thing readers notice. Our design team creates professional covers that represent your book's theme and genre while helping it stand out across digital and print platforms.",
    image: "/lp-2/Book Cover Design.webp",
  },
  {
    title: "Book Illustrations",
    description:
      "Illustrations can add depth and visual appeal to a book. Our illustration services support children's books, graphic narratives, educational material, and other projects that benefit from visual storytelling.",
    image: "/lp-2/Book Illustrations.webp",
  },
  {
    title: "Book Publishing",
    description:
      "Our publishing specialists guide authors through the final steps of preparing their manuscripts for publication. We assist with formatting, platform submission, and ensuring that books are ready for digital and print distribution.",
    image: "/lp-2/Book Publishing.webp",
  },
  {
    title: "Book Printing",
    description:
      "For authors who want printed copies of their work, we help prepare books for professional printing. This includes ensuring that formatting, layout, and print specifications meet industry standards.",
    image: "/lp-2/Book Printing.webp",
  },
  {
    title: "Book Marketing",
    description:
      "Publishing is only part of the journey. Our marketing services help authors promote their books through strategies designed to increase visibility and connect books with potential readers.",
    image: "/lp-2/Book Marketing.webp",
  },
  {
    title: "Author Website",
    description:
      "An author website helps build your professional presence and gives readers a place to learn about your books. We assist authors in creating websites that showcase their work and strengthen their author brand.",
    image: "/lp-2/Author Website.webp",
  },
  {
    title: "Video Trailer",
    description:
      "Bring your story to life with a professionally created book trailer. Our team designs engaging video trailers that highlight your book's theme, tone, and key message to capture attention.",
    image: "/lp-2/Video Trailer.webp",
  },
];

export function Services() {
  const [showAllServices, setShowAllServices] = useState(false);
  const displayServices = showAllServices ? services : services.slice(0, 6);
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8b0000] mb-6">
          Comprehensive Publishing Services from a Trusted Book Publishing
          Company
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto mb-16">
          Kinetic Digital Publishers supports authors at every stage of their
          publishing journey. As experienced book publishers, we understand that
          every book is different. That's why we don't rely on shortcuts or
          templates. We manage the details and give you full ownership of your
          work. Our services help independent authors who want professional
          results without losing control of their creative direction.
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
            variant="outline"
            className="text-black border-black hover:bg-black hover:text-white rounded-sm uppercase font-semibold px-8 py-4"
          >
            Live Chat
          </Button>
          <Button className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold px-8 py-4">
            Get A Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
