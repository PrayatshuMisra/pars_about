'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const HERO_IMAGES = [
  '/2.jpeg',
  '/3.jpeg',
  '/4.jpeg'
]

function HeroCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={HERO_IMAGES[index]}
          alt={`Dashboard Preview ${index + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? 'bg-red-700 w-6' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 z-20"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setIndex((prev) => (prev + 1) % HERO_IMAGES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 z-20"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Glass Overlay for depth */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-black/10 rounded-2xl" />
    </div>
  )
}

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements - Reduced intensity for video visibility */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-space-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-2 leading-tight"
        >
          AI-Powered Emergency{' '}
          <span className="text-red-700">
            Intelligence for Modern Healthcare
          </span>
        </motion.h1>

        {/* Center Logo */}
        <motion.div variants={itemVariants} className="flex justify-center mb-4">
          <img src="/logo.png" alt="PARS Logo" className="w-32 h-32 sm:w-48 sm:h-48 object-cover transition-transform duration-500 hover:scale-105" />
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/70 mb-3 max-w-3xl mx-auto leading-relaxed"
        >
          Built by engineers at MIT Manipal, PARS combines real-time patient triage and intelligent medical coding to assist doctors in making faster, more informed decisions during critical moments.
        </motion.p>

        {/* Additional Line */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/60 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Designed to support emergency departments, clinics, and healthcare teams — starting with real-world validation and feedback.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 bg-black text-white rounded-xl font-bold hover:bg-red-700 hover:text-white transition-all duration-300 shadow-xl"
          >
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/20 bg-black text-white rounded-xl font-bold hover:bg-red-700 hover:text-white transition-all duration-300 shadow-xl"
          >
            View Live Prototype
          </Link>
        </motion.div>

        {/* Dashboard Preview - Image Carousel */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50" />
          <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl aspect-[16/9]">
            <HeroCarousel />
          </div>
        </motion.div>

        {/* Trust Line */}
        <motion.p
          variants={itemVariants}
          className="text-sm text-foreground/50 mt-12"
        >
          Recognized by Kanini & Economic Times • Built during national-level hackathons
        </motion.p>
      </motion.div>
    </section>
  )
}
