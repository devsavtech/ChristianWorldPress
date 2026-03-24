import { Button } from "@/components/ui/button";

export function Journey() {
  const books = [
    "/newreleasebooks/thebookofenoch.jpg",
    "/newreleasebooks/thewisdomofsolomon.jpg",
    "/newreleasebooks/dayswithjesus.jpg",
    "/newreleasebooks/adatewithdestiny.jpg",
    "/newreleasebooks/voiceoftheheart.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              For Christian Authors Who Are Ready to Be Heard 
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
Christian World Press was created to help authors get their work professionally published and help them reach readers who are seeking faith, encouragement, and truth. From refining your message to preparing your book for publication and visibility, we provide the guidance and support you need without making the process overwhelming. We believe publishing is about purpose and that’s why we focus on helping Christian authors share their message clearly, confidently, and effectively with readers around the world.               </p>
             
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button variant="outline" className="text-black border-black hover:bg-black hover:text-white rounded-sm uppercase font-semibold px-8 py-6 w-full sm:w-auto">
                Live Chat
              </Button>
              <Button className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold px-8 py-6 w-full sm:w-auto">
                Get A Quote
              </Button>
            </div>
          </div>

          {/* Right Image/Books */}
          <div className="relative h-[300px] md:h-[400px] flex items-center justify-center mt-12 lg:mt-0 overflow-hidden lg:overflow-visible">
            {books.map((book, index) => (
              <img 
                key={index} 
                src={book} 
                alt={`Book ${index + 1}`} 
                loading="lazy"
                className={`absolute w-32 md:w-40 lg:w-48 shadow-2xl transition-transform duration-500 hover:-translate-y-4 hover:z-50 cursor-pointer
                  ${index === 0 ? 'left-0 z-10 -rotate-12' : ''}
                  ${index === 1 ? 'left-[20%] z-20 -rotate-6' : ''}
                  ${index === 2 ? 'left-[40%] z-30' : ''}
                  ${index === 3 ? 'left-[60%] z-40 rotate-6' : ''}
                  ${index === 4 ? 'left-[80%] z-10 rotate-12' : ''}
                `}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
