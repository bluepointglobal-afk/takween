'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { BackgroundPaths } from '@/components/ui/background-paths'
import { LiquidButton } from '@/components/ui/liquid-button'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import ShaderBackground from '@/components/ui/shader-background'

const stats = [
  { value: '10+', label: 'OEM Partners' },
  { value: '32', label: 'Robot Models' },
  { value: '6', label: 'Industries' },
  { value: '99.999%', label: 'Uptime Record' },
]

const words = ['Where', 'Infrastructure', 'Thinks.']

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080806]">
      <ShaderBackground />
      <BackgroundPaths />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-radial-[ellipse_80%_60%_at_50%_50%] from-transparent to-black/60 pointer-events-none" />

      {/* Arabic tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 text-[#CA8A04]/60 text-xs tracking-[0.4em] uppercase font-light mb-8"
        dir="rtl"
      >
        من التكوين، تنطلق المنظومة
      </motion.div>

      {/* Main headline */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tighter text-white mb-6">
          {words.map((word, wi) => (
            <span key={wi} className="inline-block mr-[0.2em] last:mr-0">
              {word.split('').map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5 + wi * 0.12 + ci * 0.025,
                    type: 'spring',
                    stiffness: 120,
                    damping: 20,
                  }}
                  className={`inline-block ${
                    word === 'Thinks.' 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f5c842] to-[#CA8A04]'
                      : ''
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide"
        >
          Data Centre Intelligence, Autonomous Robotics & Critical Infrastructure
          <br className="hidden md:block" /> for the Kingdom of Saudi Arabia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <LiquidButton
            size="xl"
            onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Capabilities →
          </LiquidButton>
          <LiquidButton
            size="xl"
            variant="ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Conversation
          </LiquidButton>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative z-10 mt-20 w-full max-w-4xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-black/40 px-6 py-5 text-center hover:bg-white/5 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-black text-[#CA8A04] tracking-tighter">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-white/40 text-xs tracking-widest uppercase mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#CA8A04]/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
