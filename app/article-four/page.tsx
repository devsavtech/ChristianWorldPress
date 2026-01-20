"use client"
import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Spirtual Growth.png",
        mainTitle: "How Does Religion Shape Black Cultural Identity?",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `What happens to a people when belief becomes the language of home, grief, and survival?`,
                    },
                    {
                        type: "paragraph",
                        text: "Who are we when the hymns end and the workweek begins, when love for our elders meets questions we did not choose?",
                    },
                    {
                        type: "paragraph",
                        text: `If the church gave you a sense of belonging, do you lose yourself when you ask where that belonging came from?`,
                    },
                    {
                        type: "paragraph",
                        text: `How do black Americans carry honor for their past while facing the parts of Christianity that still feel unresolved?`,
                    },
                ],
            },
            {
                title: "Lived Roots, Not Props",
                blocks: [
                    {
                        type: "paragraph",
                        text: `In Life After Religion’s early pages, church is not abstract. It is a young Marine carrying a small New Testament, a community that fills free hours, and a rising teacher who becomes a licensed minister. These scenes place African-American religiosity inside daily life, where churches shape time, speech, and moral imagination. That lived weight is why questions later feel serious, and why identity cannot be discussed without memory. `,
                    },
                ],
            },
            {
                title: "The Hard Turn Toward History",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Fullah describes a long stretch of study that shifts his footing. African-centered history, verifiable sources, and the timeline of Kemet unsettle a habit of reading the Bible as a closed world. The Bible becomes a text inside history rather than above it. That reframing is presented as liberating, and it leads to a careful exit from Christianity after years of work. This is the hinge for our topic because it shows how facts and family can clash, and how identity often moves when record and ritual meet. ",
                    },
                ],
            },
            {
                title: "What Role Does Religion Play In Shaping Cultural Identities",
                blocks: [
                    {
                        type: "paragraph",
                        text: "In Black life, religion speaks through music, mourning, food, and speech. It forms networks of help and models for leadership. It also carries doctrines and social rules that can narrow voice and choice. The book addresses this tension with care, asking whether these patterns continue to serve the Black community and whether they align with the truth as we learn more. That question is not disrespectful. It is a request for honest alignment between belief, history, and the needs of black Americans today. ",
                    },
                ],
            },
            {
                title: "How Did Religions Impact African Culture",
                blocks: [
                    {
                        type: "paragraph",
                        text: "The book offers a detailed examination of colonial systems, Catholic and Protestant influences, and the effects of Christian expansion. That scope matters for identity because it connects Sunday language to global power and policy, then back to home. When readers ask how religions impacted African culture, they are also asking how those impacts were carried into the Americas and into the habits of churches that feel familiar now. History is not a lecture here. It is a mirror that asks who we have become and why. ",
                    },
                ],
            },
            {
                title: "Cultural Identity, Carried Forward",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Cultural identity is not a slogan. It is the pattern of how we grieve, choose leaders, raise children, and settle disputes. Religion can either protect or perpetuate that pattern. The book suggests a path that honors elders while making space for change.`,
                    },
                    {
                        type: "paragraph",
                        text: "The question for black Americans is practical: which practices preserve dignity, curiosity, and health, and which ones keep us small?",
                    },
                    {
                        type: "paragraph",
                        text: "This is not a fight for a perfect answer. It is a long habit of telling the truth.",
                    },
                ],
            },
            {
                title: "A Next Step If This Speaks To You",
                blocks: [
                    {
                        type: "paragraph",
                        text: `If you want a clear starting point, read a page from Life After Religion by Bruce Fullah and pay attention to how it makes you feel physically, noting where you feel tense or at ease. List two moments from your life when churches held you up, and one moment when a rule felt heavier than love. If your work is within a church, take one policy and hold it up to the needs of your Black community today. If your work is outside, find a practice that restores you while still keeping you in honest contact with your loved ones. `,
                    },
                ],
            },
            {
                title: "What I’m Taking With Me",
                blocks: [
                    {
                        type: "paragraph",
                        text: `The book-through-life here is not fiction. It is a man and his people, a book and its readers, all moving toward a faith that does not silence questions. If you came up through Christianity, you do not have to abandon love to tell the truth. If identity matters to you, ask what role religion plays in shaping cultural identities in your home, your city, and your work. Identity grows when stories and evidence are allowed to meet. Life After Religion by Bruce Fullah keeps that meeting honest.`,
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