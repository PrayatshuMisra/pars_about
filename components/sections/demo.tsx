'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const demos = [
  {
    title: 'Triage Dashboard',
    description: 'Working prototype showing real-time patient queue with AI-powered priority scoring.',
    image: '/triage-dashboard.png',
  },
  {
    title: 'Coding Engine',
    description: 'AI-assisted medical coding with ICD-10 / CPT suggestions and compliance validation.',
    image: '/coding_engine.jpeg',
  },
  {
    title: 'System Architecture',
    description: 'Modular API-based backend designed for integration with hospital systems.',
    image: '/architecture.jpeg',
  },
]

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(0)

  return (
    <section id="demo" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest">
            See the System in Action
          </p>
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            Working <span className="text-red-700">Prototype</span>
          </h2>
          <p className="text-lg text-foreground/60 mt-4">
            This is a working prototype demonstrating how AI can assist in triage and medical coding workflows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Tabs */}
          <div className="space-y-4">
            {demos.map((demo, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveDemo(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                  activeDemo === index
                    ? 'border-red-700 bg-red-700/5'
                    : 'border-border/50 hover:border-red-700/30'
                }`}
              >
                <h3 className="font-space-grotesk font-semibold text-foreground">{demo.title}</h3>
                <p className="text-sm text-foreground/60 mt-1">{demo.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Active Demo Preview */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-black border border-border/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
              {/* Preview Header */}
              <div className="bg-gradient-to-r from-red-700/10 to-transparent border-b border-border/50 p-6">
                <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-1">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{demos[activeDemo].description}</p>
              </div>

              {/* Preview Content */}
              <div className="relative flex-grow min-h-[400px]">
                <img 
                  src={demos[activeDemo].image} 
                  alt={demos[activeDemo].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">Live Prototype</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
