import { Chip } from '@nextui-org/react'
import { ServicesCards } from './services-cards'

const iconRender = (val: string) => {
  switch (val) {
    case 'local_shipping':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18v13H3V3zm3 3h3v3H6V6zm0 5h3v3H6v-3zm5-5h3v3h-3V6zm0 5h3v3h-3v-3zm5-5h3v3h-3V6zm0 5h3v3h-3v-3zM4 18h1a2 2 0 014 0h8a2 2 0 014 0h1"
          />
        </svg>
      )
    case 'sync_alt':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4V1m0 0l-3 3m3-3l3 3M4.05 7.05A9 9 0 0115 3m0 0a9 9 0 00-8.91 7H6a8.962 8.962 0 012.95-6.95zm0 11.9A9 9 0 0112 21m0 0v-3m0 3l3-3m-3 3l-3-3m10.95-7.05A9 9 0 018.998 21H9a8.962 8.962 0 006.95-2.95A8.962 8.962 0 0121 15h-2.01a7 7 0 00-6.939 5.056L12 21z"
          />
        </svg>
      )
    case 'verified_user':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5c3.75 0 6.75 3 6.75 6.75s-3 6.75-6.75 6.75S5.25 14.25 5.25 10.5 8.25 4.5 12 4.5zM9.75 10.5l1.5 1.5L15 8.25"
          />
        </svg>
      )
    case 'warehouse':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12H3v7.5A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5V12zm0 0V9a3 3 0 00-3-3H6a3 3 0 00-3 3v3"
          />
        </svg>
      )
    default:
      return <>No Icon</>
  }
}

const ServiceCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) => {
  return (
    <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      <div className="rounded-xl bg-gray-200 dark:bg-gray-800 p-3 text-gray-900 dark:text-white w-max relative">
        {iconRender(icon)}
      </div>
      <div className="mt-6 space-y-4 relative">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
      <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-sky-600/10 rounded-full" />
    </div>
  )
}

const services = [
  {
    id: 1,
    title: 'Transport de Marchandises',
    description:
      'MTS offre des services de transport fiables pour diverses marchandises, assurant une livraison ponctuelle et sécurisée.',
    icon: 'local_shipping',
  },
  {
    id: 2,
    title: "Logistique et Gestion de la Chaîne d'Approvisionnement",
    description:
      "MTS propose des solutions logistiques complètes, incluant la gestion de la chaîne d'approvisionnement pour optimiser le flux des produits.",
    icon: 'sync_alt',
  },
  {
    id: 3,
    title: 'Services de Douane et de Conformité',
    description:
      'Assistance dans les procédures de douane et garantie de conformité aux réglementations locales et internationales.',
    icon: 'verified_user',
  },
  {
    id: 4,
    title: 'Entreposage',
    description:
      "MTS fournit des installations d'entreposage sécurisées et bien équipées pour stocker les marchandises.",
    icon: 'warehouse',
  },
  {
    id: 5,
    title: 'Distribution',
    description:
      'Services de distribution efficaces pour garantir que les produits atteignent les points de vente ou les clients finaux en temps voulu.',
    icon: 'local_shipping',
  },
]

const Services = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Chip variant="dot" color="primary">
            Nos Services
          </Chip>
          <p className="text-gray-700 dark:text-gray-300">
            Découvrez les solutions complètes de transport et de logistique que
            nous offrons pour répondre à vos besoins spécifiques.
          </p>
        </div>
        <ServicesCards />
      </div>
    </section>
  )
}

export default Services
