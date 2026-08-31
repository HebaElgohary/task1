
import Title from '../components/ui/Title'
import { useTranslation } from 'react-i18next'
import Posts from '../features/posts/components/Posts'

export default function Home() {
  const {t}=useTranslation('translation')
  return (
    <>
    <section className='flex flex-col   !px-5 md:!px-11 lg:!px-22 min-h-[85vh] bg-background-secondary' >
      <Title className='!pt-11 text-center'>{t('home.title')}</Title>

<h2 className='text-xl text-secondary font-semibold !mt-11'> Posts </h2>
    <Posts />

    </section>
    
    </>
  )
}
