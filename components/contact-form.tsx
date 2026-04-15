'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { toast } from 'sonner'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Demo request sent successfully!');
        setSubmitted(true);
        // Reset form data
        setFormData({ name: '', email: '', hospital: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send demo request.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }

    // Reset success state after 10 seconds if they want to send another
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 10000);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4">
          <span className="text-2xl">✓</span>
        </div>
        <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-2">
          Message Sent!
        </h3>
        <p className="text-foreground/60">
          Thank you for reaching out. Our team will contact you within 24 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-all text-foreground"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-all text-foreground"
          placeholder="name@hospital.com"
        />
      </div>

      {/* Hospital */}
      <div>
        <label htmlFor="hospital" className="block text-sm font-medium text-foreground mb-2">
          Hospital / Organization
        </label>
        <input
          type="text"
          id="hospital"
          name="hospital"
          value={formData.hospital}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-all text-foreground"
          placeholder="XYZ Hospital"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none transition-all text-foreground"
          placeholder="Tell us about your ED operations..."
        />
      </div>

      {/* Submit Button - Updated to Red */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
        className="w-full px-6 py-3 bg-red-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Privacy Notice */}
      <p className="text-xs text-foreground/50 text-center">
        We&apos;re committed to protecting your privacy. Read our privacy policy.
      </p>
    </motion.form>
  )
}