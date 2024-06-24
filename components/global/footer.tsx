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
  { icon: <Icons.gitHub />, href: '#' },
  { icon: <Icons.twitter />, href: '#' },
  { icon: <Icons.ig />, href: '#' },
  { icon: <Icons.in />, href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full p-6 dark bg-slate-950 bottom-0 left-0 right-0 ">
      <Card className="dark rounded-none border-none mt-10">
        <CardContent className="flex flex-col gap-6 md:gap-1 md:flex-row justify-between">
          <div className="mt-6 flex items-center justify-center md:items-start md:justify-start">
            <Image alt="Medina Transit" src={logo} width={150} height={150} />
          </div>
          <div className="flex w-full md:w-2/3 justify-center gap-4">
            {usefullLinks.map((link, index) => (
              <Listbox key={index}>
                <ListboxSection title={link.headTitle}>
                  {link.submenu.map((submenu, idx) => (
                    <ListboxItem
                      variant="faded"
                      color="primary"
                      className="hover:rounded-sm "
                      key={idx}
                      href={submenu.href}
                    >
                      {submenu.title}
                    </ListboxItem>
                  ))}
                </ListboxSection>
              </Listbox>
            ))}
          </div>
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
