'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    __lc?: any;
    LiveChatWidget?: any;
  }
}

export default function LiveChat() {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  useEffect(() => {
    // Initialize LiveChat
    window.__lc = window.__lc || {};
    window.__lc.license = 18940913;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";

    (function(n: any, t: any, c: any) {
      function i(n: any) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      var e: any = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function() {
          i(["on", c.call(arguments)]);
        },
        once: function() {
          i(["once", c.call(arguments)]);
        },
        off: function() {
          i(["off", c.call(arguments)]);
        },
        get: function() {
          if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get", c.call(arguments)]);
        },
        call: function() {
          i(["call", c.call(arguments)]);
        },
        init: function() {
          var n = t.createElement("script");
          n.async = !0;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        }
      };
      !n.__lc.asyncInit && e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    }(window, document, [].slice));

    // Cleanup function
    return () => {
      // Optional: Remove LiveChat script on unmount if needed
    };
  }, []);

  const toggleLiveChat = () => {
    if (isLiveChatOpen) {
      window.LiveChatWidget?.call('minimize');
    } else {
      window.LiveChatWidget?.call('maximize');
    }
    setIsLiveChatOpen(!isLiveChatOpen);
  };

  return null; // This component doesn't render anything visible
}