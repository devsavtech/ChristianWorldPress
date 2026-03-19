import apple from './audience/Apple book logo.png';
import img3 from './audience/3.webp';
import img4 from './audience/4.webp';
import img5 from './audience/5.webp';
import img6 from './audience/6.webp';
import img7 from './audience/7.webp';
import google from './audience/Google book logo.png';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

export function Audience() {
  const logos = [
    apple,
    img3,
    img4,
    img5,
    img6,
    img7,
    google,
  ];
  const {displayedText, isTyping, sectionRef} = useTypingAnimation("Your Story Deserves a Global Audience")

  return (
    <section ref={sectionRef}  className="py-20 bg-white text-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
           {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
        </h2>
        <p className="text-gray-700">
          Your book shouldn't be limited to a local shelf. When you partner with us, you'll reach readers everywhere. We'll give your book the exposure it needs across major retail platforms and distributors.
        </p>
      </div>

      <div className="relative flex overflow-hidden whitespace-nowrap bg-white py-4 w-full">
        {/* We duplicate the logo list a few times to ensure seamless infinite scrolling on all screen sizes */}
        {[...Array(4)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="animate-marquee flex items-center gap-12 md:gap-24 shrink-0 px-6 md:px-12">
            {logos.map((logo, index) => (
              <img 
                key={`${arrayIndex}-${index}`} 
                src={logo.src} 
                alt={`Partner ${index + 1}`} 
                loading="lazy"
                className="h-10 md:h-14 lg:h-16 w-auto object-contain shrink-0"
              />
            ))}
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        `
      }} />
    </section>
  );
}
