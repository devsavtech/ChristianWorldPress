"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Form } from "@/components/lp-1/form";
import { Popup } from "@/components/lp-1/popup";
import { TitlePublished } from "@/components/lp3/titlepublished";
import Testimonials2 from "@/components/lp3/testimonials";
import { Portfolio } from "@/components/lp3/portfolio";
import {
  Mail,
  Check,
  BookOpen,
  Image as ImageIcon,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { ExpertProcess } from "@/components/lp2/expertprocess";
import { Services360 } from "@/components/lp3/Services360";
import { ClassicButton } from "@/components/ui/classicbutton";

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
          <div className="flex items-center gap-3">
            <ClassicButton
              href="tel:+17144757922"
              className="phone_button hidden md:flex" // Hidden on mobile to save space, or keep visible
              variant="textblack"
              icon={PhoneIcon}
            >
              (714) 475-7922
            </ClassicButton>

            <ClassicButton
              icon={BookOpen}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-uppercase">
                SOLUTIONS
                <br />
                FOR BOOK
                <br />
                <span className="text-[#8B0000]">PUBLISHING</span>
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
              BOOK <span className="text-[#8B0000]">PUBLISHING</span>
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>PARTNERS
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

      <Testimonials2 />

      {/* ── PRICING PACKAGES ── */}
      <section className="w-full py-12 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            <span className="text-black">Affordable </span>
            <span className="text-[#8B0000]">Book Publishing Packages</span>
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
      <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-6 md:px-20 gap-8 md:gap-12 bg-[#000000]">
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl font-black text-white leading-tight">
            CONNECT WITH OUR BOOK <br />
            <span style={{ color: "#8B0000" }}>PUBLISHING EXPERTS</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Most writers do not struggle because they lack talent. They struggle
            because they try to figure out publishing alone. One wrong decision
            on formatting, pricing, platform selection, or marketing can bury a
            good book before it ever has a chance.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            {[
              "Genre-specific publishing",
              "Book pricing discussion",
              "Publishing platform selection",
              "Quick turnaround time",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-white text-base md:text-lg"
              >
                <span className="text-[#8B0000]">✔</span> {item}
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
              href="tel:+17144757922" // Replace with your actual number
              variant="textOutline"
              icon={PhoneIcon}
              className="phone_button"
            >
              Call Now
            </ClassicButton>
          </div>
          <p className="text-white text-sm md:text-base">
            Or Start A{" "}
            <span onClick={toggleLiveChat} className="text-[#e60000] font-bold cursor-pointer chat_button">Live Chat</span> to
            discuss your requirements
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:ml-8">
          <Image
            src="/lp3/group1.png"
            alt="Publishing agent"
            width={540}
            height={340}
            className="object-cover"
          />
        </div>
      </section>

      <Portfolio />

      <TitlePublished />

      {/* ── 4-STEP PROCESS ── */}
      <ExpertProcess />

      {/* ── 500 PLATFORMS ── */}
      <section className="w-full bg-[#fafafa] py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <div className="shrink-0 w-full max-w-md md:max-w-sm lg:max-w-lg">
          <Image
            src="/lp3/group2.png"
            alt="Books"
            width={500}
            height={600}
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h2 className="text-4xl text-black font-extrabold leading-tight mb-4">
            REACH <span className="text-[#8B0000]">OVER 500</span> BOOK
            PLATFORMS WORLDWIDE
          </h2>
          <p className="text-lg md:text-xl text-[#222] mb-6">
            We help you publish your book across more than 500 major bookstores,
            eBook platforms, and online retailers, so your book has a real
            chance to be discovered, purchased, and shared.
          </p>
          <div className="flex flex-row sm:flex-row gap-4 justify-start mt-18 ">
            <ClassicButton
              onClick={toggleLiveChat}
              icon={MessageCircle}
              variant="outline"
              className="chat_button"
            >
              TALK TO US!
            </ClassicButton>
            <ClassicButton
              variant="primary"
              icon={BookOpen}
              onClick={() => setIsPopupOpen(true)}
              className="popup_button"
            >
              Publish Your Book
            </ClassicButton>
          </div>
        </div>
      </section>

      {/* ── 360° SERVICES ── */}
      <Services360 />

      {/* ── PRINT-READY CTA ── */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-6 md:px-20 bg-[#000000] gap-8 md:gap-12">
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl font-black text-white leading-tight">
            FROM PRINT-READY FILES TO <br />
            <span style={{ color: "#8B0000" }}>
              HOLDING YOUR FINISHED BOOK!
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Most authors never make it past a finished manuscript. They get
            stuck trying to figure out formatting, printing, publishing, and
            what to do next. We take you from print-ready files to a
            professionally published book you can actually hold, share, and
            sell.
          </p>
          <div className="flex flex-row md:flex-row gap-3 md:gap-4 items-center mt-2">
            <ClassicButton
              variant="primary"
              icon={BookOpen}
              onClick={() => setIsPopupOpen(true)}
              className="popup_button"
            >
              Publish Your Book
            </ClassicButton>

            <ClassicButton
              href="tel:+17144757922" // Replace with your actual number
              variant="textOutline"
              icon={PhoneIcon}
              className="phone_button"
            >
              Call Now
            </ClassicButton>
          </div>
          <p className="text-white text-sm md:text-base">
            Or Start A{" "}
            <span onClick={toggleLiveChat} className="text-[#e60000] font-bold cursor-pointer chat_button">Live Chat</span> to
            discuss your requirements
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:ml-8">
          <Image
            src="/lp3/image16.webp"
            alt="Books stack"
            width={540}
            height={340}
            className="object-cover"
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-8 bg-gray-50">
        <h2 className="text-3xl md:text-4xl  lg:text-[2.6rem] font-black text-center mb-16 tracking-tight text-slate-900">
          FREQUENTLY <span className="text-[#8B0000]">ASKED QUESTIONS</span>
        </h2>
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
          {[
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
          ].map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-sm border bg-white w-full overflow-hidden transition-all duration-300 ${openFaq === index ? "border-[#8B0000]" : "border-gray-200 hover:border-gray-300"}`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 md:px-10 py-6 text-lg md:text-xl font-bold text-left text-[#1A1A1A] transition-colors focus:outline-none"
                aria-expanded={openFaq === index}
              >
                <span className="pr-4">{faq.q}</span>
                <span
                  className={`flex-shrink-0 text-2xl transition-transform duration-300 ${
                    openFaq === index
                      ? "rotate-180 text-[#8B0000]"
                      : "text-gray-400"
                  }`}
                >
                  <ChevronIcon />
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index
                    ? "max-h-[500px] opacity-100 pb-6 px-6 md:px-10"
                    : "max-h-0 opacity-0 px-6 md:px-10 overflow-hidden"
                }`}
              >
                <div className="text-gray-600 text-base md:text-lg border-t border-gray-100 pt-4 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
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

function BookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
