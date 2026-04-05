'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  className?: string
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState('0')

  useEffect(() => {
    if (!isInView) return
    const num = parseFloat(value.replace(/[^0-9.]/g, ''))
    const suffix = value.replace(/[0-9.]/g, '')
    if (isNaN(num)) { setDisplayed(value); return }

    const duration = 1800
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * num)
      setDisplayed(current + (progress < 1 ? '' : suffix))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref} className={className}>{displayed}</span>
}
