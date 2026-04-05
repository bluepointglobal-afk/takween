'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Users, FileCheck } from 'lucide-react'

const items = [
  {
    num: '01',
    icon: Building2,
    title: 'Mega-Project Ready',
    ar: 'جاهزون للمشاريع العملاقة',
    body: 'Positioned and ready to support NEOM, The Red Sea, Diriyah, and other giga-projects with proven delivery frameworks and full-stack operational capability.',
  },
  {
    num: '02',
    icon: Users,
    title: 'Saudization & Workforce',
    ar: 'السعودة وتنمية القوى العاملة',
    body: 'Active Nitaqat compliance with structured Saudi talent development programs building local technical leadership across all disciplines.',
  },
  {
    num: '03',
    icon: FileCheck,
    title: 'Regulatory Compliance',
    ar: 'الامتثال التنظيمي',
    body: 'Full alignment with CITC, NCA, and MISA requirements from day one. Data sovereignty and infrastructure safety standards exceeded.',
  },
]

export default function VisionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="vision" className="relative py-32 bg-[#060604] overflow-hidden">
      {/* Gold diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#CA8A04]/3 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CA8A04]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[#CA8A04] text-xs tracking-[0.4em] uppercase font-medium mb-4"
          >
            قيّمنا لرؤية ٢٠٣٠
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none"
          >
            Built for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c842] to-[#CA8A04]">Vision 2030</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-8 border border-white/8 rounded-3xl bg-white/[0.02] hover:border-[#CA8A04]/30 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#CA8A04]/10 border border-[#CA8A04]/20 flex items-center justify-center group-hover:bg-[#CA8A04]/20 transition-colors">
                    <Icon size={18} className="text-[#CA8A04]" />
                  </div>
                  <span className="text-white/8 font-black text-4xl leading-none">{item.num}</span>
                </div>
                <div className="text-white/30 text-[10px] tracking-widest uppercase mb-2 font-medium">{item.ar}</div>
                <h3 className="text-white text-lg font-black tracking-tight mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.body}</p>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CA8A04] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
