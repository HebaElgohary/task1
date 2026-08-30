import React from 'react'
import Table from '../components/ui/Table'

export default function Contact() {
  return (
    <>
    <section className='flex justify-center items-center  min-h-[85vh] bg-background-secondary !px-2 md:' >

      <Table title='contact table' data={[['ahmed','20','tala'],['heba','26','tala']]} columns={['Name','Age ',' City']} striped />
    </section>

    </>
  )
}
