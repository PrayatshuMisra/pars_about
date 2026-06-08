'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'I really appreciate the team members and their thorough R&D over Emergency Response services. I was impressed over the clarity and conviction of problem solving. The application will definitely unburden a huge amount of non clinical, yet crucial task that healthcare professionals have to do on a daily basis. They will also help in ensuring smoother operations and eventually lesser wait time for patients. A more accurate and effective solution is the only way forward for this unorganised chaos. All the best for the future growth of this project. ',
    author: 'Dr. Sahanya Shetty',
    role: 'Critical Care Medicine Practitioner, Dubai',
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance the carousel. 
  // Resets the 6-second timer if the user manually clicks an arrow or dot.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 6000)
    
    return () => clearInterval(timer)
  }, [currentIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const slideVariants = {
    enter: { opacity: 0, x: 50, scale: 0.95 },
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: { zIndex: 0, x: -50, opacity: 0, scale: 0.95 },
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10 -z-10" />
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest">
            Early Feedback
          </p>
          <h2 className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            What <span className="text-red-700">Healthcare Professionals</span> Say
          </h2>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative min-h-[300px] flex items-center justify-center px-4 sm:px-12">
          
          {/* Left Arrow */}
          <button
          onClick={handlePrev}
          className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 border border-border/50 text-foreground/70 hover:text-foreground hover:bg-black hover:border-primary/50 transition-all focus:outline-none"
              >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
                className="bg-black border border-border rounded-xl p-8 md:p-12 w-full shadow-2xl hover:border-primary/30 transition-colors"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6 sm:mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-500 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-foreground mb-8 sm:mb-10 leading-relaxed text-center italic font-light">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>

                {/* Author Profile */}
                <div className="flex flex-col items-center justify-center gap-4">
                  
                  {/* Default Placeholder DP */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-zinc-800/80 flex items-end justify-center border-2 border-border shadow-md overflow-hidden">
                    <svg 
                      className="w-11 h-11 sm:w-12 sm:h-12 text-zinc-500 translate-y-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>

                  <div className="text-center">
                    <p className="font-space-grotesk font-semibold text-base sm:text-lg text-foreground">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/60">
                      {testimonials[currentIndex].role}
                      {/* Conditionally render the hospital part */}
                      {testimonials[currentIndex].hospital && ` at ${testimonials[currentIndex].hospital}`}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
  onClick={handleNext}
  className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 border border-border/50 text-foreground/70 hover:text-foreground hover:bg-black hover:border-primary/50 transition-all focus:outline-none"
>
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'w-8 bg-red-700' 
                  : 'w-2.5 bg-foreground/20 hover:bg-foreground/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
