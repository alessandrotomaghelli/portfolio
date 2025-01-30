import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"

interface FooterProps {
  isShort?: boolean
}

export function Footer({ isShort = false }: FooterProps) {
  if (isShort) {
    return (
      <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-400">&copy; 2023 Alessandro Tomaghelli. All rights reserved.</p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-light mb-4">Alessandro Tomaghelli</h3>
          <p className="text-gray-400">Industrial Designer</p>
          <p className="text-gray-400">Milan, Italy</p>
        </div>
        <div>
          <h3 className="text-xl font-light mb-4">Contact</h3>
          <p className="text-gray-400">
            Email:{" "}
            <a href="mailto:info@alessandrotomaghelli.com" className="hover:underline">
              info@alessandrotomaghelli.com
            </a>
          </p>
          <p className="text-gray-400">
            Phone:{" "}
            <a href="tel:+39123456789" className="hover:underline">
              +39 123 456 7890
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-light mb-4">Follow</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2023 Alessandro Tomaghelli. All rights reserved.</p>
      </div>
    </footer>
  )
}

