'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What stage is PARS Health at?',
    answer: 'We are an early-stage startup founded by second-year students at MIT Manipal. We have a working prototype and are actively seeking clinical validation through partnership with healthcare institutions.',
  },
  {
    question: 'How can we partner with PARS Health?',
    answer: 'We are actively looking to work with doctors, clinics, and hospitals to refine and validate our system. Interested partners can help us improve the prototype with real-world clinical data.',
  },
  {
    question: 'Is the code open source?',
    answer: 'Our platform backend is modular and API-based, designed for integration with hospital systems. We are open to discussions about implementation approaches for pilot testing.',
  },
  {
    question: 'What is your focus on AI ethics and explainability?',
    answer: 'We believe AI should assist, not replace doctors. All our AI outputs are explainable, showing the reasoning behind triage scores and coding suggestions for clinical review.',
  },
  {
    question: 'How do you handle patient data and privacy?',
    answer: 'We are committed to HIPAA compliance and data privacy. Our modular architecture is designed from the ground up with security and compliance in mind.',
  },
  {
    question: 'What\'s your timeline for clinical pilots?',
    answer: 'We are currently refining our prototype based on initial feedback. Clinical pilots are planned after further validation with healthcare professionals and institutions.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-black/5 -z-10" />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-widest">
            Have Questions?
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            Frequently Asked <span className="text-red-700">Questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                ? 'border-red-700/50 shadow-2xl bg-black' 
                : 'border-border/50 hover:border-primary/30 bg-black'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full px-8 py-5 flex items-center justify-between text-left transition-all duration-300 ${
                  openIndex === index ? 'bg-red-700' : 'hover:bg-white/5'
                }`}
              >
                <h3 className={`font-space-grotesk font-bold text-lg transition-colors duration-300 ${
                  openIndex === index ? 'text-white' : 'text-foreground'
                }`}>
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-primary'}`} />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6 bg-black border-t border-border/40">
                  <p className="text-white/80 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
