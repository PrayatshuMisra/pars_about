'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Real-time Triage Scoring',
    description: 'Working prototype tested with realistic vitals and patient data',
  },
  {
    title: 'AI-Assisted Coding',
    description: 'ICD-10 and CPT code suggestions based on clinical notes',
  },
  {
    title: 'Explainable AI Outputs',
    description: 'Transparent reasoning for all AI decisions to build clinical trust',
  },
  {
    title: 'Multilingual Support',
    description: 'Intake support in multiple languages for diverse patient populations',
  },
  {
    title: 'Modular API Backend',
    description: 'Built for integration with existing hospital systems and workflows',
  },
  {
    title: 'Designed for Clinicians',
    description: 'Intuitive interfaces built with real medical workflows in mind',
  },
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 -z-10" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Capabilities
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            What We&apos;re <span className="text-red-700">Building</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="relative bg-black border border-border/40 rounded-2xl p-8 overflow-hidden hover:border-red-700/50 transition-all duration-500 h-full flex flex-col">
                
                {/* Decorative Top Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border/40 to-transparent group-hover:via-red-700 transition-all duration-700" />

                {/* Background Large Number (Watermark effect) */}
                <div className="absolute -bottom-4 -right-2 pointer-events-none select-none">
                  <span className="font-space-grotesk text-9xl font-black text-white/[0.03] group-hover:text-red-700/[0.05] transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-700">
                      Capability {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-foreground/60 leading-relaxed font-medium text-sm border-l-2 border-border/20 pl-4 group-hover:border-red-700/40 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}