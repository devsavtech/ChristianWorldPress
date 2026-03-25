"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Star,
  Check,
  FileText,
  Clock,
  BookOpen,
  Send,
  PenTool,
  Edit3,
  Image as ImageIcon,
  Calendar,
  Users,
  Award,
} from "lucide-react";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
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
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 px-4 py-20 lg:py-12 relative z-10">
          {/* ── Left column ── */}
          <div className="flex flex-col justify-between flex-1 w-full lg:max-w-lg text-white">
            {/* Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
             <img 
                src="/logo/Chrisitan World Press Logo.png"
                alt="AMZ Books Services"
                className="w-30 h-20 md:w-48  mb-6 object-contain"
              />
            </div>

            {/* Headline */}
            <div className="mb-4 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                KINDLE BOOK
                <br />
                PUBLISHING
                <br />
                <span className="text-[#8B0000]">SOLUTIONS</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl font-semibold">
                TURN YOUR STORY INTO A PUBLISHED BOOK!
              </p>
            </div>

            {/* Bullet points */}
            <ul className="mb-8 space-y-3">
              {[
                "Officially Affiliated with Amazon Publishing",
                "100% Book Rights and Royalties Retained.",
                "Boost Sales with Expert Recommendations.",
                "Strong multi-platform branding for authors.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base md:text-lg">
                  <span className="text-[#8B0000] text-xl font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Trust badges */}
            <div className="mt-auto flex flex-col gap-4 items-center lg:items-start">
              <div className="flex items-center gap-2 text-[#8B0000] text-lg font-bold">
                Trusted By{" "}
                <span className="text-white font-extrabold">5600+</span> Authors
                Worldwide
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Image
                  src="/lp3/image5.webp"
                  alt="Ratings"
                  width={120}
                  height={24}
                  className="object-contain"
                />
                <Image
                  src="/lp3/image6.webp"
                  alt="Awards"
                  width={280}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* ── Center portrait (desktop only) ── */}
          <div className="hidden lg:flex items-center justify-center shrink-0 mx-4">
            <div className="relative w-[320px] h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/lp3/image.png"
                alt="Portrait"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* ── Right column – CTA card ── */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg flex flex-col items-center justify-center mt-8 lg:mt-0">
            <div className="w-full bg-[#8B0000] rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-4 border border-[#a00000]">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight text-white text-center">
                50% OFF ON BOOK
                <br />
                PUBLICATION SERVICE
              </h2>
              <p className="font-semibold text-base md:text-lg mb-4 text-white/90 text-center">
                GET PUBLISHED FOR HALF THE PRICE AND SHARE YOUR STORY TODAY!
              </p>
              <button
                type="button"
                className="w-full bg-black hover:bg-gray-900 text-white font-extrabold text-lg py-4 rounded-xl mt-2 transition-transform transform hover:scale-[1.02] shadow-lg"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>

        {/* ── Fixed top-right nav ── */}
        <div className="fixed top-6 right-6 z-20 flex items-center gap-3">
          <a
            href="tel:+17275137702"
            className="bg-white hover:bg-gray-100 text-black font-bold px-5 py-3 text-lg rounded shadow-lg flex items-center gap-2 transition-colors"
          >
            <PhoneIcon />
            (727) 513-7702
          </a>
          <button
            type="button"
            className="bg-[#8B0000] hover:bg-[#6b0000] text-white  px-6 py-1 text-lg rounded shadow-lg"
          >
            REQUEST QUOTE
          </button>
        </div>

        {/* ── Fixed bottom-right chat bubble ── */}
        <div className="fixed bottom-6 right-6 z-20">
          <div className="w-12 h-12 bg-[#2563eb] rounded-full flex items-center justify-center shadow-lg cursor-pointer">
            <ChatIcon />
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
                { src: "/lp3/image8.webp", alt: "Amazon Kindle" },
                { src: "/lp3/image9.webp", alt: "Barnes & Noble" },
                { src: "/lp3/image10.webp", alt: "Google Play Books" },
                { src: "/lp3/image11.webp", alt: "Apple Books" },
                { src: "/lp3/image12.webp", alt: "Bunindie" },
                // Duplicate for infinite scroll loop
                { src: "/lp3/image8.webp", alt: "Amazon Kindle 2" },
                { src: "/lp3/image9.webp", alt: "Barnes & Noble 2" },
                { src: "/lp3/image10.webp", alt: "Google Play Books 2" },
                { src: "/lp3/image11.webp", alt: "Apple Books 2" },
                { src: "/lp3/image12.webp", alt: "Bunindie 2" },
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

      {/* ── TESTIMONIALS ── */}
      <section className="w-full bg-white py-16 px-4 flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden">
        <h2 className="text-4xl text-black md:text-5xl font-extrabold text-center mb-4">
          OVER <span className="text-[#8B0000]">1,000 BOOKS</span> PUBLISHED
          WORLDWIDE
        </h2>
        <p className="max-w-3xl text-center text-lg text-gray-700 mb-10">
          With a proven track record of publishing over 1,000 books across
          various platforms, our dedication to quality and success is clear.
          Discover what our clients have to say and see how our collaborative
          approach has helped bring countless stories to life.
        </p>
        <TestimonialSlider />
      </section>

      {/* ── PRICING PACKAGES ── */}
      <section className="w-full py-12 bg-[#fcfcfc]">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            <span className="text-black">Affordable </span>
            <span className="text-[#8B0000]">Book Publishing Packages</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold uppercase mt-2 text-black">
            For Aspiring Authors
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch px-4">
          {/* Debutant */}
          <PricingCard
            title="DEBUTANT"
            highlighted={false}
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
          />

          {/* Firestarter (featured) */}
          <PricingCard
            title="FIRESTARTER"
            highlighted={true}
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
          />

          {/* Best Seller */}
          <PricingCard
            title="BEST SELLER"
            highlighted={false}
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
          />
        </div>
      </section>

      {/* ── CONNECT WITH EXPERT ── */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-6 md:px-20 bg-gradient-to-br from-[#444] via-[#555] to-[#222] border-y border-[#8B0000]/20 gap-8 md:gap-12">
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl font-black text-white leading-tight">
            CONNECT WITH OUR BOOK <br />
            <span style={{ color: "#8B0000" }}>PUBLISHING EXPERT</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            If self-publishing were easy, you wouldn&apos;t need us. Connect
            with our senior book publishing agent to discover the best strategy
            for your manuscript—one that ensures it reaches and resonates with
            your target audience.
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
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center mt-2">
            <button
              type="button"
              className="bg-[#8B0000] text-white font-bold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-md border-2 border-[#8B0000] hover:bg-[#6b0000] transition-all"
            >
              REQUEST A QUOTE
            </button>
            <a
              href="tel:+17275137702"
              className="flex items-center justify-center text-[#ffffff] font-bold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-md border-2 border-[#ffffff] hover:bg-[#ffffff] hover:text-black transition-all"
            >
              <PhoneIcon className="mr-2" /> +1 (727) 513-7702
            </a>
          </div>
          <p className="text-white text-sm md:text-base">
            Or Start A{" "}
            <span className="text-[#000000] font-bold">Live Chat</span> to
            discuss your requirements
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 md:ml-8">
          <Image
            src="/lp3/image15.webp"
            alt="Publishing agent"
            width={540}
            height={340}
            className="object-cover"
          />
        </div>
      </section>

      {/* ── 4-STEP PROCESS ── */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-black font-extrabold text-center mb-8 leading-tight">
            EXPERT PROCESS TO{" "}
            <span className="text-[#8B0000]">PUBLISH YOUR BOOK</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              {
                title: "Gathering Requirements",
                desc: "Submit your manuscript and furnish additional details.",
                icon: <FileText size={48} strokeWidth={1.5} />,
              },
              {
                title: "Preparing the Manuscript",
                desc: "Get your book reviewed on your selected platform.",
                icon: <Edit3 size={48} strokeWidth={1.5} />,
              },
              {
                title: "Review of Published Book",
                desc: "Evaluate your published book on the platform of your choice.",
                icon: <Star size={48} strokeWidth={1.5} />,
              },
              {
                title: "Distributing Your Book",
                desc: "Spread the word about your published book!",
                icon: <Send size={48} strokeWidth={1.5} />,
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-8 border border-[#8B0000] rounded-xl bg-white shadow-md hover:shadow-lg transition h-full min-h-[280px]"
              >
                <div className="w-14 h-14 mb-4 text-[#8B0000] flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-[#222]">
                  {title}
                </h3>
                <p className="text-gray-600 text-base max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 500 PLATFORMS ── */}
      <section className="w-full bg-[#fafafa] py-16 px-4 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        <div className="shrink-0 w-full max-w-md md:max-w-sm lg:max-w-lg">
          <Image
            src="/lp3/image3.webp"
            alt="Books"
            width={500}
            height={600}
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h2 className="text-4xl text-black font-extrabold leading-tight mb-4">
            GET YOUR BOOK PUBLISHED ON <br />
            <span className="text-[#8B0000]">OVER 500</span> PLATFORMS
          </h2>
          <p className="text-lg md:text-xl text-[#222] mb-6">
            Expand your book&apos;s reach by publishing on more than 500
            platforms! Boost your visibility, connect with a wide range of
            readers, and take your literary journey to new heights.
          </p>
          <button
            type="button"
            className="bg-[#8B0000] text-white font-bold text-xl px-10 py-4 rounded-xl shadow-md hover:bg-[#6b0000] transition-colors"
          >
            TALK TO US!
          </button>
        </div>
      </section>

      {/* ── 360° SERVICES ── */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-black font-extrabold text-center mb-2 leading-tight">
            COMPREHENSIVE 360-DEGREE{" "}
            <span className="text-[#8B0000]">BOOK WRITING</span>
          </h2>
          <div className="text-3xl md:text-4xl text-black font-extrabold text-center mb-10 leading-tight">
            AND PUBLISHING SERVICES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "BOOK WRITING",
                desc: "Transform your concept into a book with the expertise of our skilled ghost book writers.",
                icon: <PenTool size={48} strokeWidth={1.5} />,
              },
              {
                title: "BOOK EDITING",
                desc: "Guarantee the smooth flow of your content with revisions by our proficient book editors.",
                icon: <Check size={48} strokeWidth={1.5} />,
              },
              {
                title: "COVER DESIGN",
                desc: "Engage readers with an eye-catching cover crafted by our book design team.",
                icon: <ImageIcon size={48} strokeWidth={1.5} />,
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center p-8 border border-[#8B0000] rounded-xl bg-white shadow-md hover:shadow-lg transition h-full min-h-[280px]"
              >
                <div className="w-14 h-14 mb-4 text-[#8B0000] flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-[#222]">
                  {title}
                </h3>
                <p className="text-gray-600 text-base max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINT-READY CTA ── */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-16 px-6 md:px-20 bg-gradient-to-br from-[#444] via-[#555] to-[#222] border-y border-[#8B0000]/20 gap-8 md:gap-12">
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          <h1 className="text-4xl font-black text-white leading-tight">
            FROM PRINT-READY FILES TO <br />
            <span style={{ color: "#8B0000" }}>
              HOLDING YOUR FINISHED BOOK!
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Begin your exciting journey from print-ready files to holding your
            very own book by connecting with our call representative. Our smooth
            process turns your manuscript into a stunning, physical work of art.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center mt-2">
            <button
              type="button"
              className="bg-[#8B0000] text-black font-bold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-md border-2 border-[#8B0000] hover:bg-[#6b0000] transition-all"
            >
              REQUEST A QUOTE
            </button>
            <a
              href="tel:+17275137702"
              className="flex items-center text-[#ffffff] font-bold text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-md border-2 border-[#ffffff] hover:bg-[#ffffff] hover:text-black transition-all"
            >
              <PhoneIcon className="mr-2" /> +1 (727) 513-7702
            </a>
          </div>
          <p className="text-white text-sm md:text-base">
            Or Start A{" "}
            <span className="text-[#8B0000] font-bold">Live Chat</span> to
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

      {/* ── CALENDLY BOOKING ── */}
      <section className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-[#232323] bg-black p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2b2b2b] bg-[#111] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#8B0000]">
                  Free Strategy Call
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
                  Book a <span className="text-[#8B0000]">Publishing</span>
                  <br />
                  Consultation in Minutes
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-200">
                  Pick a time that works for you. We will map out your
                  publishing plan, answer your questions, and outline the
                  fastest path to get your book live.
                </p>
                <ul className="mt-6 space-y-3 text-sm sm:text-base">
                  {[
                    "Personalized publishing roadmap",
                    "Editing, cover design, and formatting guidance",
                    "Marketing and launch strategy recommendations",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8B0000] shrink-0" />
                      <span className="text-gray-100">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Trusted by
                    </p>
                    <p className="text-xl font-extrabold text-white">
                      5,600+ Authors
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#2a2a2a] bg-[#121212] p-4">
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Response time
                    </p>
                    <p className="text-xl font-extrabold text-white">
                      Under 5 Minutes
                    </p>
                  </div>
                </div>
              </div>

              {/* Calendly widget */}
              <div className="w-full">
                <div className="rounded-2xl border border-[#2b2b2b] bg-white">
                  <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-500">
                        Book your session
                      </p>
                      <p className="text-lg font-extrabold text-black">
                        Kindle Amazon Publishings
                      </p>
                    </div>
                    <span className="rounded-full bg-[#8B0000] px-3 py-1 text-xs font-bold text-white">
                      100% Free
                    </span>
                  </div>
                  <div className="p-3">
                    <div
                      className="calendly-inline-widget w-full"
                      data-url="https://calendly.com/booking-badge?utm_campaign=sign_up&utm_medium=badge&utm_source=invitee"
                      style={{ minWidth: 320, height: 700 }}
                    />
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-400 text-center">
                  No obligation. Secure and private scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full flex flex-col items-center py-16 px-4 md:px-8 bg-gray-50">
        <h2 className="text-3xl md:text-5xl text-black font-black text-center mb-10 leading-tight">
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
                    openFaq === index ? "rotate-180 text-[#8B0000]" : "text-gray-400"
                  }`}
                >
                  <ChevronIcon />
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFaq === index ? "max-h-[500px] opacity-100 pb-6 px-6 md:px-10" : "max-h-0 opacity-0 px-6 md:px-10 overflow-hidden"
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
          {/* Contact info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-2">
              PUBLISH ON AMAZON, KINDLE &amp; MORE.
            </h1>
            <h2 className="text-[#8B0000] text-3xl md:text-4xl font-extrabold mb-6">
              NOW 50% DISCOUNT!
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
              Prefer the charm of paperback or hardcover? Publish your book with
              custom colors and sizes, perfect for readers and reviewers, while
              expanding your fan base.
            </p>
            <div className="space-y-4 max-w-md mx-auto md:mx-0">
              <ContactRow
                icon="phone"
                text="+1 (727) 513-7702"
                href="tel:+17275137702"
              />
              <ContactRow
                icon="email"
                text="info@kindleamazonepublishings.com"
                href="mailto:info@kindleamazonepublishings.com"
              />
              <ContactRow
                icon="location"
                text="7901 4th St N #21629, St. Petersburg, FL 33702, United States"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="flex-1 w-full max-w-xl">
            <form className="bg-[#8B0000] rounded-[2rem] md:rounded-[48px] shadow-2xl p-8 md:p-10 flex flex-col gap-4 border border-[#a00000]">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-2">
                GET STARTED TODAY
              </h3>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                required
                className="bg-white w-full rounded-xl px-5 py-4 text-base border-none outline-none placeholder-gray-500 text-black focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="bg-white w-full rounded-xl px-5 py-4 text-base border-none outline-none placeholder-gray-500 text-black focus:ring-2 focus:ring-black"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="bg-white w-full rounded-xl px-5 py-4 text-base border-none outline-none placeholder-gray-500 text-black focus:ring-2 focus:ring-black"
              />
              <textarea
                name="message"
                placeholder="Tell us about your book..."
                rows={3}
                required
                className="bg-white w-full rounded-xl px-5 py-4 text-base border-none outline-none placeholder-gray-500 text-black focus:ring-2 focus:ring-black resize-none"
              />
              <button
                type="submit"
                className="mt-4 bg-black text-white font-extrabold text-xl py-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:bg-gray-900 transition-colors w-full"
              >
                PUBLISH YOUR BOOK
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="w-full bg-[#181818] text-gray-300 py-4 mt-12 border-t border-[#232323] flex flex-col items-center">
        <div className="flex gap-4 mb-2 text-sm">
          <Link
            href="/privacy-policy"
            className="hover:text-[#8B0000] transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="/terms-and-conditions"
            className="hover:text-[#8B0000] transition-colors"
          >
            Terms &amp; Conditions
          </Link>
        </div>
        <div className="text-xs text-gray-500 text-center">
          © 2026 Kindle Amazon Publishings. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────

function PricingCard({
  title,
  highlighted,
  features,
}: {
  title: string;
  highlighted: boolean;
  features: string[];
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
        Request Quote
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
        className={`mt-auto w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-transform transform hover:scale-105 ${
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
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a> : <div className="block">{content}</div>;
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

function ChatIcon() {
  return (
    <svg width={28} height={28} fill="white" viewBox="0 0 24 24">
      <path d="M12 3C6.477 3 2 6.797 2 11c0 1.61.634 3.117 1.77 4.39-.13.98-.53 2.13-1.36 3.13a1 1 0 0 0 1.11 1.57c2.13-.36 3.77-1.13 4.91-1.8A13.6 13.6 0 0 0 12 18c5.523 0 10-3.797 10-7s-4.477-7-10-7Z" />
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

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    { 
      name: "Sarah Thompson",
      role: "Book Author",
      quote: "I never thought publishing my book would be this smooth. The team guided me through every step and turned my manuscript into a professional masterpiece. I couldn't be happier!",
      images: ["/lp3/image123.webp", "/lp3/image14.webp"],
    },
    {
      name: "David Miller",
      role: "Fiction Writer",
      quote: "Their 360-degree service is truly unmatched. From editing to cover design, every detail was handled with care and professionalism. My book became a best-seller in its category!",
      images: ["/lp3/image123.webp", "/lp3/image14.webp"],
    },
    {
      name: "Emily Carter",
      role: "Self-Published Author",
      quote: "The best decision I made for my writing career. The marketing and distribution strategies they provided completely transformed my sales on Amazon and Goodreads.",
      images: ["/lp3/image123.webp", "/lp3/image14.webp"],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mb-8 relative">
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-full shrink-0 flex flex-col md:flex-row items-center justify-center gap-12 px-4"
            >
              <div className="flex-1 w-full md:min-w-[300px]">
                <div className="mb-1 font-extrabold text-black text-2xl">
                  {t.name}
                </div>
                <div className="mb-6 text-gray-500 text-lg">{t.role}</div>
                <div className="text-[#8B0000] mb-4">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 26.25C15.3921 26.25 18.75 22.8921 18.75 18.75C18.75 14.6079 15.3921 11.25 11.25 11.25C7.10786 11.25 3.75 14.6079 3.75 18.75C3.75 24.375 6.5625 28.125 11.25 33.75"
                      stroke="#8B0000"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M33.75 26.25C37.8921 26.25 41.25 22.8921 41.25 18.75C41.25 14.6079 37.8921 11.25 33.75 11.25C29.6079 11.25 26.25 14.6079 26.25 18.75C26.25 24.375 29.0625 28.125 33.75 33.75"
                      stroke="#8B0000"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="italic text-gray-800 text-xl leading-relaxed relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex-1 flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
                <div className="flex flex-col items-center gap-3 w-full max-w-[240px]">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={t.images[0]}
                      alt="Book 1"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="font-bold text-2xl tracking-tight text-black">
                    amazon.com
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 w-full max-w-[240px]">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={t.images[1]}
                      alt="Book 2"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="font-serif text-2xl tracking-tighter text-[#4a4a4a]">
                    goodreads
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === i
                ? "w-10 bg-[#8B0000]"
                : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
