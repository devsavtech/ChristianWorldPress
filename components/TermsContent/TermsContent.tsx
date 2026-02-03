import React, { useEffect } from 'react';
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

const TermsContent = () => {
    useEffect(() => {
        const currentDateElement = document.getElementById('current-date');
        if (currentDateElement) {
            currentDateElement.textContent = new Date().toLocaleDateString();
        }
    }, []);
    const termsContent: ArticleContentType = {
        image: "/Featered Articles/Christian Living.png",
        mainTitle: "Terms and Conditions",
        sections: [
            {
                title: "",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Welcome to Christian World Press! By accessing or using our website and services, you agree to be bound by the following Terms and Conditions. Please read them carefully before using our website or making any purchases. If you do not agree to these terms, please refrain from using our site.`,
                    },
                ],
            },
            {
                title: "Use of Our Website",
                blocks: [
                    {
                        type: "paragraph",
                        text: `By visiting and using the Christian World Press website, you agree to comply with all applicable laws and regulations. You are granted a limited, non-exclusive, and non-transferable license to access and use our website for personal, non-commercial purposes, subject to these Terms and Conditions.`,
                    },
                ],
            },
            {
                title: "Account Registration",
                blocks: [
                    {
                        type: "paragraph",
                        text: `To access certain features of our website, such as purchasing books or subscribing to newsletters, you may be required to create an account. By registering, you agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.`,
                    },
                ],
            },
            {
                title: "Products and Services",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We provide Christian literature, including books and related resources, available for purchase on our website. All product descriptions, prices, and availability are subject to change without notice. We make every effort to ensure the accuracy of product information. However, errors may occur. In such cases, we reserve the right to cancel or modify orders as necessary.`,
                    },
                ],
            },
            {
                title: "Ordering and Payments",
                blocks: [
                    {
                        type: "paragraph",
                        text: `When you place an order on our website, you agree to pay for the products you select, including any applicable taxes and shipping fees. We accept various payment methods, including credit cards and other payment platforms. By providing payment information, you authorize us to charge the total amount of your order.`,
                    },
                ],
            },
            {
                title: "Shipping and Delivery",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We will make every effort to process and ship your order in a timely manner. Shipping costs are calculated based on your location, and delivery times may vary. Please note that we are not responsible for delays caused by third-party shipping carriers or customs procedures for international orders.`,
                    },
                ],
            },
            {
                title: "Returns and Refunds",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We want you to be satisfied with your purchase. If you are not completely satisfied with your order, you may request a return or refund within 90 days of receiving your items. Certain conditions apply, such as the item being unopened and in original condition. Please refer to our Return Policy for more details.`,
                    },
                ],
            },
            {
                title: "Intellectual Property",
                blocks: [
                    {
                        type: "paragraph",
                        text: `All content on the Christian World Press website, including but not limited to text, images, logos, and graphics, is protected by intellectual property laws and is the property of Christian World Press or its licensors. You may not copy, modify, distribute, or reproduce any of our content without express written permission.`,
                    },
                ],
            },
            {
                title: "User Conduct",
                blocks: [
                    {
                        type: "paragraph",
                        text: `You agree to use our website in a manner that is lawful and respectful. You must not engage in any conduct that:`,
                    },
                    {
                        type: "paragraph",
                        text: `• Violates any applicable laws or regulations`,
                    },
                    {
                        type: "paragraph",
                        text: `• Infringes on the rights of others`,
                    },
                    {
                        type: "paragraph",
                        text: `• Interfers with the functionality of our website`,
                    },
                    {
                        type: "paragraph",
                        text: `• Distributes harmful or malicious content`,
                    },
                    {
                        type: "paragraph",
                        text: `We reserve the right to suspend or terminate your access to our website if you violate these terms.`,
                    },
                ],
            },
            {
                title: "Privacy and Data Protection",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our website, you consent to the collection and use of your data as described in the Privacy Policy.`,
                    },
                ],
            },
            {
                title: "Disclaimers and Limitations of Liability",
                blocks: [
                    {
                        type: "paragraph",
                        text: `While we make every effort to provide accurate and reliable content, Christian World Press makes no guarantees regarding the accuracy, completeness, or reliability of the information on our website. We are not responsible for any errors, omissions, or damages arising from your use of our website or products.`,
                    },
                ],
            },
            {
                title: "Links to Third-Party Websites",
                blocks: [
                    {
                        type: "paragraph",
                        text: `Our website may contain links to third-party websites. These links are provided for your convenience, but we do not endorse or control the content of these external sites. We are not responsible for any damages or issues that arise from visiting third-party websites.`,
                    },
                ],
            },
            {
                title: "Indemnification",
                blocks: [
                    {
                        type: "paragraph",
                        text: `You agree to indemnify and hold harmless Christian World Press, its affiliates, and employees from any claims, losses, damages, or liabilities, including legal fees, arising from your use of our website or your violation of these Terms and Conditions.`,
                    },
                ],
            },
            {
                title: "Modifications to the Terms and Conditions",
                blocks: [
                    {
                        type: "paragraph",
                        text: `We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page with the updated effective date. By continuing to use our website after changes are made, you agree to be bound by the revised Terms and Conditions.`,
                    },
                ],
            },
            {
                title: "Governing Law",
                blocks: [
                    {
                        type: "paragraph",
                        text: `These Terms and Conditions are governed by the laws of United States without regard to its conflict of law principles. Any disputes arising from the use of our website will be resolved in the appropriate courts of United States.`,
                    },
                ],
            },
            {
                title: "Contact Us",
                blocks: [
                    {
                        type: "paragraph",
                        text: `If you have any questions or concerns about these Terms and Conditions, please contact us at authorrelations@christianworldpress.com.`,
                    },
                ],
            },
        ],
    };

    const sections = Array.isArray(termsContent?.sections)
        ? termsContent.sections
        : [];

    return (
        <section className="relative py-8 sm:py-12 lg:py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        {/* Hero Image */}
                        {termsContent.image && (
                            <div className="mb-8 rounded-xl overflow-hidden shadow-xl">
                                <div className="relative h-64 sm:h-80 md:h-96">
                                    <Image
                                        src={termsContent.image}
                                        alt="Terms and Conditions"
                                        fill
                                        className="object-cover"
                                    />
                                    {termsContent?.mainTitle && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-3xl">
                                                {termsContent.mainTitle}
                                            </h1>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Terms Content */}
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
                                    About Our Terms
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-sm text-muted-foreground">
                                        These terms govern your use of our website and services.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Please read carefully before using our services.
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Last updated: <span id="current-date">Loading...</span>
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
                                    <Link href="/privacy-policy" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        Privacy Policy
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

export default TermsContent;