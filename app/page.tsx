'use client'

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
  return (
    <div className="min-h-screen">
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
    </div>
  )
}
