import Image from "next/image";
import { Form } from "./form";

export function Hero() {

  return (
    <section className="relative w-full min-h-[600px] flex items-center pt-20 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vintage-christian-books-library.jpg"
          alt="Vintage Christian Books Library Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-[#8b0000] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              Ready to share your message with the world?
            </span>
            <h1 className="font-serif text-4xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-foreground leading-tight">
              Best Book Publishing Stop for Christian Authors
            </h1>
          {/* Bullet points */}
            <ul className="mb-8 space-y-3">
              {[
                "Officially Affiliated with Amazon Publishing",
                "100% Book Rights and Royalties Retained.",
                "Boost Sales with Expert Recommendations.",
                "Strong multi-platform branding for authors.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                  <span className="text-[#8B0000] text-xl font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {/* <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button 
                onClick={toggleLiveChat}
                variant="outline"
                className="chat_button text-white border-white hover:bg-white hover:text-black rounded-none uppercase px-8 py-6 w-full sm:w-auto"
              >
                Live Chat
              </Button>
              <Button
                onClick={() => setShowPopup(true)}
                className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-none uppercase font-bold px-8 py-6 w-full sm:w-auto"
              >
                Get A Quote
              </Button>
            </div> */}
             {/* Trust badges */}
                        <div className="mt-auto flex flex-col gap-4 items-center lg:items-start">
                          <div className="flex items-center gap-2 text-[#ff0000] text-lg font-bold">
                            Trusted By{" "}
                            <span className="text-white font-extrabold">5600+</span> Authors
                            Worldwide
                          </div>
                          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Image
                              src="/lp3/image5.webp"
                              alt="Ratings"
                              width={120}
                              height={24}
                              className="object-contain"
                            />
                            <Image
                              src="/lp3/image6.webp"
                              alt="Awards"
                              width={280}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                        </div>
          </div>

          {/* Right Form */}
          <Form />
        </div>
      </div>
    </section>
  );
}