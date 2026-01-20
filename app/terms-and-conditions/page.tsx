"use client"
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import TermsContent from '@/components/TermsContent/TermsContent'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <TermsContent />
            </main>
            <Footer />
        </>
    )
}

export default page