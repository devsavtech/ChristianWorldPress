export function Process() {
  const steps = [
    {
      number: "01",
      title: "Idea & Manuscript Review",
      description: "We start by understanding your book and your goals. Whether your manuscript is still in progress or complete, we review it carefully and suggest next steps."
    },
    {
      number: "02",
      title: "Planning & Agreement",
      description: "Once we understand your vision, we outline the project timeline, and detail out everything to help achieve the desired impact."
    },
    {
      number: "03",
      title: "Editing & Design",
      description: "Our team gets to work. We edit your book and design the cover and interior layout so it looks great. You have full say in this stage."
    },
    {
      number: "04",
      title: "Production & Pre-Launch",
      description: "We prepare your book for print and digital platforms. Formatting, files/ISBNs, and search criteria are handled with care so your self-publishing process feels smooth and professional."
    },
    {
      number: "05",
      title: "Launch & Post-Launch",
      description: "Book is released and distributed with an eye on traction, including reviews and rights deals."
    }
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black mb-4">Our Process</h2>
        <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
          Here is a step-by-step, clear path from manuscript to published book
        </p>

        {/* Winding Road Visualization (Simplified with CSS) */}
        <div className="relative">
          {/* Dashed line connecting steps (hidden on mobile, visible on lg) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-300 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-2xl border border-gray-100 shadow-xl flex flex-col items-center text-center transform transition-transform hover:-translate-y-2
                  ${index % 2 === 0 ? 'lg:-translate-y-8' : 'lg:translate-y-8'}
                `}
              >
                <div className="w-16 h-16 rounded-full bg-[#8b0000] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
