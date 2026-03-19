import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Olivia Sanders",
      text: "The cover design and formatting work were excellent. My book looks professional and exactly how I envisioned it.",
      rating: 5,
    },
    {
      name: "Christopher Hayes",
      text: "The team communicated clearly and kept me updated throughout the process. I felt confident knowing my book was in good hands.",
      rating: 5,
    },
    {
      name: "Sophia Mitchell",
      text: "They helped turn my completed manuscript into a professionally prepared book ready for publishing.",
      rating: 5,
    },
    {
      name: "James Walker",
      text: "From editing to final preparation for publishing, the entire experience was professional and well executed.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              {/* Chat Bubble */}
              <div className="bg-[#f4f6f9] rounded-[2rem] p-8 relative mb-8 flex-grow shadow-sm hover:shadow-md transition-shadow">
                {/* Triangle pointing down */}
                <div className="absolute -bottom-4 left-10 w-8 h-8 bg-[#f4f6f9] transform rotate-45 -z-10 rounded-sm"></div>
                
                {/* Quote Icon */}
                <div className="text-black mb-2">
                  <span className="text-8xl font-serif font-black leading-[0.4] tracking-tighter block mt-4">“</span>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f5a524] text-[#f5a524]" />
                  ))}
                </div>
                
                {/* Text */}
                <div className="h-32 overflow-y-auto pr-3 text-gray-700 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {testimonial.text}
                </div>
              </div>
              
              {/* Author Name */}
              <div className="pl-4">
                <h4 className="font-bold text-black text-lg">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `}} />
    </section>
  );
}
