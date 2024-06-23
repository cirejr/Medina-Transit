import Intro from '@/components/global/introduction'
import { SpotlightSection } from '@/components/global/spotlight-section'
import VisionMissionTabs from '@/components/global/vision-mission'
import VisionAndMission from '@/components/global/vision-mission'
import { WhyUs } from '@/components/global/why-us'
import { Spotlight } from '@/components/ui/spotlight'
import React from 'react'

export default function Page() {
  return (
    <main className="w-full">
      <SpotlightSection />
      <Intro />
      <VisionMissionTabs />
      <WhyUs />
    </main>
  )
}
