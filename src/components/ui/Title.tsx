import React, { type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TitleProps{
    children:ReactNode
    className?:string
}
export default function Title({children,className}:TitleProps) {
  return (
<h1 className={cn('text-2xl text-primary ',className)}>{children}</h1>

  )
}
