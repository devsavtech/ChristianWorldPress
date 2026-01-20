import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "3 Ways to Grow Closer to God When You Feel Far Away",
    description:
        "3 Ways to Grow Closer to God When You Feel Far Away",
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
