'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { LiquidButton } from '@/components/ui/liquid-button'

const cases = [
  {
    tag: 'الحرمين الشريفين · Ongoing · Ramadan · Hajj · Umrah',
    title: 'Makkah & Madinah',
    subtitle: 'Holy Mosques',
    ar: 'المسجد الحرام والمسجد النبوي',
    desc: "Turnkey crowd intelligence infrastructure at the world's most visited religious sites. Real-time monitoring across all entrances during Ramadan, Hajj, and Umrah.",
    image: 'https://images.pexels.com/photos/3742589/pexels-photo-3742589.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stats: [
      { value: '40M+', label: 'Visitors Counted' },
      { value: '300+', label: 'Entrances Covered' },
      { value: '30', label: 'km Fibre Deployed' },
      { value: '100+', label: 'Network Switches' },
    ],
    tags: ['Crowd Flow Monitoring', 'Command Centre Dashboard', 'Private Class C Cloud', 'Turnkey Installation'],
  },
  {
    tag: 'IOC · COJO · French Government · Paris 2024',
    title: 'Paris 2024',
    subtitle: 'Olympic Games',
    ar: 'دورة الألعاب الأولمبية باريس',
    desc: 'Selected by the IOC and Paris 2024 Organizing Committee. Comprehensive crowd-flow monitoring across all 28 Olympic venues. 250+ sensors deployed within one month under extreme deadline pressure.',
    image: 'https://images.pexels.com/photos/30651230/pexels-photo-30651230.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stats: [
      { value: '10M+', label: 'Visitors' },
      { value: '28', label: 'Olympic Venues' },
      { value: '250+', label: 'Sensors' },
      { value: '90+', label: 'Live Zones' },
    ],
    tags: ['3D Sensors', 'UWB Tags', 'Bespoke Web Apps', 'Sensitive Gov Data'],
  },
  {
    tag: 'FIFA · Qatar Rail · Doha Metro · 2022',
    title: 'FIFA World Cup',
    subtitle: 'Qatar 2022',
    ar: 'كأس العالم فيفا قطر',
    desc: 'Partnered with FIFA and Qatar Rail to deliver advanced people-flow monitoring across the entire Doha metro network and key stadium entrances.',
    image: 'https://images.pexels.com/photos/18016847/pexels-photo-18016847.jpeg?auto=compress&cs=tinysrgb&w=1600',
    stats: [
      { value: '3M+', label: 'Fans' },
      { value: '37', label: 'Metro Stations' },
    ],
    tags: ['People Flow Monitoring', 'Full Metro Network', 'Stadium Entrances'],
  },
]

function CaseCard({ c, index }: { c: typeof cases[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-2 gap-0 bg-white/[0.02] border border-white/8 rounded-3xl overflow-hidden group hover:border-[#CA8A04]/20 transition-colors duration-500"
    >
      {/* Image */}
      <div className="relative h-64 md:h-auto overflow-hidden">
        <img
          src={c.image}
          alt={c.title}
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 md:bg-gradient-to-l" />
        <div className="absolute bottom-6 left-6 md:hidden">
          <div className="text-[#CA8A04] text-xs tracking-widest uppercase mb-1">{c.tag.split('·')[0]}</div>
          <div className="text-white text-2xl font-black">{c.title}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col justify-between">
        <div>
          <div className="text-[#CA8A04]/60 text-[10px] tracking-widest uppercase mb-4 font-medium">{c.tag}</div>
          <h3 className="hidden md:block text-white text-3xl font-black tracking-tight leading-tight mb-1">{c.title}</h3>
          <div className="text-white/30 text-sm mb-2">{c.subtitle}</div>
          <div className="text-[#CA8A04]/40 text-xs mb-5" dir="rtl">{c.ar}</div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">{c.desc}</p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {c.stats.map((stat) => (
              <div key={stat.label} className="bg-black/40 rounded-xl p-3 border border-white/5">
                <div className="text-[#CA8A04] text-xl font-black tracking-tight">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-white/30 text-[10px] tracking-wider uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {c.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProvenSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="proven" className="relative py-32 bg-[#060604]">
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[#CA8A04] text-xs tracking-[0.4em] uppercase font-medium mb-4"
          >
            أثبتنا كفاءتنا حيث لا مجال للخطأ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6"
          >
            Proven Where<br />
            <span className="text-white/20">It Matters</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/30 max-w-xl text-base leading-relaxed"
          >
            Deployed at the world&apos;s most demanding events and sacred sites — where every sensor, every fibre, every line of code carries the weight of millions of lives.
          </motion.p>
        </div>

        <div className="space-y-6">
          {cases.map((c, i) => <CaseCard key={c.title} c={c} index={i} />)}
        </div>

        {/* Total scale bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          {[
            { value: '53M+', label: 'Visitors Monitored' },
            { value: '30', label: 'Days to Deploy 250+ Sensors' },
            { value: 'GOV', label: 'Trusted with State-Level Data' },
            { value: '2034', label: 'Positioned for FIFA KSA' },
          ].map((item, i) => (
            <div key={i} className="bg-black/60 px-6 py-6 text-center hover:bg-white/5 transition-colors">
              <div className="text-2xl md:text-3xl font-black text-[#CA8A04] tracking-tighter mb-1">
                {i === 2 || i === 3 ? item.value : <AnimatedCounter value={item.value} />}
              </div>
              <div className="text-white/30 text-[10px] tracking-widest uppercase">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
