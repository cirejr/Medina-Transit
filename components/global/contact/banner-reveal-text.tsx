'use client'
import React from 'react'
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from '../../ui/text-reveal'

export function BannerRevealText() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Vous avez un projet"
        revealText="Nous avons la SOLUTION "
      />
    </div>
  )
}
