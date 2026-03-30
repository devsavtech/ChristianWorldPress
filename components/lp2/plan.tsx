import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { Popup } from "@/components/lp-1/popup";
import { useState } from "react";
import { ClassicButton } from "../ui/classicbutton";
import { BookOpen, MessageCircle } from "lucide-react";
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
     Build Your Publishing Plan with the Right Support
    </h2>
  </div>

  {/* Right Content */}
  <div className="space-y-6 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
    
    <p className="text-gray-300">
      Publishing can feel overwhelming, especially when you’re trying to stay true to your message. Christian World Press is here to your rescue. We help Christian authors move forward with honest guidance and a process that actually works.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
      <ClassicButton 
        icon={MessageCircle}
        onClick={toggleLiveChat}
        variant="textOutline"
        className="chat_button"
      >
        Live Chat
      </ClassicButton>

      <ClassicButton 
        variant="primary"
        icon={BookOpen}
        onClick={() => setShowPopup(true)}
        className="popup_button">
        Publish Your Book
      </ClassicButton>
    </div>

  </div>

</div>

      </div>
      {showPopup && <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
    </section>
  );
}