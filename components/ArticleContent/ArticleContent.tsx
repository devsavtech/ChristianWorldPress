import Image from "next/image";
import React from "react";

type ContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "subheading"; text: string };

type ArticleSection = {
    title: string;
    blocks: ContentBlock[];
};

export type ArticleContentType = {
    image?: string;
    mainTitle?: string;
    sections: ArticleSection[];
};

type Props = {
    articleContent: ArticleContentType;
};

const ArticleContent: React.FC<Props> = ({ articleContent }) => {
    const sections = Array.isArray(articleContent?.sections)
        ? articleContent.sections
        : [];

    return (
        <section className="relative flex items-center overflow-hidden pb-12 sm:pb-16 xl:pt-0 xl:py-18">
            <div className="w-full">
                <div className="relative gap-12 items-center">
                    {articleContent.image && (
                        <div className="mb-8 max-h-96 overflow-hidden">
                            <Image
                                src={articleContent.image}
                                alt="Article Image"
                                width={100}
                                height={550}
                                className="w-full object-cover"
                            />
                            {articleContent?.mainTitle && (
                                <div className="absolute left-0 right-0 top-[3%] sm:top-[5%] md:top-[8%] text-center px-4">
                                    <h2 className="text-xl sm:text-3xl xl:text-4xl font-serif font-bold uppercase tracking-wider mb-4">
                                        {articleContent.mainTitle}
                                    </h2>
                                </div>
                            )}
                        </div>
                    )}
                    <div className=" px-4 sm:px-5 md:px-6 lg:px-8">
                        {sections.map((section, index) => {
                            const blocks = Array.isArray(section?.blocks)
                                ? section.blocks
                                : [];

                            return (
                                <div key={index} className="mb-10">
                                    {section?.title && (
                                        <h2 className="text-xl sm:text-3xl font-serif font-bold uppercase tracking-wider mb-4">
                                            {section.title}
                                        </h2>
                                    )}

                                    {blocks.map((block, i) => {
                                        if (block?.type === "subheading") {
                                            return (
                                                <h3
                                                    key={i}
                                                    className="text-lg sm:text-2xl font-serif font-bold mt-6 mb-2"
                                                >
                                                    {block.text}
                                                </h3>
                                            );
                                        }

                                        if (block?.type === "paragraph") {
                                            return (
                                                <p
                                                    key={i}
                                                    className="text-sm sm:text-base text-muted-foreground mb-3"
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
            </div>
        </section>
    );
};

export default ArticleContent;