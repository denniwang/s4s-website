'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto w-full items-center justify-between p-5 fixed top-0 bg-background'>
      <div className='flex flex-row '>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center align-center'>

            <Image alt="logo" width={100} height={100} src='/s4s-trans.png' />
          <strong className='mx-2 select-none'>Students 4 Students</strong>
        </div>
      </Link>
      <div className='flex-1'></div> 
      <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <Link lang={locale} href={`/gallery`}>
            {t('Gallery')}
          </Link>
          <Link lang={locale} href={`/programs`}>
            {t('Programs')}
          </Link>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
      </div>
</div>
    </div>
  )
}
