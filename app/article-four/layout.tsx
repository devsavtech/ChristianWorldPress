import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Does Religion Shape Black Cultural Identity?",
    description:
        "How Does Religion Shape Black Cultural Identity?",
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
