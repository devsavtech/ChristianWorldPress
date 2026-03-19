import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-800 pb-12 mb-8">
          
          {/* Left */}
          <div>
            <img 
              src="/logo/Chrisitan World Press Logo.png" 
              alt="Logo" 
              className="h-16 w-auto mb-6"
            />
            <div className="space-y-4 text-gray-300">
              <p className="flex items-start">
                <span className="text-[#8b0000] mr-2">📍</span>
                4428 Main St Suite 4-11817 Buffalo, NY 14226
              </p>
              <p className="flex items-center">
                <span className="text-[#8b0000] mr-2">✉</span>
                <a href="mailto:marketing@kineticdigitalpublishers.com" className="hover:text-[#8b0000]">
                  marketing@kineticdigitalpublishers.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="text-[#8b0000] mr-2">📞</span>
                <a href="tel:+18332803883" className="hover:text-[#8b0000]">
                  +1 (833) 280-3883
                </a>
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#8b0000] hover:border-[#8b0000] hover:text-black transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#8b0000] hover:border-[#8b0000] hover:text-black transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#8b0000] hover:border-[#8b0000] hover:text-black transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#8b0000] hover:border-[#8b0000] hover:text-black transition-colors">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Kinetic Digital Publishers creates lasting impacts in the literary world. Your story deserves to be seen, heard, and celebrated. That's why we collaborate closely with authors to bring their visions to life, creating books that connect with audiences, build author brands, and create legacies.
            </p>
            
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Accepts Payment Methods</h4>
            <div className="flex flex-wrap gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6 bg-white px-2 py-1 rounded" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-6 bg-white px-2 py-1 rounded" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6 bg-white px-2 py-1 rounded" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Discover_Card_logo.svg" alt="Discover" className="h-6 bg-white px-2 py-1 rounded" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400 space-y-4">
          <div className="flex justify-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link>
            <Link href="#" className="hover:text-white">Refund Policy</Link>
          </div>
          <p className="text-xs">
            Kinetic Digital Publishers is a brand independent publishing company and is not affiliated with, endorsed by, or sponsored by Amazon or Kindle Direct Publishing (KDP).
          </p>
          <p className="text-xs">
            Copyright © 2024 Kinetic Digital Publishers. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
