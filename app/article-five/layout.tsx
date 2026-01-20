import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Faith Over Feelings: How to Trust God More Than My Emotions",
    description:
        "Faith Over Feelings: How to Trust God More Than My Emotions",
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
