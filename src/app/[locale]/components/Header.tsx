'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import Hamburger from './Hamburger'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <>
      <Hamburger />
      <div className='sticky top-0 z-20 mx-auto hidden w-full items-center justify-between bg-gradient-to-t from-background to-background-secondary p-2 md:block'>
        <div className='flex flex-row '>
          <Link lang={locale} href='/'>
            <div className='align-center flex flex-row items-center'>
              <Image
                alt='logo'
                width={100}
                height={100}
                src='/s4s-trans.png'
                className='w-10 md:w-20'
              />
              <strong className='mx-2 select-none text-lg'>
                Students 4 Students
              </strong>
            </div>
          </Link>
          <div className='flex-1'></div>
          <div className='flex flex-row items-center gap-3'>
            <nav className='mr-10 inline-flex gap-5'>
              <a
                href='https://calendly.com/studs4students/15-min-free-intro-session'
                target='_blank'
              >
                <span className='group'>
                  <span className='relative  px-1 group-hover:text-white'>
                    <span className='z-10 lg:relative whitespace-nowrap'>
                      *LIMITED TIME* FREE CONSULTATION
                    </span>
                    <span className='absolute bottom-0 left-0 z-0 h-0.5 w-full bg-text-secondary transition-all group-hover:h-full '></span>
                  </span>
                </span>
              </a>

              <Link lang={locale} href={`/programs`}>
                {t('Programs')}
              </Link>
              <Link lang={locale} href={`/gallery`}>
                {t('Gallery')}
              </Link>
              <Link lang={locale} href={`/about`}>
                {t('About')}
              </Link>
            </nav>
            <ThemeSwitch />
            <LangSwitcher />
          </div>
        </div>
      </div>
    </>
  )
}
