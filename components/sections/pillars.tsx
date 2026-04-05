'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import { Server, Bot, Shield } from 'lucide-react'

const pillars = [
  {
    icon: Server,
    ar: 'خدمات مراكز البيانات',
    en: 'Data Centre Services',
    num: '01',
    video: '/videos/datacentre.mp4',
    services: [
      { n: '01', title: 'Workforce Solutions', desc: 'Certified engineers for mission-critical facilities' },
      { n: '02', title: 'Operations & Maintenance', desc: 'Proactive programs maximising uptime' },
      { n: '03', title: 'Commissioning & Validation', desc: 'End-to-end systems validation' },
      { n: '04', title: 'Audit & Certification', desc: 'Uptime Institute & BICSI compliance' },
    ],
  },
  {
    icon: Bot,
    ar: 'الروبوتات الذكية',
    en: 'Intelligent Robotics',
    num: '02',
    video: '/videos/robotics.mp4',
    services: [
      { n: '01', title: 'Hospitality & F&B', desc: 'Autonomous service robots for hotels & events' },
      { n: '02', title: 'Logistics & Warehousing', desc: 'AMR fleets for sorting & fulfilment' },
      { n: '03', title: 'Commercial Cleaning', desc: 'AI-powered floor care at scale' },
      { n: '04', title: 'Security & Patrol', desc: 'Autonomous patrol with advanced sensing' },
    ],
  },
  {
    icon: Shield,
    ar: 'البنية التحتية الحرجة',
    en: 'Critical Infrastructure',
    num: '03',
    video: '/videos/infrastructure.mp4',
    services: [
      { n: '01', title: 'Protected Facilities', desc: 'Support for hardened, mission-critical operational sites' },
      { n: '02', title: 'Command & Control', desc: 'Integrated monitoring and resilient readiness' },
      { n: '03', title: 'Life-Safety Systems', desc: 'Critical power, cooling, and environmental control' },
      { n: '04', title: 'Security & Access', desc: 'Perimeter intelligence and live situational awareness' },
      { n: '05', title: 'Commissioning & Testing', desc: 'Validation for mission-critical performance' },
      { n: '06', title: 'Confidential Delivery', desc: 'Controlled execution for high-confidentiality programs' },
    ],
  },
]

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = pillar.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative group bg-white/[0.02] border border-white/8 rounded-3xl overflow-hidden hover:border-[#CA8A04]/30 transition-all duration-500 hover:bg-white/[0.04]"
    >
      <Spotlight size={300} />

      {/* Header */}
      <div className="p-8 pb-6 border-b border-white/5">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#CA8A04]/10 border border-[#CA8A04]/20 flex items-center justify-center group-hover:bg-[#CA8A04]/20 transition-colors">
            <Icon size={20} className="text-[#CA8A04]" />
          </div>
          <span className="text-white/10 font-black text-5xl leading-none">{pillar.num}</span>
        </div>
        <div className="text-white/40 text-xs tracking-widest uppercase mb-1 font-medium">{pillar.ar}</div>
        <h3 className="text-white text-2xl font-black tracking-tight">{pillar.en}</h3>
      </div>

      {/* Services */}
      <div className="p-8 space-y-4">
        {pillar.services.map((s) => (
          <div key={s.n} className="flex gap-4 group/item">
            <span className="text-[#CA8A04]/40 font-mono text-xs mt-1 shrink-0">{s.n}</span>
            <div>
              <div className="text-white/80 text-sm font-semibold group-hover/item:text-white transition-colors">{s.title}</div>
              <div className="text-white/30 text-xs mt-0.5 leading-relaxed">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Gold accent line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CA8A04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default function PillarsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="pillars" className="relative py-32 bg-[#080806]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="mb-16 max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#CA8A04] text-xs tracking-[0.4em] uppercase font-medium mb-4"
          >
            ثلاث ركائز أساسية
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none"
          >
            Three Pillars<br />
            <span className="text-white/20">of Excellence</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.en} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
