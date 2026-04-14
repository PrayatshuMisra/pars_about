'use client'

import { motion, useScroll, useSpring, Variants } from 'framer-motion'
import { useRef } from 'react'

const timeline = [
  {
    year: 'Feb 2026',
    title: 'Triage System Development',
    description: 'Built first working AI triage prototype. Recognized by Kanini for innovation and problem-solving.',
  },
  {
    year: 'Mar 2026',
    title: 'Medical Coding Engine',
    description: 'Developed AI-based ICD-10 / CPT coding system. Acknowledged by Economic Times for healthcare innovation.',
  },
  {
    year: 'Apr 2026',
    title: 'Startup Incubation',
    description: 'Selected for incubation at MIT Manipal Innovation Centre. Began development as a startup team.',
  },
  {
    year: 'Future',
    title: 'Clinical Validation',
    description: 'Clinical feedback & validation, pilot testing with clinics, and continuous AI improvement.',
  },
]

export function TimelineSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants: Variants = {
    hidden: (index: number = 0) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section ref={containerRef} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Journey So Far
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            How We <span className="text-red-700">Got Here</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Central Vertical Line (Static Background) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/30 -translate-x-1/2 hidden md:block" />
          
          {/* Central Vertical Line (Animated Progress) */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-red-700 via-primary to-transparent -translate-x-1/2 origin-top hidden md:block"
          />

          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                className={`relative flex items-center justify-between md:justify-normal gap-12 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } group/timeline`}
              >
                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="relative p-1 rounded-2xl bg-gradient-to-br from-border/50 to-transparent group-hover/timeline:from-red-700/40 transition-all duration-500">
                    <div className="bg-black rounded-[calc(1rem-1px)] p-8 h-full relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-red-700 font-mono text-sm font-bold tracking-tighter">
                          [{item.year}]
                        </span>
                        <div className="h-[1px] flex-1 bg-border/20 mx-4 md:hidden" />
                      </div>
                      
                      <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-4">
                        {item.title}
                      </h3>
                      <p className="text-foreground/60 leading-relaxed font-medium text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Node (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                  <div className="w-12 h-12 flex items-center justify-center">
                    {/* Outer Pulse */}
                    <div className="absolute inset-0 rounded-full bg-red-700/20 animate-ping group-hover/timeline:bg-primary/30" />
                    {/* Inner Circle */}
                    <div className="w-4 h-4 rounded-full bg-black border-2 border-red-700 group-hover/timeline:border-primary transition-colors duration-300 z-10" />
                  </div>
                  
                  {/* Connection Line (Desktop) */}
                  <div className={`absolute h-[1px] bg-gradient-to-r group-hover/timeline:from-red-700 group-hover/timeline:to-transparent transition-all duration-500 w-16 
                    ${index % 2 === 0 ? 'right-full from-red-700/40 to-transparent' : 'left-full from-transparent to-red-700/40'}`} 
                  />
                </div>

                {/* Empty Spacer (Desktop) */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}