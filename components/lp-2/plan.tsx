import { Button } from "@/components/ui/button";

export function Plan() {
  return (
    <section className="pt-24 pb-0 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Build Your Publishing Plan With the Right Support
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-gray-300 mx-auto lg:mx-0 max-w-2xl">
              You don't need a gatekeeper to move forward. You need guidance and people who understand how book publishing actually works today. We help authors publish and promote their books without false promises or exaggerated PR campaigns. A professional approach and a team that knows how to get books to the right readers the right way.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black rounded-sm uppercase font-semibold px-8 py-6 w-full sm:w-auto">
                Live Chat
              </Button>
              <Button className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold px-8 py-6 w-full sm:w-auto">
                Get A Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Large Book Image at Bottom */}
        <div className="relative w-full flex justify-center mt-12">
          <img 
            src="/lp-2/open-book-4.webp" 
            alt="Publishing Plan Book" 
            loading="lazy"
            className="w-full max-w-5xl rounded-t-xl shadow-2xl object-cover object-top h-[400px] md:h-[500px]"
            onError={(e) => {
              // Fallback
              e.currentTarget.src = "/vintage-christian-books-library.jpg";
            }}
          />
        </div>
      </div>
    </section>
  );
}
