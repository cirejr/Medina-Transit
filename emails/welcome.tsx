import React from 'react'

type emailProps = {
  firstName: string
  lastName: string
  email: string
  phone: number
  service: string
  description: string
}

export default function Welcome({
  firstName,
  lastName,
  email,
  phone,
  service,
  description,
}: emailProps) {
  return (
    <div>
      <h1>Demande Du Client!</h1>
      <p>Prénom: {firstName}</p>
      <p>Nom: {lastName}</p>
      <p>Email: {email}</p>
      <p>Téléphone: {phone}</p>
      <p>Service Demandé: {service}</p>
      <p>Description de la demande: {description}</p>
    </div>
  )
}
