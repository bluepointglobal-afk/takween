import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#060604] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-sm bg-gradient-to-br from-[#CA8A04] to-[#92400e] flex items-center justify-center">
                <span className="text-black font-black text-xs">ت</span>
              </div>
              <span className="font-black text-white tracking-widest text-sm uppercase">Takween</span>
            </div>
            <p className="text-white/20 text-xs leading-relaxed mb-4">
              تكوين تقنيات<br />
              Infrastructure Intelligence<br />
              for the Digital Kingdom.
            </p>
            <p className="text-white/15 text-[10px] tracking-wider">
              Riyadh & Madinah,<br />Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[#CA8A04] text-[9px] tracking-[0.3em] uppercase font-medium mb-4">Navigate</div>
            <div className="flex flex-col gap-3">
              {[['Services', '#pillars'], ['Heritage', '#proven'], ['Partners', '#partners'], ['Vision 2030', '#vision'], ['Contact', '#contact']].map(([label, href]) => (
                <a key={label} href={href} className="text-white/30 hover:text-white text-[11px] tracking-widest uppercase transition-colors font-medium">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[#CA8A04] text-[9px] tracking-[0.3em] uppercase font-medium mb-4">Legal</div>
            <div className="flex flex-col gap-3">
              {[['Privacy Policy', '/privacy-policy'], ['Terms of Service', '/terms-of-service'], ['Data Protection', '/data-protection']].map(([label, href]) => (
                <Link key={label} href={href} className="text-white/30 hover:text-white text-[11px] tracking-widest uppercase transition-colors font-medium">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-[#CA8A04] text-[9px] tracking-[0.3em] uppercase font-medium mb-4">Connect</div>
            <div className="flex flex-col gap-3">
              {[
                ['LinkedIn', 'https://www.linkedin.com/company/takween-technologies'],
                ['Twitter / X', 'https://twitter.com/takween_sa'],
                ['WhatsApp', 'https://wa.me/966500000000'],
              ].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white text-[11px] tracking-widest uppercase transition-colors font-medium">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/15 text-[9px] tracking-[0.2em] uppercase">
            © 2026 Takween Technologies · All rights reserved · جميع الحقوق محفوظة
          </div>
          <div className="text-[#CA8A04]/20 text-[9px] tracking-[0.3em] uppercase">
            Riyadh · Madinah · KSA
          </div>
        </div>
      </div>
    </footer>
  )
}
