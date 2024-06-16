import About from '@/components/global/about'
import { ActivityArea } from '@/components/global/activity-area'
import CtaSection from '@/components/global/cta'
import CtaForm from '@/components/global/cta-form'
import Hero from '@/components/global/hero'
import HeroContent from '@/components/global/hero-content'
import { ServicesCards } from '@/components/global/services-cards'
import { ServicesParallax } from '@/components/global/services-parallax'
import Services from '@/components/global/services-section'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full  overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <ActivityArea />
      <CtaSection />
      <CtaForm />
    </main>
  )
}
