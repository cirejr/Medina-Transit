'use client'

import React from 'react'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react'

import logo from '@/public/images/logo-nobg.png'
import Image from 'next/image'
import { siteLinks } from '@/configs/site'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import WhatsappIcon from '../icons/whatsapp-icon'

export default function NavbarMenu() {
  const pathname = usePathname()
  return (
    <Navbar position="sticky" isBlurred={true} className="h-32">
      <NavbarBrand>
        <Image alt="Medina Transit" src={logo} width={150} height={150} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteLinks.map((link, index) => (
          <NavbarItem key={index}>
            <Link
              href={link.link}
              className={`text-base hover:border-b-2 border-secondary pb-2 hover:text-secondary ${
                pathname === link.link && 'text-secondary border-b-2'
              }`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as="a"
            color="success"
            href="https://wa.me/778427300?text=Bonjour, je viens de visiter votre site. Je voudrais en savoir plus sur vos services"
            variant="flat"
            startContent={<WhatsappIcon />}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
