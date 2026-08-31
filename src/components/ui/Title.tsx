import React, { type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TitleProps{
    children:ReactNode
    className?:string
}
export default function Title({children,className}:TitleProps) {
  return (
<h1 className={cn('text-3xl text-primary font-semibold ',className)}>{children}</h1>

  )
}
