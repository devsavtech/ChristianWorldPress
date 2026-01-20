"use client"
import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Christian Living.png",
        mainTitle: "Why is the Promise of God's Presence So Important?",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `God’s presence is a feature of his relationship with humanity. Unlike human presence, God’s presence is divine. It empowers, strengthens, and transforms us. God’s presence renews our spirit, keeps our hearts soft, and reminds us that we belong to Him. `,
                    },
                    {
                        type: "paragraph",
                        text: "Sometimes in life, we reach a point where we feel empty, like we’ve lost our purpose or don’t really matter. But it’s in those moments that God’s presence meets us quietly, reminding us that we’re seen, loved, and created for something far greater. His presence breathes life back into weary hearts and gives us the strength to begin again.",
                    },
                ],
            },
            {
                title: "3 Dimensions of God’s Presence",
                blocks: [
                    {
                        type: "paragraph",
                        text: `According to what the Bible says about the presence of God, we can categorize God’s promise into three dimensions. The first dimension is named Omnipresence. It is the foundational truth that God is present everywhere. Psalm 139:7–10 captures it beautifully: “Where can I go from Your Spirit? Where can I flee from Your presence? If I go up to the heavens, you are there; if I make my bed in the depths, you are there.”`,
                    },
                    {
                        type: "paragraph",
                        text: "The second dimension is Manifest Glory. Even though we know God is always present, there are moments when He chooses to reveal His presence in a powerful way. Manifest presence isn’t about emotional highs. It’s not something we can manufacture with music, mood, or rituals. It’s about God choosing to draw near in power for His purposes in order to reveal his glory. And lastly, there is God’s Indwelling Presence which means He lives within us. His presence isn’t restricted to a church, building or a holy mountain instead it has taken residence in our hearts.",
                    },
                ],
            },
            {
                title: "Why the Promise of God Changes Everything?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "There is a strong power of presence of God. It is a transforming force that reshapes how you live. Think of Moses on the mountain after he met God, there was something undeniable about him. A light in his eyes and a gravity in his steps that people noticed, as if something inside him had been strengthened to endure the road ahead. Isaiah stood in the grandeur of holiness and felt his own impurity, but in that moment, a mercy touched him, turning fear into a mission. ",
                    },
                    {
                        type: "paragraph",
                        text: "These aren’t merely ancient scenes instead they show us what can happen in everyday life when God draws near, our fear softens and our ordinary days start pointing toward a larger, and hopeful purpose. This is why Scripture calls His presence “the fullness of joy” (Psalm 16:11), not because life becomes perfect, but because we are no longer alone in it.",
                    },
                ],
            },
            {
                title: "The Presence That Carries Us Home",
                blocks: [
                    {
                        type: "paragraph",
                        text: "God’s presence is beautifully practical. When life feels empty, He gives meaning and peace that don’t depend on how things are going. Having God in our lives make us feel like he is walking right beside us, even when we are alone. Whenever distractions dull your spirit, a quiet pause can remind you that He is near.",
                    },
                    {
                        type: "paragraph",
                        text: "Yet the promise of God’s presence reaches beyond today. The nearness we feel now is a glimpse of eternity. It keeps us steady when life feels messy and uncertain, reminding us that the peace we long for is still ahead. God’s presence connects our everyday moments to eternity, showing that every struggle we face, every bit of joy we feel, and even the quiet prayers we whisper all belong to a bigger story He’s writing.",
                    },
                ],
            },
            {
                title: "Find Hope in The Promise of God",
                blocks: [
                    {
                        type: "paragraph",
                        text: `If this gave you a spark of hope and peace, and you're craving that everlasting sense of joy and connection with God, then you need to check out “Nine Words that Change Everything" by Ross C. Powell. It'll guide you deeper into a relationship with God, where hope, happiness, and peace become your reality.`,
                    },
                ],
            },
            {
                title: "Conclusion",
                blocks: [
                    {
                        type: "paragraph",
                        text: `The God’s promise to be with us is everything. It's the core of why God created us to restore relationship with Him. This promise gives us courage to face every challenge, peace that surpasses understanding, and transformation that's real, not just emotional highs. It's our anchor in life's chaos, a reminder we're never alone, now or forever. The presence we experience now is a rehearsal for eternity, where one day we'll see God face to face. That's the hope we hold onto.`,
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