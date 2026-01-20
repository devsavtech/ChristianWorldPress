import React from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Privacy Policy | Christian World Press",
    description:
        "Privacy Policy | Christian World Press",
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
