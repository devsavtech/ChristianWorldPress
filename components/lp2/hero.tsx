import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Popup } from "@/components/lp-1/popup";

export function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
    const toggleLiveChat = () => {
    if (typeof window !== 'undefined' && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call('maximize');
    }
  };
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section className="relative w-full min-h-[600px] flex items-center pt-20 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vintage-christian-books-library.jpg"
          alt="Vintage Christian Books Library Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-[#8b0000] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              Ready to share your message with the world?
            </span>
            <h1 className="font-serif text-4xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-foreground leading-tight">
              Best Book Publishing Stop for Christian Authors
            </h1>
            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
              Publishing doesn't have to be complicated. Christian World Press helps faith-driven authors bring their
              books to life with professional support every step of the way. We handle the details so your message can
              reach the people who need it most.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button 
                onClick={toggleLiveChat}
                variant="outline"
                className="chat_button text-white border-white hover:bg-white hover:text-black rounded-none uppercase px-8 py-6 w-full sm:w-auto"
              >
                Live Chat
              </Button>
              <Button
                onClick={() => setShowPopup(true)}
                className="bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-none uppercase font-bold px-8 py-6 w-full sm:w-auto"
              >
                Get A Quote
              </Button>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto lg:ml-auto lg:mr-0 w-full">
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
                    className="w-full bg-[#8b0000] hover:bg-[#6b0000] text-white rounded-full uppercase font-bold py-6 disabled:opacity-50 form_button"
                  >
                    {isSubmitting ? "SENDING..." : "Start Your Journey"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </section>
  );
}