'use client'
import { FC } from 'react'
import Image from 'next/image'
import Hamburger from './Hamburger'
import { routes } from '@/src/routes'
import Link from 'next/link'

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <>
      <Hamburger />
      <div className='sticky top-0 z-20 mx-auto hidden w-full items-center justify-between bg-gradient-to-t from-background to-background-secondary px-2 pb-1 pt-2 shadow-md shadow-background md:block'>
        <div className='flex flex-row'>
          <Link href='/'>
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
          <div className='md:text-md flex flex-row items-center gap-3 text-lg'>
            <nav className='mr-10 inline-flex gap-5'>
              {routes.map(item =>
                item.isExternal ? (
                  <a
                    key={item.label}
                    href={item.href.toString()}
                    target='_blank'
                  >
                    <span className='group'>
                      <span className='relative px-1 group-hover:text-white'>
                        <span className='z-10 hidden lg:relative lg:inline'>
                          *LIMITED TIME* {item.label}
                        </span>
                        <span className='relative z-10 lg:hidden'>
                          {item.label}
                        </span>
                        <span className='absolute bottom-0 left-0 z-0 h-0.5 w-full bg-text-secondary transition-all group-hover:h-full'></span>
                      </span>
                    </span>
                  </a>
                ) : (
                  <Link key={item.label} href={item.href as any}>
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
