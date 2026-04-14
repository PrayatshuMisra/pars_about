'use client'

import { motion } from 'framer-motion'

const products = [
  {
    id: '01',
    title: 'PARS — AI Triage System',
    points: [
      'Risk stratification using vitals and NLP-based department routing.',
      'Voice & OCR intake for real-time patient queue management.',
      'Assistive AI for immediate prioritization.'
    ],
    features: ['Risk Stratification', 'NLP Routing', 'Real-time Queue'],
    color: 'from-primary',
  },
  {
    id: '02',
    title: 'Healthcare Operations AI',
    points: [
      'ICD-10 / CPT code suggestions with compliance validation.',
      'Multi-agent reasoning system with audit logs.',
      'Automation of administrative medical workflows.'
    ],
    features: ['Code Suggestions', 'Compliance Check', 'Audit Logs'],
    color: 'from-secondary',
  },
  {
    id: '03',
    title: 'System Integration',
    points: [
      'Modular API-based backend designed for hospital systems.',
      'Explainable AI outputs for clinical transparency.',
      'Secure data handling and protocol interoperability.'
    ],
    features: ['Modular APIs', 'Explainable AI', 'Hospital Integration'],
    color: 'from-accent',
  },
]

export function ProductsSection() {
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
    <section id="products" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Platform
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            AI-Powered <span className="text-red-700">Healthcare Systems</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            Integrated systems for triage, medical coding, and hospital integration
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => {
            return (
               <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} to-secondary opacity-0 group-hover:opacity-10 rounded-2xl blur-2xl transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative bg-black border border-border/60 rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-2 flex flex-col">
                  
                  {/* Underlined Number ID */}
                  <div className="mb-8 inline-block">
                    <span className="font-space-grotesk text-4xl font-bold text-red-700 border-b-2 border-red-700/50 pb-1">
                      {product.id}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>

                  {/* Bulleted Points */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {product.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-foreground/70 leading-relaxed font-medium text-sm flex gap-2">
                        <span className="text-red-700">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Feature Tags */}
                  <div className="pt-6 border-t border-border/40 space-y-3">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground/50">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}