import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')
  return (
    <div className='px-32 py-24 text-center text-2xl'>
      <h2 className='text-5xl font-bold'>{t('programs page')}</h2>
      

      </div>
  )
}
