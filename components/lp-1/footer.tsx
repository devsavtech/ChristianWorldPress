"use client";

import Link from "next/link";
import { ChevronRight, Facebook, Mail, Linkedin , Instagram} from "lucide-react";

const footerLinks = {
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" }
  ],
  social: [
    { icon: Mail, label: "Email", href: "mailto:authorrelations@christianworldpress.com" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/people/Christian-World-Press/61586607706132/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGPj9vV8jYZrgAAAZxnapwwk4SPILHQrKzGxlEeKyzwDxwnY0t_OP_2poKRP5x-55J09fH8xYFLYh33gr_2RV9OqYno3dBF1PxgCJ7dJptsgMYZso23huw-ZcmwsP0fgMFm4qQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fchristian-world-press%2F" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/christianworldpress.official/" },
    { icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M427.5 299.7C429.7 300.6 431.7 301.6 433.8 302.5C463 316.6 484.4 337.7 495.6 363.9C511.3 400.4 512.8 459.7 465.3 507.1C429.1 543.3 385 559.6 322.7 560.1L322.4 560.1C252.2 559.6 198.3 536 162 489.9C129.7 448.9 113.1 391.8 112.5 320.3L112.5 319.8C113 248.3 129.6 191.2 161.9 150.2C198.2 104.1 252.2 80.5 322.4 80L322.7 80C393 80.5 447.6 104 485 149.9C503.4 172.6 517 199.9 525.6 231.6L485.2 242.4C478.1 216.6 467.4 194.6 453 177C423.8 141.2 380 122.8 322.5 122.4C265.5 122.9 222.4 141.2 194.3 176.8C168.1 210.1 154.5 258.3 154 320C154.5 381.7 168.1 429.9 194.3 463.3C222.3 498.9 265.5 517.2 322.5 517.7C373.9 517.3 407.9 505.1 436.2 476.8C468.5 444.6 467.9 405 457.6 380.9C451.5 366.7 440.5 354.9 425.7 346C422 372.9 413.9 394.3 401 410.8C383.9 432.6 359.6 444.4 328.3 446.1C304.7 447.4 282 441.7 264.4 430.1C243.6 416.3 231.4 395.3 230.1 370.8C227.6 322.5 265.8 287.8 325.3 284.4C346.4 283.2 366.2 284.1 384.5 287.2C382.1 272.4 377.2 260.6 369.9 252C359.9 240.3 344.3 234.3 323.7 234.2L323 234.2C306.4 234.2 284 238.8 269.7 260.5L235.3 236.9C254.5 207.8 285.6 191.8 323.1 191.8L323.9 191.8C386.5 192.2 423.8 231.3 427.6 299.5L427.4 299.7L427.5 299.7zM271.5 368.5C272.8 393.6 299.9 405.3 326.1 403.8C351.7 402.4 380.7 392.4 385.6 330.6C372.4 327.7 357.8 326.2 342.2 326.2C337.4 326.2 332.6 326.3 327.8 326.6C284.9 329 270.6 349.8 271.6 368.4L271.5 368.5z"/>
      </svg>
    ), label: "Threads", href: "https://www.threads.net/@christianworldpress.official" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo/Chrisitan World Press Logo.png" 
                alt="Christian World Press Logo" 
                className="h-12 w-auto mb-3"
              />
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Christian World Press is dedicated to spreading the Gospel through quality Christian literature and resources.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                const isExternal = social.href.startsWith('http')
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#home"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-200 group flex items-center gap-1"
                >
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-colors duration-200 text-muted-foreground/60 group-hover:text-accent -ml-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#bestsellers"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-200 group flex items-center gap-1"
                >
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-colors duration-200 text-muted-foreground/60 group-hover:text-accent -ml-1" />
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="#new-releases"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-200 group flex items-center gap-1"
                >
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-colors duration-200 text-muted-foreground/60 group-hover:text-accent -ml-1" />
                  New Releases
                </Link>
              </li>
              <li>
                <Link
                  href="#distribution"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-200 group flex items-center gap-1"
                >
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-colors duration-200 text-muted-foreground/60 group-hover:text-accent -ml-1" />
                  Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-200 group flex items-center gap-1"
                >
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-colors duration-200 text-muted-foreground/60 group-hover:text-accent -ml-1" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-200 group flex items-center gap-1"
                >
                  <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-colors duration-200 text-muted-foreground/60 group-hover:text-accent -ml-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal & Policies */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wide">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-all duration-200 group flex items-center gap-1"
                  >
                    <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-colors duration-200 text-muted-foreground/60 group-hover:text-accent -ml-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Hours */}
          <div>
            <h3 className="font-serif font-semibold text-foreground mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-semibold mb-1">Email</p>
                <a
                  href="mailto:authorrelations@christianworldpress.com"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors duration-200 break-all block"
                >
                  authorrelations@christianworldpress.com
                </a>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-semibold mb-1">Phone No.</p>
                <a href="tel:+714475-7922"
                  className="text-xs sm:text-sm text-muted-foreground">
                   + (714) 475-7922
                </a>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-semibold mb-1">Address</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  13100 Wortham Center Dr, Suite 320
                  Houston, TX 77065
                  United states
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Christian World Press. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
