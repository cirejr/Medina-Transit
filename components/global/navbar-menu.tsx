import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react'
import logo from '@/public/images/medina-transit.jpg'
import Image from 'next/image'
import { siteLinks } from '@/configs/site'

export default function NavbarMenu() {
  return (
    <Navbar className="flex justify-center max-w-lg mx-auto">
      <NavbarBrand>
        <Image alt="Medina Transit" src={logo} width={150} height={150} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={link.link}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  )
}
