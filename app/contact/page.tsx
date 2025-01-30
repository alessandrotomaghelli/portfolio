"use client"

import { FadeIn } from "@/components/fade-in"
import { Download, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-12 pt-32 pb-24 px-6">
      <FadeIn>
        <h1 className="text-4xl md:text-6xl font-light">GET IN TOUCH</h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-xl text-gray-400">Let&apos;s discuss your next project and bring your vision to life.</p>
      </FadeIn>

      <div className="space-y-16">
        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <h2 className="text-2xl font-light">ALESSANDRO TOMAGHELLI</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Milan, IT
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+393892932367" className="hover:underline">
                  +39 3892932367
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:alessandrotomaghelli@gmail.com" className="hover:underline">
                  alessandrotomaghelli@gmail.com
                </a>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="space-y-6">
            <h2 className="text-2xl font-light">Find me on</h2>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8h8M6 12h8M6 16h8M16 8h2M16 12h2M16 16h2" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="space-y-6">
            <h2 className="text-2xl font-light">Downloads</h2>
            <p className="text-gray-400">
              Get a detailed overview of my work and experience in a comprehensive PDF format.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/mock-portfolio.pdf"
                download
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-700 px-6 text-sm font-medium transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Portfolio
              </a>
              <a
                href="/mock-cv.pdf"
                download
                className="inline-flex h-12 items-center justify-center rounded-md border border-gray-700 px-6 text-sm font-medium transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <Footer isShort />
    </div>
  )
}

