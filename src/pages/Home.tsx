import React from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { img2, img3 } from '../assets/images/images'

export default function Home() {
  return (
    <>
    <section className='flex justify-center items-center min-h-[85vh] bg-background-secondary' >Home page
    <Card title='title' description='this is description' image={img3}>
      <Button size='sm'> more</Button>
    </Card>

    </section>
    
    </>
  )
}
