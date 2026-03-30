"use client";
import { ShieldCheck, PenTool, Award, Globe } from "lucide-react";

export function ExpertProcess() {
  const steps = [
    {
      title: "Ensuring Client Satisfaction",
      desc: "Unwavering commitment to quality, ensuring client satisfaction at every milestone.",
      icon: <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Mastering Every Aspect",
      desc: "Our decade-long experience in the publishing industry ensures trusted, high-level expertise.",
      icon: <PenTool className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Retain Rights & Royalties",
      desc: "You maintain 100% ownership rights to your book and keep every cent of your royalties.",
      icon: <Award className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Global Trust",
      desc: "Trusted by bestselling authors and accomplished entrepreneurs across the globe.",
      icon: <Globe className="w-10 h-10" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl  lg:text-[2.6rem] font-black text-center mb-16 tracking-tight text-slate-900 ">
          Expert Process to <span className="text-[#8B0000]">Publish Your Book</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-10 border-t-4 border-[#8B0000] rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Icon with subtle background circle */}
              <div className="w-20 h-20 mb-6 rounded-full bg-red-50 text-[#8B0000] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#8B0000] group-hover:text-white">
                {step.icon}
              </div>

              {/* Title with improved spacing */}
              <h3 className="text-xl font-bold mb-4 text-slate-800 leading-snug uppercase tracking-tight h-14 flex items-center justify-center">
                {step.title}
              </h3>

              {/* Description with text-wrap: balance equivalent */}
              <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
              
              {/* Subtle hover indicator */}
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