'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch for next-themes
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll detection for the floating capsule effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#features', label: 'Features' },
    { href: '#team', label: 'Team' },
    { href: '#roadmap', label: 'Roadmap' },
  ]

  return (
    // Slide down on load
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'pt-4 px-4' : 'pt-4 px-4 sm:px-6 lg:px-8'
      }`}
    >
      <nav
        className={`w-full transition-all duration-500 ease-out ${
          scrolled
            ? 'max-w-5xl bg-background/80 backdrop-blur-2xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full px-6 py-3'
            : 'max-w-7xl bg-transparent border border-border/40 rounded-full px-6 py-4'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="overflow-hidden rounded-xl border border-foreground/10 group-hover:border-foreground/40 transition-colors duration-300">
              <img src="/logo.png" alt="PARS Logo" className="w-10 h-10 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="font-space-grotesk font-bold text-xl tracking-wide text-foreground hidden sm:block">
              PARS
            </span>
          </Link>

          {/* Desktop Menu - White Tabs that turn Red on hover */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2 rounded-full bg-white border border-white/20 hover:bg-red-800 hover:border-white-800 transition-all duration-300 shadow-sm"
              >
                <span className="text-black group-hover:text-white transition-colors duration-300 font-medium text-sm tracking-wide">
                  {link.label}
                </span>
                {/* Subtle Centered Underline Effect (White to match the red hover) */}
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-white rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Right Section: Theme Toggle & CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Premium CTA Button (Adaptive White/Black) */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-foreground text-background rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              Get Started
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-full bg-foreground text-background hover:scale-105 transition-all duration-300 shadow-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 md:hidden"
          >
            <div className="p-4 rounded-3xl border border-border/50 bg-background/95 backdrop-blur-3xl shadow-2xl space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-2xl bg-white border border-transparent hover:bg-red-500 text-black hover:text-white transition-all duration-300 font-medium text-center shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border/50 mt-2">
                <Link
                  href="#contact"
                  className="block w-full px-4 py-3 bg-foreground text-background rounded-2xl font-bold transition-all text-center hover:scale-[1.02] shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}