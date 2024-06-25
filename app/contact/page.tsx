import ContactBanner from '@/components/global/contact/banner'
import ContactForm from '@/components/global/contact/contact-form'
import MapsSection from '@/components/global/contact/maps-section'
import React from 'react'

export default function Page() {
  return (
    <main className="w-full">
      <ContactBanner />
      <MapsSection />
      <ContactForm />
    </main>
  )
}
