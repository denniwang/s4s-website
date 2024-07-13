import Link from 'next/link'
import { useTranslations } from 'next-intl'
export const Footer = () => {
  const t = useTranslations('')
  return (
    <div className='footer my-10 flex flex-row justify-center'>
      <div className='my-5 flex w-3/4 flex-col justify-around lg:flex-row'>
        <div className='flex flex-col'>
          <h2 className='text-2xl'>S4S</h2>
          <p className='text-sm'>© 2021 Students 4 Students</p>
          <p className='text-sm'>+1 949 864 9615</p>
          <p className='text-sm'>studs4students@gmail.com</p>
        </div>
        <div className='flex flex-col'>
          <Link href={t('programs_link')}>
            <h2 className='text-xl font-bold'>Programs</h2>
          </Link>

          <Link href={`${t('programs_link')}#BL`}>
            <p className='text-sm'>Big Little Program</p>
          </Link>

          <Link href={`${t('programs_link')}#PJ`}>
            <p className='text-sm'>Project Jam</p>
          </Link>
          <Link href={t('gallery_link')}>
            <h2 className='text-xl font-bold'>Gallery</h2>
          </Link>
          <Link href={t('about_link')}>
            <h2 className='text-xl font-bold'>About</h2>
          </Link>
        </div>
        <div className='flex flex-col'>
          <div className='flex-grow'></div>
          <p>&quot;College started yesterday, but you can start today&quot;</p>
        </div>
      </div>
    </div>
  )
}
