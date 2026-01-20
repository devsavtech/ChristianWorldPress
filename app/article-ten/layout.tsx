import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why is the Promise of God's Presence So Important?",
    description:
        "Why is the Promise of God's Presence So Important?",
    robots: {
        index: true,
        follow: true,
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
