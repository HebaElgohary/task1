import React from 'react'
import Table from '../components/ui/Table'
import Title from '../components/ui/Title'
import { useTranslation } from 'react-i18next'

export default function Contact() {
    const {t}=useTranslation('translation')
  

  return (
    <>
    <section className='flex flex-col gap-11  min-h-[85vh] bg-background-secondary !px-2 md:!px-11 lg:!px-22' >
      <Title className='!pt-11 text-center'>{t('contact.title')}</Title>

      <Table className='w-2/3 ' title='contact table' data={[['ahmed','20','tala'],['heba','26','tala']]} columns={['Name','Age ',' City']} striped />
    </section>

    </>
  )
}
