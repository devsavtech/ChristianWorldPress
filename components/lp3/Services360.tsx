"use client";
import { PenTool, Check, Image as ImageIcon, BookOpen, Rocket, Search } from "lucide-react";

export function Services360() {
  const services = [
    {
      title: "BOOK WRITING",
      desc: "Turn your idea into a finished manuscript with help from experienced ghostwriters who know how to bring your story, message, or expertise to life.",
      icon: <PenTool className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Book Editing, Formatting & Cover",
      desc: "Strengthen your book with professional editing that improves clarity, flow, structure, and readability without changing your voice.",
      icon: <Check className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Distribution & Printing ",
      desc: "Get professional Distribution & Printing services to ensure your book reaches the right audience with premium quality.",
      icon: <ImageIcon className="w-10 h-10" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Consistent Heading Style */}
        <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-black text-center mb-16 tracking-tight text-slate-900 uppercase">
          FROM IDEA TO PUBLISHED BOOK:  
          <span className="text-[#8B0000]">360 DEGREE <br /></span>PUBLISHING SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-10 border-t-4 border-[#8B0000] rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Matching Circle Icon Interaction */}
              <div className="w-20 h-20 mb-6 rounded-full bg-red-50 text-[#8B0000] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#8B0000] group-hover:text-white">
                {service.icon}
              </div>

              {/* Matching Title Typography */}
              <h3 className="text-xl font-bold mb-4 text-slate-800 leading-snug uppercase tracking-tight h-14 flex items-center justify-center">
                {service.title}
              </h3>

              {/* Matching Description Style */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">
                {service.desc}
              </p>

              {/* Matching Bottom Indicator Bar */}
              <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-1 bg-[#8B0000] rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}