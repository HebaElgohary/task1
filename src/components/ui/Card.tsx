import React, { type ReactNode } from 'react'

interface CardProps{
    title:string
    description:string
    image?:string
    children?:ReactNode
}
export default function Card({title,description,image,children}:CardProps) {
  return (
    <div className='!p-4 bg-background-secondary rounded-2xl shadow-lg flex gap-11 justify-between'>
<div className='flex flex-col gap-2'>
    <p className='text-2xl font-semibold text-primary'>{title}</p>
    <p className='text-text-secondary text-md'>{description}</p>
    {children}
</div>
<img src={image} alt="card image" />


    </div>
  )
}
