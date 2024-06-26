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
import { sendContactForm } from '@/lib/actions'
import { toast } from 'sonner'
import SendIcon from '../../icons/send-icon'

export default function ContactForm() {
  const [isLoading, setIsLoading] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const res = await sendContactForm(formData)

    if (res.status == 200) {
      toast.success('demande envoyé')

      if (formRef.current) {
        formRef.current.reset()
      }
    } else if (res.error) {
      toast.error('Une erreur est survenue lors de l&apos;envoie' || res.error)
    }

    setIsLoading(false)
  }

  return (
    <section className="w-full flex justify-center bg-white bg-[url('/images/sea-port-bg.jpg')] bg-no-repeat bg-cover bg-opacity-25 ">
      <div className="w-full h-full bg-black px-[2rem] py-14 bg-opacity-35 backdrop-blur-md">
        {/* //@ts-ignore */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="lg:max-w-lg lg:mx-auto ms-auto">
            <Card>
              <CardHeader className="text-center">
                <CardDescription>Laissez nous un message</CardDescription>
                <CardTitle className="text-4xl font-semibold  bg-clip-text bg-gradient-to-l from-primary to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  Dites-nous en plus sur votre projet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mt-5">
                  {/* Grid */}
                  <div className="space-y-4">
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
                      name="phone"
                      aria-label="phone"
                      label="Téléphone"
                      variant="bordered"
                      type="number"
                    />
                    <Textarea
                      name="description"
                      placeholder="Dites nous de quoi vous avez besoin"
                      variant="bordered"
                      className="col-span-2"
                      label="Objet"
                    />
                    <Button
                      variant="flat"
                      color="secondary"
                      size="lg"
                      className="mt-3 col-span-2 h-12 w-full"
                      disabled={isLoading}
                      isLoading={isLoading}
                      endContent={<SendIcon fill="#E4831A" />}
                      type="submit"
                    >
                      {isLoading ? 'En cours...' : 'Envoyer'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </section>
  )
}
