import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Can Faith in God Truly Guide Us Through Life’s Darkest Moments?",
    description:
        "Can Faith in God Truly Guide Us Through Life’s Darkest Moments?",
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
