import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Images
import BackgroundImage from "../../public/Featered Articles/Christian Living.png"

const TermsContent = () => {
    return (
        <>
            <section className='relative'>
                <div className="max-h-96 overflow-hidden">
                    <Image
                        src={BackgroundImage}
                        alt="Background Image"
                        width={100}
                        height={250}
                        className="w-full object-cover"
                    />
                </div>
                <div className="txt absolute top-[50%] translate-y-[-50%] left-0 w-full">
                    <div className="text-center mb-6 xl:mb-12 flex items-center justify-center flex-col px-4 xl:px-0 space-y-2 md:space-y-3">
                        <h1 className='font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-3xl mx-auto'>
                            Terms and Conditions
                        </h1>
                        <p className='text-xs sm:text-base md:text-md text-muted-foreground xl:max-w-6xl mx-auto'>
                            Welcome to Christian World Press! By accessing or using our website and services, you agree to be bound by the following Terms and Conditions. Please read them carefully before using our website or making any purchases. If you do not agree to these terms, please refrain from using our site.
                        </p>
                    </div>
                </div>
            </section>
            <section className='relative flex items-center overflow-hidden py-12 sm:py-16 xl:pb-18'>
                <div className='relative z-10 px-4 sm:px-5 md:px-6 lg:px-8 w-full'>
                    <div className="gap-12 items-center">
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Use of Our Website
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                By visiting and using the Christian World Press website, you agree to comply with all applicable laws and regulations. You are granted a limited, non-exclusive, and non-transferable license to access and use our website for personal, non-commercial purposes, subject to these Terms and Conditions.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Account Registration
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                To access certain features of our website, such as purchasing books or subscribing to newsletters, you may be required to create an account. By registering, you agree to provide accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Products and Services
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We provide Christian literature, including books and related resources, available for purchase on our website. All product descriptions, prices, and availability are subject to change without notice. We make every effort to ensure the accuracy of product information. However, errors may occur. In such cases, we reserve the right to cancel or modify orders as necessary.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Ordering and Payments
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                When you place an order on our website, you agree to pay for the products you select, including any applicable taxes and shipping fees. We accept various payment methods, including credit cards and other payment platforms. By providing payment information, you authorize us to charge the total amount of your order.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Shipping and Delivery
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We will make every effort to process and ship your order in a timely manner. Shipping costs are calculated based on your location, and delivery times may vary. Please note that we are not responsible for delays caused by third-party shipping carriers or customs procedures for international orders.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Returns and Refunds
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We want you to be satisfied with your purchase. If you are not completely satisfied with your order, you may request a return or refund within 90 days of receiving your items. Certain conditions apply, such as the item being unopened and in original condition. Please refer to our Return Policy for more details.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Intellectual Property
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                All content on the Christian World Press website, including but not limited to text, images, logos, and graphics, is protected by intellectual property laws and is the property of Christian World Press or its licensors. You may not copy, modify, distribute, or reproduce any of our content without express written permission.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                User Conduct
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground mb-4 xl:mb-5'>
                                You agree to use our website in a manner that is lawful and respectful. You must not engage in any conduct that:
                            </p>
                            <ul className='list-disc ps-4 mb-4 xl:mb-5'>
                                <li className='text-xs sm:text-base md:text-md text-muted-foreground mb-3'>
                                    Violates any applicable laws or regulations
                                </li>
                                <li className='text-xs sm:text-base md:text-md text-muted-foreground mb-3'>
                                    Infringes on the rights of others
                                </li>
                                <li className='text-xs sm:text-base md:text-md text-muted-foreground mb-3'>
                                    Interferes with the functionality of our website
                                </li>
                                <li className='text-xs sm:text-base md:text-md text-muted-foreground mb-3'>
                                    Distributes harmful or malicious content
                                </li>
                            </ul>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We reserve the right to suspend or terminate your access to our website if you violate these terms.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Privacy and Data Protection
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                Your use of our website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our website, you consent to the collection and use of your data as described in the Privacy Policy.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Disclaimers and Limitations of Liability
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                While we make every effort to provide accurate and reliable content, Christian World Press makes no guarantees regarding the accuracy, completeness, or reliability of the information on our website. We are not responsible for any errors, omissions, or damages arising from your use of our website or products.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Links to Third-Party Websites
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                Our website may contain links to third-party websites. These links are provided for your convenience, but we do not endorse or control the content of these external sites. We are not responsible for any damages or issues that arise from visiting third-party websites.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Indemnification
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                You agree to indemnify and hold harmless Christian World Press, its affiliates, and employees from any claims, losses, damages, or liabilities, including legal fees, arising from your use of our website or your violation of these Terms and Conditions.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Modifications to the Terms and Conditions
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page with the updated effective date. By continuing to use our website after changes are made, you agree to be bound by the revised Terms and Conditions.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Governing Law
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                These Terms and Conditions are governed by the laws of United States without regard to its conflict of law principles. Any disputes arising from the use of our website will be resolved in the appropriate courts of United States.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Contact Us
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                If you have any questions or concerns about these Terms and Conditions, please contact us at <Link href="mailto:info@christianworldpress.com;" className='underline'>
                                    info@christianworldpress.com
                                </Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermsContent