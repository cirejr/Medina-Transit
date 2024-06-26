'use client'
import React from 'react'

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Icons } from '../ui/icons'
import { Button, Listbox, ListboxItem, ListboxSection } from '@nextui-org/react'
import { usefullLinks } from '@/configs/site'
import logo from '@/public/images/logo-nobg.png'
import Link from 'next/link'
import Image from 'next/image'

const socialIcons = [
  {
    icon: <Icons.in />,
    href: 'https://sn.linkedin.com/company/medina-transit-service-suarl',
  },
  { icon: <Icons.ig />, href: 'https://www.instagram.com/medina_transit/' },
  { icon: <Icons.twitter />, href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full px-6 dark bg-slate-950 bottom-0 left-0 right-0 ">
      <Card className="dark rounded-none border-none">
        <CardContent className="flex justify-center">
          <Image
            alt="Medina Transit"
            src={logo}
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
          />
        </CardContent>
        <CardFooter className="justify-between px-0">
          <span>© 2024 MTS. Tous droits reservés.</span>
          <div className="flex items-center gap-2">
            {socialIcons.map((social, index) => (
              <Button key={index} variant="flat" color="primary" isIconOnly>
                <Link href={social.href}>{social.icon}</Link>
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </footer>
  )
}
