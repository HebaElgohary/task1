import React, { type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface CardProps{
    title:string
    description:string
    image?:string
    children?:ReactNode
    className?:string
}
export default function Card({title,description,image,children,className=''}:CardProps) {
  return (
    <div className={cn('!p-4 bg-background-secondary rounded-2xl shadow-lg flex gap-11 justify-between',className)}>
<div className='flex flex-col gap-2'>
    <p className='text-2xl font-semibold text-primary'>{title}</p>
    <p className='text-text-secondary text-md'>{description}</p>
    {children}
</div>
{Image&&<img src={image} alt="card image" />}


    </div>
  )
}
