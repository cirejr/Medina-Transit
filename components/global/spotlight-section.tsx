import React from 'react'
import { cn } from '@/lib/utils'
import { Spotlight } from '../ui/spotlight'

export function SpotlightSection() {
  return (
    <div className="h-[20rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Medina <br /> Transit Services.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Notre engagement envers la qualité et le service client est notre
          priorité absolue.Nous sommes là pour vous aider à répondre à tous vos
          besoins de dédouanement et de transport logistique.
        </p>
      </div>
    </div>
  )
}
