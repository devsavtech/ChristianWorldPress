import { useState, useEffect, useRef, RefObject } from "react"

export function useCountAnimation(
  targetValue: number,
  duration: number = 2000,
  suffix: string = "",
  triggerRef?: RefObject<HTMLElement | null> | RefObject<HTMLElement>
) {
  const [count, setCount] = useState(0)
  const hasStartedRef = useRef(false)
  const animationFrameRef = useRef<number | null>(null)

  const startAnimation = () => {
    if (hasStartedRef.current) return
    hasStartedRef.current = true

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)

      setCount(currentValue)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(targetValue)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (!triggerRef?.current) return

    // Check if already in view on mount
    const rect = triggerRef.current.getBoundingClientRect()
    const isInView = rect.top < window.innerHeight && rect.bottom > 0

    if (isInView && !hasStartedRef.current) {
      // Small delay to ensure component is fully mounted
      setTimeout(() => {
        startAnimation()
      }, 100)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation()
        } else {
          // Reset when leaving viewport
          setCount(0)
          hasStartedRef.current = false
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
            animationFrameRef.current = null
          }
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(triggerRef.current)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (triggerRef.current) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [targetValue, duration, triggerRef])

  const formattedCount = count.toLocaleString() + suffix

  return { count: formattedCount }
}

