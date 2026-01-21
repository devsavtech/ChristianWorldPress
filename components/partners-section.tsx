"use client"

import { Button } from "@/components/ui/button"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const partnerLogos = [
  { name: "Cloudinary", src: "/brands/cl-2.png" },
  { name: "Appwrite", src: "/brands/cl-3.png" },
  { name: "Hostinger", src: "/brands/cl-4.png" },
  { name: "Stream", src: "/brands/cl-5.png" },
  { name: "Docker", src: "/brands/cl-6.png" },
  { name: "Brand Six", src: "/brands/cl-7.png" },
]

const storeLogos = [
  { name: "Cloudinary", src: "/brands/cl-2.png" },
  { name: "Appwrite", src: "/brands/cl-3.png" },
  { name: "Hostinger", src: "/brands/cl-4.png" },
]

export function PartnersSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Trusted Distribution Partners")

  return (
    <section ref={sectionRef} id="partners" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card/10 border-y border-border relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('/img/Distribution & Global Reach Section.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Trusted Distribution Partners */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-8 sm:mb-12 md:mb-16 text-center min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-items-center mb-8 sm:mb-10 md:mb-12">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center bg-card/80 transition-colors rounded px-2 sm:px-3 md:px-4"
              >
                <img
                  src={partner.src || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-6 sm:h-7 md:h-8 object-contain opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partner Stores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-5 md:mb-6 uppercase">Partner Stores</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              Our books are available in leading Christian and national bookstores across the globe.
            </p>
            {/* <Button className="btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
              FIND A STORE NEAR YOU
            </Button> */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-7 md:mt-8">
              {storeLogos.map((store, index) => {
                const isLastOdd =
                  storeLogos.length % 2 !== 0 &&
                  index === storeLogos.length - 1

                return (
                  <div
                    key={store.name}
                    className={isLastOdd ? "col-span-2 flex justify-center" : ""}
                  >
                    <div
                      className={`
                        h-10 sm:h-12
                        flex items-center justify-center
                        bg-card hover:bg-card/80 transition-colors rounded
                        p-3 sm:p-4
                        ${isLastOdd ? "w-1/2" : "w-full"}
                      `} >
                      <img
                        src={store.src || "/placeholder.svg"}
                        alt={store.name}
                        className="h-5 sm:h-6 object-contain opacity-70"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-5 md:mb-6 uppercase">Traditional Publishers</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-7 md:mb-8 leading-relaxed">
              We work alongside respected Christian publishers to expand the reach of transformative literature.
            </p>
            <div className="space-y-2 sm:space-y-3">
              {["Edward Martin", "Victoria Vossey", "NR Publishers", "Palmer Publishing"].map((publisher) => (
                <div key={publisher} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span>{publisher}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
