import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import HeroSection from '@/components/sections/hero'
import PillarsSection from '@/components/sections/pillars'
import DeploySection from '@/components/sections/deploy'
import ProvenSection from '@/components/sections/proven'
import PartnersSection from '@/components/sections/partners'
import VisionSection from '@/components/sections/vision'
import ContactSection from '@/components/sections/contact'
import WhatsAppFloat from '@/components/ui/whatsapp-float'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <DeploySection />
      <ProvenSection />
      <PartnersSection />
      <VisionSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
