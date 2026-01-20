import React from "react";
import type { Metadata } from "next";
import { Crimson_Text, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// Components 
import ChatButton from "@/components/chatbutton"
import LiveChat from "@/components/live-chat"

const crimsonText = Crimson_Text({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-serif",
})

export const metadata: Metadata = {
    title: "Why is the Promise of God's Presence So Important?",
    description:
        "Why is the Promise of God's Presence So Important?",
    robots: {
        index: true,
        follow: true,
    },
};

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-sans",
})

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${crimsonText.variable} ${lato.variable}`}>
            <body className="font-sans antialiased bg-background text-foreground">
                <LiveChat />
                {children}
                <ChatButton />
                <Analytics />
            </body>
        </html>
    );
}
