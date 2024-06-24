import CtaAboutUs from '@/components/global/about/cta-about-us'
import Intro from '@/components/global/about/introduction'
import { SpotlightSection } from '@/components/global/about/spotlight-section'
import VisionMissionTabs from '@/components/global/about/vision-mission'
import VisionAndMission from '@/components/global/about/vision-mission'
import { WhyUs } from '@/components/global/about/why-us'
import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'

export default function Page() {
  return (
    <main className="w-full">
      <SpotlightSection />
      <Intro />
      <VisionMissionTabs />
      <WhyUs />
      <CtaAboutUs />
    </main>
  )
}
