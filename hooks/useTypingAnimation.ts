import { useState, useEffect, useRef } from "react"

export function useTypingAnimation(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const hasCheckedInitialView = useRef(false)

  const startAnimation = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    // Reset and start typing animation
    setDisplayedText("")
    setIsTyping(true)
    let currentIndex = 0

    intervalRef.current = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setIsTyping(false)
      }
    }, speed)
  }

  useEffect(() => {
    if (!sectionRef.current) return

    // Check if already in view on mount
    const checkInitialView = () => {
      if (sectionRef.current && !hasCheckedInitialView.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom > 0
        
        if (isInView) {
          hasCheckedInitialView.current = true
          startAnimation()
        }
      }
    }

    // Small delay to ensure component is mounted
    const timeoutId = setTimeout(checkInitialView, 100)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasCheckedInitialView.current = true
          startAnimation()
        } else {
          // Reset when leaving viewport
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          setDisplayedText("")
          setIsTyping(false)
          hasCheckedInitialView.current = false
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      clearTimeout(timeoutId)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [text, speed])

  return { displayedText, isTyping, sectionRef }
}

