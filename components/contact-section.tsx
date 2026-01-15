"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

export function ContactSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Get In Touch")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      // Get domain and brand dynamically from the current window location
      const domain = typeof window !== "undefined" ? window.location.hostname : ""
      const brand = typeof window !== "undefined" ? window.location.hostname : ""

      // Format the brief message with route information
      const brief = `${formData.message}\n\n[Route] contact-form`

      // Prepare the request body according to the API specification
      const requestBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        brief: brief,
        domain: domain,
        brand: brand,
      }

      // Make the API request
      const response = await fetch("https://savtrack.savtechglobal.com/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      })
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" })
      }, 5000)
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
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      {/* <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/vintage-bible-cross-pendant-jewelry.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      /> */}
      {/* Logo background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/img/ChrisitanWorldPressLogo.png')`,
          backgroundPosition: "center center",
          backgroundSize: "50%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5 md:space-y-6 bg-card/50 p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-border rounded"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm sm:text-base h-9 sm:h-10"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm sm:text-base h-9 sm:h-10"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground text-sm sm:text-base h-9 sm:h-10"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-foreground mb-1.5 sm:mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
              placeholder="Your message here..."
            />
          </div>

          {submitStatus.type && (
            <div
              className={`p-3 sm:p-4 rounded text-xs sm:text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <Button 
            type="submit" 
            className="btn-primary w-full text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-2.5 md:py-3 h-9 sm:h-10 md:h-11" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </Button>
        </form>
      </div>
    </section>
  )
}
