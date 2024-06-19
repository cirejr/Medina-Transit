'use client'
import React from 'react'
import { Input, Button, Select, SelectItem, Textarea } from '@nextui-org/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { sendEmail } from '@/lib/actions'
import { useFormStatus } from 'react-dom'
import { Icons } from '../ui/icons'
import { toast } from 'sonner'
import SendIcon from '../icons/send-icon'

const services = [
  { key: 'transport_marchandises', label: 'Transport de Marchandises' },
  {
    key: 'logistique_chaine_approvisionnement',
    label: "Logistique et Gestion de la Chaîne d'Approvisionnement",
  },
  {
    key: 'services_douane_conformite',
    label: 'Services de Douane et de Conformité',
  },
  { key: 'entreposage', label: 'Entreposage' },
  { key: 'distribution', label: 'Distribution' },
  { key: 'livraison_express', label: 'Livraison Express' },
  { key: 'gestion_stock', label: 'Gestion des Stocks' },
  { key: 'suivi_colis', label: 'Suivi de Colis' },
  {
    key: 'services_conseil_logistique',
    label: 'Services de Conseil en Logistique',
  },
  { key: 'emballage_personnalise', label: 'Emballage Personnalisé' },
  { key: 'gestion_retours', label: 'Gestion des Retours' },
  { key: 'transport_fret_aerien', label: 'Transport de Fret Aérien' },
  { key: 'transport_fret_maritime', label: 'Transport de Fret Maritime' },
]

export default function CtaForm() {
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const res = await sendEmail(formData)

    if (res.status == 200) {
      toast.success('demande envoyé')
    } else if (res.error) {
      toast.error('Une erreur est survenue lors de l&apos;envoie' || res.error)
    }

    setIsLoading(false)
  }
  return (
    //@ts-ignore
    <form onSubmit={handleSubmit}>
      <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
        {/* Card */}
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-2xl font-semibold leading-none tracking-tight">
              Commençons dès maintenant
            </h2>
            <CardDescription>Parlez nous de votre besoin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-5">
              {/* Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Input
                  isRequired
                  name="firstName"
                  aria-label="Prenom"
                  label="Prénom"
                  variant="bordered"
                />
                <Input
                  isRequired
                  name="lastName"
                  aria-label="Nom"
                  label="Nom"
                  variant="bordered"
                />
                <Input
                  isRequired
                  name="email"
                  aria-label="Email"
                  label="Email"
                  variant="bordered"
                />
                <Input
                  isRequired
                  name="phone"
                  aria-label="phone"
                  label="Téléphone"
                  variant="bordered"
                  type="number"
                />
                <Select
                  name="service"
                  label="Choisir un service"
                  className="col-span-2"
                  variant="bordered"
                >
                  {services.map((service) => (
                    <SelectItem key={service.key}>{service.label}</SelectItem>
                  ))}
                </Select>
                <Textarea
                  name="description"
                  variant="bordered"
                  className="col-span-2"
                  label="Description"
                />
                <Button
                  variant="flat"
                  color="primary"
                  size="lg"
                  className="mt-3 col-span-2 h-12"
                  disabled={isLoading}
                  isLoading={isLoading}
                  endContent={<SendIcon />}
                  type="submit"
                >
                  {isLoading ? 'En cours...' : 'Envoyer'}
                </Button>
              </div>
              {/* Grid End */}
            </div>
          </CardContent>
        </Card>
        {/* End Card */}
      </div>
    </form>
  )
}
