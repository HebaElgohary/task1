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
    <Card className='w-full md:w-1/3 !mt-11' title='title' description='this is description' image={img2}>
      <Button size='sm'> more</Button>
      <Button size='sm' variant='danger'> second</Button>
    </Card>
     </section>
    </>
  )
}
