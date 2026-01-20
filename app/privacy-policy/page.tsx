import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import PrivacyContent from '@/components/PrivacyContent/PrivacyContent'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <PrivacyContent />
            </main>
            <Footer />
        </>
    )
}

export default page