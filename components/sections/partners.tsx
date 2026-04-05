'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  { name: 'PUDU', country: 'China', focus: 'Hospitality', logo: 'https://www.pudurobotics.com/logo.svg' },
  { name: 'KEENON', country: 'China', focus: 'F&B Robotics', logo: 'https://static.keenon.com/assets/images/common/logo-gray.webp' },
  { name: 'GEEK+', country: 'China', focus: 'Logistics AMR', logo: 'https://www.geekplus.com/hs-fs/hubfs/geek+%20logo%20transparent-1.png?width=200&height=76' },
  { name: 'FORWARDX', country: 'China', focus: 'Warehouse AMR', logo: 'https://www.forwardx.com/wp-content/uploads/2023/01/logo-606_228.png' },
  { name: 'GAUSIUM', country: 'China', focus: 'Cleaning Robots', logo: 'https://gausium.com/wp-content/uploads/2022/04/Gausium-logo-horizontal-white.svg' },
  { name: 'LIONSBOT', country: 'Singapore', focus: 'Cleaning', logo: 'https://www.lionsbot.com/wp-content/uploads/2021/07/logo.png' },
  { name: 'KNIGHTSCOPE', country: 'USA', focus: 'Security Patrol', logo: 'https://knightscope.com/hubfs/Logo%20-%202025/KSCP-Logo-V2-Horizontal-White%20(1).svg' },
  { name: 'RICHTECH', country: 'USA', focus: 'Service Robots', logo: null },
  { name: 'AVIDBOTS', country: 'Canada', focus: 'Facility AMR', logo: null },
]

const certs = ['Uptime Institute Certified', 'BICSI Certified']

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="partners" className="relative py-32 bg-[#080806]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[#CA8A04] text-xs tracking-[0.4em] uppercase font-medium mb-4"
          >
            الشركاء التقنيون
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4"
          >
            Technology<br />
            <span className="text-white/20">Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/30 text-base"
          >
            World-class OEMs. Local expertise. One trusted partner.
          </motion.p>

          {/* Certs */}
          <div className="flex gap-3 mt-5">
            {certs.map((c) => (
              <span key={c} className="text-[10px] px-3 py-1.5 rounded-full border border-[#CA8A04]/30 text-[#CA8A04]/60 tracking-wider">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-px bg-white/5 border border-white/8 rounded-3xl overflow-hidden">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-black/60 hover:bg-white/[0.04] transition-colors duration-300 p-6 flex flex-col items-center justify-center gap-3 group"
            >
              <div className="h-8 flex items-center justify-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-7 max-w-[100px] object-contain opacity-40 group-hover:opacity-70 transition-opacity filter brightness-0 invert"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                ) : (
                  <span className="text-white/20 font-black text-sm tracking-widest group-hover:text-white/40 transition-colors">
                    {partner.name}
                  </span>
                )}
              </div>
              <div className="text-center">
                {partner.logo && (
                  <div className="text-white/20 text-[9px] tracking-widest uppercase group-hover:text-white/40 transition-colors font-medium">
                    {partner.name}
                  </div>
                )}
                <div className="text-white/10 text-[8px] tracking-widest uppercase">{partner.country} · {partner.focus}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
