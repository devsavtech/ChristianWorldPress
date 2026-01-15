"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTypingAnimation } from "@/hooks/useTypingAnimation"

const articles = [
  {
    id: 1,
    title: "Finding Strength in God's Word During Difficult Times",
    category: "CHRISTIAN LIVING",
    author: "K. Anderson",
    date: "April 10, 2024",
    excerpt: "Discover how Scripture can provide hope and guidance in the darkest moments of our lives.",
    image: "/Featered Articles/Christian Living.png",
  },
  {
    id: 2,
    title: "Understanding the Power of Prayer",
    category: "THEOLOGY",
    author: "D. Hayes",
    date: "April 5, 2024",
    excerpt: "Explore the biblical foundations of prayer and how it strengthens our faith and communion with God.",
    image: "/Featered Articles/Theology.png",
  },
  {
    id: 3,
    title: "Effective Discipleship in Today's Church",
    category: "CHURCH LEADERSHIP",
    author: "M. Richards",
    date: "April 1, 2024",
    excerpt: "Learn key strategies for fostering spiritual growth and community in your church.",
    image: "/Featered Articles/Chruch Leadership.png",
  },
  {
    id: 4,
    title: "Developing a Daily Devotional Habit",
    category: "SPIRITUAL GROWTH",
    author: "L. Peterson",
    date: "March 28, 2024",
    excerpt: "Practical tips for establishing a consistent devotional routine that enriches your faith.",
    image: "/Featered Articles/Spirtual Growth.png",
  },
]

export function FeaturedArticlesSection() {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Featured Articles")

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
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Inspiring, Biblically Sound, and Thought-Provoking Articles for Christians
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {articles.map((article) => (
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
                  <h3 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground line-clamp-2">{article.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs text-muted-foreground">
                    <div className="flex gap-1 sm:gap-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/5 bg-transparent text-xs sm:text-sm py-2 sm:py-2.5"
                  >
                    READ MORE
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3">
            READ MORE ARTICLES
          </Button>
        </div>
      </div>
    </section>
  )
}
