"use client";

import { Navbar } from "@/components/lp2/navbar";
import { Partners } from "@/components/lp2/partners2";
import { Hero } from "@/components/lp2/hero";
import { Journey } from "@/components/lp2/journey";
import { Services } from "@/components/lp2/services";
import { Experience } from "@/components/lp2/experience";
import { Audience } from "@/components/lp2/audience";
import { Plan } from "@/components/lp2/plan";
import { Process } from "@/components/lp2/process";
import { Testimonials } from "@/components/lp2/testimonials";
import { FAQ } from "@/components/lp2/faq";
import { Footer } from "@/components/lp2/footer";
import { BookSlider } from "@/components/lp2/book-slider";
import { Popup } from "@/components/lp-1/popup";
import { useState, useEffect } from "react";
import ChatButton from "@/components/chatbutton";
import Testimonials2 from "@/components/lp2/testimonials2";
import { Edit3, FileText, Send, Star } from "lucide-react";
import { ExpertProcess } from "@/components/lp2/expertprocess";

export default function Lp2Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Testimonials2 />
        <Audience />
        <BookSlider />
        <ExpertProcess />
        <Experience />
        <Journey />
        <Services />
        <Plan />
        <Process />
        <FAQ />
      </main>
      <ChatButton />
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
