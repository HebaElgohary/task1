import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    className?:string
    
}
export default function Button({children,className,...props}:ButtonProps) {
  return (
<button className={cn(`!px-3 !py-1 `,className)} {...props} >{children}</button>
  )
}
