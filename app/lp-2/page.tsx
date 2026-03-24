"use client";

import { Navbar } from "@/components/lp2/navbar";
import { Hero } from "@/components/lp2/hero";
import { Journey } from "@/components/lp2/journey";
import { Services } from "@/components/lp2/services";
import { Experience } from "@/components/lp2/experience";
import { Audience } from "@/components/lp2/audience";
import { Plan } from "@/components/lp2/plan";
import { Process } from "@/components/lp2/process";
import { Testimonials } from "@/components/lp2/testimonials";
import { FAQ } from "@/components/lp2/faq";
import { Footer } from "@/components/footer";
import { BookSlider } from "@/components/lp2/book-slider";

export default function Lp2Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Services />
        <BookSlider />
        <Experience />
        <Audience />
        <Plan />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
