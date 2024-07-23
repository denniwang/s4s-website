import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'
import { FaTiktok } from 'react-icons/fa'
import { useTranslations } from 'next-intl'
export const Footer = () => {
  const t = useTranslations('')
  return (
    <div className='footer mt-10 flex flex-row justify-center bg-gradient-to-t from-background-secondary to-background pb-12'>
      <div className='my-5 flex w-3/4 flex-col justify-around lg:flex-row'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-3xl'>S4S</h2>
          <p className='text-md'>© 2024 Students 4 Students</p>
          <p className='text-md'>+1 949 864 9615</p>
          <p className='text-md'>studs4students@gmail.com</p>
          <div className='h-2'></div>
          <div className='flex flex-row gap-2'>
            <a
              href='https://www.instagram.com/students.4students/'
              target='_blank'
              className='hover:bg-b rounded-full bg-background-secondary p-2 transition-colors duration-150 hover:bg-blue-400'
            >
              <FaInstagram size='20px' />
            </a>
            <a
              href='https://linktr.ee/stu4stu'
              target='_blank'
              className='hover:bg-b rounded-full bg-background-secondary p-2 transition-colors duration-150 hover:bg-blue-400'
            >
              <SiLinktree size='20px' />
            </a>
            <a
              href='https://www.tiktok.com/@students.4students'
              target='_blank'
              className='hover:bg-b rounded-full bg-background-secondary p-2 transition-colors duration-150 hover:bg-blue-400'
            >
              <FaTiktok size='20px' />
            </a>
          </div>
        </div>
        <div className='flex flex-col'>
          <Link href={t('programs_link')}>
            <h2 className='text-2xl font-bold transition-colors duration-200 hover:text-button'>
              Programs
            </h2>
          </Link>

          <Link href={`${t('programs_link')}#BL`}>
            <p className='text-md transition-colors duration-200 hover:text-button'>
              Big Little Program
            </p>
          </Link>

          <Link href={`${t('programs_link')}#PJ`}>
            <p className='text-md transition-colors duration-200 hover:text-button'>
              Project Jam
            </p>
          </Link>
          <Link href={t('gallery_link')}>
            <h2 className='text-2xl font-bold transition-colors duration-200 hover:text-button'>
              Gallery
            </h2>
          </Link>
          <Link href={t('about_link')}>
            <h2 className='text-2xl font-bold transition-colors duration-200 hover:text-button'>
              About
            </h2>
          </Link>
        </div>
        <div className='flex flex-col'>
          <div className='flex-grow'></div>
          <p>&quot;Real college help. From students, for students&quot;</p>
        </div>
      </div>
    </div>
  )
}
