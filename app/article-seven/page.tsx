import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Christian Living.png",
        mainTitle: "Do You Struggle to Trust God's Timing?",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Living in a world of speed, where everything is accessible to us at the tip of our fingertips. It's no surprise we get impatient when God seems silent. We start to wonder if He’s forgotten us, if maybe our prayers have expired somewhere between heaven and earth. But God’s timing is always aligned with His purpose.`,
                    },
                    {
                        type: "paragraph",
                        text: "This theme is beautifully explored in Sola Scriptura: Topical Bible Study Series by Robert Coleridge, where he reminds believers that divine delays are just sacred seasons where our faith and patience are strengthened.",
                    },
                ],
            },
            {
                title: "When God Seems Silent",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Waiting on God can feel like standing in a long line with no idea when your turn will come. Maybe you’ve been praying for a breakthrough, or a new opportunity, and nothing’s moving. But what if the delay isn’t punishment, it’s preparation? `,
                    },
                    {
                        type: "paragraph",
                        text: "In Sola Scripture: Topical Bible Study Series, we see this pattern repeatedly. Abraham waited decades for God’s promise of a son, while Joseph waited years in prison before stepping into his divine destiny. Both of them had to learn that faith and patience go hand in hand, and that trusting God’s timing means believing His promise even when the clock seems to run out.",
                    },
                    {
                        type: "paragraph",
                        text: "Waiting on God means resting in God’s perfect plan, knowing He’s working behind the scenes.",
                    },
                ],
            },
            {
                title: "Faith That Waits Well",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Trusting God’s timing requires a deeper kind of faith, the kind that says, “Even if I don’t understand it, I’ll still believe it.” Hebrews 6:12 calls us to “imitate those who through faith and patience inherit the promises.” In other words, blessings slow-cooked through seasons of trust and surrender.",
                    },
                    {
                        type: "paragraph",
                        text: "When we stop demanding that God move according to our schedule, we make space for Him to move according to His wisdom. The waiting itself becomes an act of worship, shaping our endurance, humility, and dependence on Him.",
                    },
                ],
            },
            {
                title: "The Hidden Work in the Waiting",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Think of a seed buried in the soil. At first, nothing appears to be happening, yet beneath the surface, roots are forming. That’s exactly what happens when you’re waiting on God. His unseen hand is aligning circumstances while preparing your spirit to handle the weight of His blessing.",
                    },
                    {
                        type: "paragraph",
                        text: "Sometimes God delays because what you’re praying for isn’t ready. Other times, it’s because you’re not ready. Either way, the delay is not denial. As Robert Coleridge writes in Sola Scriptura: Topical Bible Study Series, “Faith in God’s timing is active trust that God’s plan, though unseen, is always perfect.”",
                    },
                ],
            },
            {
                title: "From Delay to Destiny",
                blocks: [
                    {
                        type: "paragraph",
                        text: `If you’ve ever felt stuck in God’s waiting room, remember that His silence is orchestration. What looks like a delay is often God’s way of aligning your path with His purpose.  Romans 8:28 assures us that “all things work together for good to those who love God.” That “all” includes confusion, disappointment, and waiting. Surrendering your timeline means saying, “God, I’d rather have Your best later than my version of ‘good enough’ right now.”`,
                    },
                ],
            },
            {
                title: "When Faith Feels Tired",
                blocks: [
                    {
                        type: "paragraph",
                        text: `It’s easy to trust when life is moving forward, but much harder when everything feels still. Yet even in those moments, God is near. He sees your tears, your prayers, and your weariness.`,
                    },
                    {
                        type: "paragraph",
                        text: `If you’ve been struggling with the silence of delay and wondering when God will move, Sola Scriptura: Topical Bible Study Series by Robert Coleridge offers fresh encouragement by helping believers see that waiting is where God prepares the heart for His perfect plan.`,
                    },
                ],
            },
            {
                title: "Trusting the Unseen Hand",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Trusting God’s timing is about becoming who He’s called you to be. His timing remains purposeful. Every delay is part of God’s perfect plan to shape your story for His glory.`,
                    },
                    {
                        type: "paragraph",
                        text: `So, take a deep breath and tell your heart that if God promised it, He will fulfill it, just not always when you expect Him to.`,
                    },
                    {
                        type: "paragraph",
                        text: `Keep waiting on God. Keep walking by faith. When the time is right, you’ll see that every unanswered prayer was leading you to the exact moment He had prepared all along.`,
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