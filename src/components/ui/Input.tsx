import React, { type InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

 interface inputProps extends InputHTMLAttributes<HTMLInputElement>{
    type:'text'|'email'|'password'
    className?: string
   

 }

export default function Input 
({type,className,...props}:inputProps) {
  return (
  <input type={type} {...props} className={cn('!p-2 bg-form rounded-lg',className)} />
  )
}
