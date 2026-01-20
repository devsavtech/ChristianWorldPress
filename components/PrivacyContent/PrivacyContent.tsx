import Link from 'next/link'
import React from 'react'
// Images
import BackgroundImage from "../../public/Featered Articles/Christian Living.png"
import Image from 'next/image'

const PrivacyContent = () => {
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
                        <h1 className='font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight'>
                            Privacy Policy
                        </h1>
                        <p className='text-xs sm:text-base md:text-md text-muted-foreground xl:max-w-6xl mx-auto'>
                            At Christian World Press, your privacy is very important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or engage with our services. By accessing or using our website, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </div>
                </div>
            </section>
            <section className='relative flex items-center overflow-hidden py-12 sm:py-16 xl:py-18'>
                <div className='relative z-10 px-4 sm:px-5 md:px-6 lg:px-8 w-full'>
                    <div className="gap-12 items-center">
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Information We Collect
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                When you visit our website, subscribe to our newsletter, or make a purchase, we may collect certain types of information. This includes personal information such as your name, email address, shipping address, and payment details when making purchases. We may also collect usage data, which includes information about how you interact with our website such as the pages you visit, the links you click, and your IP address. This helps us improve our website's user experience and optimize our services for our visitors.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                How We Use Your Information
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We use the information we collect to process and fulfill your orders, communicate with you regarding your purchases and updates, and send relevant content, including newsletters and promotional offers, if you have opted-in. Additionally, we may use this data to improve our website, understand usage patterns, and enhance your browsing experience.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                How We Protect Your Information
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We take your privacy seriously and implement a variety of security measures to protect your personal information. These measures include secure server technology and encrypted transactions, which help ensure that your data remains confidential and secure. We are committed to safeguarding your information and preventing unauthorized access.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Sharing Your Information
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We do not sell, trade, or share your personal information with third parties except in certain circumstances. We may share your information with trusted third-party service providers, such as payment processors and shipping partners, who assist us in operating our business and delivering services to you. Additionally, we may disclose your information if required by law or to protect the rights, property, and safety of Christian World Press, its users, or others.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Cookies
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                Our website may use cookies to enhance your browsing experience. Cookies are small files that store information on your computer or device, allowing us to remember your preferences and improve your experience with our website. You can choose to disable cookies in your browser settings, but please note that doing so may affect some functionality of the website.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Your Rights
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                You have the right to access, update, or delete the personal information we hold about you. If you no longer wish to receive promotional emails, you can opt-out by following the unsubscribe instructions provided in each email. You may also request a copy of your data held by us or inquire about how we use your personal information by contacting us directly.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Changes to This Privacy Policy
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to periodically review this policy to stay informed about how we are protecting your personal information.
                            </p>
                        </div>
                        <div className='text-center md:text-left space-y-2 md:space-y-3 mb-6 xl:mb-12'>
                            <h2 className='text-xl sm:text-3xl font-serif font-bold text-foreground uppercase tracking-wider'>
                                Contact Us
                            </h2>
                            <p className='text-xs sm:text-base md:text-md text-muted-foreground'>
                                If you have any questions or concerns regarding this Privacy Policy or how your information is being handled, please contact us at <Link href="mailto:info@christianworldpress.com;" className='underline'>
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

export default PrivacyContent