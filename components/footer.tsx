"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail, ChevronRight, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Featured Authors", href: "/#authors" },
    { label: "Our Books", href: "/#books" },
    { label: "Extended Distribution", href: "/#distribution" },
    { label: "Our Partners", href: "/#partners" },
    { label: "Events", href: "/#events" },
    { label: "Contact Us", href: "/#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
  ],
  social: [
    { icon: Mail, label: "Email", href: "mailto:authorrelations@christianworldpress.com" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586607706132" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/111136901/admin/dashboard/" },
    // { icon: Twitter, label: "Twitter", href: "https://x.com/press24111" },
  ],
}

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.1 },
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-border/30 transition-all duration-700 opacity-0 translate-y-4 overflow-hidden"
    >
      {/* Background Layers */}
      {/* Base dark grey background */}
      <div className="absolute inset-0 bg-[#2b2a27]" />

      {/* Diagonal red overlay */}
      <div
        className="absolute inset-0 bg-[#8b1d1d]"
        style={{
          clipPath: "polygon(55% 0, 100% 0, 100% 100%, 32% 100%)",
        }}
      />

      {/* Subtle black overlay for vintage texture */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-5 md:mb-6">
              <Link href="/" className="inline-block">
                <img
                  src="/img/ChrisitanWorldPressLogo.png"
                  alt="Christian World Press"
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
                />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-md sm:max-w-none">
              We publish and distribute faith-centered books that reach believers worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4 mt-auto">
              {footerLinks.social.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-white/70 transition-all duration-300 hover:scale-110 hover:text-[#e6b65c]"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wide">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/80 hover:text-[#e6b65c] transition-all duration-200 group flex items-center gap-1"
                  >
                    <ChevronRight className="sm:block hidden w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-1 text-[#e6b65c]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wide">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-white/80 hover:text-[#e6b65c] transition-all duration-200 group flex items-center gap-1"
                  >
                    <ChevronRight className="sm:block hidden w-2.5 h-2.5 sm:w-3 sm:h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 -ml-1 text-[#e6b65c]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-[10px] sm:text-xs text-[#e6b65c] uppercase tracking-widest font-semibold mb-1">Email</p>
                {/* <a
                  href="mailto:authorrelations@christianworldpress.com"
                  className="text-xs sm:text-sm text-white/80 hover:text-[#e6b65c] transition-colors duration-200 break-all"
                >
                  authorrelations@christianworldpress.com
                </a> */}
                <a
                  href="mailto:authorrelations@christianworldpress.com"
                  className="text-xs sm:text-sm text-white/80 hover:text-[#e6b65c] transition-colors duration-200 break-all  block"
                >
                  authorrelations@christianworldpress.com
                </a>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#e6b65c] uppercase tracking-widest font-semibold mb-1">Phone No.</p>
                <a href="tel:+714475-7922"
                  className="text-xs sm:text-sm text-white/80">
                   + (714) 475-7922
                </a>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#e6b65c] uppercase tracking-widest font-semibold mb-1">Address</p>
                <p className="text-xs sm:text-sm text-white/80">
                  13100 Wortham Center Dr, Suite 320
                  Houston, TX 77065
                  United states
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-[10px] sm:text-xs text-white/80">
              © {new Date().getFullYear()} Christian World Press. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs text-white/80">
              <span>Designed for faith-driven publishing</span>
              <span className="text-[#e6b65c] hidden sm:inline">•</span>
              <span>Trusted since 2024</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
