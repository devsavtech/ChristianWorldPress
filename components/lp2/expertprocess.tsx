"use client";
import { ShieldCheck, PenTool, Award, Globe } from "lucide-react";
import { motion } from "framer-motion"; // Install via: npm install framer-motion
import { ClassicButton } from "../ui/classicbutton";
import { BookOpen, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Popup } from "../lp-1/popup";




export function ExpertProcess() {
    const [showPopup, setShowPopup] = useState(false);
  
  const toggleLiveChat = () => {
    if (typeof window !== "undefined" && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call("maximize");
    }
  };
  const steps = [
    {
      title: "Send Your Manuscript",
      desc: "Send us your manuscript, ideas, and goals. We will make the right publishing plan.",
      icon: <ShieldCheck className="w-10 h-10" />,
    },
    {
      title: "Prepare Your Book",
      desc: "We edit, format, and refine your manuscript so it is ready for publication and makes a strong first impression.",
      icon: <PenTool className="w-10 h-10" />,
    },
    {
      title: "Approve Your Book",
      desc: "Review your completed book, request final changes, and make sure everything looks exactly the way you want.",
      icon: <Award className="w-10 h-10" />,
    },
    {
      title: "Publish and Promote",
      desc: "Once your book is published, we help you distribute it across major platforms and give you the tools to start reaching readers.",
      icon: <Globe className="w-10 h-10" />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            EASY PROCESS TO <span className="text-[#8B0000] relative">
              PUBLISH YOUR BOOK
            </span>
          </h2>
          <p className="mt-6 text-slate-500 text-lg">Your journey from draft to bestseller in four simple steps.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-[2px] border-t-2 border-dashed border-slate-200 -z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative z-10"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center h-full">
                
                {/* Step Number Badge */}
                <span className="absolute top-4 right-6 text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  0{idx + 1}
                </span>

                {/* Icon Container */}
                <div className="w-20 h-20 mb-8 rounded-2xl bg-slate-50 text-[#8B0000] flex items-center justify-center transition-all duration-500 group-hover:bg-[#8B0000] group-hover:text-white group-hover:rotate-[10deg] shadow-inner">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-4 text-slate-800 uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Interactive Bottom Bar */}
                <div className="mt-8 w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-0 h-full bg-[#8B0000] group-hover:w-full transition-all duration-500" />
                </div>
                  
              </div>
              
            </motion.div>
          ))}
        </div>
            {/* CTA Buttons */}
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
            {showPopup && <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
      
    </section>
  );
}