import React from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import {  img3 } from '../assets/images/images'
import Title from '../components/ui/Title'
import { useTranslation } from 'react-i18next'
import Posts from '../features/posts/components/Posts'

export default function Home() {
  const {t}=useTranslation('translation')
  return (
    <>
    <section className='flex flex-col   !px-5 md:!px-11 lg:!px-22 min-h-[85vh] bg-background-secondary' >
      <Title>{t('home.title')}</Title>
    <Card className='w-full md:w-1/3 !mt-11' title='title' description='this is description' image={img3}>
      <Button size='sm'> more</Button>
    </Card>
    <Posts />

    </section>
    
    </>
  )
}
