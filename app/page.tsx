'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { RecognitionSection } from '@/components/sections/recognition'
import { AboutSection } from '@/components/sections/about'
import { ProductsSection } from '@/components/sections/products'
import { FeaturesSection } from '@/components/sections/features'
import { TimelineSection } from '@/components/sections/timeline'
import { DemoSection } from '@/components/sections/demo'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { TeamSection } from '@/components/sections/team'
import { CollaborationSection } from '@/components/sections/collaboration'
import { RoadmapSection } from '@/components/sections/roadmap'
import { FAQSection } from '@/components/sections/faq'
import { CTASection } from '@/components/sections/cta'
import { FooterSection } from '@/components/sections/footer'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  // Prevent scrolling while intro is playing
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showIntro])

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro-video"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <video
              autoPlay
              muted
              playsInline
              onEnded={() => setShowIntro(false)}
              className="w-full h-full object-cover"
            >
              <source src="/initial-show.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: showIntro ? 0 : 1, 
          scale: showIntro ? 0.95 : 1 
        }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="min-h-screen"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <Navbar />
          <main>
            <HeroSection />
            <RecognitionSection />
            <AboutSection />
            <ProductsSection />
            <FeaturesSection />
            <TimelineSection />
            <DemoSection />
            <TestimonialsSection />
            <TeamSection />
            <CollaborationSection />
            <RoadmapSection />
            <FAQSection />
            <CTASection />
          </main>
          <FooterSection />
        </ThemeProvider>
      </motion.div>
    </>
  )
}
