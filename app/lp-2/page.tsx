"use client";

import { Navbar } from "@/components/lp-2/navbar";
import { Hero } from "@/components/lp-2/hero";
import { Journey } from "@/components/lp-2/journey";
import { Services } from "@/components/lp-2/services";
import { Experience } from "@/components/lp-2/experience";
import { Audience } from "@/components/lp-2/audience";
import { Plan } from "@/components/lp-2/plan";
import { Process } from "@/components/lp-2/process";
import { Testimonials } from "@/components/lp-2/testimonials";
import { FAQ } from "@/components/lp-2/faq";
import { Footer } from "@/components/footer";
import { BookSlider } from "@/components/lp-2/book-slider";

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
