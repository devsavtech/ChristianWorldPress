import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Navbar() {
  const toggleLiveChat = () => {
    if (typeof window !== 'undefined' && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call('maximize');
    }
  };
  return (
    <nav className="w-full bg-black z-50 sticky top-0 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <Link href="#">
              <img
                src="/logo/Chrisitan World Press Logo.png"
                alt="Christian World Press Logo"
                className="h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
             <Link href="tel:+ (714) 475-7922;" className="text-white text-[9px] xl:text-[12px] font-semibold text-foreground/70 flex items-center gap-2 phone_button">
                          <Phone className="w-4 h-4" />
                          + (714) 475-7922
                        </Link>
            <Button   onClick={toggleLiveChat}  variant="outline" className="chat_button text-white border-white hover:bg-white hover:text-white rounded-none uppercase text-xs tracking-wider px-4 md:px-6">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
