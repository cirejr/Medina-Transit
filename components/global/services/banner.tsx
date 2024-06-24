'use client'
import React, { Suspense } from 'react'
import { Vortex } from '../../ui/vortex'
import BannerSkeleton from './banner-skeleton'

export function Banner() {
  return (
    <div className="w-full mx-auto h-[30rem] overflow-hidden">
      <Suspense fallback={<BannerSkeleton />}>
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Medina Transit <br /> Services ?
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Nous vous offrons une large gamme de services pour satisfaire le
            moindre de vos besoins
          </p>
        </Vortex>
      </Suspense>
    </div>
  )
}
