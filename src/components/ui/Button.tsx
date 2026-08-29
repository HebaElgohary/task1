import React, { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
    className?:string
    onClick?:()=>void
    variant?:'primary'|'secondary'|'danger' |'none'
    disabled?:boolean,
    size?:'sm'|'md'|'lg'

    
}

export default function Button({children,className,disabled,onClick,variant='primary',size='md',...props}:ButtonProps) {
 const variants={
  primary:"bg-primary",
  secondary:"bg-secondary",
  danger:"bg-red-800",
  none:'bg-transparent'
 }

  const sizes={
  sm:" !px-4 !py-1",
  md:" !px-6 !py-2",
  lg:" !px-8 !py-3",
 }
 

 return (
<button disabled={disabled} onClick={onClick}  className={cn(`!px-3 !py-1 bg-primary rounded-lg text-text-main ${disabled?'opacity-30':''} `,variants[variant], sizes[size],className)} {...props} >{children}</button>
  )
}
