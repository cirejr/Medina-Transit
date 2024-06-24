import { Chip } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
/* 
export default function Intro() {
  return (
    <section className="container py-7 space-y-4 ">
      <div className="flex justify-center w-full">
        <Chip variant="dot" color="primary" size="lg">
          Notre histoire
        </Chip>
      </div>
      <div className="w-full flex justify-between">
        <p>
          Fondée en 2015 par Moussa NDOYE, Medina Transit Services (MTS) est née
          pour répondre au besoin croissant de services de transport et de
          logistique fiables au Sénégal. Initialement une petite entreprise
          locale de livraison, MTS s&apos;est rapidement développée grâce à son
          engagement envers la qualité et la satisfaction client. Au fil des
          ans, nous avons investi dans l&apos;expansion de nos activités et le
          renforcement de nos capacités opérationnelles. Cette approche nous a
          permis d&apos;étendre notre portée à l&apos;échelle nationale.
          Aujourd&apos;hui, MTS est fière d&apos;être reconnue comme l&apos;un
          des principaux acteurs du secteur au Sénégal, offrant des solutions de
          transit et de logistique de qualité supérieure à une clientèle
          diversifiée. Notre histoire témoigne de notre capacité à évoluer tout
          en restant fidèles à nos valeurs fondatrices de qualité et de
          fiabilité.
        </p>
        <Image
          src="https://img.freepik.com/photos-gratuite/representation-chaine-approvisionnement-vehicules-boites_23-2149853155.jpg?t=st=1719173729~exp=1719177329~hmac=2c32285c8eea83983e3c2648641a6af1d8f22fcac7911aa09c96a1310c014a73&w=740"
          alt="image"
          width={300}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  )
} */

export default function Intro() {
  const imageUrl =
    'https://img.freepik.com/photos-gratuite/vue-aerienne-du-cargo-porte-conteneurs-mer_335224-719.jpg?t=st=1719174200~exp=1719177800~hmac=91869262e4df00114f714279ecdb66b5d128567f01bb38c7ba1e29f1f1e209b5&w=1380'

  return (
    <section className="relative py-14">
      <div className="flex justify-center w-full pb-8">
        <Chip variant="dot" color="primary" size="lg">
          Notre histoire
        </Chip>
      </div>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
        </div>
        <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <p className="mt-8 text-gray-700 dark:text-gray-300">
            Fondée en 2015 par Moussa NDOYE, Medina Transit Services (MTS) est
            née pour répondre au besoin croissant de services de transport et de
            logistique fiables au Sénégal. Initialement une petite entreprise
            locale de livraison, MTS s&apos;est rapidement développée grâce à
            son engagement envers la qualité et la satisfaction client. Au fil
            des ans, nous avons investi dans l&apos;expansion de nos activités
            et le renforcement de nos capacités opérationnelles. Cette approche
            nous a permis d&apos;étendre notre portée à l&apos;échelle
            nationale. Aujourd&apos;hui, MTS est fière d&apos;être reconnue
            comme l&apos;un des principaux acteurs du secteur au Sénégal,
            offrant des solutions de transit et de logistique de qualité
            supérieure à une clientèle diversifiée. Notre histoire témoigne de
            notre capacité à évoluer tout en restant fidèles à nos valeurs
            fondatrices de qualité et de fiabilité.
          </p>
          <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full"></div>
          </div>
        </div>
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          <Image
            src={imageUrl}
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-lg object-cover lg:max-h-none max-h-96"
          />
        </div>
      </div>
    </section>
  )
}
