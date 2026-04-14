'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'A very interesting approach to triage automation. With refinement, this could be highly useful in emergency settings.',
    author: 'Practicing Doctor',
    role: 'Emergency Medicine Professional',
    hospital: '(Name withheld)',
    rating: 5,
  },
  {
    quote: 'The triage prototype shows real promise. The UI is intuitive and the logic is sound for clinical workflows.',
    author: 'Healthcare Professional',
    role: 'Clinical Evaluator',
    hospital: 'Healthcare Network',
    rating: 5,
  },
  {
    quote: 'The AI coding suggestions are accurate and the explainability is key for adoption in real hospitals.',
    author: 'Medical Coder',
    role: 'Healthcare Operations',
    hospital: 'Healthcare Institution',
    rating: 5,
  },
  {
    quote: 'This is the kind of innovation that healthcare needs. The team clearly understands clinical workflows.',
    author: 'Hackathon Judge',
    role: 'Healthcare Expert',
    hospital: 'Innovation Council',
    rating: 5,
  },
]

export function TestimonialsSection() {
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
      <div className="absolute inset-0 bg-black/10 -z-10" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-widest">
            Early Feedback
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            What <span className="text-red-700">Healthcare Professionals</span> Say
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-black border border-border rounded-xl p-8 hover:border-primary/20 transition-all hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-500 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="font-space-grotesk font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.role} at {testimonial.hospital}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
