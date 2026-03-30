"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

export function Form() {
  const { displayedText, isTyping, sectionRef } =
    useTypingAnimation("Get In Touch");
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Get domain and brand dynamically from the current window location
      const domain =
        typeof window !== "undefined" ? window.location.hostname : "";
      const brand =
        typeof window !== "undefined" ? window.location.hostname : "";

      // Format the brief message with route information
      const brief = `${formData.message}`;

      console.log(brief);
      // Prepare the request body according to the API specification
      const requestBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        brief: brief,
        domain: "www.christianworldpress.com", //domain,
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

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
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

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto lg:ml-auto lg:mr-0 w-full">
      <div className="bg-[#8b0000] py-4 text-center">
        <h3 className="text-white font-bold text-xl uppercase">
          Get A Free Consultation
        </h3>
      </div>
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g John Doe"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="e.g john@domain.com"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="e.g +1 123 456 7890"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Services</label>
            <select
              name="message"
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] bg-transparent text-black"
              value={formData.message}
              onChange={handleChange}
              required
            >
              <option value="">Services</option>
              <option value="publishing">Publishing</option>
              <option value="editing">Editing</option>
              <option value="marketing">Marketing</option>
            </select>
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

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-full uppercase font-bold py-6 disabled:opacity-50 form_button"
            >
              {isSubmitting ? "SENDING..." : "Start Your Journey"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
