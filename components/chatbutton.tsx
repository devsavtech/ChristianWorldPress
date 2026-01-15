'use client';

import { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function ChatButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleLiveChat = () => {
    if (typeof window !== 'undefined' && window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <div className="fixed bottom-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 z-50">
      <div className={`flex flex-col items-start sm:items-end gap-3 transition-all duration-300 ${isExpanded ? 'mb-16' : ''}`}>
        {isExpanded && (
          <>
            <a
              href="tel:+1 (855) 209-8899"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors animate-in slide-in-from-bottom-2"
              aria-label="Call +1 (855) 209-8899"
            >
              <Phone size={20} />
              <span className="font-medium">+1 (855) 209-8899</span>
            </a>
            <button
              onClick={toggleLiveChat}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-green-700 transition-colors animate-in slide-in-from-bottom-1"
              aria-label="Start live chat"
            >
              <MessageCircle size={20} />
              <span className="font-medium">Chat With Us</span>
            </button>
          </>
        )}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#f91942] text-white p-4 rounded-full shadow-lg hover:bg-[#e0173c] transition-colors"
          aria-label={isExpanded ? "Close chat options" : "Open chat options"}
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
}