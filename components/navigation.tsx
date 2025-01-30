"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center bg-black border-b border-gray-800">
      <Link href="/" className="text-xl hover:text-gray-300 transition-colors">
        ALESSANDRO TOMAGHELLI
      </Link>
      <div className="flex gap-8">
        {[
          { href: "/projects", label: "Projects" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative hover:text-gray-300 transition-colors ${pathname === href ? "text-gray-300" : ""}`}
          >
            {label}
            {pathname === href && (
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        ))}
      </div>
    </nav>
  )
}

