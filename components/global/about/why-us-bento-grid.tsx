import { cn } from '@/lib/utils'
import React from 'react'
import { BentoGrid, BentoGridItem } from '../../ui/bento-grid'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import Image from 'next/image'
import { Chip } from '@nextui-org/react'

export function WhyUsBentoGrid() {
  return (
    <section className="container py-10">
      <div className="flex justify-center w-full pb-8">
        <Chip variant="dot" color="secondary" size="lg">
          Pourquoi nous choisir ?
        </Chip>
      </div>
      <BentoGrid className="max-w-4xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
const items = [
  {
    title: 'Qualité de service supérieure',
    description:
      'Chez MTS, nous nous engageons à fournir un service de la plus haute qualité.',
    header: (
      <Image
        src="https://img.freepik.com/photos-gratuite/affaires-noir-expression-heureuse_1194-2641.jpg?t=st=1719174844~exp=1719178444~hmac=4be57378c78ba1614956a7e740521a4e64585678cc3fe4fff145b8c3860c84bb&w=1380"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Satisfaction client',
    description:
      'La satisfaction de nos clients est au cœur de tout ce que nous faisons.',
    header: (
      <Image
        src="https://img.freepik.com/photos-gratuite/collage-du-concept-experience-client_23-2149367133.jpg?t=st=1719174895~exp=1719178495~hmac=2a506999ab5e86be9690db2677570a19f80d48b5a2fd4e5cab6d53e2b819911a&w=1380"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Innovation continue',
    description:
      "Chez MTS, nous sommes toujours à la recherche de nouvelles façons d'optimiser vos opérations de transport et de logistique.",

    header: (
      <Image
        src="https://img.freepik.com/vecteurs-libre/composition-isometrique-du-service-livraison-ordinateur-portable-entoure-boites-colis-employes-compagnie-maritime-illustration-vectorielle-vehicules-fret_1284-69331.jpg?t=st=1719781716~exp=1719785316~hmac=47a34883636f25faa0543dcf346c4ec97ff5c4a56f6787e60e2508b75e2bac3d&w=996"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "10 Ans d'experience",
    description:
      'Depuis 2015, MTS a bâti une solide réputation dans le secteur du transport et de la logistique au Sénégal.',
    header: (
      <div className="h-full w-full flex items-center justify-center text-white max-h-[200px]">
        <Image
          src="https://img.freepik.com/vecteurs-libre/abstrait-10-reduction-banniere-reduction-vente-etiquette-prix-offre-remise-illustration-autocollant-moderne-vecteur_460848-7872.jpg?t=st=1719176034~exp=1719179634~hmac=e4a4528996e9e78d31bac9a1c6bdd8e02fe1dfd7b9a20ab4de9119cfefaa5bbd&w=1380"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="10 ans"
        />
      </div>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Formation et développement du personnel',
    description:
      'Nous investissons continuellement dans la formation et le développement de notre personnel.',
    header: (
      <Image
        src="https://img.freepik.com/photos-gratuite/groupe-travailleurs-formes-utilisant-equipements-depot-travaillant-dans-departement-emballage-colis-personnes-utilisant-boites-marchandises-pour-emballer-expedier-produits-distribution-stocks-industriels_482257-59957.jpg?t=st=1719175044~exp=1719178644~hmac=f2c37c81d580007327a88c04870a9fcf34ad6cd061d3874859dbff82c7c59ed9&w=1480"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
]
