'use client'

import { Tab, Tabs } from '@nextui-org/react'
import { Building2Icon, ThumbsUpIcon, Users2Icon } from 'lucide-react'

function Vision() {
  return (
    <section>
      {/* Icon Blocks */}
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Notre Vision</h2>
              <p className="mt-3 text-muted-foreground">
                La vision de MTS est d'être le leader de solutions novatrices et
                durables dans le secteur du transport, en promouvant
                l&apos;efficacité logistique.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Leader incontesté
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Être le leader incontesté des services de transit et de
                    logistique au Sénégal, reconnu pour notre excellence
                    opérationnelle et notre innovation.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Solutions avancées
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Transformer le paysage du transport et de la logistique au
                    Sénégal en offrant des solutions intégrées et
                    technologiquement avancées.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Facilitateur mondial
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Connecter les entreprises sénégalaises au monde entier grâce
                    à des services de transport et de logistique de classe
                    mondiale.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </section>
  )
}
function Mission() {
  return (
    <section className="w-full">
      {/* Icon Blocks */}
      <div className="container w-full">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Notre Mission</h2>
              <p className="mt-3 text-muted-foreground">
                La mission de MTS est de fournir des services et des produits
                énergétiques de haute qualité qui répondent aux besoins de nos
                clients, tout en contribuant à un avenir plus vert et plus
                durable. Nous nous engageons à l&apos;innovation, à la
                satisfaction du client et à la responsabilité environnementale
                dans toutes nos opérations.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Building2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Solutions fiables et efficaces
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Fournir des solutions de transport et de logistique fiables,
                    efficaces et innovantes qui permettent à nos clients de
                    prospérer dans un monde en constante évolution.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Optimisation d&apos;approvisionnement
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Optimiser la chaîne d'approvisionnement de nos clients grâce
                    à une expertise locale, des technologies de pointe et un
                    engagement inébranlable envers la qualité.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <ThumbsUpIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Promoteur du développement
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Faciliter le commerce et le développement économique du
                    Sénégal en offrant des services de transit et de logistique
                    transparents, rapides et conformes.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </section>
  )
}

export default function VisionMissionTabs() {
  let tabs = [
    {
      id: 'vision',
      label: 'Vision',
      content: <Vision />,
    },
    {
      id: 'mission',
      label: 'Mission',
      content: <Mission />,
    },
  ]
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
      <Tabs
        variant="underlined"
        items={tabs}
        size="lg"
        className="w-full justify-center text-3xl"
        classNames={{
          tabList: 'rounded-none flex gap-6',
          cursor: 'w-full bg-secondary',
          tab: 'max-w-fit px-0 h-12',
          tabContent: 'group-data-[selected=true]:text-secondary',
        }}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center text-3xl">
                <span>{item.label}</span>
              </div>
            }
          >
            {item.content}
          </Tab>
        )}
      </Tabs>
    </div>
  )
}
