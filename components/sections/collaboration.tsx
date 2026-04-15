'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export function CollaborationSection() {
  const partners = [
    'Doctors and emergency medicine professionals',
    'Clinics and small hospitals',
    'Medical coders and administrators',
    'Healthcare innovation groups',
  ]

  const benefits = [
    'Early access to the system',
    'Direct collaboration with founders',
    'Opportunity to shape the product',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent -z-10" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.p 
                variants={itemVariants}
                className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
              >
                Partnership Opportunity
              </motion.p>
              <motion.h2 
                variants={itemVariants}
                className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground"
              >
                Who We&apos;re Looking to <span className="text-red-700">Work With</span>
              </motion.h2>
            </div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-foreground/70 leading-relaxed"
            >
              We are actively looking to collaborate with healthcare professionals and institutions who believe in the potential of AI-assisted emergency care.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-black border border-border/40 hover:border-primary/30 transition-all duration-300 group/partner"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover/partner:bg-secondary/20 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                   </div>
                  <span className="text-lg text-foreground/80 font-medium">{partner}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-black border-2 border-border/50 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden group/benefits"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/benefits:opacity-100 transition-opacity duration-500" />
            
            <h3 className="relative font-space-grotesk font-bold text-3xl text-foreground mb-10 text-center">
              Strategic Benefits
            </h3>

            <motion.div 
              variants={containerVariants}
              className="relative space-y-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-muted/30 border border-border/30 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 group/item"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/80 font-semibold leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-red-700 hover:text-white transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Start a Conversation
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
