import { BackgroundGradientAnimation } from '@/components/global/background-gradient-animation'
import HeroSection from '@/components/global/hero-section-gradient-animation-bg'
import { AuroraBgCta } from '@/components/global/services/aurora-cta'
import { Banner } from '@/components/global/services/banner'
import BannerGradientBackground from '@/components/global/services/banner-gradient-bg'
import BannerSkeleton from '@/components/global/services/banner-skeleton'
import { ServicesTracingBeam } from '@/components/global/services/services-tracing-beam'
import React, { Suspense } from 'react'

export default function Page() {
  return (
    <main className="w-full h-fit overflow-x-hidden dark">
      {/* <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense> */}
      <BannerGradientBackground />
      <ServicesTracingBeam />
      <AuroraBgCta />
    </main>
  )
}
