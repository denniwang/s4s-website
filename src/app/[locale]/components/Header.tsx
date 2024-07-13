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
    <div className='mx-auto w-full items-center justify-between p-2 sticky top-0 bg-background hidden md:block z-20'>
      <div className='flex flex-row '>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center align-center'>

            <Image alt="logo" width={100} height={100} src='/s4s-trans.png' className='w-10 md:w-20'/>
          <strong className='mx-2 select-none text-xs'>Students 4 Students</strong>
        </div>
      </Link>
      <div className='flex-1'></div>
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
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
