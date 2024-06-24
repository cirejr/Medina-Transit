'use client'
import React from 'react'
import { StickyScroll } from '../ui/sticky-scroll-reveal'
import Image from 'next/image'
import { Chip } from '@nextui-org/react'

const content = [
  {
    title: "10 Ans d'experience",
    description:
      'Depuis 2015, MTS a bâti une solide réputation dans le secteur du transport et de la logistique au Sénégal. Nos 10 années d&apos;expérience nous ont permis de développer une expertise inégalée, de tisser des relations durables avec nos clients et partenaires, et de comprendre en profondeur les défis uniques de notre marché. Cette décennie d&apos;excellence nous positionne comme un leader fiable et innovant, prêt à relever vos défis logistiques avec confiance et efficacité.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/vecteurs-libre/abstrait-10-reduction-banniere-reduction-vente-etiquette-prix-offre-remise-illustration-autocollant-moderne-vecteur_460848-7872.jpg?t=st=1719176034~exp=1719179634~hmac=e4a4528996e9e78d31bac9a1c6bdd8e02fe1dfd7b9a20ab4de9119cfefaa5bbd&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="10 ans"
        />
      </div>
    ),
  },
  {
    title: 'Qualité de service supérieure',
    description:
      'Chez MTS, nous nous engageons à fournir un service de la plus haute qualité. Notre expertise et notre attention aux détails garantissent que vos besoins en transport et logistique sont traités avec le plus grand soin et professionnalisme.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/photos-gratuite/affaires-noir-expression-heureuse_1194-2641.jpg?t=st=1719174844~exp=1719178444~hmac=4be57378c78ba1614956a7e740521a4e64585678cc3fe4fff145b8c3860c84bb&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Satisfaction client',
    description:
      'La satisfaction de nos clients est au cœur de tout ce que nous faisons. Nous travaillons sans relâche pour dépasser vos attentes, en offrant des solutions sur mesure et un service client exceptionnel à chaque étape de votre expérience avec MTS.',
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/photos-gratuite/collage-du-concept-experience-client_23-2149367133.jpg?t=st=1719174895~exp=1719178495~hmac=2a506999ab5e86be9690db2677570a19f80d48b5a2fd4e5cab6d53e2b819911a&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Innovation continue',
    description:
      "L'innovation est le moteur de notre croissance. Nous investissons constamment dans les dernières technologies et méthodes pour améliorer nos services. Chez MTS, nous sommes toujours à la recherche de nouvelles façons d'optimiser vos opérations de transport et de logistique.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/vecteurs-libre/concept-ecologie-technologique_23-2148438859.jpg?t=st=1719174954~exp=1719178554~hmac=4dd7d4d97c62e5a5aec1b351e361f2867ae72f78e2d71dfeed74c89202253936&w=826"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: 'Formation et développement du personnel',
    description:
      "Nous croyons que notre équipe est notre plus grand atout. C'est pourquoi nous investissons continuellement dans la formation et le développement de notre personnel. Cette approche nous permet de maintenir un niveau d'expertise élevé et d'assurer un service de qualité constante à nos clients.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://img.freepik.com/photos-gratuite/groupe-travailleurs-formes-utilisant-equipements-depot-travaillant-dans-departement-emballage-colis-personnes-utilisant-boites-marchandises-pour-emballer-expedier-produits-distribution-stocks-industriels_482257-59957.jpg?t=st=1719175044~exp=1719178644~hmac=f2c37c81d580007327a88c04870a9fcf34ad6cd061d3874859dbff82c7c59ed9&w=1480"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
]
export function WhyUs() {
  return (
    <div className="p-10">
      <div className="flex justify-center w-full pb-8">
        <Chip variant="dot" color="secondary" size="lg">
          Pourquoi nous choisir ?
        </Chip>
      </div>
      <StickyScroll content={content} />
    </div>
  )
}
