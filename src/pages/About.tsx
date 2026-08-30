import React from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../components/ui/Card'
import Title from '../components/ui/Title'
import Button from '../components/ui/Button'
import { img2 } from '../assets/images/images'

export default function About() {
    const {t}=useTranslation('translation')
  
  return (
    <>
    <section className='flex flex-col   !px-5 md:!px-11 lg:!px-22 min-h-[85vh] bg-background-secondary' >
         <Title>{t('about.title')}</Title>
    <Card className='w-full md:w-1/3 !mt-11' title='first card' description='This is first card description' image={img2}>
     <div className='flex gap-4'>
      <Button size='sm'> first btn</Button>
      <Button size='sm' variant='danger'> second btn</Button>
      </div>
    </Card>

      <Card className='w-full md:w-1/3 !mt-11' title='second card' description='This is second card description' image={img2}>
      <div className='flex flex-col gap-4'>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora vel iure, culpa quasi quod error saepe dolorum veritatis, consequatur voluptatum quas dolorem repellat rem, minus inventore eveniet facilis debitis.</p>
      <Button size='md' variant='secondary'> more</Button> 
      
      </div>

     
    </Card>
     </section>
    </>
  )
}
