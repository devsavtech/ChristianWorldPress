import type React from "react"
import type { Metadata } from "next"
import { Crimson_Text, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import ChatButton from "@/components/chatbutton"
import LiveChat from "@/components/live-chat"

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ChristianWorldPress | Trusted Christian Publishing & Distribution",
  description:
    "Spreading the Gospel to the world through trusted Christian book publishing and distribution. Access 100+ titles across 220+ countries.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${lato.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <LiveChat />
        {children}
        <ChatButton />
        <Analytics />
      </body>
    </html>
  )
}
