import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Do You Struggle to Trust God's Timing?",
    description:
        "Do You Struggle to Trust God's Timing?",
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
