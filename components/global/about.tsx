import { Chip } from '@nextui-org/react'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900 py-10 md:py-36 lg:py-40 h-auto md:h-[100dvh] min-h-max flex items-center relative">
        <div
          className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-secondary/70
  backdrop-filter blur-3xl opacity-50"
        />
        <div
          className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-secondary/70
  backdrop-filter blur-3xl opacity-50"
        />
        <div
          className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-secondary/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0"
        >
          <div className="inset-[10%] rounded-full bg-gradient-to-l from-secondary/20">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-secondary/30" />
          </div>
        </div>
        <div
          className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-secondary/5 left-0
  translate-y-[40%] -translate-x-[40%] bottom-0"
        >
          <div className="inset-[10%] rounded-full bg-gradient-to-r from-secondary/40">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-secondary/50" />
          </div>
        </div>
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="text-center flex flex-col items-center space-y-10">
            <Chip variant="dot" color="secondary">
              Qui Sommes Nous ?
            </Chip>
            <h1 className="text-2xl md:text-3xl lg:text-4xl/tight xl:text-6xl/tight text-slate-800 dark:text-white font-bold max-w-4xl capitalize">
              Nous inspirons la croissance pour votre entreprise
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl">
              Chez Medina Transit Services, nous nous engageons à fournir des
              solutions de transport et de logistique fiables et efficaces pour
              répondre aux besoins variés de nos clients. Fondée en 2015, notre
              entreprise s&apos;est rapidement développée grâce à notre
              dévouement à la qualité du service et à la satisfaction de la
              clientèle. Nous vous accompagnons dans la gestion optimale de vos
              opérations logistiques.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
