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
    <div className={cn('!p-4 bg-background-secondary rounded-2xl shadow-xl flex flex-col  md:flex-row  gap-5 justify-between items-center',className)}>
<div className='flex flex-col gap-2 order-2 md:order-0 bg-background w-full md:w-2/3'>
    <p className='text-2xl font-semibold text-primary'>{title}</p>
    <p className='text-text-secondary text-md'>{description}</p>
    {children}
</div>
{image&&
<div className='w-full md:w-1/3 order-1'>
<img src={image} alt="card image" className='object-cover rounded-xl !h-full' />

</div>
}


    </div>
  )
}
