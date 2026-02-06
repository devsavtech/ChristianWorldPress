"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle smooth scrolling with offset for fixed navbar on initial hash load
  useEffect(() => {
    // Check for hash in URL on initial load
    if (window.location.hash) {
      // Wait a bit for page to render, then scroll to element with offset
      setTimeout(() => {
        const element = document.querySelector(window.location.hash) as HTMLElement;
        if (element) {
          const navbarHeight = 64; // Height of your fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="#">
              <img 
                src="/logo/Chrisitan World Press Logo.png" 
                alt="Christian World Press Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <Link 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector('#home') as HTMLElement;
                  if (targetElement) {
                    const navbarHeight = 64; // Height of your fixed navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="#bestsellers" 
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector('#bestsellers') as HTMLElement;
                  if (targetElement) {
                    const navbarHeight = 64; // Height of your fixed navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Best Sellers
              </Link>
              <Link 
                href="#new-releases" 
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector('#new-releases') as HTMLElement;
                  if (targetElement) {
                    const navbarHeight = 64; // Height of your fixed navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                New Releases
              </Link>
              <Link 
                href="#distribution" 
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector('#distribution') as HTMLElement;
                  if (targetElement) {
                    const navbarHeight = 64; // Height of your fixed navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Distribution
              </Link>
              <Link 
                href="#faq" 
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector('#faq') as HTMLElement;
                  if (targetElement) {
                    const navbarHeight = 64; // Height of your fixed navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                FAQ
              </Link>
              <Link 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.querySelector('#contact') as HTMLElement;
                  if (targetElement) {
                    const navbarHeight = 64; // Height of your fixed navbar
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="text-foreground hover:text-accent transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-accent focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="#home" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              // Wait for mobile menu to close before scrolling
              setTimeout(() => {
                const targetElement = document.querySelector('#home') as HTMLElement;
                if (targetElement) {
                  const navbarHeight = 64; // Height of your fixed navbar
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 300);
            }}
          >
            Home
          </Link>
          <Link 
            href="#bestsellers" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              // Wait for mobile menu to close before scrolling
              setTimeout(() => {
                const targetElement = document.querySelector('#bestsellers') as HTMLElement;
                if (targetElement) {
                  const navbarHeight = 64; // Height of your fixed navbar
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 300);
            }}
          >
            Best Sellers
          </Link>
          <Link 
            href="#new-releases" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              // Wait for mobile menu to close before scrolling
              setTimeout(() => {
                const targetElement = document.querySelector('#new-releases') as HTMLElement;
                if (targetElement) {
                  const navbarHeight = 64; // Height of your fixed navbar
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 300);
            }}
          >
            New Releases
          </Link>
          <Link 
            href="#distribution" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              // Wait for mobile menu to close before scrolling
              setTimeout(() => {
                const targetElement = document.querySelector('#distribution') as HTMLElement;
                if (targetElement) {
                  const navbarHeight = 64; // Height of your fixed navbar
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 300);
            }}
          >
            Distribution
          </Link>
          <Link 
            href="#faq" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              // Wait for mobile menu to close before scrolling
              setTimeout(() => {
                const targetElement = document.querySelector('#faq') as HTMLElement;
                if (targetElement) {
                  const navbarHeight = 64; // Height of your fixed navbar
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 300);
            }}
          >
            FAQ
          </Link>
          <Link 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              // Wait for mobile menu to close before scrolling
              setTimeout(() => {
                const targetElement = document.querySelector('#contact') as HTMLElement;
                if (targetElement) {
                  const navbarHeight = 64; // Height of your fixed navbar
                  const elementPosition = targetElement.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 300);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}