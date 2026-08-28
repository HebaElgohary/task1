import React, { type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface labelProps{
    children:ReactNode
    className?:string
}

export default function Label({children,className}:labelProps) {
  return (
    <div>
        <label className={cn('text-text text-lg font-semibold',className)} htmlFor="">{children}</label>

    </div>
  )
}
