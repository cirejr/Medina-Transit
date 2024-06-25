import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import React from 'react'

export function GridBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: ClassValue
}) {
  return (
    <div
      className={cn(
        'w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center',
        className
      )}
    >
      {/* Radial gradient for the container to give a faded look */}
      {children}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
    </div>
  )
}
export function GridSmallBackground({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex justify-center">
      {/* Radial gradient for the container to give a faded look */}
      {children}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
    </div>
  )
}
