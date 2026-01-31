"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "HOME", href: "home" },
  // { label: "OUR BOOKS", href: "books" },
  { label: "FEATURED AUTHORS", href: "authors" },
  { label: "FEATURED ARTICLES", href: "articles" },
  { label: "BEST SELLERS", href: "bestsellers" },
  { label: "NEW RELEASES", href: "new-releases" },
  { label: "EXTENDED DISTRIBUTION", href: "distribution" },
  { label: "OUR PARTNERS", href: "partners" },
  { label: "EVENTS", href: "events" },
  { label: "CONTACT US", href: "contact" },
]

export function Navbar() {
  const [activeLink, setActiveLink] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Ensure component only renders on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!mounted) return

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mounted])

  useEffect(() => {
    const sections = navLinks
      .map(link => document.getElementById(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0.1
      }
    );

    sections.forEach(section => section && observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-secondary border-b border-border/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0 img-fluid w-auto">
            <img
              src="/img/ChrisitanWorldPressLogo.png"
              alt="Christian World Press"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center 2xl:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={`/#${link.href}`}
                className={`px-2 py-2 text-[9px] xl:text-[11px] font-semibold transition-all duration-200 ease-in-out
            ${activeLink === link.href
                    ? "text-accent border-b-2 border-accent"
                    : "text-foreground/70 hover:text-accent hover:border-b hover:border-accent/50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/#books" className="btn-primary text-[10px] xl:text-xs px-4 xl:px-6">EXPLORE BOOKS</Link>
          </div>

          {/* Mobile Menu */}
          {mounted ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground h-9 w-9 sm:h-10 sm:w-10">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#2b2a27] border-0 w-full sm:w-full md:w-96 p-0 h-full flex flex-col [&>button]:text-white [&>button]:hover:text-white [&>button]:opacity-100 [&>button]:hover:opacity-80 [&>button]:top-5 [&>button]:right-5"
              >
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
                    <img
                      src="/img/ChrisitanWorldPressLogo.png"
                      alt="Christian World Press"
                      className="h-10 sm:h-12 w-auto"
                    />
                  </div>

                  {/* Mobile Menu Links */}
                  <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4">
                    <nav className="space-y-0">
                      {navLinks.map((link) => (
                        <Link
                          key={link.label}
                          href={`/#${link.href}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(false);
                            const targetElement = document.getElementById(link.href);
                            if (targetElement) {
                              // Calculate navbar height based on screen size
                              const navbarHeight = window.innerWidth >= 1024 ? 80 : 64;
                              
                              // Get the actual padding values
                              const computedStyle = window.getComputedStyle(targetElement);
                              const paddingTop = parseInt(computedStyle.paddingTop) || 0;
                              
                              // For hero section, we need special handling due to min-h and flex
                              let offsetTop: number;
                              if (link.href === 'home') {
                                // Hero section uses flex and min-h, so we target the content area
                                const contentDiv = targetElement.querySelector('.relative.z-10') as HTMLElement;
                                if (contentDiv) {
                                  offsetTop = contentDiv.offsetTop - navbarHeight;
                                } else {
                                  offsetTop = targetElement.offsetTop + paddingTop - navbarHeight;
                                }
                              } else {
                                // For other sections, use the standard calculation
                                offsetTop = targetElement.offsetTop + paddingTop - navbarHeight;
                              }
                              
                              window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                              });
                              setActiveLink(link.href);
                            }
                          }}
                          className="block py-4 sm:py-5 text-xs sm:text-sm text-white font-bold uppercase tracking-wide hover:text-accent transition-colors border-b border-white/5 last:border-0"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" className="text-foreground h-9 w-9 sm:h-10 sm:w-10 lg:hidden">
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
