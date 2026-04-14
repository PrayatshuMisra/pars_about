'use client'

import { motion, Variants } from 'framer-motion'

const recognitions = [
  { 
    name: 'Kanini', 
    category: 'Industry Recognition',
    logo: '/kanini.png'
  },
  { 
    name: 'Economic Times', 
    category: 'Innovation Acknowledgement',
    logo: '/et.png'
  },
]

export function RecognitionSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold text-sm uppercase tracking-widest">
            Recognition & Validation
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-3xl sm:text-4xl text-foreground mt-2">
            Recognized by <span className="text-red-700">Industry Leaders</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            Our work has been reviewed and appreciated by industry professionals and evaluators.
          </motion.p>
        </motion.div>

        {/* Changed the grid from lg:grid-cols-4 to a centered max-w-3xl layout 
          so the two cards sit perfectly in the middle of the screen.
        */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-black border border-border/50 rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col items-center">
                
                {/* Logo Container */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 rounded-xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300 p-4">
                  <img 
                    src={item.logo} 
                    alt={`${item.name} Logo`} 
                    className="w-full h-full object-contain" 
                  />
                </div>

                <h3 className="font-space-grotesk font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-foreground/50 tracking-wide uppercase">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}