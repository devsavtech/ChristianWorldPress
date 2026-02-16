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
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/christian-world-press/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/christianworldpress.official/" },
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
