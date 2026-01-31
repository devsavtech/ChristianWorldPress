"use client"
import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Chruch Leadership.png",
        mainTitle: "Faith Over Feelings: How to Trust God More Than My Emotions",
        relatedBooks: [
            {
                id: 1,
                title: "Finding God in the Moment",
                author: "Andrew Wollman",
                price: 14.99,
                originalPrice: 19.99,
                rating: 5,
                image: "/books/book1.jpg",
                reviews: 312
            }
        ],
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Have you ever thought, "My emotions are all over the place," and wondered if that means your faith is weak?`,
                    },
                    {
                        type: "paragraph",
                        text: "Do you find it difficult to trust God and let go when everything inside you feels uncertain?",
                    },
                    {
                        type: "paragraph",
                        text: `Or maybe you’ve asked yourself, "How to walk by faith and not by your feelings?"`,
                    },
                    {
                        type: "paragraph",
                        text: "These questions matter because life isn’t always lived in emotional highs. The reality is that feelings shift daily, but God’s truth does not. Learning to put faith over feelings is about choosing the solid foundation of His Word, even when our emotions beg us to take a different path.",
                    },
                ],
            },
            {
                title: "The Bible on Emotions vs. the Truth of Faith",
                blocks: [
                    {
                        type: "paragraph",
                        text: `The Bible on emotions doesn’t tell us to ignore our feelings. They are part of God’s design. But it does warn us, “Don’t trust your feelings” as the measure of truth. Emotions can mislead us, but the promises of God never change. That’s why Bible verses about feeling remind us to anchor our trust in Him, not in temporary moods.`,
                    },
                    {
                        type: "paragraph",
                        text: "One powerful faith over feelings Bible verse comes from 2 Corinthians 5:7: “For we walk by faith, not by sight.” This isn’t just about what we see. It’s also about sometimes ignoring how we feel, while trusting in what we know from God’s Word.",
                    },
                ],
            },
            {
                title: "Understanding the Difference Between Faith and Feelings",
                blocks: [
                    {
                        type: "paragraph",
                        text: "It’s easy to confuse faith and feelings, especially during seasons of stress, sorrow, or uncertainty. But they are not the same. Faith is rooted in God’s promises. Feelings are influenced by circumstances, health, and even the weather.",
                    },
                    {
                        type: "paragraph",
                        text: "When you have faith trust God beyond what your emotions say. When you are willing to live according to God’s plans, you’re declaring trust in God’s authority over your situation, whether or not you feel spiritual strength at that moment.  ",
                    },
                ],
            },
            {
                title: "Practical Ways to Put Faith Over Feelings",
                blocks: [
                    {
                        type: "paragraph",
                        text: "If you’re learning how to walk by faith and not by your feelings, here are steps you can take:",
                    },
                    {
                        type: "subheading",
                        text: "Anchor Yourself in Scripture",
                    },
                    {
                        type: "paragraph",
                        text: "Let God’s Word speak louder than your mood. Keep a list of Bible verses about feeling that remind you of His truth.",
                    },
                    {
                        type: "subheading",
                        text: "Speak Faith Out Loud",
                    },
                    {
                        type: "paragraph",
                        text: "Even when you don’t feel it, speak truth into your situation. This is part of accepting my faith as an act of obedience, not emotion.",
                    },
                    {
                        type: "subheading",
                        text: "Pray Through the Tension",
                    },
                    {
                        type: "paragraph",
                        text: "Prayer is a way to trust in God when emotions feel heavy. Bring your doubts to Him instead of hiding them.",
                    },
                    {
                        type: "subheading",
                        text: "Release Control Daily",
                    },
                    {
                        type: "paragraph",
                        text: "To truly trust God and let go, ask God to break through whatever feelings you may have, and trust only His Word. If His Word supports your feelings, then those are feelings you can trust. The point is never to trust them alone, whether those feelings seem good or bad.  Always balance them against God’s Word, so you can know for sure how to act.",
                    },
                ],
            },
            {
                title: "Build Your Faith on What’s True, Not on How You Feel",
                blocks: [
                    {
                        type: "paragraph",
                        text: "If emotions have been pushing your spiritual life, Finding God in the Moment by Andrew Wollman is a reminder that faith doesn’t depend on mood swings. It rests on God’s unchanging Word. This book offers practical wisdom and encouragement for those learning to have faith trust God, and keep walking even when feelings fade or try to take over in place of faith.",
                    },
                ],
            },
            {
                title: "Letting Truth Lead Your Life",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Feelings are temporary, and often fickle. Truth is eternal and always reliable. If you build your life on your emotions, your faith will be tossed around like a small boat in a storm. But when you choose faith over feelings, you stand on the unshakable promises of God.",
                    },
                    {
                        type: "paragraph",
                        text: "So next time your heart tells you one thing and God’s Word tells you another, choose truth. Your feelings will catch up in time.",
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