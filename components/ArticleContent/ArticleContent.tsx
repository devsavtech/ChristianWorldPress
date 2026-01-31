import Image from "next/image";
import React from "react";

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "subheading"; text: string };

type ArticleSection = {
    title: string;
    blocks: ContentBlock[];
};

export type RelatedBook = {
    id: number;
    title: string;
    author: string;
    price: number;
    originalPrice?: number;
    rating: number;
    image: string;
    reviews: number;
};

export type ArticleContentType = {
    image?: string;
    mainTitle?: string;
    sections: ArticleSection[];
    relatedBooks?: RelatedBook[];
};

type Props = {
    articleContent: ArticleContentType;
};

const ArticleContent: React.FC<Props> = ({ articleContent }) => {
    const sections = Array.isArray(articleContent?.sections)
        ? articleContent.sections
        : [];

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

    return (
        <section className="relative py-8 sm:py-12 lg:py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:flex lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:w-3/4">
                        {/* Hero Image */}
                        {articleContent.image && (
                            <div className="mb-8 rounded-xl overflow-hidden shadow-xl">
                                <div className="relative h-64 sm:h-80 md:h-96">
                                    <Image
                                        src={articleContent.image}
                                        alt="Article Image"
                                        fill
                                        className="object-cover"
                                    />
                                    {articleContent?.mainTitle && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-3xl">
                                                {articleContent.mainTitle}
                                            </h1>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Article Content */}
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
                            {/* Related Books Section */}
                            {articleContent.relatedBooks && articleContent.relatedBooks.length > 0 && (
                                <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                                    <h3 className="text-xl font-serif font-bold text-foreground mb-6 pb-2 border-b border-border">
                                        Related Books
                                    </h3>
                                    <div className="space-y-4">
                                        {articleContent.relatedBooks.map((book) => (
                                            <div key={book.id} className="p-4 rounded-lg hover:bg-accent/50 transition-colors">
                                                <div className="w-full h-40 rounded-md overflow-hidden mb-3 flex items-center justify-center p-2">
                                                    <Image
                                                        src={book.image}
                                                        alt={book.title}
                                                        width={120}
                                                        height={160}
                                                        className="object-contain max-w-full max-h-full"
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <h4 className="font-medium text-foreground text-sm line-clamp-2 mb-1">
                                                        {book.title}
                                                    </h4>
                                                    <p className="text-xs text-muted-foreground mb-2">
                                                        by {book.author}
                                                    </p>
                                                    <div className="flex justify-center items-center gap-2 mb-2">
                                                        <StarRating rating={book.rating} />
                                                        <span className="text-xs text-muted-foreground">
                                                            ({book.reviews})
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-center items-center gap-2">
                                                        <span className="font-bold text-foreground">
                                                            ${book.price}
                                                        </span>
                                                        {book.originalPrice && book.originalPrice > book.price && (
                                                            <span className="text-sm text-muted-foreground line-through">
                                                                ${book.originalPrice}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleContent;