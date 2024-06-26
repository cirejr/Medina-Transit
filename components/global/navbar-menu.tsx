'use client'

import React from 'react'
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'

import logo from '@/public/images/logo-nobg.png'
import Image from 'next/image'
import { siteLinks } from '@/configs/site'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import WhatsappIcon from '../icons/whatsapp-icon'

export default function GlobalNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      isBlurred={true}
      className="h-32"
    >
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
            className="hidden sm:flex"
          >
            WhatsApp
          </Button>
          <Button
            as="a"
            color="success"
            href="https://wa.me/776836700?text=Bonjour, je viens de visiter votre site. Je voudrais en savoir plus sur vos services"
            variant="flat"
            isIconOnly
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden"
            radius="full"
          >
            <WhatsappIcon />
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className=" justify-center items-center">
        {siteLinks.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={item.link}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
