import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBooksSection } from "@/components/featured-books-section"
import { FeaturedAuthorsSection } from "@/components/featured-authors-section"
import { DistributionSection } from "@/components/distribution-section"
import { PartnersSection } from "@/components/partners-section"
import { FeaturedArticlesSection } from "@/components/featured-articles-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Brands from "@/components/brands"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Brands />
        <FeaturedBooksSection />
        <FeaturedAuthorsSection />
        <DistributionSection />
        <PartnersSection />
        <FeaturedArticlesSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
