'use client'
import React from 'react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { TracingBeam } from '../../ui/tracing-beam'

export function ServicesTracingBeam() {
  return (
    <TracingBeam className="px-6 pt-14">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {serviceContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge('text-xl mb-4')}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const serviceContent = [
  {
    title: 'Transport de Marchandises',
    description: (
      <>
        <p>
          MTS assure le transport sûr et fiable de marchandises de toutes
          tailles, que ce soit par voie terrestre, ferroviaire, maritime ou
          aérienne. Grâce à notre réseau étendu de partenaires de transport,
          nous sommes en mesure de livrer efficacement des marchandises à
          destination dans les délais convenus.
        </p>
        <p>
          Notre service de transport de marchandises est conçu pour répondre aux
          besoins variés de nos clients, offrant des solutions adaptées à chaque
          type de cargaison et à chaque destination.
        </p>
      </>
    ),
    badge: 'Transport',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Services de Logistique',
    description: (
      <>
        <p>
          MTS propose des solutions logistiques complètes pour aider ses clients
          à gérer efficacement leurs opérations d'entreposage, de gestion des
          stocks, de conditionnement et de distribution. Grâce à nos
          installations d'entreposage modernes et à nos systèmes de gestion des
          stocks avancés, nous garantissons une gestion optimale des flux de
          marchandises.
        </p>
        <p>
          Notre expertise en logistique permet à nos clients de rationaliser
          leurs opérations, de réduire les coûts et d'améliorer leur efficacité
          globale.
        </p>
      </>
    ),
    badge: 'Logistique',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Services Douaniers',
    description: (
      <>
        <p>
          MTS facilite les formalités douanières pour ses clients, en veillant à
          ce que les marchandises traversent les frontières en toute légalité et
          en toute fluidité. Notre entreprise dispose d'une équipe d'experts en
          douane qui sont bien versés dans les règlements et les procédures
          douanières, garantissant ainsi une conformité totale avec les
          exigences réglementaires.
        </p>
        <p>
          Nos services douaniers permettent à nos clients de naviguer facilement
          dans les complexités du commerce international, réduisant les retards
          et assurant une gestion efficace des importations et des exportations.
        </p>
      </>
    ),
    badge: 'Douanes',
    image:
      'https://images.unsplash.com/photo-1573030889348-c6b0f8b15e40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
]
