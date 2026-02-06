"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

const footerLinks = {
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" }
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
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.233 0 11.32-5.995 11.32-11.32 0-.175-.004-.35-.012-.525a8.141 8.141 0 002.008-2.084 8.07 8.07 0 01-2.324.863 4.04 4.04 0 001.77-2.247 8.08 8.08 0 01-2.544 1.49 4.03 4.03 0 00-6.89 3.674 11.48 11.48 0 01-8.317-4.22 4.03 4.03 0 001.25 5.39 4.01 4.01 0 01-1.82-.502v.05a4.03 4.03 0 003.23 3.95 4.02 4.02 0 01-1.81.07 4.03 4.03 0 003.777 2.803A8.08 8.08 0 012 16.25a11.45 11.45 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
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
