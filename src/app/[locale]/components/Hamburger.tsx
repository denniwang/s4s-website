import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

export default function Hamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const t = useTranslations("")

  return (
    <div className='flex items-center border-b border-gray-400 py-8 md:hidden'>
      <div className='ml-8'>
      <a href='/' >
        <Image
          alt='logo'
          width={100}
          height={100}
          src='/s4s-trans.png'
          className='w-10 md:w-20'
        />
      </a>

</div>
        <div className='flex-grow'></div>
      <nav >
        <section className='MOBILE-MENU flex lg:hidden'>
          <div
            className='HAMBURGER-ICON space-y-2 mr-8'
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
            <span className='block h-0.5 w-8 animate-pulse bg-gray-600'></span>
          </div>

          <div className={ + isNavOpen ? 'showMenuNav bg-background-secondary' : 'hideMenuNav' }>
            <div
              className='absolute right-0 top-0 px-8 py-8'
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className='h-8 w-8 text-gray-600'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>
            <ul className='flex min-h-[250px] flex-col items-center justify-between'>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href={t("about_link")}>About</a>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href={t("programs_link")}>Programs</a>
              </li>
              <li className='my-8 border-b border-gray-400 uppercase'>
                <a href={t("gallery_link")}>Gallery</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className='DESKTOP-MENU hidden space-x-8 mr-4 lg:flex'>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}
