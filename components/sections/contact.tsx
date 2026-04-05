'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { LiquidButton } from '@/components/ui/liquid-button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '', type: 'enterprise' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-32 bg-[#080806]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CA8A04]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-[#CA8A04] text-xs tracking-[0.4em] uppercase font-medium mb-4"
          >
            لنبدأ الحوار
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-none"
          >
            Start the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5c842] to-[#CA8A04]">Conversation</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'OEM & Technology Partners', value: 'partners@takween.sa', sub: 'Global Partnership Desk' },
                { icon: Mail, label: 'Saudi Enterprises', value: 'info@takween.sa', sub: 'Regional Operations Desk' },
                { icon: MapPin, label: 'Headquarters', value: 'Riyadh & Madinah', sub: 'Kingdom of Saudi Arabia' },
              ].map((item) => (
                <div key={item.value} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-[#CA8A04]/20 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#CA8A04]/10 border border-[#CA8A04]/20 flex items-center justify-center shrink-0 group-hover:bg-[#CA8A04]/20 transition-colors">
                    <item.icon size={16} className="text-[#CA8A04]" />
                  </div>
                  <div>
                    <div className="text-white/30 text-[10px] tracking-widest uppercase mb-0.5">{item.label}</div>
                    <div className="text-white font-semibold text-sm">{item.value}</div>
                    <div className="text-white/30 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/966500000000?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20Takween%20Technologies."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="text-[#25D366] font-semibold text-sm">WhatsApp Us</div>
                <div className="text-white/30 text-xs">Fastest response for KSA enquiries</div>
              </div>
              <span className="ml-auto text-[#25D366]/50 group-hover:text-[#25D366] transition-colors">→</span>
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {sent ? (
              <div className="h-full flex items-center justify-center text-center p-12 border border-[#CA8A04]/20 rounded-3xl bg-[#CA8A04]/5">
                <div>
                  <div className="text-[#CA8A04] text-4xl mb-4">✓</div>
                  <div className="text-white font-black text-xl mb-2">Message Received</div>
                  <div className="text-white/40 text-sm">We'll be in touch within 24 hours.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Type toggle */}
                <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/8">
                  {['enterprise', 'partner'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, type: t })}
                      className={`flex-1 py-2 text-xs tracking-widest uppercase font-medium rounded-lg transition-all ${
                        form.type === t
                          ? 'bg-[#CA8A04] text-black'
                          : 'text-white/30 hover:text-white/60'
                      }`}
                    >
                      {t === 'enterprise' ? 'Enterprise' : 'OEM Partner'}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="col-span-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#CA8A04]/50 focus:outline-none transition-colors"
                  />
                  <input
                    required
                    placeholder="Company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="col-span-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#CA8A04]/50 focus:outline-none transition-colors"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#CA8A04]/50 focus:outline-none transition-colors"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-[#CA8A04]/50 focus:outline-none transition-colors resize-none"
                />
                <LiquidButton size="lg" className="w-full justify-center">
                  <Send size={14} className="mr-2" />
                  Send Message
                </LiquidButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
