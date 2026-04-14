'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export function AboutSection() {
  const challenges = [
    'Delayed prioritization of critical patients',
    'Time-consuming medical coding workflows',
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest">Why We Built PARS</p>
              <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
                Solving Real <span className="text-red-700">Healthcare Problems</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/70 mb-8 leading-relaxed"
            >
              Emergency rooms often face major challenges. PARS is an attempt to solve both using AI to assist, not replace, medical professionals.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-4 mb-10">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-black border border-border/40 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-foreground/80 font-semibold">{challenge}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div
              variants={itemVariants}
              className="p-8 border-l-4 border-primary bg-primary/5 rounded-2xl shadow-inner relative overflow-hidden group/quote"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/quote:opacity-20 transition-opacity">
                <span className="font-serif text-6xl text-primary font-bold">"</span>
              </div>
              <p className="text-xl text-foreground/90 italic font-medium leading-relaxed relative z-10">
                &quot;We&apos;re building tools to assist doctors, not replace them.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl opacity-30 animate-pulse" />
            <div className="relative bg-black border-2 border-border/50 rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:border-primary/40 transition-all duration-500 group/visual">
              <div className="space-y-8">
                {/* Step 01 */}
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-muted/20 border border-border/20 group-hover/visual:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-primary/5">
                    <span className="text-primary font-bold text-xl font-space-grotesk">01</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">Smart Triage</p>
                    <p className="text-sm text-foreground/60 font-medium">Real-time patient assessment</p>
                  </div>
                </div>

                {/* Step 02 */}
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-muted/20 border border-border/20 group-hover/visual:translate-x-2 transition-transform duration-300 delay-75">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-secondary/5">
                    <span className="text-secondary font-bold text-xl font-space-grotesk">02</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">Autonomous Coding</p>
                    <p className="text-sm text-foreground/60 font-medium">Automated medical coding</p>
                  </div>
                </div>

                {/* Step 03 */}
                <div className="flex items-center gap-5 p-4 rounded-2xl bg-muted/20 border border-border/20 group-hover/visual:translate-x-2 transition-transform duration-300 delay-150">
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center shadow-lg ring-4 ring-accent/5">
                    <span className="text-accent font-bold text-xl font-space-grotesk">03</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">Data Analytics</p>
                    <p className="text-sm text-foreground/60 font-medium">Actionable insights & reports</p>
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