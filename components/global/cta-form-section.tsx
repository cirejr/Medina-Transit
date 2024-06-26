import CtaForm from './cta-form'

export default function CtaFormSection() {
  return (
    <>
      <div className="relative bg-slate-100" id="cta-form-section">
        <div className="container py-24 sm:py-32">
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Une vision pour 2024
              </p>
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  MTS : Votre Partenaire Logistique pour l&apos;Avenir
                </h1>
                <p className="text-xl text-muted-foreground">
                  Découvrez des solutions de transport et de logistique de
                  pointe avec MTS.
                </p>
              </div>
            </div>
            <div>
              <CtaForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
