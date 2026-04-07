"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useCountAnimation } from "@/hooks/useCountAnimation"
import Link from "next/link"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" })
  const titlesCount = useCountAnimation(100, 4000, "+", sectionRef)
  const retailersCount = useCountAnimation(40000, 4000, "+", sectionRef)
  const countriesCount = useCountAnimation(220, 4000, "+", sectionRef)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const route = typeof window !== "undefined" ? window.location.href : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const requestBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        brief: formData.message,
        domain: "www.christianworldpress.com",
        tag: "Landing Page",
        brand: "christianworldpress.com",
        route: route,
      }

      const response = await fetch("/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      })
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen p-4 flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 20, 16, 0.8), rgba(26, 20, 16, 0.6)), url('/img/Our Books Section.jpg')`,
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-7 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight xl:w-9/12 lg:w-full">
                End-of-Month Sale.. <br /> <span className="text-red-500">28% Off </span>All Author Promotion Services
              </h1>
              <p className="text-base sm:text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto md:mx-0">
                Your calling deserves visibility. Christian World Press features Christian authors who write with purpose and conviction. For a limited time, receive 28% off our author spotlight and promotional packages.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-7 md:pt-8 border-t border-border/20">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{titlesCount.count}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Titles Published</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{retailersCount.count}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Retailers Reached</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">{countriesCount.count}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2 bg-background/95 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-border w-full sm:w-4/5 md:w-3/4 mx-auto lg:max-w-none lg:w-full lg:mx-0">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-foreground font-serif">
              Claim Your 28% Off
            </h2>

            {submitStatus.type && (
              <div
                className={`p-3 rounded text-sm mb-4 ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white py-2 px-4 rounded hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors text-sm font-medium disabled:opacity-50 cursor-pointer form_button"
              >
                {isSubmitting ? "SENDING..." : "CLAIM OFFER"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
