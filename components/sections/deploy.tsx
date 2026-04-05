'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const sectors = [
  { ar: 'ضيافة', en: 'Hospitality & Hotels', img: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { ar: 'لوجستيات', en: 'Logistics & Fulfilment', img: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { ar: 'تجارة', en: 'Retail & Malls', img: 'https://images.pexels.com/photos/쇼핑/pexels-photo-쇼핑.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { ar: 'مراكز البيانات', en: 'Data Centres', img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { ar: 'رعاية صحية', en: 'Healthcare', img: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { ar: 'مشاريع كبرى', en: 'Giga-Projects', img: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800' },
]

export default function DeploySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="deploy" className="relative py-32 bg-[#060604]">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[#CA8A04] text-xs tracking-[0.4em] uppercase font-medium mb-4"
          >
            قطاعات التنفيذ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none mb-4"
          >
            Where We<br />
            <span className="text-white/20">Deploy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/30 text-base"
          >
            Real technology operating in real Saudi environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {sectors.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={s.img}
                alt={s.en}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-[#CA8A04]/0 group-hover:bg-[#CA8A04]/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-[#CA8A04]/60 text-[10px] tracking-widest uppercase mb-1 font-medium">{s.ar}</div>
                <div className="text-white font-black text-base tracking-tight">{s.en}</div>
              </div>
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
