"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import FlipBook from "./3d-flip-book";
import Client2 from "../public/clients/client7.jpg";
import Client6 from "../public/clients/client6.jpg";
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

const upcomingAuthors = [
  {
    id: 1,
    name: "Andre Weisbrod",
    image: Client6,
    bookTitle: "HELPING MY UNBLIEF",
    bookContent: [
      "                   Introduction\n\nIs there a God? Is there a Creator? Or did all that we see and observe happen by some... what? An accident? What do you believe?\n\nWhether we consider ourselves Christian, Jewish, Islamic, Buddhist, Atheist, Agnostic or any other description of belief or unbelief, there is a fact we should consider. We are creatures of faith.\n\n What is faith? It is belief and trust in something that cannot be proven. But it is based on evidence - facts and observations that lead to our conclusion. Yes, there is a faith called 'blind faith' which is not the faith I am talking about.\n\nThe reader should know that I do believe in God. And I am a Christian. But I am not religious. Jesus didn't come to start a religion. He came to show and give true love in personal relationships.\n\nA number of chapters involve stories from my friends and family. Real people with real stories. I am so grateful for them and their willingness to share.",
      "\nI write this for both believers and unbelievers. I don't preach; I share. I desire to help the reader reflect, ponder, and discover. I write to help myself think better and to help the reader to think better.\n\nWhere the Bible is quoted, I have used the New International Version (NIV) unless noted otherwise. Please enjoy and be challenged.",
      "                                     CHAPTER 1\n                       CREATURES   OF   FAITH\n\nConsider my premise that we are all creatures of faith. Just to navigate this complex world requires faith. Every day.\n\nWhen driving a car we must trust. We must have faith that other drivers are going to stop at the red light, allowing us to cross on the green light. We have faith that our spouse isn't going to poison our food. We have faith that the bridge we walk on isn't going to collapse. \n\nFaith can be simple or complex and it can be falsely placed. Another driver might run that red light and crash into you. It is rare, but spouses have poisoned their husbands or wives. And the plumber might botch the job and create a greater problem.\n\nBut for the atheist to believe that there was no designer for the universe requires faith. It is not something provable.\n\nBut neither is it provable that there is a Designer.Those with an intelligent belief in God see wonderful, beautiful design on the Earth and in the Universe beyond and infer that where such design exists there must be a Designer. This is logical, but not provable.",
      "\nTherein lies the simple dilemma of faith in God. There either is a God or there isn't.\n\nWhen it comes to religion, it can become terribly complex. Religious 'leaders' throughout history have created religions, i.e. 'faiths', in their own image. I once posted a video I called 'Respecting the Atheist's Faith'.\nYes, faith. It is understandable how a person might come to the belief that there is no God.\n\nOne reason for people to disbelieve, to doubt there is a God, is observing the different versions of belief and concluding that they all must be false, because they can't all be true.\n\nNot only is there disagreement and confusion concerning one God, but there are also religions that promote multiple gods.\n\nIt is understandable that an atheist might look at the religious dysfunctional idiocy and conclude that the simple answer is that there is no God, because if there was a God, why does he put up with the human mess and why doesn't he shout with a booming voice from the heavens and prove himself once and for all.",
      "\nIn the end we are responsible for our own beliefs and behaviors. We are responsible for our faith, even if it simply is in me, myself and I.\n\nThis leads us down a slippery slope. If there is no higher authority, then why have any 'morality'? Simply live selfishly for ourselves and get what we can out of life.\n\nAs the Apostle Paul suggested, 'If I fought wild beasts in Ephesus with no more than human hopes, what have I gained? If the dead are not raised, Let us eat and drink, for tomorrow we die.' (1 Corinthians 15:32)",
    ],
    coverImage: "/bookcoverofclients/andre.jpg",
    pageImages: [
      null,
      null,
      null,
    ],
  },
  {
    id: 2,
    name: "Robert Coleridge",
    image: Client2,
    bookTitle: "SOLA SCRIPTURA",
    bookContent: [
      "                               Sola Scriptura 1:1\n                               The Word of God\n\nFocus: Exploring the Power, Authority, and Purpose of God's Word in Guiding and Transforming Lives\n\nPrimary Scripture:\n• Psalm 119:9–16\n• Hebrews 4:12\n• 2 Timothy 3:16–17\n\nAdditional Scripture:\n• Joshua 1:8\n• Romans 15:4\n• James 1:22–25\n\nBiblical Teaching:\n• Scripture is God-breathed, authoritative, and profitable\n   for teaching, rebuking, and equipping believers\n   (2 Timothy 3:16–17).\n\n• The Word of God is alive and active, cutting through to\n   the heart of human thoughts and intentions\n   (Hebrews 4:12).",
      "\nMeditating on and obeying Scripture leads to spiritual success and growth (Joshua 1:8, Psalm 119:11).\n\nQuestions and Answers:\n\n1. How has God's Word guided or transformed your life?\n\n   • It provides wisdom, direction, and comfort\n      (Psalm 119:105, Romans 15:4).\n\n2. What does it mean for Scripture to be 'living and \n     active'?\n\n   • Scripture is dynamic, relevant to every generation, and\n      penetrates to convict, encourage, and transform\n     (Hebrews 4:12).\n\n3. How can you ensure the Bible remains central to your\n     daily decisions?\n\n   • Regular reading, meditation, and prayer for application\n      ensure its guidance (Psalm 1:2–3).",
      "\nApplications:\n\n• Dedicate time daily to study and meditate on Scripture.\n• Memorize one verse this week that applies to a current\n   challenge.\n\nPrayer Prompts:\n\n• Thank God for His Word and its life-changing power.\n• Ask for understanding and application of Scripture\n   in your life.",
      "                               Sola Scriptura 1:2\n                           Our Identity in Christ\n\nFOCUS: UNDERSTANDING WHO WE ARE IN CHRIST AND LIVING IN THE FREEDOM OF OUR REDEEMED IDENTITY.\n\nPrimary Scripture:\n• Galatians 2:20\n• Colossians 3:1-4\n• Ephesians 1:3-14\n\nAdditional Scripture:\n• 2 Corinthians 5:17\n• Romans 8:1-2\n• John 1:12-13\n\nBiblical Teaching:\n• Believers are new creations in Christ, no longer\n   condemned (2 Corinthians 5:17, Romans 8:1).\n• Our identity is rooted in being chosen, redeemed, and\n   adopted by God through Jesus (Ephesians 1:4-5).\nSetting our minds on heavenly things aligns us with our eternal destiny (Colossians 3:1-4).",
      "\nQuestions and Answers:\n\n1. How does understanding your identity in Christ affect\n    your self-worth?\n   - It reminds us that our value comes from God's love and\n     redemption, not from achievements\n     (Romans 5:8, John 3:16).\n\n2. What does it mean to set your mind on things above?\n   - To focus on eternal truths and live with heaven's\n      priorities (Colossians 3:2).\n\n3. How can you reflect your identity in Christ to others?\n   - By showing love, humility, and integrity in all\n     relationships (Matthew 5:16, 1 Peter 2:9).",
      "\nApplications:\n\n• Write down truths about your identity in Christ and\n    review them daily.\n• Share your testimony with someone this week.\n\nPrayer Prompts:\n\n• Thank God for your new identity in Christ.\n• Pray for strength to reflect Christ in all areas of your life."
    ],
    coverImage: "/bookcoverofclients/robert.jpg",
    pageImages: [
      null,
      null,
      null,
      null,
    ],
  },
];

export function UpcomingBestSettlers() {
  const [selectedAuthor, setSelectedAuthor] = useState<
    (typeof upcomingAuthors)[0] | null
  >(null);
  const { displayedText, isTyping, sectionRef } = useTypingAnimation("Upcoming Best Sellers");

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 bg-card/20 border-y border-border relative overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/img/Distribution & Global Reach Section.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: "10px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground uppercase tracking-wider mb-3 sm:mb-4 min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {upcomingAuthors.map((author) => (
            <Card
              key={author.id}
              className="bg-card border-border overflow-hidden hover:border-accent/50 transition-colors h-full w-full max-w-[280px] p-0"
            >
              <CardContent className="p-0">
                <div className="overflow-hidden bg-muted aspect-[4/3]">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={280}
                    height={210}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-foreground mb-2">
                    {author.name}
                  </h3>
                  <p className="text-xl sm:text-base text-muted-foreground mb-3">
                    {author.bookTitle}
                  </p>
                  <button
                    className="px-4 py-1.5 text-xs text-white rounded transition-colors cursor-pointer"
                    style={{ backgroundColor: "#8b0000" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#6d0000"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#8b0000"}
                    onClick={() => {
                      if (selectedAuthor?.id === author.id) {
                        setSelectedAuthor(null);
                      } else {
                        setSelectedAuthor(author);
                      }
                    }}
                  >
                    {selectedAuthor?.id === author.id ? "Close Book" : "Preview Book"}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedAuthor && (
          <div className="mt-8 flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold mb-6 mt-4">
              {selectedAuthor.bookTitle}
            </h3>
            <FlipBook
              title={selectedAuthor.bookTitle}
              content={selectedAuthor.bookContent}
              coverImage={selectedAuthor.coverImage}
              pageImages={selectedAuthor.pageImages}
              authorName={selectedAuthor.name}
              onClose={() => setSelectedAuthor(null)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
