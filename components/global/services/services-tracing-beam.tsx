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
      'https://img.freepik.com/photos-gratuite/gros-plan-livreur-colis_23-2149095903.jpg?t=st=1719406850~exp=1719410450~hmac=b7ae275130aeeabc4ad00f297c228a4c853a136f0618ef1460e99c822b29cbbb&w=1380',
  },
  {
    title: 'Services de Logistique',
    description: (
      <>
        <p>
          MTS propose des solutions logistiques complètes pour aider ses clients
          à gérer efficacement leurs opérations d&apos;entreposage, de gestion
          des stocks, de conditionnement et de distribution. Grâce à nos
          installations d&apos;entreposage modernes et à nos systèmes de gestion
          des stocks avancés, nous garantissons une gestion optimale des flux de
          marchandises.
        </p>
        <p>
          Notre expertise en logistique permet à nos clients de rationaliser
          leurs opérations, de réduire les coûts et d&apos;améliorer leur
          efficacité globale.
        </p>
      </>
    ),
    badge: 'Logistique',
    image:
      'https://img.freepik.com/photos-gratuite/gerant-entrepot-appelle-bureau-logistique-demande-rapport-inventaire-equipe-travailleurs-entrepot-afro-americains-regarde-informations-stock-tablette-parle-au-telephone_482257-71397.jpg?t=st=1719406954~exp=1719410554~hmac=54ed1cfa164a40832a9f4079ee50f417280c367aff1ce06d7bda56fff4641e1b&w=1380',
  },
  {
    title: 'Services Douaniers',
    description: (
      <>
        <p>
          MTS facilite les formalités douanières pour ses clients, en veillant à
          ce que les marchandises traversent les frontières en toute légalité et
          en toute fluidité. Notre entreprise dispose d&apos;une équipe
          d&apos;experts en douane qui sont bien versés dans les règlements et
          les procédures douanières, garantissant ainsi une conformité totale
          avec les exigences réglementaires.
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
      'https://img.freepik.com/photos-gratuite/employes-entrepot-debout-au-comptoir-discutant-gestion-expeditions-deux-employes-bureau-poste-afro-americains-parlant-livraison-colis-caisse-dans-salle-stockage_482257-63893.jpg?t=st=1719407027~exp=1719410627~hmac=f97b6fb959339cbc70730c9bae7698a28a6760280bfee4a3f53d1971b124e592&w=1380',
  },
]
