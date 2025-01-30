"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"

const carouselImages = [
  {
    src: "/placeholder.svg?height=1080&width=1920&text=Project+One",
    title: "Project One",
    description: "Short description of Project One",
    slug: "project-one",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920&text=Project+Two",
    title: "Project Two",
    description: "Short description of Project Two",
    slug: "project-two",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920&text=Project+Three",
    title: "Project Three",
    description: "Short description of Project Three",
    slug: "project-three",
  },
]

const featuredProjects = [
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
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-black text-white">
      {/* Carousel Section */}
      <section className="relative h-screen">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Link href={`/projects/${carouselImages[currentImage].slug}`}>
              <div className="relative h-full overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </Link>
            <div className="absolute bottom-8 left-8 p-4 max-w-md">
              <h3 className="text-2xl font-light mb-2 text-white">{carouselImages[currentImage].title}</h3>
              <p className="text-sm text-gray-300">{carouselImages[currentImage].description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className="text-4xl md:text-6xl font-light">
            Ciao
          </h1>
          <p className="text-lg text-gray-400">
            Industrial designer focused on creating meaningful experiences through innovative solutions. Specializing in
            product design with a minimalist approach.
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
        </motion.div>
      </section>

      {/* Two Images Side by Side */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {["project-four", "project-five"].map((project, index) => (
            <div key={index} className="relative aspect-[4/3] group overflow-hidden">
              <Link href={`/projects/${project}`}>
                <Image
                  src={`/placeholder.svg?height=600&width=800&text=Project+${index + 4}`}
                  alt={`Project ${index + 4}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 right-8 p-4 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-light mb-2 text-white">Project {index + 4}</h3>
                    <p className="text-sm text-gray-300">Short description of Project {index + 4}</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-6 h-6 text-black" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Full Width Image with Text */}
      <section className="relative h-screen">
        <Link href="/projects/project-six" className="absolute inset-0">
          <div className="relative h-full overflow-hidden">
            <Image
              src="/placeholder.svg?height=1080&width=1920&text=Project+Six"
              alt="Project Six"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl px-6"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-6">Design Philosophy</h2>
              <p className="text-xl">
                We focus on high-end products by combining technological excellence with a unique design language.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-8 left-8 p-4 max-w-md">
            <h3 className="text-2xl font-light mb-2 text-white">Project Six</h3>
            <p className="text-sm text-gray-300">Short description of Project Six</p>
          </div>
        </Link>
      </section>

      {/* Text with Side Image */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-light mb-6">Our Approach</h2>
            <p className="text-lg text-gray-400">
              We believe in creating products that not only look beautiful but also enhance the user's life. Our
              approach combines aesthetics with functionality, resulting in designs that stand the test of time.
            </p>
          </div>
          <div className="relative aspect-square group overflow-hidden">
            <Link href="/projects/project-one">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Project+One"
                alt="Our approach"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 p-4 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-light mb-2 text-white">Project One</h3>
                  <p className="text-sm text-gray-300">Short description of Project One</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-6 h-6 text-black" />
                </div>
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <h2 className="text-3xl font-light">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="space-y-4 group relative">
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
                    <h3 className="text-xl font-light">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  >
                    <ArrowRight className="w-6 h-6 text-black" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h2 className="text-3xl font-light text-center">Companies I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="aspect-[3/2] relative">
                <Image
                  src={`/placeholder.svg?height=100&width=150&text=Company+${item}`}
                  alt={`Company ${item}`}
                  width={150}
                  height={100}
                  className="object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-light">Let's connect</h2>
          <p className="text-lg text-gray-400">I'm always open to new opportunities and exciting projects.</p>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 px-8 text-sm font-medium transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

