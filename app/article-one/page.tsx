"use client"
import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Christian Living.png",
        mainTitle: "Can Faith Help You Heal a Broken Past?",
        relatedBooks: [
            {
                id: 1,
                title: "Overcoming Adversity: God's Grace is Sufficient",
                author: "J. Paul Russell",
                price: 14.99,
                originalPrice: 24.99,
                rating: 5,
                image: "/books/book1.jpg",
                reviews: 342
            },
            {
                id: 2,
                title: "Healing Through Faith",
                author: "Sarah Johnson",
                price: 12.99,
                originalPrice: 19.99,
                rating: 4,
                image: "/books/book2.jpg",
                reviews: 187
            }
        ],
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Everyone has a past. For some, it is wrapped with warm nostalgia and fond memories, and for some, it's a place of trauma, filled with loss, pain, or betrayal. If you have ever found yourself asking this question, “Can the past be healed?” You are not alone in this world.`,
                    },
                    {
                        type: "paragraph",
                        text: "Multiple people fight with the scars of what they once did or experienced. Wounds seem too deep for time to erase, but wait, what if there was another way to heal?",
                    },
                    {
                        type: "paragraph",
                        text: `Or one that does not cover the pain but also transforms it?`,
                    },
                    {
                        type: "paragraph",
                        text: `A powerful personal account, told in Overcoming Adversity: God's Grace is Sufficient, follows the real-life journey of J. Paul Russell, a man who faced addiction, trauma, and abandonment and yet found the best restoration through faith. His honest reflections challenge us to ask this strong question: “Can faith heal trauma?”`,
                    },
                ],
            },
            {
                title: "Can Faith Help You Heal a Broken Past",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We all have a past. For some, it’s filled with joy. For others, it’s marked by pain, loss, betrayal, addiction, or trauma. If you’ve ever wondered, “Can faith help me heal what’s behind me?” you’re not alone.`,
                    },
                    {
                        type: "paragraph",
                        text: "Many carry scars from choices made or wounds never asked for. Some feel too deep for time to erase. But healing begins when we invite God into those broken places and trust Him to redeem, restore, and breathe life into what felt lost.",
                    },
                    {
                        type: "paragraph",
                        text: "In Overcoming Adversity: God’s Grace is Sufficient, I share my story, not one of perfection, but of grace. Addiction, trauma, dysfunction, brokenness. But also surrender, restoration, and healing that reached places I never thought could be touched. God met me in the mess, and today, I see His fingerprints all over my life.",
                    },
                    {
                        type: "paragraph",
                        text: "These reflections are more than memories. They’re an invitation to ask: Can faith truly heal the wounds of our past? And to discover that the answer is yes.",
                    },
                ],
            },
            {
                title: "What Is a Life Marked by Pain?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Paul’s early life was shaped by hardship, raised in a broken home, surrounded by addiction and dysfunction. The trauma led him down a road of brokenness, substance abuse, and deep spiritual emptiness.",
                    },
                    {
                        type: "paragraph",
                        text: "But that’s not where the story ends.",
                    },
                    {
                        type: "paragraph",
                        text: "In Overcoming Adversity: God’s Grace is Sufficient, you’ll see how hope broke through, not through a plan or program, but through faith. When everything felt lost, God stepped in.",
                    },
                    {
                        type: "paragraph",
                        text: "Right in the middle of the mess, God met him. Through surrender and grace, healing began, not just surface change, but deep transformation. What was broken began to mend. What was lost was redeemed.",
                    },
                    {
                        type: "paragraph",
                        text: "Today, Paul’s life is a living testimony to God’s grace. His story bears the fingerprints of a faithful God, proof that no life is too broken for redemption, and no heart is beyond the reach of hope.",
                    },
                ],
            },
            {
                title: "What is Healing Through Faith?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Faith didn’t crash into Paul’s life, it came quietly, in a moment of desperation. He wasn’t looking for God when he entered rehab. He just wanted out of the pain. But one day, overwhelmed and broken, Paul cried out to God, knowing he couldn’t do it alone.",
                    },
                    {
                        type: "paragraph",
                        text: "That cry became the turning point.",
                    },
                    {
                        type: "paragraph",
                        text: "Through the steady support of the program and the grace-filled mentorship of others, healing through faith began to take root. The fog lifted. Clarity came. Recovery didn’t erase the past. It reframed it with grace and purpose.",
                    },
                    {
                        type: "paragraph",
                        text: "Today, Paul’s life is a testimony of transformation. You can see God’s fingerprints all over the story. Proof that when we surrender, healing begins, and purpose is never far behind.",
                    },
                ],
            },
            {
                title: "Does Faith Affect Healing?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "In Paul’s life, absolutely. Faith didn’t just help him heal. It gave him a whole new lens to see his story. It brought meaning to the pain, courage to forgive, and strength to share his journey without shame.",
                    },
                    {
                        type: "paragraph",
                        text: "In Overcoming Adversity: God’s Grace is Sufficient, you’ll see how faith didn’t just change Paul’s circumstances. It changed his identity. He went from being trapped in darkness to walking in light, from surviving to living with bold, renewed purpose.",
                    },
                    {
                        type: "paragraph",
                        text: "Faith was the turning point. It transformed brokenness into testimony and pain into power. And today, Paul’s life is proof: when grace takes hold, healing follows, and purpose is reborn. ",
                    },
                ],
            },
            {
                title: "Can The Past Be Healed",
                blocks: [
                    {
                        type: "paragraph",
                        text: `If you’ve ever wondered whether your past is too broken to redeem, Paul’s story is living proof that healing is not only possible. It’s powerful.`,
                    },
                    {
                        type: "paragraph",
                        text: "In Overcoming Adversity: God’s Grace is Sufficient, you’ll see how faith helped Paul move beyond the pain. Though the scars remain, they no longer define him. Through his journey, he discovered not just healing, but transformation.",
                    },
                    {
                        type: "paragraph",
                        text: "Faith didn’t just change his circumstances. It reshaped his identity. What once felt hopeless became a testimony of grace, and the pain that held him back became the foundation of his purpose.",
                    },
                    {
                        type: "paragraph",
                        text: "Yes, the past can be healed. And Paul’s life is proof that when God steps in, transformation begins.",
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