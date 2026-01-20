import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Spirtual Growth.png",
        mainTitle: "The Journey to Knowing God - Steps to a Deeper Relationship",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Have you ever wondered how to strengthen your relationship with God? Do you feel like there’s more to discover but don’t know where to start? Many crave a deeper connection with God, but the journey can sometimes feel overwhelming. Questions like “How do I truly know God?” or “What steps should I take to grow spiritually?” often linger in our minds. While it’s natural to feel uncertain, the good news is that God invites each of us to know Him personally, and the process, while challenging, is rewarding.`,
                    },
                    {
                        type: "paragraph",
                        text: "Nicholas L. Maze’s book Chosen provides a significant roadmap for this journey, guiding readers through the steps necessary to build a closer relationship with God. Through practical insights and biblical wisdom, he explains how we can move from knowing about God to truly knowing Him. In this blog, we’ll explore key steps to help you develop a deeper and more meaningful relationship with the Creator.",
                    },
                ],
            },
            {
                title: "Steps to a Deeper Relationship with God",
                blocks: [
                    {
                        type: "subheading",
                        text: `Acknowledge That You Are Chosen`,
                    },
                    {
                        type: "paragraph",
                        text: "The first step in knowing God is understanding that he has chosen you. God's choice isn’t based on your accomplishments or worthiness—it is rooted in God’s eternal love for you. But knowing you are chosen isn’t enough; you must also accept this truth. Accepting the reality that God has specifically chosen you changes how you view your life and your spiritual journey. ",
                    },
                    {
                        type: "subheading",
                        text: "Make the Decision to Follow God",
                    },
                    {
                        type: "paragraph",
                        text: "Maze addresses the importance of free will in our relationship with God. While God has chosen us, it’s up to us to respond to that call. The devil will constantly try to distract us, but our power lies in our decision to follow Christ. Saying “yes” to God and “no” to distractions is a daily choice.",
                    },
                    {
                        type: "paragraph",
                        text: "The decision to follow God requires intentionality. You must commit to putting Him first, not just in the big moments but in everyday life. This includes praying, studying the Bible, and staying focused on God even when the world tries to pull you in other directions.",
                    },
                    {
                        type: "subheading",
                        text: "Develop a Relationship Through Prayer and Communication",
                    },
                    {
                        type: "paragraph",
                        text: "Prayer is the lifeline of your relationship with God. Maze relates prayer to communication in any relationship—it’s the way you get to know God more intimately. Just like you wouldn’t neglect communicating with a close friend, you shouldn’t neglect prayer. Through consistent prayer, you develop trust and openness with God.",
                    },
                    {
                        type: "paragraph",
                        text: "However, prayer is not just about asking for things; it’s about listening and spending time with God. As you make prayer a regular practice, you’ll start to see how God responds, often in unexpected ways.",
                    },
                    {
                        type: "subheading",
                        text: "Study the Word of God",
                    },
                    {
                        type: "paragraph",
                        text: "Knowing God requires knowing His Word. The Bible is more than just a book—it’s a manual for life and a way to discover who God is. By reading and studying scripture, you learn about God’s character, promises, and expectations for your life. Make Bible study a regular part of your spiritual routine, and you’ll see how it transforms your understanding of God.",
                    },
                    {
                        type: "subheading",
                        text: "Trust the Process of Growth",
                    },
                    {
                        type: "paragraph",
                        text: "Spiritual growth is a process. Knowing God does not happen overnight—it’s a journey filled with challenges, trials, and moments of revelation. The process requires patience, trust, and perseverance.",
                    },
                    {
                        type: "paragraph",
                        text: "Often, growth comes through difficult seasons, where you are forced to rely on God more than ever. See these trials as opportunities for God to work in your life. The journey may seem hard at times, but every challenge you face shapes you into the person God has called you to be.",
                    },
                    {
                        type: "subheading",
                        text: "Surround Yourself with Support",
                    },
                    {
                        type: "paragraph",
                        text: "Community plays a significant role in the journey to knowing God. Just as the body of Christ has many parts, each of us uniquely supports one another. Surrounding yourself with other believers who encourage and challenge you in your faith is essential for growth.",
                    },
                    {
                        type: "subheading",
                        text: "Walk in Faith and Obedience",
                    },
                    {
                        type: "paragraph",
                        text: "Faith and obedience go hand in hand when deepening your relationship with God. Maze points out that knowing God isn’t just about understanding who He is—it’s about following His will for your life. Walking in obedience to God’s Word strengthens your relationship and brings you closer to Him.",
                    },
                ],
            },
            {
                title: "Chosen by Nicholas L. Maze",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Are you ready to strengthen your relationship with God and discover your divine purpose? Go deeper into your faith journey with Chosen by Nicholas L. Maze—your guide to understanding what it means to be chosen by God and how to live a life of faith, growth, and spiritual transformation. Get your copy today!",
                    },
                ],
            },
            {
                title: "Conclusion",
                blocks: [
                    {
                        type: "paragraph",
                        text: "The journey to knowing God is not without challenges but filled with purpose, growth, and incredible rewards. Being in a relationship with God means you are chosen, loved, and guided every step of the way. By committing to knowing Him more through prayer, scripture, and trust, you will deepen your relationship with God and experience the fullness of His promises.",
                    },
                ],
            },
        ],
    };

    return (
        <>
            <Navbar />
            <main>
                <ArticleContent articleContent={articleContent} />
            </main>
            <Footer />
        </>
    )
}

export default page