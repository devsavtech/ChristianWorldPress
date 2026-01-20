import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Can Faith Help You Heal a Broken Past?",
    description:
        "Can Faith Help You Heal a Broken Past?",
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
