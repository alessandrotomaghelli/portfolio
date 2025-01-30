"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/footer"

// This is a mock data structure. In a real application, you would fetch this data from an API or database.
const projectsData = {
  "project-one": {
    title: "AIRMADE™ COCOON",
    client: "AIR COMPANY",
    year: "2024",
    description:
      "A groundbreaking sustainable architecture project that reimagines the relationship between built structures and natural environments.",
    images: [
      "https://sjc.microlink.io/0qsc8FRUWfnkjGm8jXtN2n-3SbwxJa7_vEpfOyKLIZubnufF_16luVwrA87Sh5PPw7cu2QWyfYm3AavZ9CkqUQ.jpeg",
      "/placeholder.svg?height=1080&width=1920&text=Detail+1",
      "/placeholder.svg?height=1080&width=1920&text=Detail+2",
      "/placeholder.svg?height=1080&width=1920&text=Detail+3",
    ],
    introduction:
      "The AIRMADE™ COCOON project represents a paradigm shift in sustainable architecture, blending cutting-edge technology with biomimetic design principles. This innovative structure not only minimizes its environmental footprint but also serves as a beacon of harmony between human habitation and nature.",
    challenge:
      "The primary challenge was to create a structure that could adapt to various environments while maintaining a minimal ecological impact. We needed to develop a design that was not only aesthetically pleasing but also highly functional and energy-efficient.",
    solution:
      "Our team developed a modular, pod-like structure inspired by natural forms such as seed pods and cocoons. The AIRMADE™ COCOON utilizes advanced materials that respond to environmental conditions, regulating temperature and humidity naturally. The structure's unique shape maximizes interior space while minimizing surface area, reducing energy needs for heating and cooling.",
    features: [
      "Self-sustaining water collection and filtration system",
      "Photovoltaic skin that adapts to optimal sun exposure",
      "Biodegradable and recyclable construction materials",
      "Smart home integration for efficient resource management",
      "Modular design allowing for easy expansion or relocation",
    ],
    impact:
      "The AIRMADE™ COCOON sets new standards for eco-conscious architecture. It demonstrates how innovative design can significantly reduce carbon footprint without compromising on comfort or aesthetics. The project has garnered international attention and is being considered for implementation in various climate-challenged regions.",
    future:
      "Looking ahead, we aim to further refine the AIRMADE™ COCOON concept, exploring applications in urban environments and extreme climates. The success of this project opens up exciting possibilities for sustainable living solutions that can be adapted to diverse global contexts.",
    team: [
      { name: "Alessandro Tomaghelli", role: "Lead Designer" },
      { name: "Emma Rodriguez", role: "Environmental Engineer" },
      { name: "Hiroshi Tanaka", role: "Materials Specialist" },
      { name: "Zoe Chen", role: "Smart Systems Integrator" },
    ],
    awards: [
      { name: "Green Architecture Award 2024", organization: "Sustainable Design Institute" },
      { name: "Innovation in Housing Solution", organization: "World Habitat Forum" },
    ],
  },
  // Add more projects as needed...
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    return <div>Project not found</div>
  }

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

