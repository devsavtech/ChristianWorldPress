import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center pt-20 pb-20">
      {/* Background Image Optimized for LCP */}
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
            <span className="inline-block px-4 py-1 bg-[#8b0000]/20 text-[#8b0000] text-xs font-bold uppercase tracking-wider rounded-full border border-[#8b0000]/50">
              READY TO PUBLISH YOUR BOOK? WE ARE READY TOO!
            </span>
            <h1 className="font-serif text-4xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-foreground leading-tight">
              Work With A Book Publishing Company Who Makes Self Publishing Simple
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              You write the book, we handle the publishing part. Publishing, Editing, Marketing, Amazon - that feeling you have that your book is serious business? Let us take care of the heavy lifting so you can focus on your book.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black rounded-none uppercase px-8 py-6 w-full sm:w-auto">
                Live Chat
              </Button>
              <Button className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-none uppercase font-bold px-8 py-6 w-full sm:w-auto">
                Get A Quote
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto lg:ml-auto lg:mr-0 w-full">
            <div className="bg-[#8b0000] py-4 text-center">
              <h3 className="text-white font-bold text-xl uppercase">Get A Free Consultation</h3>
            </div>
            <div className="p-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Your Name</label>
                  <input type="text" placeholder="e.g John Doe" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <input type="email" placeholder="e.g john@domain.com" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone</label>
                    <input type="tel" placeholder="e.g +1 123 456 7890" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Services</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] bg-transparent text-black">
                    <option value="">Services</option>
                    <option value="publishing">Publishing</option>
                    <option value="editing">Editing</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-full uppercase font-bold py-6">
                    Start Your Journey
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
