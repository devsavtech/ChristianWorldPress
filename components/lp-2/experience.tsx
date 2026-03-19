import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

export function Experience() {
  const {displayedText, isTyping, sectionRef} = useTypingAnimation("An Experience Built for Authors")
  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {displayedText || " "}
              {isTyping && <span className="animate-pulse">|</span>}
            </h2>
            <p className="text-lg text-gray-300 mx-auto lg:mx-0 max-w-2xl">
              With Kinetic Digital Publishers, you're not just another client. You're an author with specific goals, and our job is to help you achieve them. Whether you're a first-time or seasoned pro, our team will be with you. We will walk you through the entire publishing journey and help you achieve the success you deserve.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md w-full mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0">
            <div className="bg-[#8b0000] py-4 text-center">
              <h3 className="text-white font-bold text-xl uppercase">Get A Free Consultation</h3>
            </div>
            <div className="p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Your Name</label>
                  <input type="text" placeholder="e.g John Doe" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input type="email" placeholder="e.g john@domain.com" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone</label>
                    <input type="tel" placeholder="e.g +1 123 456 7890" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Services</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] bg-transparent text-black">
                    <option value="">Services</option>
                    <option value="publishing">Publishing</option>
                    <option value="editing">Editing</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold py-6">
                    Start Your Journey
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
