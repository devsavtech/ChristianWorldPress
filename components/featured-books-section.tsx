"use client"

import { useState, useEffect, useRef, Suspense } from "react"
// import dynamic from "next/dynamic"
// import { Canvas } from "@react-three/fiber"
// import { BookCarousel3D } from "@/components/3d/book-carousel-3d"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"
import Slider from 'react-slick'

const defaultBooks = [
  { title: "Peace for the Anxious Heart", author: "Joey James", image: "/books/book1.jpg" },
  { title: "25 Bible Stories for Kids", author: "Edward Martin", image: "/books/book2.jpg" },
  { title: "Be Strong and Take Heart", author: "Hope Spirit Redemption", image: "/books/book3.webp" },
  { title: "When Nothing Makes Sense", author: "Victoria Vossey", image: "/books/book4.webp" },
  { title: "Voice of the Heart", author: "Greg Pai", image: "/books/book5.webp" },
  { title: "Christian Hymns Word Search", author: "Bronze Book Publishers ", image: "/books/book6.webp" },
  { title: "The Wisdom of Solomon", author: "NR Publishers", image: "/books/book7.webp" },
  { title: "Marriage On The Rock", author: "Jimmy Evans", image: "/books/book8.webp" },
  { title: "Toxic Relationships", author: "Mary Melissa Hall", image: "/books/book9.webp" },
  { title: "Bridges of Love and Understanding", author: "Rebekah Davis", image: "/books/book10.webp" },
  // { title: "Sacred Moments", author: "Palmer Publishing", image: "/books/book11.webp" },
  // { title: "The Bible Study Journal Advent Calendar", author: "Susan Mayford", image: "/books/book12.jpg" },
  { title: "Daily Devotional for Women", author: "Made Easy Press ", image: "/books/book13.webp" },
  { title: "The Book of Enoch", author: "Timothy Alberino", image: "/books/book14.webp" },
  { title: "Birthright", author: "Timothy Alberino", image: "/books/book15.webp" },
  { title: "The Gospel of Thomas (Deluxe Edition)", author: "Elias Rowan", image: "/books/book16.webp" },
]

interface FeaturedBooksSectionProps {
  books?: Array<{ title: string; author: string; image?: string }>
}

export function FeaturedBooksSection({ books = defaultBooks }: FeaturedBooksSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const isPaused = useRef(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Featured Books")

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640) // sm breakpoint
      setIsTablet(width >= 640 && width < 1024) // sm to lg
    }
    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => {
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % books.length)
      }
    }, 2600)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [books.length])

  /* 🔥 Responsive scale factor */
  const scaleFactor = isMobile ? 0.9 : isTablet ? 1.1 : 1.25

  // Responsive canvas height
  const getCanvasHeight = () => {
    if (isMobile) return "280px"
    if (isTablet) return "360px"
    return "clamp(420px, 45vh, 520px)"
  }

  // Responsive camera settings
  const getCameraSettings = () => {
    if (isMobile) return { position: [0, 0, 11] as [number, number, number], fov: 65 }
    if (isTablet) return { position: [0, 0, 9.5] as [number, number, number], fov: 56 }
    return { position: [0, 0, 8.5] as [number, number, number], fov: 52 }
  }

  const cameraSettings = getCameraSettings()

  const getInitialSlides = () => {
    if (typeof window === 'undefined') return 9;
    const width = window.innerWidth;
    if (width < 480) return 3;
    if (width < 600) return 5;
    if (width < 1099) return 7;
    return 9;
  };

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    // slidesToShow: 9,
    slidesToShow: getInitialSlides(),
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 5,
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 5,
    //     }
    //   },
    //   {
    //     breakpoint: 1099,
    //     settings: {
    //       slidesToShow: 7,
    //     }
    //   },
    //   {
    //     breakpoint: 9999,
    //     settings: {
    //       slidesToShow: 9,
    //     }
    //   }
    // ]
  };

  useEffect(() => {
    // Slider ko force refresh karein
    window.dispatchEvent(new Event('resize'));
  }, []);

  return (
    <section ref={sectionRef} id="books" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-background relative overflow-hidden pb-0!">
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
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-2 sm:mb-4 min-h-[1.2em] px-2">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-3 sm:px-2">
            See our featured collection and find the perfect book to deepen your faith and guide you in your walk with God.
          </p>
        </div>

        {/* <div
          className="w-full relative"
          style={{
            height: getCanvasHeight(),
            maxWidth: "1400px",
            marginInline: "auto",
          }}
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-xs sm:text-base text-muted-foreground">Loading books...</div>
            </div>
          }>
            <Canvas
              dpr={isMobile ? [0.8, 1.2] : [1, 1.5]}
              camera={cameraSettings}
            >
              <ambientLight intensity={isMobile ? 1.2 : isTablet ? 1.0 : 0.9} />
              <directionalLight
                position={isMobile ? [0, 9, 11] : isTablet ? [0, 7, 9] : [0, 6, 8]}
                intensity={isMobile ? 1.7 : isTablet ? 1.5 : 1.4}
              />
              <directionalLight
                position={isMobile ? [-9, 6, 6] : isTablet ? [-7, 5, 5] : [-6, 4, 4]}
                intensity={isMobile ? 0.8 : isTablet ? 0.65 : 0.6}
              />
              <spotLight
                position={isMobile ? [0, 10, 13] : isTablet ? [0, 8, 11] : [0, 7, 10]}
                angle={0.35}
                penumbra={1}
                intensity={isMobile ? 1.6 : isTablet ? 1.4 : 1.3}
              />

              <BookCarousel3D
                books={books}
                activeIndex={activeIndex}
                onIndexChange={setActiveIndex}
                onHoverActive={(hovered) => (isPaused.current = hovered)}
                isMobile={isMobile}
                scale={scaleFactor}
              />
            </Canvas>
          </Suspense>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-8 text-center px-3 sm:px-4">
          <h3 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-foreground wrap-break-word">
            {books[activeIndex].title}
          </h3>
          <p className="text-xs sm:text-base md:text-lg text-muted-foreground mt-1 sm:mt-2">
            by {books[activeIndex].author}
          </p>
        </div> */}

        <Slider {...settings} className="book-slider">
          {defaultBooks.map((book, index) => (
            <div key={index} className="slide">
              <img src={book.image} alt={book.title} />
              <div className="book-info pt-7 sm:pt-14 md:pt-20 lg:pt-28">
                <h3 className="text-base sm:text-xl md:text-2xl font-serif font-bold text-foreground wrap-break-word">{book.title}</h3>
                <p className="text-xs sm:text-base md:text-lg text-muted-foreground mt-1 sm:mt-2">by {book.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}
