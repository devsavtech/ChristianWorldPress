import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { Popup } from "@/components/global/popup";
import { useState } from "react";
export function Plan() {
  const { displayedText, isTyping, sectionRef } =
    useTypingAnimation("Build Your Publishing Plan with the Right Support");

  const [showPopup, setShowPopup] = useState(false);
    const toggleLiveChat = () => {
    if (typeof window !== 'undefined' && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call('maximize');
    }
  };
  return (
    <section ref={sectionRef} className="pt-24 pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

  {/* Left Content */}
  <div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left">
      {displayedText || " "}
      {isTyping && <span className="animate-pulse">|</span>}
    </h2>
  </div>

  {/* Right Content */}
  <div className="space-y-6 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
    
    <p className="text-gray-300">
      Publishing can feel overwhelming, especially when you’re trying to stay true to your message. Christian World Press is here to your rescue. We help Christian authors move forward with honest guidance and a process that actually works.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
      <Button 
        onClick={toggleLiveChat}
        variant="outline"
        className="chat_button text-white border-white hover:bg-white hover:text-black rounded-sm uppercase font-semibold px-8 py-6 w-full sm:w-auto"
      >
        Live Chat
      </Button>

      <Button 
        onClick={() => setShowPopup(true)}
        className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold px-8 py-6 w-full sm:w-auto">
        Get A Quote
      </Button>
    </div>

  </div>

</div>

      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
    </section>
  );
}