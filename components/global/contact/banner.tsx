import React from 'react'
import { GridBackground } from '../grid-background'
import { BannerRevealText } from './banner-reveal-text'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

export default function ContactBanner() {
  const words = [
    {
      text: 'Travaillez',
    },
    {
      text: 'mains',
    },
    {
      text: 'dans',
    },
    {
      text: 'mains',
    },
    {
      text: 'avec',
    },
    {
      text: 'MTS.',
      className: 'text-blue-500 dark:text-blue-500',
    },
  ]
  return (
    <section className="w-full bg-black/[0.96] antialiased bg-grid-white/[0.1] h-[200px] flex justify-center items-center">
      {/* <h3 className="text-3xl text-slate-200">
        Travaillez main dans mains <br /> avec{' '}
        <span className="text-primary text-4xl">Medina Transit </span>
        <span className="text-secondary text-4xl">Services</span>
      </h3> */}

      <TypewriterEffectSmooth words={words} className="dark" />
    </section>
  )
}
