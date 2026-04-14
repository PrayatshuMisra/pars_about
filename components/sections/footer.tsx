'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function FooterSection() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-border/50">
      <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Company */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="PARS Logo" className="w-10 h-10 rounded-lg object-cover" />
                <span className="font-space-grotesk font-bold text-xl text-foreground">PARS</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Transforming emergency operations with AI-powered solutions.
              </p>
            </motion.div>

            {/* Product */}
            <motion.div variants={itemVariants}>
              <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Demo', 'Documentation'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="font-space-grotesk font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy', 'Terms', 'Security', 'Compliance'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-foreground/60 hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p className="text-foreground/60 text-sm">
              © 2025 PARS Health. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-foreground/60 hover:text-primary transition-colors text-sm"
                >
                  {social}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
