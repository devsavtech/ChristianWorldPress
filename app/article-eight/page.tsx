import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Christian Living.png",
        mainTitle: "Can Faith in God Truly Guide Us Through Life’s Darkest Moments?",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Are you the person who has experienced this moment in your life where every step felt heavier than the last one? Where the light at the end of the tunnel seemed too far to reach for you?  `,
                    },
                    {
                        type: "paragraph",
                        text: "Perhaps it’s a personal loss, a disturbing diagnosis, or even a moment when your plans crumbled. In moments like this in life, one question directly hits on the soul, How can faith guide us in our lives when the night seems endless? ",
                    },
                    {
                        type: "paragraph",
                        text: `For some, these moments shake belief to the core, and for others, they become the seed from which faith in God starts to grow deeper roots. But wait, there are two questions you should think about, how does this transformation happen, or will God guide me through my life even when everything seems impossible?`,
                    },
                ],
            },
            {
                title: "What Happens When the Faith Meets the Valley?",
                blocks: [
                    {
                        type: "paragraph",
                        text: `In Through the Valley of the Shadows, the journey of Rob and Pastor began with what looked like a complete collapse. Imagine for a second, a stroke, multiple cardiac arrests, invasive surgeries, and a hard battle with COVID-19, all these things seemed like the end. According to the medical statistics, survival was impossible. `,
                    },
                    {
                        type: "paragraph",
                        text: "Beyond the miracles of modern medicine and the interventions of skilled doctors, the real story was how to have faith in dark times. The faith of Rob and Pastor in God not only shielded him from the suffering aspect but also anchored him through it. It gave clarity when the fear was attached and mainly strength when his body was weak.",
                    },
                ],
            },
            {
                title: "Consider It as A Light, Not an Escape.",
                blocks: [
                    {
                        type: "paragraph",
                        text: "You should understand that faith in God is not a guarantee of an easy path, but in fact, it may lead straight through the valley, perhaps we wish to avoid. According to Rob and Pastor, the promise is not an absence from the danger but its presence in it. The words of the Psalmist, “Thy rod and thy staff, they comfort me”, became a living truth.",
                    },
                    {
                        type: "paragraph",
                        text: "Faith in God does not answer why things happen, but it will sustain and give you energy to walk through them. When hope felt distant, scripture, prayer, and the steady love of his wife and community helped and brought the light closer.",
                    },
                ],
            },
            {
                title: "How Can You Walk with Faith?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "You should think for a second, how can faith guide us in our life? The answer to this is simple, by acting as the compass when we have lost our way or by being the voice in our life that will say “keep going,” especially when the night feels too long. ",
                    },
                    {
                        type: "paragraph",
                        text: "Indeed, your darkest moments do not define you. For instance, like Rob and Pastor, you can rise from that moment but also emerge as braver, stronger, and with a strong belief that God’s hand never leaves your hand.",
                    },
                ],
            },
            {
                title: "What Do You Have To Do?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "When the question is, will God guide me through my life? Continuously pops up in your heart, you should remember, His guidance is often clearest when the road turns darkest. You should keep going, keep trusting, believe me, faith in God will never leave you.  ",
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