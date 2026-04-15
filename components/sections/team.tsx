'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Prayatshu Misra',
    role: 'Co-Founder',
    background: 'Architecting the core AI logic and high-level system integration for healthcare automation',
    email: 'prayatshumisra.pars@gmail.com',
    linkedin: 'https://www.linkedin.com/in/prayatshu-misra-1834a831a',
    image: '/prayatshu.jpg',
  },
  {
    name: 'Advait Balachandar',
    role: 'Co-Founder',
    background: 'Bridging the gap between complex clinical data and intuitive user-centric healthcare interfaces',
    email: 'advait.pars@gmail.com',
    linkedin: 'https://www.linkedin.com/in/advait-balachandar-693525343?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    image: '/advait.jpg',
  },
  {
    name: 'Rohan Mathur',
    role: 'Co-Founder',
    background: 'Building robust server-side architecture and managing secure cloud deployment for clinical environments',
    email: 'rohanmat.pars@gmail.com',
    linkedin: 'https://www.linkedin.com/in/rohan-mathur-mit',
    image: '/rohan.jpg',
  },
  {
    name: 'Shreshth Kabra',
    role: 'Co-Founder',
    background: 'Optimizing machine learning pipelines and ensuring model reliability across medical datasets',
    email: 'shreshth.pars@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shreshth-kabra-51788a333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    image: '/shreshth.jpg',
  },
]

export function TeamSection() {
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
    <section id="team" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle overlay to keep contrast */}
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
            Our Team
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-space-grotesk font-bold text-4xl sm:text-5xl text-foreground mt-2">
            Founding <span className="text-red-700">Team</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-foreground/60 mt-4 max-w-2xl mx-auto">
            All founders are second-year Computer Science students at MIT Manipal
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-black border border-border/50 rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col items-center">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl ring-4 ring-primary/10 group-hover:scale-105 transition-transform duration-300 overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="font-space-grotesk font-bold text-xl text-red-700 underline underline-offset-4 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* Role */}
                <div className="px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <p className="text-primary font-bold text-xs uppercase tracking-tighter">
                    {member.role}
                  </p>
                </div>
                
                {/* Background */}
                <p className="text-sm text-foreground/70 mb-8 leading-relaxed font-medium">
                  {member.background}
                </p>

                {/* Social Icons */}
                <div className="mt-auto flex justify-center gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 border border-border/50 hover:bg-red-700 hover:text-white hover:border-red-700 hover:scale-110 transition-all duration-300 group/icon"
                  >
                    <Mail className="w-5 h-5 text-red-600 group-hover/icon:text-white" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 border border-border/50 hover:text-white hover:border-[#0077b5] hover:scale-110 transition-all duration-300 group/icon"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}