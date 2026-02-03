import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define types similar to ArticleContent

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "subheading"; text: string };

interface ArticleSection {
    title: string;
    blocks: ContentBlock[];
};

interface RelatedBook {
    id: number;
    title: string;
    author: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    reviews: number;
};

interface ArticleContentType {
    image?: string;
    mainTitle?: string;
    sections: ArticleSection[];
    relatedBooks?: RelatedBook[];
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-3 h-3 ${index < rating ? 'fill-yellow-500' : 'fill-gray-300'}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
            ))}
        </div>
    );
};

const PrivacyContent = () => {
    const privacyPolicyContent: ArticleContentType = {
        image: "/Featered Articles/Christian Living.png",
        mainTitle: "Privacy Policy",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `At Christian World Press, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services. By accessing or using our website, you agree to the collection and use of information in accordance with this policy.`,
                    },
                ],
            },
            {
                title: "Information We Collect",
                blocks: [
                    {
                        type: "paragraph",
                        text: `When you visit our website, subscribe to our newsletter, or make a purchase, we may collect certain types of information. This includes personal information such as your name, email address, shipping address, and payment details when making purchases. We may also collect usage data, which includes information about how you interact with our website such as the pages you visit, the links you click, and your IP address. This helps us improve our website's user experience and optimize our services for our visitors.`,
                    },
                ],
            },
            {
                title: "How We Use Your Information",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We use the information we collect to process and fulfill your orders, communicate with you regarding your purchases and updates, and send relevant content, including newsletters and promotional offers, if you have opted-in. Additionally, we may use this data to improve our website, understand usage patterns, and enhance your browsing experience.`,
                    },
                ],
            },
            {
                title: "How We Protect Your Information",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We take your privacy seriously and implement a variety of security measures to protect your personal information. These measures include secure server technology and encrypted transactions, which help ensure that your data remains confidential and secure. We are committed to safeguarding your information and preventing unauthorized access.`,
                    },
                ],
            },
            {
                title: "Sharing Your Information",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We do not sell, trade, or share your personal information with third parties except in certain circumstances. We may share your information with trusted third-party service providers, such as payment processors and shipping partners, who assist us in operating our business and delivering services to you. Additionally, we may disclose your information if required by law or to protect the rights, property, and safety of Christian World Press, its users, or others.`,
                    },
                ],
            },
            {
                title: "Cookies",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Our website may use cookies to enhance your browsing experience. Cookies are small files that store information on your computer or device, allowing us to remember your preferences and improve your experience with our website. You can choose to disable cookies in your browser settings, but please note that doing so may affect some functionality of the website.`,
                    },
                ],
            },
            {
                title: "Your Rights",
                blocks: [
                    {
                        type: "paragraph",
                        text: `You have the right to access, update, or delete the personal information we hold about you. If you no longer wish to receive promotional emails, you can opt-out by following the unsubscribe instructions provided in each email. You may also request a copy of your data held by us or inquire about how we use your personal information by contacting us directly.`,
                    },
                ],
            },
            {
                title: "Changes to This Privacy Policy",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to periodically review this policy to stay informed about how we are protecting your personal information.`,
                    },
                ],
            },
            {
                title: "Contact Us",
                blocks: [
                    {
                        type: "paragraph",
                        text: `If you have any questions or concerns regarding this Privacy Policy or how your information is being handled, please contact us at authorrelations@christianworldpress.com.`,
                    },
                ],
            },
        ],
    };

    const sections = Array.isArray(privacyPolicyContent?.sections)
        ? privacyPolicyContent.sections
        : [];

    return (
        <section className="relative py-8 sm:py-12 lg:py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        {/* Hero Image */}
                        {privacyPolicyContent.image && (
                            <div className="mb-8 rounded-xl overflow-hidden shadow-xl">
                                <div className="relative h-64 sm:h-80 md:h-96">
                                    <Image
                                        src={privacyPolicyContent.image}
                                        alt="Privacy Policy"
                                        fill
                                        className="object-cover"
                                    />
                                    {privacyPolicyContent?.mainTitle && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-3xl">
                                                {privacyPolicyContent.mainTitle}
                                            </h1>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Privacy Policy Content */}
                        <div className="prose prose-lg max-w-none">
                            {sections.map((section, index) => {
                                const blocks = Array.isArray(section?.blocks)
                                    ? section.blocks
                                    : [];

                                return (
                                    <div key={index} className="mb-12">
                                        {section?.title && (
                                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 pb-2 border-b border-border">
                                                {section.title}
                                            </h2>
                                        )}

                                        {blocks.map((block, i) => {
                                            if (block?.type === "subheading") {
                                                return (
                                                    <h3
                                                        key={i}
                                                        className="text-xl sm:text-2xl font-serif font-bold text-foreground mt-8 mb-4"
                                                    >
                                                        {block.text}
                                                    </h3>
                                                );
                                            }

                                            if (block?.type === "paragraph") {
                                                return (
                                                    <p
                                                        key={i}
                                                        className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed"
                                                    >
                                                        {block.text}
                                                    </p>
                                                );
                                            }

                                            return null;
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sidebar with Related Books */}
                    <div className="lg:w-1/4 mt-12 lg:mt-0">
                        <div className="sticky top-6 space-y-8">
                            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                                <h3 className="text-xl font-serif font-bold text-foreground mb-6 pb-2 border-b border-border">
                                    About Our Privacy
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        We are committed to maintaining the highest standards of data protection.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Last updated: {new Date().toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                                <h3 className="text-xl font-serif font-bold text-foreground mb-6 pb-2 border-b border-border">
                                    Quick Links
                                </h3>
                                <div className="space-y-3">
                                    <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Home
                                    </Link>
                                    <Link href="/#authors" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Featured Authors
                                    </Link>
                                    <Link href="/#articles" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Featured Articles
                                    </Link>
                                    <Link href="/#bestsellers" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Best Sellers
                                    </Link>
                                    <Link href="/terms-and-conditions" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Terms of Conditions
                                    </Link>
                                    <Link href="/#contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PrivacyContent