import { Button } from "@/components/ui/button";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { useState } from "react";

export function Experience() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation(
    "Ready to Share Your Message as a Christian Author?"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const requestBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        brief: formData.message,
        domain: "www.christianworldpress.com",
        tag: "Landing Page",
        brand: "christianworldpress.com",
      };

      const response = await fetch("/api/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
        console.log("Form submitted successfully");

        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 3000);
      } else {
        throw new Error(`API request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again later.",
      });

      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {displayedText || " "}
              {isTyping && <span className="animate-pulse">|</span>}
            </h2>
            <p className="text-lg text-gray-300 mx-auto lg:mx-0 max-w-2xl">
              Your book has the power to encourage, inspire, and reach lives. Let Christian World
              Press help you take the next step with clear guidance and a simple publishing process.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md w-full mx-auto lg:ml-auto lg:mr-0 mt-12 lg:mt-0">
            <div className="bg-[#8b0000] py-4 text-center">
              <h3 className="text-white font-bold text-xl uppercase">Get A Free Consultation</h3>
            </div>
            <div className="p-8">
              {submitStatus.type && (
                <div
                  className={`mb-4 p-3 rounded text-sm ${
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
                  <label className="block text-sm text-gray-600 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g John Doe"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#8b0000] text-black"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
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
                  >
                    <option value="">Services</option>
                    <option value="publishing">Publishing</option>
                    <option value="editing">Editing</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-sm uppercase font-bold py-6 disabled:opacity-50"
                  >
                    {isSubmitting ? "SENDING..." : "Start Your Journey"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}