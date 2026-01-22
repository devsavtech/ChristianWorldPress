"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"
import Link from "next/link"
import { useState } from "react"

const articles = [
  {
    id: 1,
    title: "Can Faith Help You Heal a Broken Past?",
    category: "CHRISTIAN LIVING",
    author: "K. Anderson",
    date: "April 10, 2024",
    excerpt: "Everyone has a past. For some, it is wrapped with warm nostalgia and fond memories, and for some, it's a place of trauma, filled with loss, pain.",
    image: "/Featered Articles/Christian Living.png",
    redirect: '/article-one'
  },
  {
    id: 2,
    title: "How Can Faith Help People Deal With Grief and Loss?",
    category: "THEOLOGY",
    author: "D. Hayes",
    date: "April 5, 2024",
    excerpt: "Grief is always painful to navigate. When you lose someone you love, the world feels like it stops. The emotional and physical weight can leave you questioning everything.",
    image: "/Featered Articles/Theology.png",
    redirect: '/article-two'
  },
  {
    id: 3,
    title: "How to Trust God More Than My Emotions",
    category: "CHURCH LEADERSHIP",
    author: "M. Richards",
    date: "April 1, 2024",
    excerpt: `Have you ever thought, "My emotions are all over the place," and wondered if that means your faith is weak?`,
    image: "/Featered Articles/Chruch Leadership.png",
    redirect: '/article-three'
  },
  {
    id: 4,
    title: "How Does Religion Shape Black Cultural Identity?",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "What happens to a people when belief becomes the language of home, grief, and survival?",
    image: "/Featered Articles/Spirtual Growth.png",
    redirect: '/article-four'
  },
  {
    id: 5,
    title: "The Journey to Knowing God - Steps to a Deeper Relationship",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "Have you ever wondered how to strengthen your relationship with God? Do you feel like there’s more to discover but don’t know where to start? Many crave a deeper connection with God",
    image: "/Featered Articles/Spirtual Growth.png",
    redirect: '/article-five'
  },
  {
    id: 7,
    title: "Do You Struggle to Trust God's Timing?",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "Living in a world of speed, where everything is accessible to us at the tip of our fingertips. It's no surprise we get impatient when God seems silent.  ",
    image: "/Featered Articles/Spirtual Growth.png",
    redirect: '/article-seven'
  },
  
  {
    id: 9,
    title: "3 Ways to Grow Closer to God When You Feel Far Away",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "Have you ever had an impactful season when your heart whispered prayers, but it felt like no one was listening to you? ",
    image: "/Featered Articles/Spirtual Growth.png",
    redirect: '/article-nine'
  },
  {
    id: 10,
    title: "Why is the Promise of God's Presence So Important?",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "God’s presence is a feature of his relationship with humanity. Unlike human presence, God’s presence is divine. ",
    image: "/Featered Articles/Spirtual Growth.png",
    redirect: '/article-ten'
  },
   {
    id: 6,
    title: "Can Faith in God Truly Guide Us Through Life’s Darkest Moments?",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "Are you the person who has experienced moments in your life where every step felt heavier than the last one? ",
    image: "/Featered Articles/Spirtual Growth.png",
    redirect: '/article-six'
  },
  {
    id: 8,
    title: "Can Faith in God Truly Guide Us Through Life’s Darkest Moments?",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "Are you the person who has experienced this moment in your life where every step felt heavier than the last one? Where the light at the end of the tunnel seemed too far to reach for you? ",
    image: "/Featered Articles/Spirtual Growth.png",
    redirect: '/article-eight'
  },
]

export function FeaturedArticlesSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Featured Articles")
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(articles.length);
  };

  return (
    <section ref={sectionRef} id="articles" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('/img/Distribution & Global Reach Section.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Christian World Press believes in the power of biblical wisdom to change lives. Our featured articles are designed to encourage, challenge, and deepen your faith.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* {articles.map((article) => ( */}
          {articles.slice(0, visibleCount).map((article) => (
            <Card
              key={article.id}
              className="bg-card border-border overflow-hidden hover:border-accent/50 active:border-accent/50 transition-colors touch-manipulation"
            >
              <CardContent className="p-0">
                <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-muted">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="text-[10px] sm:text-xs font-bold text-primary bg-background px-2 sm:px-3 py-1 uppercase tracking-wide">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground line-clamp-2">{article.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
                    {/* <div className="flex gap-1 sm:gap-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div> */}
                  </div>
                  <Link
                    href={article.redirect}
                    className="border shadow-xs flex items-center justify-center w-full border-primary text-primary hover:text-white hover:bg-primary/5 bg-transparent text-xs sm:text-sm py-2 sm:py-2.5"
                  >
                    READ MORE
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {visibleCount < articles.length && (
          <div className="text-center">
            <Button onClick={handleLoadMore} className="btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
              READ MORE ARTICLES
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
