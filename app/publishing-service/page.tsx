"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Form } from "@/components/lp-1/form";
import { Popup } from "@/components/lp-1/popup";
import { TitlePublished } from "@/components/lp3/titlepublished";
import Testimonials2 from "@/components/lp3/testimonials";
import { Portfolio } from "@/components/lp3/portfolio";
import { motion, AnimatePresence } from "framer-motion"; // Added for life

import {
  Mail,
  Check,
  BookOpen,
  Image as ImageIcon,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  Globe,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { ExpertProcess } from "@/components/lp2/expertprocess";
import { Services360 } from "@/components/lp3/Services360";
import { ClassicButton } from "@/components/ui/classicbutton";

const features = [
    "Genre-specific publishing",
    "Book pricing discussion",
    "Publishing platform selection",
    "Quick turnaround time",
  ];
  const faqs = [
    {
      q: "What are the steps involved in the book publishing process?",
      a: "Our comprehensive process includes manuscript evaluation, professional editing, custom cover design, formatting for print and digital platforms, and widespread global distribution.",
    },
    {
      q: "Do you offer both traditional and self-publishing options?",
      a: "We specialize in premium self-publishing solutions that give you the quality of traditional publishing while allowing you to retain 100% of your rights and royalties.",
    },
    {
      q: "Can you assist with book cover design, editing, and formatting?",
      a: "Absolutely! Our 360-degree services cover every aspect of book creation. Our team of expert editors and award-winning designers ensure your book meets the highest industry standards.",
    },
    {
      q: "How is book distribution handled and made available to retailers?",
      a: "We distribute your book globally through major channels including Amazon, Barnes & Noble, Apple Books, and Ingram, making it available to thousands of retailers, bookstores, and libraries worldwide.",
    },
    {
      q: "What royalty and payment structures are offered for published authors?",
      a: "You keep 100% of the net royalties from your book sales. Once your book is published, all earnings go directly to you without any hidden fees or percentage cuts from our side.",
    },
  ]
const footerLinks = {
  navigation: [],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
  ],
  social: [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:authorrelations@christianworldpress.com",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/people/Christian-World-Press/61586607706132/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/christian-world-press/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/christianworldpress.official/",
    },
    {
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "X",
      href: "https://x.com/christianpress_",
    },
  ],
};

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const toggleLiveChat = () => {
    if (typeof window !== "undefined" && (window as any).LiveChatWidget) {
      (window as any).LiveChatWidget.call("maximize");
    }
  };
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {isPopupOpen && (
        <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      )}
      {/* ── HERO SECTION ── */}
      {/* ── STICKY NAVBAR ── */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo/Chrisitan World Press Logo.png"
              alt="AMZ Books Services"
              className="h-12 md:h-16 object-contain"
            />
          </div>

          {/* Nav Actions */}
          <div className="flex items-center gap-2">
            <ClassicButton
              href="tel:+17144757922"
              className="phone_button hidden " // Hidden on mobile to save space, or keep visible
              variant="textblack"
            >
              (714) 475-7922
            </ClassicButton>

            <ClassicButton
              variant="primary"
              onClick={() => setIsPopupOpen(true)}
              className="popup_button"
            >
              PUBLISH YOUR BOOK
            </ClassicButton>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden pt-20" // Added pt-20 to account for sticky nav height
        style={{ minHeight: "100vh" }}
      >
        {/* Background image */}
        <Image
          src="/lp3/image2.webp"
          alt="Background"
          fill
          className="object-cover object-center opacity-60 -z-10"
          priority
        />

        {/* Hero content row */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 px-4 py-12 lg:py-12 relative z-10">
          {/* ── Left column ── */}
          <div className="flex flex-col justify-center flex-1 w-full lg:max-w-lg text-white">
            {/* Headline */}
            <div className="mb-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-4xl font-extrabold leading-tight text-uppercase">
                PROFESSIONAL
                <br />
                 BOOK PUBLISHING
                <br />
                <span className="text-[#8B0000]">SERVICES</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl font-semibold">
                Turn Your Manuscript into a Published Book That Sells
              </p>
            </div>

            {/* Bullet points */}
            <ul className="mb-8 space-y-3">
              {[
                "You Keep 100% Rights & Royalties",
                "Strategic Promotion & Expert Guidance",
                "Unlimited Revisions & 24/7 Support",
                "Free Manuscript Evaluation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base md:text-lg"
                >
                  <span className="text-[#8B0000] text-xl font-bold mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-row md:flex-row gap-3 md:gap-4 items-center mt-2">
              <ClassicButton
                variant="primary"
                icon={BookOpen}
                className="popup_button"
                onClick={() => setIsPopupOpen(true)}
              >
                Publish Your Book
              </ClassicButton>
              <ClassicButton
                onClick={toggleLiveChat}
                variant="textOutline"
                icon={MessageCircle}
                className="chat_button"
              >
                Talk to Us
              </ClassicButton>
            </div>
          </div>

          {/* ── Center portrait (desktop only) ── */}
          <div className="hidden lg:flex items-center justify-center shrink-0 mx-4">
            <div className="relative w-[320px] h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/lp3/rectangle3.png"
                alt="Portrait"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ── Right column – CTA card ── */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg flex flex-col items-center justify-center">
            <div className="w-full bg-[#8B0000] rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-4 border border-[#a00000]">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight text-white text-center">
                Sign Up to get a FREE
                <br />
                Manuscript Review
              </h2>
              <p className="font-semibold text-base md:text-lg mb-4 text-white/90 text-center">
                GET PUBLISHED FOR HALF THE PRICE AND SHARE YOUR STORY TODAY!
              </p>
              <button
                onClick={() => setIsPopupOpen(true)}
                type="button"
                className="w-full bg-black hover:bg-gray-900 text-white font-extrabold text-lg py-4 rounded-xl mt-2 transition-transform transform hover:scale-[1.02] shadow-lg popup_button"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARTNERS MARQUEE ── */}
      <section className="w-full bg-white py-8 px-4 flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 mx-auto">
          <div className="flex flex-col items-center md:items-end w-full md:w-auto md:min-w-[200px] shrink-0">
            <span className="text-2xl md:text-3xl font-extrabold leading-tight text-black text-center md:text-right">
              Distribution <span className="text-[#8B0000]">Platforms</span>
              <br className="hidden md:block" />
            </span>
          </div>
          <div className="hidden md:block h-16 w-1 bg-gradient-to-b from-[#8B0000] to-[#8B0000]/60 rounded-full" />
          <div className="flex-1 overflow-hidden relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex items-center gap-12 whitespace-nowrap w-max animate-marquee">
              {[
                { src: "/lp3/image8.png", alt: "Amazon Kindle" },
                { src: "/lp3/image9.png", alt: "Barnes & Noble" },
                { src: "/lp3/image10.png", alt: "Google Play Books" },
                { src: "/lp3/image11.png", alt: "Apple Books" },
                { src: "/lp3/image12.png", alt: "Bunindie" },
                // Duplicate for infinite scroll loop
                { src: "/lp3/image8.png", alt: "Amazon Kindle 2" },
                { src: "/lp3/image9.png", alt: "Barnes & Noble 2" },
                { src: "/lp3/image10.png", alt: "Google Play Books 2" },
                { src: "/lp3/image11.png", alt: "Apple Books 2" },
                { src: "/lp3/image12.png", alt: "Bunindie 2" },
              ].map(({ src, alt }) => (
                <Image
                  key={alt}
                  src={src}
                  alt={alt}
                  width={140}
                  height={50}
                  className="object-contain  filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <RevealSection>
        <Testimonials2 />
      </RevealSection>

        <RevealSection bg="bg-white">
        <TitlePublished />
      </RevealSection>
      {/* ── PRICING PACKAGES ── */}
      <section className="w-full py-12 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            <span className="text-black ">Affordable </span>
            <span className="text-[#8B0000] ">Book Publishing Packages
            </span>
            
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase mt-2 text-black">
            For Your Author Journey!
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch px-4">
          {/* Debutant */}
          <PricingCard
            title="Debut Author"
            highlighted={false}
            onSelect={() => setIsPopupOpen(true)}
            features={[
              "Typesetting",
              "Professional Formatting",
              "Authors Central Page",
              "Books Profile",
              "Finalized Digital Files",
              "Book Cover",
              "Print on Demand",
              "Amazon Optimization",
              "ISBN Assignment",
            ]}
            brief=" Start Your Story"
          />

          {/* Firestarter (featured) */}
          <PricingCard
            title="Author Launch"
            highlighted={true}
            onSelect={() => setIsPopupOpen(true)}
            features={[
              "Publishing (Top 2 Platforms)",
              "Amazon Publication",
              "Barnes & Noble Publication",
              "Digital EBook Version",
              "Paperback, and hardcover",
              "Professional Editing",
              "Proofreading",
              "Page Layout Services",
              "Typesetting",
            ]}
            brief="Grow Your Audience"
          />

          {/* Best Seller */}
          <PricingCard
            title="Author Elite"
            highlighted={false}
            onSelect={() => setIsPopupOpen(true)}
            features={[
              "Publishing (Top 4 Platforms)",
              "Amazon Publication",
              "Barnes & Noble Publication",
              "Kobo Publication",
              "Google Books Publication",
              "Digital EBook Version",
              "Paperback & Hardcover",
              "Proofreading",
              "Page Layout Services",
            ]}
            brief="Build Your Bestseller "
          />
        </div>
      </section>

      {/* ── CONNECT WITH EXPERT ── */}
  <section className="relative w-full bg-[#000000] py-20 md:py-28 px-6 md:px-20 overflow-hidden">
      {/* Background "Expert" Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B0000]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 flex flex-col gap-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-black text-white leading-tight">
              CONNECT WITH OUR BOOK <br />
              <span className="text-[#8B0000] drop-shadow-[0_0_15px_rgba(139,0,0,0.3)]">
                PUBLISHING EXPERTS
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
          >
            Most writers do not struggle because they lack talent. They struggle because they try to figure out publishing alone. One wrong decision on formatting, pricing, platform selection, or marketing can bury a good book before it ever has a chance.
          </motion.p>

          {/* Animated Checklist */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-3 text-white text-base md:text-lg group"
              >
                <div className="bg-[#8B0000]/20 p-1 rounded-full group-hover:bg-[#8B0000] transition-colors duration-300">
                  <CheckCircle className="w-5 h-5 text-[#8B0000] group-hover:text-white" />
                </div>
                <span className="font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex flex-row sm:flex-row gap-5 items-start sm:items-center mt-4">
            <ClassicButton
              variant="primary"
              icon={BookOpen}
              className=" popup_button"
              onClick={() => setIsPopupOpen(true)}
            >
              Publish Your Book
            </ClassicButton>
            
            <ClassicButton
              href="tel:+17144757922"
              variant="textOutline"
              icon={PhoneIcon}
              className=" phone_button"
            >
              Call Now
            </ClassicButton>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-400 text-base"
          >
            Or start a{" "}
            <span
              onClick={toggleLiveChat}
              className="text-[#ff1a1a] font-bold cursor-pointer hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Live Chat
            </span>{" "}
            to discuss your requirements instantly.
          </motion.p>
        </div>

        {/* Right Side: Visual Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Decorative Ring */}
          <div className="absolute inset-0 border-2 border-[#8B0000]/20 rounded-full scale-110 animate-[spin_20s_linear_infinite] pointer-events-none" />
          
          <motion.div
            whileHover={{ y: -10, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10"
          >
            <Image
              src="/lp3/group1.png"
              alt="Publishing agent"
              width={540}
              height={440}
              className="object-contain drop-shadow-[0_0_30px_rgba(139,0,0,0.2)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
      <RevealSection bg="bg-white">
        <Portfolio />
      </RevealSection>

      {/* ── 4-STEP PROCESS ── */}
      <RevealSection bg="bg-white">
        <ExpertProcess />
      </RevealSection>

      {/* ── 500 PLATFORMS ── */}
   <section className="relative w-full bg-[#fafafa] py-20 md:py-28 px-6 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#8B0000]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative z-10">
        
        {/* Left Side: Animated Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="shrink-0 w-full max-w-md lg:max-w-xl relative group"
        >
          {/* Subtle Glow behind books */}
          <div className="absolute inset-0 bg-[#8B0000]/10 blur-[100px] rounded-full scale-75 group-hover:scale-90 transition-transform duration-1000" />
          
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/lp3/group2.png"
              alt="Books distribution network"
              width={600}
              height={700}
              className="w-full h-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.15)] relative z-10"
              priority
            />
          </motion.div>

          {/* Floating Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-4 -right-4 md:right-0 bg-white shadow-xl p-4 rounded-2xl flex items-center gap-3 z-20 border border-gray-100"
          >
            <div className="bg-[#8B0000] p-2 rounded-lg">
              <Globe className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Reach</span>
              <span className="text-sm font-black text-black">500+ Platforms</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-4xl lg:text-5xl text-black font-black leading-[1.1] mb-6">
              REACH <span className="relative inline-block">
                <span className="text-[#8B0000]">OVER 500</span>
                <motion.svg 
                  viewBox="0 0 200 8" 
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#8B0000]/30"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                </motion.svg>
              </span> BOOK PLATFORMS WORLDWIDE
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 leading-relaxed">
            We help you publish your book across more than 500 major bookstores, eBook platforms, and online retailers, so your book has a real chance to be discovered, purchased, and shared.
            </p>

            <div className="flex flex-row sm:flex-row gap-4 justify-center md:justify-start">
              <ClassicButton
                variant="primary"
                icon={BookOpen}
                onClick={() => setIsPopupOpen(true)}
                className=" popup_button"
              >
                Publish Your Book
              </ClassicButton>
              
              <ClassicButton
                onClick={toggleLiveChat}
                icon={MessageCircle}
                variant="outline"
                className=" chat_button"
              >
                Talk To Us
              </ClassicButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* ── 360° SERVICES ── */}
      <RevealSection bg="bg-white">
        <Services360 />
      </RevealSection>

      {/* ── PRINT-READY CTA ── */}
  <section className="relative w-full bg-[#000000] py-20 md:py-32 px-6 md:px-20 overflow-hidden">
      {/* Dynamic Background Light - Simulating a "Press" or "Studio" light */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8B0000]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex-1 flex flex-col gap-8 max-w-2xl text-center md:text-left items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-black text-white leading-tight">
              FROM PRINT-READY FILES TO <br />
              <span className="text-[#8B0000] inline-block mt-2">
                HOLDING YOUR FINISHED BOOK!
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium"
          >
            Most authors never make it past a finished manuscript. They get stuck trying to figure out formatting, printing, publishing, and what to do next. We take you from print-ready files to a professionally published book you can actually hold, share, and sell.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-row sm:flex-row gap-4 items-center mt-2">
            <ClassicButton
              variant="primary"
              icon={BookOpen}
              className=" popup_button"
              onClick={() => setIsPopupOpen(true)}
            >
              Publish Your Book
            </ClassicButton>
            
            <ClassicButton
              href="tel:+17144757922"
              variant="textOutline"
              icon={PhoneIcon}
              className=" phone_button"
            >
              Call Now
            </ClassicButton>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 text-base"
          >
            Or start a{" "}
            <span
              onClick={toggleLiveChat}
              className="text-[#ff1a1a] font-bold cursor-pointer hover:text-white transition-colors underline underline-offset-4"
            >
              Live Chat
            </span>{" "}
            to discuss your requirements
          </motion.p>
        </div>

        {/* Right Side: Animated Book Stack */}
        <motion.div 
          initial={{ opacity: 0, x: 40, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Smooth "Out-Expo" curve
          className="flex-1 flex justify-center items-center perspective-1000"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative"
          >
            {/* The "Glow" behind the book stack */}
            <div className="absolute inset-0 bg-[#8B0000]/20 blur-3xl scale-90 rounded-full" />
            
            <Image
              src="/lp3/image16.webp"
              alt="Books stack"
              width={540}
              height={340}
              className="relative z-10 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
              priority
            />
            
            {/* Glossy Overlay for "Alive" effect */}
            <motion.div 
               animate={{ opacity: [0.1, 0.3, 0.1], x: [-10, 10, -10] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-20 pointer-events-none"
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
      {/* ── FAQ ── */}
     <section className="w-full flex flex-col items-center py-24 px-6 md:px-8 bg-[#f9fafb] overflow-hidden">
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl  font-black text-slate-900 tracking-tight uppercase">
          FREQUENTLY <span className="text-[#8B0000]">ASKED QUESTIONS</span>
        </h2>
      </motion.div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-5">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              layout
              className={`group rounded-2xl transition-all duration-500 border-2 ${
                isOpen 
                ? "bg-white border-[#8B0000] shadow-[0_20px_40px_-15px_rgba(139,0,0,0.1)] scale-[1.02]" 
                : "bg-white/50 border-gray-100 hover:border-gray-300 shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(isOpen ? null : index)}
                className="w-full flex justify-between items-center px-6 md:px-10 py-7 text-left focus:outline-none"
              >
                <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-[#8B0000]" : "text-slate-800"}`}>
                  {faq.q}
                </span>
                
                <div className={`p-2 rounded-full transition-all duration-500 ${isOpen ? "bg-[#8B0000] text-white rotate-180" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}>
                  <ChevronDown className="w-6 h-6" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 md:px-10 pb-8">
                      <div className="h-px bg-gray-100 w-full mb-6" />
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      
      {/* Optional: Add a "Still have questions?" sub-cta */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-gray-500 font-medium"
      >
        Still have questions? <span className="text-[#8B0000] font-bold cursor-pointer hover:underline">Contact our support team</span>
      </motion.p>
    </section>

      {/* ── CONTACT + FORM ── */}
      <section className="w-full bg-[#fcfcfc] py-16 px-4 md:px-8 flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-between mx-auto">
          {/* Left Side: Text & Contact Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-2 ">
              PUBLISH ON AMAZON, KINDLE &amp; MORE.
            </h1>
            <h2 className="text-[#8B0000] text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
              FREE MANUSCRIPT REVIEW
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Turn your manuscript into a professionally published book on
              Amazon Kindle, paperback, hardcover, and more. From formatting and
              cover design to publishing and distribution, we handle the process
              for you.
            </p>

            {/* Contact Info Group */}
            <div className="space-y-5 max-w-md mx-auto md:mx-0 mb-8">
              <ContactRow
                icon="phone"
                text="+ (714) 475-7922"
                href="tel:+17144757922"
              />
              <ContactRow
                icon="email"
                text="authorrelations@christianworldpress.com"
                href="mailto:authorrelations@christianworldpress.com"
              />
              <ContactRow
                icon="location"
                text="13100 Wortham Center Dr, Suite 320 Houston, TX 77065 US"
              />
            </div>
            {/* Refined Social Icons Section */}
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Follow Our Press
            </p>
            <div className="flex items-center justify-center md:justify-start gap-5">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-black transition-all duration-300 hover:bg-[#8B0000] hover:text-white hover:shadow-lg"
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact form */}
          <div className="flex-1 w-full max-w-xl bg-[#8B0000] rounded-[2.5rem] shadow-[0_20px_50px_rgba(139,0,0,0.3)] overflow-hidden border border-[#a00000]">
            <Form />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#111111] text-gray-500 py-6 mt-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
          {/* Compact Top Row: Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-[11px] md:text-xs">
            <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-2 md:pb-0 md:pr-6">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </Link>
            </div>

            <p className="tracking-tight">
              © 2026{" "}
              <span className="text-gray-400 font-medium">
                Christian World Press
              </span>
              . All Rights Reserved.
            </p>
          </div>

          {/* Ultra-Slim Disclaimer */}
          <p className="text-[10px] leading-tight text-white text-center max-w-4xl italic">
            Christian World Press Group LLC is an independent publishing
            services provider and is not affiliated with, endorsed by, or
            sponsored by Amazon or Kindle Direct Publishing.
          </p>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────
// HELPERS FOR "ALIVE" FEEL
// ─────────────────────────────────────────

function RevealSection({ children, bg, dark = false }: { children: React.ReactNode, bg: string, dark?: boolean }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`w-full ${bg} ${dark ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.section>
  );
}


// ─────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────

function PricingCard({
  brief,
  title,
  highlighted,
  features,
  onSelect,
}: {
  brief: string;
  title: string;
  highlighted: boolean;
  features: string[];
  onSelect?: () => void;
}) {
  return (
    <div
      className={`relative flex-1 w-full max-w-sm mx-auto rounded-[2rem] border-2 p-8 flex flex-col items-center ${
        highlighted
          ? "bg-[#8B0000] border-[#8B00008B0000] shadow-2xl text-white transform md:-translate-y-4 md:scale-105 z-10"
          : "bg-white border-gray-100 text-black shadow-lg"
      }`}
    >
      <div
        className={`text-xl font-bold uppercase mb-1 ${
          highlighted ? "text-white" : "text-gray-600"
        }`}
      >
        {title}
      </div>
      <div
        className={`text-2xl font-black mb-8 ${
          highlighted ? "text-white" : "text-black"
        }`}
      >
        {brief}
      </div>
      <ul className="flex-1 w-full mb-8 space-y-4 text-left">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-base font-medium">
            <span className={highlighted ? "text-white" : "text-[#8B0000]"}>
              <Check size={20} strokeWidth={3} />
            </span>
            <span className={highlighted ? "text-white" : "text-gray-800"}>
              {f}
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={onSelect}
        className={`mt-auto w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-transform transform hover:scale-105 popup_button ${
          highlighted
            ? "bg-black text-white hover:bg-gray-900"
            : "bg-[#8B0000] text-white hover:bg-[#6b0000]"
        }`}
      >
        Select Package
      </button>
    </div>
  );
}


function ContactRow({
  icon,
  text,
  href,
}: {
  icon: "phone" | "email" | "location";
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center text-lg md:text-xl font-bold text-black border-b border-[#8B0000]/20 pb-3 gap-3 transition-colors hover:border-[#8B0000]/50">
      <span className="text-[#8B0000] text-2xl flex-shrink-0">
        {icon === "phone" ? "📞" : icon === "email" ? "✉️" : "📍"}
      </span>
      <span className="break-words">{text}</span>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    <div className="block">{content}</div>
  );
}

// ─── Inline SVG icons ───
function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
