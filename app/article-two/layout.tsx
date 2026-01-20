import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Can Faith Help People Deal With Grief and Loss?",
    description:
        "How Can Faith Help People Deal With Grief and Loss?",
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
