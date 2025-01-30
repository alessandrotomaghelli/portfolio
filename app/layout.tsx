import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alessandro Tomaghelli - Industrial Design",
  description: "Portfolio of industrial design projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}

