'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'

export function CTASection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-black/5 -z-10" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-black border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-12 sm:py-20 px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-space-grotesk font-bold text-4xl sm:text-5xl text-white mb-6"
            >
              Collaborate <span className="text-red-700">With Us</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              We are actively looking to work with doctors, clinics, and hospitals to refine and validate our system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => setShowForm(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
              >
                Request Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="mailto:pars-medical@proton.me"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
              >
                Partner With Us
              </Link>
            </motion.div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/70 mt-8 text-sm"
            >
              Early access • Direct team collaboration • Clinical validation
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-md bg-black border border-border rounded-2xl p-8 shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Close form"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Header */}
            <h2 className="font-space-grotesk font-bold text-2xl text-foreground mb-2">
              Request a <span className="text-red-700">Demo</span>
            </h2>
            <p className="text-foreground/60 mb-6">
              Let&apos;s discuss how we can work together to refine PARS Health.
            </p>

            {/* Form */}
            <ContactForm />
          </motion.div>
        </div>
      )}
    </section>
  )
}
