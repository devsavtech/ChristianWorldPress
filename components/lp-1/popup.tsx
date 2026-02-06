"use client";

import { useState, useEffect } from "react";

interface PopupProps {
  onClose: () => void;
}

export function Popup({ onClose }: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    // Show popup after a short delay to demonstrate it
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare the request body
      const requestBody = {
        name: formData.name, //for Name
        email: formData.email, //for email
        phone: formData.phone, //for Phone no
        brief: formData.message, //for Message
        domain: "www.christianworldpress.com", //domain,
        tag: "Landing Page",
        brand: "christianworldpress.com", //brand,
      };

      const response = await fetch("/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Close popup after successful submission
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2">
      <div className="relative bg-background rounded-lg shadow-xl max-w-md w-full overflow-hidden border border-border">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-foreground hover:text-accent hover:bg-background p-1 rounded-full w-7 h-7 flex items-center justify-center z-10 cursor-pointer"
          aria-label="Close popup"
        >
          &times;
        </button>

        <div className="p-4">
          <h2 className="text-lg font-bold text-center mb-3 text-foreground font-serif">
            GET IN TOUCH
          </h2>

          {submitStatus.type && (
            <div
              className={`p-3 rounded text-xs mb-3 ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-xs"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-2 py-1 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent focus:border-transparent text-sm"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div className="mt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-white py-1 px-2 rounded hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors text-sm disabled:opacity-50"
              >
                {isSubmitting ? "SENDING..." : "SEND"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
