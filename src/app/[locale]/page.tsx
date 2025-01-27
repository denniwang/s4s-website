'use client'
import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Link from 'next/link'
import Image from 'next/image'
import Spotlight from './components/Spotlight'
import Modal from './components/Modal'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

export default function DashboardPage({}) {
  function Card({
    stat,
    children,
    index
  }: {
    stat: string
    children: React.ReactNode
    index: number
  }) {
    return (
      <div
        className={`min-h-80 w-1/4 min-w-80 transform rounded-md bg-background-card p-10 text-background shadow-md transition duration-500 hover:scale-110 `}
        data-aos='fade-up'
        data-aos-delay={index * 100}
      >
        <h2 className='m-4 text-8xl font-extrabold '>{stat}</h2>
        {children}
      </div>
    )
  }
  const [showModal, setShowModal] = React.useState(false)
  useEffect(() => {
    AOS.init({ duration: 1000 })
    //console.log('AOS init')
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('modal') != 'false') {
      setShowModal(true)
      //console.log('stopped showing modal')
    }
    //console.log('finished checking modal')
  }, [])
  return (
    <main className='mt-10 flex flex-col self-center overflow-hidden text-center md:mt-1'>
      <section className='flex w-full flex-col items-center bg-background pb-12  md:h-1/2 '>
        <div className='pl-15 flex h-full w-full flex-col-reverse items-center justify-between align-bottom lg:flex-row'>
          <div className='flex flex-col items-center gap-5 lg:w-1/2'>
            <div className='h-[5rem] overflow-hidden'>
              <motion.h1
                initial={{ y: '150%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                className='max-w-2xl text-center text-6xl font-extrabold leading-tight md:text-6xl xl:text-7xl '
              >
                Real college help.
              </motion.h1>
            </div>

            <div className=' mt-[-1rem] h-[5rem] overflow-hidden'>
              <motion.h1
                initial={{ y: '170%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.1
                }}
                className='max-w-2xl text-center text-6xl font-extrabold leading-tight md:text-6xl xl:text-7xl '
              >
                <span className='underline'>From</span> students,{' '}
                <span className='underline'>for</span>.{' '}
              </motion.h1>
            </div>

            <div className=' mt-[-1rem] h-[5rem] overflow-hidden'>
              <motion.h1
                initial={{ y: '180%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.2
                }}
                className='max-w-2xl text-center text-6xl font-extrabold leading-tight md:text-6xl xl:text-7xl '
              >
                students
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className='flex flex-col items-center justify-center'
            >
              <p className='mx-10 w-3/4 pb-5 text-3xl'>
                Get help with the whole admissions process, from start to
                finish.
              </p>

              <Link href='/en/about'>
                <Button
                  rounded
                  size='large'
                  className='duration-400 transform border transition-all hover:scale-110 hover:shadow-lg '
                >
                  <p className='text-3xl'>Learn More</p>
                </Button>
              </Link>
            </motion.div>
          </div>
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <div className='w-full flex-col lg:w-6/12 '>
            <Image
              alt='splash_image'
              width={2049}
              height={1000}
              className='w-full'
              src='/main-page-graphic.png'
            />
          </div>
        </div>
      </section>
      <section className='mt-24 flex flex-row justify-center'>
        <div className='flex flex-col items-center justify-center gap-12 lg:flex-row'>
          <Card stat='80%' index={1}>
            <p className='text-2xl'>
              of high school grads <span className='underline'>WISH</span> they
              started applications earlier
            </p>
          </Card>
          <Card stat='' index={2}>
            <h2 className='m-4 text-8xl font-extrabold'>
              4<span className='text-7xl'>x</span>
            </h2>
            <p className='text-2xl'>
              students&apos; chances of getting accepted into top schools.{' '}
              <span>GUARANTEED</span>{' '}
            </p>
          </Card>
          <Card stat='' index={3}>
            <h2 className='m-4 text-8xl font-extrabold'>
              9<span className='text-5xl'>/10</span>
            </h2>
            <p className='text-2xl'>
              of all competitive applications have done academic research or
              personal projects
            </p>
          </Card>
        </div>
      </section>
      <div className='flex w-full flex-row justify-center'>
        <p className='relative m-6 w-max py-10 text-center text-3xl '>
          Want to be part of the statistics?{' '}
        </p>
      </div>
      <a
        href='https://calendly.com/studs4students/15-min-free-intro-session'
        target='_blank'
        className='mt-[-30px] inline'
      >
        <span className='group'>
          <span className='relative  px-1 group-hover:text-white'>
            <span className='relative z-10'>Book a free consultation!</span>
            <span className='absolute bottom-0 left-0 z-0 h-0.5 w-full bg-primary transition-all group-hover:h-full '></span>
          </span>
        </span>
      </a>
      <div data-aos='flip-up'>
        <Spotlight />
      </div>
    </main>
  )
}
