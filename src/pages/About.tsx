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
 <section className="min-h-[85vh] bg-background-secondary !px-5 !pt-6 md:!px-11 lg:!px-22">
  <div className="flex flex-col gap-3">
      <Title className='!pt-11 text-center'>{t('about.title')}</Title>

    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      <Card
        className="!mt-11"
        title="first card"
        description="This is first card description"
        image={img2}
      >
        <div className="flex gap-4">
          <Button size="sm">first btn</Button>
          <Button size="sm" variant="danger">
            second btn
          </Button>
        </div>
      </Card>

      <Card
        className="!mt-11"
        title="second card"
        description="This is second card description"
        // image={img2}
      >
        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, sapiente odit perspiciatis quisquam tenetur mollitia. Obcaecati numquam accusamus provident odio iusto non quod magni, debitis fugiat saepe aspernatur excepturi tempora!.
          </p>

          <Button size="md" variant="secondary">
            more
          </Button>
        </div>
      </Card>
    </div>
  </div>
</section>
    </>
  )
}
