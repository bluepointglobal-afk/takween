'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const liquidButtonVariants = cva(
  'relative inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 hover:scale-105',
  {
    variants: {
      size: {
        sm: 'h-9 px-5 text-sm',
        default: 'h-11 px-7 text-sm',
        lg: 'h-13 px-9 text-base',
        xl: 'h-14 px-10 text-base',
      },
    },
    defaultVariants: { size: 'default' },
  }
)

function GlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter id="liquid-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="40" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  )
}

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof liquidButtonVariants> {
  variant?: 'gold' | 'ghost' | 'outline'
}

export function LiquidButton({ className, size, variant = 'gold', children, ...props }: LiquidButtonProps) {
  return (
    <>
      <button
        className={cn(
          liquidButtonVariants({ size }),
          variant === 'gold' && 'bg-gradient-to-b from-[#f5c842] to-[#CA8A04] text-black shadow-[0_0_30px_rgba(202,138,4,0.4)]',
          variant === 'ghost' && 'bg-white/5 border border-white/20 text-white backdrop-blur-sm hover:bg-white/10',
          variant === 'outline' && 'border border-[#CA8A04]/60 text-[#CA8A04] hover:bg-[#CA8A04]/10',
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 rounded-full -z-10"
          style={{ backdropFilter: 'url("#liquid-glass")' }}
        />
        <div className="absolute inset-0 rounded-full shadow-[inset_1px_1px_1px_rgba(255,255,255,0.3),inset_-1px_-1px_1px_rgba(0,0,0,0.2)]" />
        <span className="relative z-10">{children}</span>
      </button>
      <GlassFilter />
    </>
  )
}
