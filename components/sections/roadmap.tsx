'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react'

const roadmap = [
  {
    phase: 'Phase 1',
    status: 'Completed',
    items: [
      'Prototype Development',
      'Triage System Core',
      'Medical Coding Engine',
    ],
  },
  {
    phase: 'Phase 2',
    status: 'In progress',
    items: [
      'AI Model Iteration',
      'Clinical Feedback Integration',
      'Clinical Validation',
    ],
  },
  {
    phase: 'Phase 3',
    status: 'Upcoming',
    items: [
      'System Refinement',
      'Pilot Testing with Clinics',
      'Full Deployment Readiness',
    ],
  },
]

export function RoadmapSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="roadmap" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Path Forward
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-4xl sm:text-5xl text-white mt-2">
            Our <span className="text-red-700">Roadmap</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {roadmap.map((phase, index) => (
            <div key={index} className="relative group/roadmap-item">
              <motion.div
                variants={itemVariants}
                className={`relative p-8 rounded-2xl border transition-all duration-300 h-full ${
                  phase.status === 'Completed' || phase.status === 'In progress'
                    ? 'bg-black border-red-700/50 shadow-[0_0_20px_rgba(185,28,28,0.1)]'
                    : 'bg-black border-border/50 hover:border-primary/30'
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  {phase.status === 'Completed' || phase.status === 'In progress' ?  (
                    <CheckCircle2 className="w-6 h-6 text-red-700 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-white/20 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl text-white">
                      {phase.phase}
                    </h3>
                    <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${
                      phase.status === 'Completed' || phase.status === 'In progress'
                      'text-red-700' : 'text-white/30'
                    }`}>
                      {phase.status}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        phase.status === 'Completed' || phase.status === 'In progress'
                            ? 'bg-red-700'
                            : 'bg-primary/40'
                      }`} />
                      <span className="text-white/60 text-sm font-medium leading-relaxed group-hover/roadmap-item:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Arrow Connector (Desktop Only) */}
              {index < roadmap.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-20 items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-red-700/50 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

