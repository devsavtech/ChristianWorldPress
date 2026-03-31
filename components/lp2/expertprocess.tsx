"use client";
import { ShieldCheck, PenTool, Award, Globe } from "lucide-react";

export function ExpertProcess() {
  const steps = [
    {
      title: "Send Your Manuscript",
      desc: "Send us your manuscript, ideas, and goals. We will make the right publishing plan.",
      icon: <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Prepare Your Book",
      desc: "We edit, format, and refine your manuscript so it is ready for publication and makes a strong first impression.",
      icon: <PenTool className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Approve Your Book",
      desc: "Review your completed book, request final changes, and make sure everything looks exactly the way you want.",
      icon: <Award className="w-10 h-10" strokeWidth={1.5} />,
    },
    {
      title: "Publish and Promote",
      desc: "Once your book is published, we help you distribute it across major platforms and give you the tools to start reaching readers.",
      icon: <Globe className="w-10 h-10" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl  lg:text-[2.6rem] font-black text-center mb-16 tracking-tight text-slate-900 ">
          Easy Process to  <span className="text-[#8B0000]">Publish Your Book</span>
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