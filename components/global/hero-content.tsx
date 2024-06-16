export default function HeroContent() {
  const imageUrl =
    'https://img.freepik.com/photos-gratuite/logistique-transport-porte-conteneurs-avion-cargo-pont-roulant-travail-dans-chantier-naval-au-lever-du-soleil-logistique-import-export-transport-contexte-industrie-ai-generative_123827-24177.jpg?t=st=1718370172~exp=1718373772~hmac=d7843f01d950ec13f5e3aa5d1cff94585d4dd4062f4d8b39f2d695b72d301e94&w=1380'
  return (
    <>
      {/* Hero */}
      <div className="py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Medina Transit: Reshaping Tech
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Nano-computing breaks barriers, unlocking new tech horizons.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <img src={imageUrl} className="rounded-xl" alt="logistics" />
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  )
}
