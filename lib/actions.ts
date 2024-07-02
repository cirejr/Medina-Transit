'use server'

import Welcome, { ContactFormEmail } from '@/emails/welcome'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(form: FormData) {
  const rawFormData = {
    firstName: form.get('firstName') as string,
    lastName: form.get('lastName') as string,
    email: form.get('email') as string,
    phone: form.get('phone') as unknown as number,
    service: form.get('service') as string,
    description: form.get('description') as string,
  }

  const { firstName, lastName, email, phone, service, description } =
    rawFormData
  const { data, error } = await resend.emails.send({
    from: 'MTS <oncontactmts@resend.dev>',
    to: 'juniorcireba@gmail.com',
    reply_to: email as string,
    subject: 'Formulaire de contact',
    react: Welcome({ firstName, lastName, email, phone, service, description }),
  })

  if (error) {
    console.error(error)
    return { status: 500, error }
  }

  return { status: 200, data }
}

export async function sendContactForm(form: FormData) {
  const rawFormData = {
    firstName: form.get('firstName') as string,
    lastName: form.get('lastName') as string,
    phone: form.get('phone') as unknown as number,
    description: form.get('description') as string,
  }

  const { firstName, lastName, phone, description } = rawFormData
  const { data, error } = await resend.emails.send({
    from: 'MTS <onboarding@resend.dev>',
    to: 'juniorcireba@gmail.com',
    subject: 'Formulaire de contact',
    react: ContactFormEmail({ firstName, lastName, phone, description }),
  })

  if (error) {
    return { status: 500, error }
  }

  return { status: 200, data }
}
