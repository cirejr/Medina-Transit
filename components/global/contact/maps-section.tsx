import { Link } from '@nextui-org/react'
import {
  BookOpenIcon,
  Calendar,
  ChevronRightIcon,
  LocateIcon,
  Mail,
  MessagesSquareIcon,
  Phone,
  ThumbsUpIcon,
} from 'lucide-react'

export default function MapsSection() {
  return (
    <>
      {/* Hero */}
      <div className="container py-7">
        {/* Grid */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Visitez nous directement dans nos locaux
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              ou prenez contact via mail ou un simple coup de phone
            </p>
            <div className="mt-5 lg:mt-8 flex flex-col gap-2 sm:gap-3">
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                  <Phone className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Téléphone
                  </h3>
                  <Link
                    href="tel:776836700"
                    isExternal
                    className="text-muted-foreground mt-1"
                  >
                    (+221) 77 683 67 00
                  </Link>
                </div>
              </div>
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                  <Mail className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">Email</h3>
                  <Link
                    href="mailto:medinatransit01@gmail.com"
                    isExternal
                    className="text-muted-foreground mt-1"
                  >
                    medinatransit01@gmail.com
                  </Link>
                </div>
              </div>
              <div className="flex">
                {/* Icon */}
                <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                  <Calendar className="flex-shrink-0 w-5 h-5" />
                </span>
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Disponibilité
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Du Lundi au Vendredi de 08h à 19h
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Col */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15437.37148419744!2d-17.4457064!3d14.6931922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1736a065f724d%3A0xf387c820c1db130!2sMedina%20Transit%20Services!5e0!3m2!1sfr!2ssn!4v1719273428824!5m2!1sfr!2ssn"
              width="600"
              height="450"
              loading="lazy"
              className="rounded-lg shadow-lg border-2 border-gray-300"
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </>
  )
}
