export function Audience() {
  const logos = [
    "/brands/logo-1.png",
    "/brands/logo-2.png",
    "/brands/logo-3.png",
    "/brands/logo-4.png",
    "/brands/logo-5.png",
    "/brands/logo-6.png",
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Your Story Deserves a Global Audience
        </h2>
        <p className="text-gray-700 mb-12">
          Your book shouldn't be limited to a local shelf. When you partner with us, you'll reach readers everywhere. We'll give your book the exposure it needs across major retail platforms and distributors.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Partner ${index + 1}`} 
              loading="lazy"
              className="h-12 object-contain transition-all duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
