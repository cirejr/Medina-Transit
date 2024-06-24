'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { AuroraBackground } from '../../ui/aurora-bg'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

export function AuroraBgCta() {
  return (
    <AuroraBackground className="h-fit container rounded-lg py-14 my-14 overflow-auto scrollbar-hide dark">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="dark text-3xl md:text-7xl font-bold dark:text-white text-center">
          Interessé ?
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Obtenez une estimation gratuite pour vos besoins en transport et
          logistique.
        </div>
        <Button
          as={Link}
          href="/contact"
          size="lg"
          className="h-12 bg-slate-200 text-slate-800"
        >
          Demandez un devis
        </Button>
      </motion.div>
    </AuroraBackground>
  )
}
