import ArticleContent, { ArticleContentType } from '@/components/ArticleContent/ArticleContent'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

const page = () => {

    const articleContent: ArticleContentType = {
        image: "/Featered Articles/Chruch Leadership.png",
        mainTitle: "3 Ways to Grow Closer to God When You Feel Far Away",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Have you ever had an impactful season when your heart whispered prayers, but it felt like no one was listening to you? `,
                    },
                    {
                        type: "paragraph",
                        text: "Maybe you opened your Bible, but the words seemed very dry to you. You might have wondered quietly: Why does God feel so far away?",
                    },
                    {
                        type: "paragraph",
                        text: `Indeed, it is a painful reality many believers face. Our life has a way of overwhelming us with heartbreaks, responsibilities, and distractions that distract us from the awareness of His presence. Now here is the beautiful fact for you: Being far away from God is rarely about His absence, but mostly, it is about the noise, fear, or numbness that keeps us from noticing His nearness. Now, the real question for you is: How to get closer to god when you feel distant? `,
                    },
                ],
            },
            {
                title: "The Path Back to God",
                blocks: [
                    {
                        type: "paragraph",
                        text: `When you long for His presence, it definitely helps to remember that He has never left you. What feels like long distance is mostly the confusion of our own lives. Believe me, quiet moments do not erase the chaos, but they open your heart to peace. They remind you that you are never truly alone, especially when emotions suggest otherwise.`,
                    },
                    {
                        type: "paragraph",
                        text: "Returning to Him is not about perfection, but it is about small, intentional steps. Here are 3 ways to get closer to God that can guide you when you feel far away.",
                    },
                ],
            },
            {
                title: "What Are the Three Steps?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "By understanding these steps, you will have a better understanding of how to revive your connection with God. ",
                    },
                    {
                        type: "subheading",
                        text: "1.	Making Space for God",
                    },
                    {
                        type: "paragraph",
                        text: "Sometimes the best and impactful step is simply to stop. Our modern lives overflow with constant alerts, conversations, and tasks. When your mind is overloaded, you can expect to feel far away from the One who speaks in a still, small voice.",
                    },
                    {
                        type: "paragraph",
                        text: "One of the easiest and best ways to get closer to God is through quiet reflection. It can be in the way of writing your thoughts, sitting in silence, or taking a slow walk in nature. Stillness invites His presence to fill the space. Psalm 46:10 says, “Be still, and know that I am God.”",
                    },
                    {
                        type: "subheading",
                        text: "2.	Letting His Word Speak",
                    },
                    {
                        type: "paragraph",
                        text: "When feelings betray us, only Scripture steadies us. In seasons of distance, prayer can feel impossible, but what do you even say when your heart feels empty? That is when the words of God become a lifeline.",
                    },
                    {
                        type: "paragraph",
                        text: "Pray with getting closer to God verses, like Jeremiah 29:11: “For I know the plans I have for you… plans to give you hope and a future.” Or Philippians 4:6–7: “Do not be anxious about anything… and the peace of God… will guard your hearts and minds in Christ Jesus.”",
                    },
                    {
                        type: "paragraph",
                        text: "By whispering these promises back to Him, you attach yourself in truth. Even when your emotions are weak, His words are strong. Scripture-based prayer reminds you that God’s presence does not depend on how you feel, but it depends on who He is.",
                    },
                    {
                        type: "subheading",
                        text: "3.	Choosing What You Feed Your Soul",
                    },
                    {
                        type: "paragraph",
                        text: "The third of the 3 ways to get closer to God is perhaps the hardest, removing the everyday noise. Think about what fills your mind daily. ",
                    },
                    {
                        type: "paragraph",
                        text: "Stressful news cycles? ",
                    },
                    {
                        type: "paragraph",
                        text: "Is it endless scrolling? ",
                    },
                    {
                        type: "paragraph",
                        text: "Comparison on social media?",
                    },
                    {
                        type: "paragraph",
                        text: "If so, it is no wonder your spirit feels starved.",
                    },
                    {
                        type: "paragraph",
                        text: "You should ask yourself, “What am I feeding my soul?” ",
                    },
                    {
                        type: "paragraph",
                        text: "Choosing worship music instead of gossip, reading a devotional instead of headlines, can shift your perspective. Small choices create space for God to speak louder than the noise.",
                    },
                ],
            },
            {
                title: "God Is Near, Even When You Feel Far Away",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Here is the most important reminder for you: feeling far away from God does not mean you have been abandoned or rejected. Hebrews 13:5 assures us, “Never will I leave you; never will I forsake you.” The distance is often emotional, not actual.",
                    },
                    {
                        type: "paragraph",
                        text: "If you are still asking, what are the best ways to get closer to God? ",
                    },
                    {
                        type: "paragraph",
                        text: "Interestingly, sometimes it is just one small step, choosing quiet reflection, praying through Scripture, or removing distractions. These simple practices bring you back to Him.",
                    },
                ],
            },
            {
                title: "Ready To Walk with Him Again? ",
                blocks: [
                    {
                        type: "paragraph",
                        text: "If you have ever struggled with distance from God, My Walk with Jesus is a powerful reminder that you are not alone and God has never left you. The author has discovered how to keep faith alive when God feels far away. ",
                    },
                ],
            },
            {
                title: "Conclusion",
                blocks: [
                    {
                        type: "paragraph",
                        text: "When your soul whispers to you that God feels far away, hold on to this truth: He has never moved. He is closer than your breath, waiting for you to turn toward Him. The journey back begins with small but powerful choices, quiet reflection, scripture-based prayer, and removing everyday noise. Believe me, these are not just tips. They are invitations. Invitations to how to get closer to God when you feel distant. ",
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