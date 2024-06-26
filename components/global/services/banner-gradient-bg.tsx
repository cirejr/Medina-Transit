import React from 'react'
import { BackgroundGradientAnimation } from '../background-gradient-animation'

export default function BannerGradientBackground() {
  return (
    <BackgroundGradientAnimation containerClassName="h-[400px]">
      <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div>
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Medina Transit <br /> Services
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Nous vous offrons une large gamme de services pour satisfaire le
            moindre de vos besoins
          </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}
