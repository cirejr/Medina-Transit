import { Button } from '@nextui-org/react'
import { Button as ButtonCn } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <section className="py-4 mt-14 sm:mt16 lg:mt-0 w-full">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 className=" font-semibold leading-tight dark:text-white text-4xl sm:text-5xl lg:text-6xl">
              Bienvenue chez{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-cyan-600">
                Medina Transit
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-secondary to-orange-700">
                Services
              </span>
            </h1>
            <p className=" flex text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
              Votre partenaire de confiance pour des solutions de transport et
              de logistique de qualité supérieure au Sénégal. Qui rallie
              services fiables, efficaces et adaptés à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              <Button
                variant="shadow"
                color="primary"
                className="h-12 scroll-smooth"
                as={Link}
                href="#cta-form-section"
              >
                Commencer
              </Button>
              <Button
                variant="shadow"
                color="secondary"
                className="text-white h-12 scroll-smooth"
                as={Link}
                href="#cta-form-section"
              >
                Prendre contact
              </Button>
            </div>
          </div>
          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              <Image
                src="https://img.freepik.com/photos-gratuite/transport-logistique-produits_23-2151541831.jpg?w=740&t=st=1718457118~exp=1718457718~hmac=a0515c5e4c7cbbab600401c16fe17910e83ef4de59296f76b7b428794b83bd76"
                alt="Transport de marchandises"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
              <Image
                src="https://img.freepik.com/photos-gratuite/directeur-approvisionnement-stocks-afro-americain-faisant-portrait-inventaire-marchandises_482257-77647.jpg?t=st=1719404952~exp=1719408552~hmac=58b9bddc7cbeecb79ec6dbc3eba7759cca9fe2e4819461cb76d65c2bc394a471&w=1380"
                alt="Logistique"
                height={1300}
                width={1300}
                className="z-10 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
