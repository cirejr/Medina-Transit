'use client'
import { HoverEffect } from '../ui/card-hover-effect'

export function ServicesCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: 'Transport de Marchandises',
    description:
      'MTS offre des services de transport fiables pour diverses marchandises, assurant une livraison ponctuelle et sécurisée.',
    link: '#',
  },
  {
    title: "Logistique et Gestion de la Chaîne d'Approvisionnement",
    description:
      "MTS propose des solutions logistiques complètes, incluant la gestion de la chaîne d'approvisionnement pour optimiser le flux des produits.",
    link: '#',
  },
  {
    title: 'Services de Douane et de Conformité',
    description:
      'Assistance dans les procédures de douane et garantie de conformité aux réglementations locales et internationales.',
    link: '#',
  },
  {
    title: 'Entreposage',
    description:
      "MTS fournit des installations d'entreposage sécurisées et bien équipées pour stocker les marchandises.",
    link: '#',
  },
  {
    title: 'Distribution',
    description:
      'Services de distribution efficaces pour garantir que les produits atteignent les points de vente ou les clients finaux en temps voulu.',
    link: '#',
  },
]
