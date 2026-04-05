'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { LiquidButton } from '@/components/ui/liquid-button'

const navLinks = [
  { label: 'Services', href: '#pillars' },
  { label: 'Heritage', href: '#proven' },
  { label: 'Partners', href: '#partners' },
  { label: 'Vision 2030', href: '#vision' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-[#CA8A04] to-[#92400e] flex items-center justify-center">
            <span className="text-black font-black text-xs">ت</span>
          </div>
          <span className="font-black text-white tracking-widest text-sm uppercase">Takween</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <LiquidButton size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Us
          </LiquidButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white text-sm tracking-widest uppercase font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <LiquidButton size="sm" className="w-full justify-center mt-2">
                Contact Us
              </LiquidButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
