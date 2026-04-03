"use client";
import { PenTool, Check, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ClassicButton } from "../ui/classicbutton";
import { BookOpen, MessageCircle } from "lucide-react";
import { useState } from "react";
export function Services360() {
      const [showPopup, setShowPopup] = useState(false);
  
  const toggleLiveChat = () => {
    if (typeof window !== "undefined" && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call("maximize");
    }
  };
  const services = [
    {
      title: "BOOK WRITING",
      desc: "Turn your idea into a finished manuscript with help from experienced ghostwriters who know how to bring your story, message, or expertise to life.",
      icon: <PenTool className="w-10 h-10" />,
    },
    {
      title: "Book Editing, Formatting & Cover",
      desc: "Strengthen your book with professional editing that improves clarity, flow, structure, and readability without changing your voice.",
      icon: <Check className="w-10 h-10" />,
    },
    {
      title: "Distribution & Printing",
      desc: "Get professional Distribution & Printing services to ensure your book reaches the right audience with premium quality.",
      icon: <ImageIcon className="w-10 h-10" />,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* MATCHING HEADER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            FROM IDEA TO PUBLISHED BOOK : <span className="text-[#8B0000] relative">
              360° DEGREE
            </span><br />
            PUBLISHING SERVICES
            
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {/* THE DASHED CONNECTOR LINE (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-[2px] border-t-2 border-dashed border-slate-200 -z-0" />

          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative z-10"
            >
              <div className="bg-white p-10 border-t-4 border-[#8B0000] rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center h-full">
                
                {/* STEP NUMBER BADGE (Fades in on hover) */}
                <span className="absolute top-4 right-6 text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  0{idx + 1}
                </span>

                {/* ICON CONTAINER (Flips colors + Rotates) */}
                <div className="w-20 h-20 mb-8 rounded-2xl bg-slate-50 text-[#8B0000] flex items-center justify-center transition-all duration-500 group-hover:bg-[#8B0000] group-hover:text-white group-hover:rotate-[10deg] shadow-inner">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-4 text-slate-800 uppercase tracking-wider h-14 flex items-center justify-center">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">
                  {service.desc}
                </p>

                {/* INTERACTIVE BOTTOM BAR (Grows on hover) */}
                <div className="mt-8 w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-[#8B0000] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
               <div className="flex flex-row sm:flex-row gap-4 justify-center mt-10 px-6">
                        <ClassicButton
                        variant="primary"
                        icon={BookOpen}
                          onClick={() => setShowPopup(true)}
                          className="popup_button"
                        >
                          Publish Your Book
                        </ClassicButton>
                
                        <ClassicButton
                          onClick={toggleLiveChat}
                          variant="outline"
                          icon={MessageCircle}
                          className="chat_button"
                        >
                         Talk to Us
                        </ClassicButton>
                      </div>
      </div>
    </section>
  );
}