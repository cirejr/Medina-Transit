import React from 'react'
import { Skeleton } from '@nextui-org/react'

export default function BannerSkeleton() {
  return (
    <Skeleton className="rounded-lg">
      <div className="h-[30rem] w-full rounded-lg bg-slate-500"></div>
    </Skeleton>
  )
}
