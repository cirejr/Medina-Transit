import About from '@/components/global/about/about'
import { ActivityArea } from '@/components/global/activity-area'
import CtaSection from '@/components/global/cta'
import CtaFormSection from '@/components/global/cta-form-section'
import Hero from '@/components/global/hero'
import Services from '@/components/global/services-section'

export default function Home() {
  return (
    <main className="w-full  overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <ActivityArea />
      <CtaSection />
      <CtaFormSection />
    </main>
  )
}
