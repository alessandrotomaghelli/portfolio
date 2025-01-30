"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"

const project = {
  title: "Project Four",
  client: "Client Name",
  year: "2024",
  description:
    "An innovative project showcasing the latest advancements in industrial design and sustainable technology.",
  images: [
    "/placeholder.svg?height=1080&width=1920&text=Project+Four+Main",
    "/placeholder.svg?height=1080&width=1920&text=Project+Four+Detail+1",
    "/placeholder.svg?height=1080&width=1920&text=Project+Four+Detail+2",
    "/placeholder.svg?height=1080&width=1920&text=Project+Four+Detail+3",
  ],
  introduction:
    "Project Four represents a leap forward in our approach to industrial design, combining cutting-edge technology with sustainable practices to create a product that's not only functional but also environmentally responsible.",
  challenge:
    "Our main challenge was to develop a product that met high performance standards while significantly reducing its environmental impact throughout its lifecycle.",
  solution:
    "We employed advanced materials and innovative manufacturing processes to create a product that's both high-performing and eco-friendly. Our solution includes a modular design for easy repairs and upgrades, reducing waste and extending the product's lifespan.",
  features: [
    "Modular design for easy repairs and upgrades",
    "Made from 80% recycled and recyclable materials",
    "Energy-efficient operation, reducing carbon footprint",
    "Smart technology integration for optimal performance",
    "Sleek, minimalist design that fits various environments",
  ],
  impact:
    "Project Four has set a new standard in sustainable industrial design. It demonstrates that high performance and environmental responsibility can go hand in hand, paving the way for a new generation of eco-conscious products.",
  future:
    "Building on the success of Project Four, we're exploring ways to apply these principles to a wider range of products, further pushing the boundaries of sustainable design in various industries.",
  team: [
    { name: "Alessandro Tomaghelli", role: "Lead Designer" },
    { name: "Sarah Johnson", role: "Sustainability Expert" },
    { name: "Carlos Rodriguez", role: "Materials Engineer" },
    { name: "Yuki Tanaka", role: "Product Manager" },
  ],
  awards: [
    { name: "Eco-Design Excellence Award", organization: "Sustainable Products Institute" },
    { name: "Innovation in Manufacturing", organization: "Industrial Design Society" },
  ],
}

function ProjectContent() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
        <div className="px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl hover:text-gray-300 transition-colors">
            ALESSANDRO TOMAGHELLI
          </Link>
          <div className="flex gap-8">
            <Link href="/projects" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Project Metadata Row */}
        <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between text-sm tracking-wider border-t border-gray-800">
          <Link href="/projects" className="flex items-center text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="mr-2" />
            Back to Projects
          </Link>
          <div className="flex items-center gap-12">
            <div>
              <span className="text-gray-400 mr-2">PROJECT</span>
              {project.title}
            </div>
            <div>
              <span className="text-gray-400 mr-2">CLIENT</span>
              {project.client}
            </div>
            <div>
              <span className="text-gray-400 mr-2">YEAR</span>
              {project.year}
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Image Sections */}
      {project.images.map((image, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="relative h-screen w-full snap-start bg-black"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`${project.title} - Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {index === 0 && (
            <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl"
              >
                <p className="text-lg text-white/80">{project.description}</p>
              </motion.div>
            </div>
          )}
        </motion.section>
      ))}

      {/* Project Details */}
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">Introduction</h2>
            <p className="text-lg text-white/80">{project.introduction}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">The Challenge</h2>
            <p className="text-lg text-white/80">{project.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">Our Solution</h2>
            <p className="text-lg text-white/80">{project.solution}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">Key Features</h2>
            <ul className="list-disc list-inside text-lg text-white/80 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">Impact</h2>
            <p className="text-lg text-white/80">{project.impact}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">Future Directions</h2>
            <p className="text-lg text-white/80">{project.future}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">Project Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.team.map((member, index) => (
                <div key={index} className="text-white/80">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-light">Awards & Recognition</h2>
            <div className="space-y-4">
              {project.awards.map((award, index) => (
                <div key={index} className="text-white/80">
                  <p className="font-semibold">{award.name}</p>
                  <p className="text-sm">{award.organization}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function ProjectPage() {
  return (
    <ErrorBoundary>
      <ProjectContent />
    </ErrorBoundary>
  )
}

