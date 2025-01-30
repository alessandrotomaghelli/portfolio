"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one",
    image: "/placeholder.svg?height=600&width=800&text=Project+One",
    slug: "project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two",
    image: "/placeholder.svg?height=600&width=800&text=Project+Two",
    slug: "project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three",
    image: "/placeholder.svg?height=600&width=800&text=Project+Three",
    slug: "project-three",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description of project four",
    image: "/placeholder.svg?height=600&width=800&text=Project+Four",
    slug: "project-four",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Description of project five",
    image: "/placeholder.svg?height=600&width=800&text=Project+Five",
    slug: "project-five",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Description of project six",
    image: "/placeholder.svg?height=600&width=800&text=Project+Six",
    slug: "project-six",
  },
]

function ProjectsContent() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <h1 className="text-4xl md:text-6xl font-light">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * project.id }}
                className="space-y-4 group relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-light">{project.title}</h2>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <ArrowRight className="w-6 h-6 text-black" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

export default function Projects() {
  return (
    <ErrorBoundary>
      <ProjectsContent />
    </ErrorBoundary>
  )
}

