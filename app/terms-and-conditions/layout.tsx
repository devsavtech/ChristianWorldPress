import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Christian World Press",
    description:
        "Terms & Conditions | Christian World Press",
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
