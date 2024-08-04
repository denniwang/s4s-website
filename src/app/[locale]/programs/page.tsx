'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { MdWorkHistory } from 'react-icons/md'
import { FaHandHoldingHand } from 'react-icons/fa6'
import { PiTargetBold } from 'react-icons/pi'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaHeartCircleBolt } from 'react-icons/fa6'
import { FaSmileWink } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Button from '../components/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function About() {
  const t = useTranslations('')

  function PJCard({
    desc,
    children,
    icon
  }: {
    desc: String
    children: React.ReactNode
    icon: React.ReactNode
  }) {
    return (
      <div
        data-aos='zoom-in-up'
        className='flex h-[30vh] max-w-80 flex-col items-center gap-3 rounded-lg bg-background-secondary  p-3 text-center shadow-md'
      >
        {icon}
        {children}
        <p className='md:text-md'>{desc}</p>
      </div>
    )
  }
  const PJInfo1 = [
    {
      icon: <MdWorkHistory />,
      title: 'Your Projects',
      desc: "Work on a tailored project you're interested in and get it done when you need it."
    },
    {
      icon: <FaHandHoldingHand />,
      title: 'Mentor-led',
      desc: "Get 1-on-1 advice from a mentor who's matched according to your technical needs."
    },
    {
      icon: <PiTargetBold />,
      title: 'Relevant Tracks',
      desc: 'Simplify the design process by following one of our predesigned technical tracks.'
    },
    {
      icon: <FaCalendarAlt />,
      title: '10 Sessions',
      desc: 'Feel confident at every stage of your project with 10 sessions spaced according to your needs. '
    },
    {
      icon: <FaRegLightbulb />,
      title: 'Application Boost',
      desc: 'Colleges look for tangible experience. Demonstrate expertise with a completed project. '
    },
    {
      icon: <FaHeartCircleBolt />,
      title: 'Discover Passion',
      desc: 'Dive into a topic your passionate about or find new ones as you work on your unique app.'
    },
    {
      icon: <FaSmileWink />,
      title: 'Have Fun!',
      desc: "Take the projects you've always wanted to build and make them a reality, along with a mentor!"
    }
  ]

  function WWPoint({ title, desc }: { title: string; desc: string }) {
    return (
      <div className='flex flex-col gap-2 '>
        <h2 className='text-xl font-bold'> &bull; {title}</h2>
        <p className='text-lg'>{desc}</p>
      </div>
    )
  }
  const WWInfo = [
    {
      title: 'Lifetime Writing Skills',
      desc: 'Our expert tutors provide personalized writing workshops and feedback sessions, ensuring each student hones their writing skills to perfection.'
    },
    {
      title: 'Craft a unique narrative',
      desc: 'We work closely with students to uncover their unique stories and experiences, guiding them to craft narratives that resonate with admissions officers.'
    },
    {
      title: 'Boost Creativity',
      desc: 'Our programs include creative thinking exercises and workshops that inspire students to explore new ideas and approaches, ensuring their applications are both imaginative and impactful.'
    }
  ]

  function ConsultationButton() {
    return (
      <a
        href='https://calendly.com/studs4students/15-min-free-intro-session'
        target='_blank'
      >
        <Button
          rounded
          size='large'
          className='duration-400 transform border transition-all hover:scale-110 hover:shadow-lg'
        >
          Book consultation now!
        </Button>
      </a>
    )
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
      <main className='flex w-full flex-col items-center gap-8'>
        <section className='items-flex-start flex h-[92vh] w-full flex-col md:flex-row'>
          <div className='flex h-full w-full flex-col justify-between md:w-1/2'>
            <div className='program-selector group h-1/2'>
              <a href='#PJ'>
                <div className='flex h-full w-full flex-col justify-center bg-emerald-100 p-5 transition-colors duration-300 group-hover:bg-emerald-300'>
                  <h1 className='program-wyr text-9xl font-semibold text-emerald-500 transition-all duration-300 group-hover:text-8xl group-hover:text-white'>
                    PROJECT JAM
                  </h1>
                  <h2 className='pl-5 text-2xl font-semibold text-emerald-500 transition-all duration-300 group-hover:text-xl group-hover:text-white'>
                    10 Week Guide Project Intensive
                  </h2>
                </div>
              </a>
            </div>
            <div className='program-selector group h-1/2'>
              <a href='#WW'>
                <div className='flex h-full w-full flex-col justify-center bg-rose-100 p-5 transition-colors duration-300 group-hover:bg-rose-300'>
                  <h1 className='program-wyr text-9xl font-semibold text-rose-500 duration-300 group-hover:text-8xl group-hover:text-white'>
                    WRITING WONDERS
                  </h1>
                  <h2 className='pl-5 text-2xl font-semibold text-rose-500 transition-all duration-300 group-hover:text-xl group-hover:text-white'>
                    Essay Editing Workshops
                  </h2>
                </div>
              </a>
            </div>
          </div>
          <div className='group h-full w-full md:w-1/2'>
            <a href='#BL'>
              <div className='flex h-full w-full flex-col justify-center bg-sky-100 p-5 transition-colors duration-300 group-hover:bg-sky-300'>
                <h1 className='program-wyr text-9xl font-semibold text-sky-500 duration-300 group-hover:text-8xl group-hover:text-white'>
                  BIG LITTLE PROGRAM
                </h1>
                <h2 className='pl-5 text-2xl font-semibold text-sky-500 transition-all duration-300 group-hover:text-xl group-hover:text-white'>
                  Our Classic Mentorship Program
                </h2>
              </div>
            </a>
          </div>
        </section>

        <section
          id='BL'
          className='flex w-5/6 flex-col items-center gap-10 pt-24'
        >
          <Image
            src='/blp-header.png'
            width={600}
            height={500}
            alt='big little program header'
          />

          <div className='flex gap-12 space-x-24'>
            <div className='flex w-3/5 flex-col gap-3'>
              <p className='text-center text-lg leading-loose md:text-3xl'>
                Get personalized 1-on-1 mentorship for all your college needs.
                From{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-4xl  hover:text-button hover:underline'>
                  clubs
                </span>{' '}
                and{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-4xl  hover:text-button hover:underline'>
                  extracurriculars
                </span>{' '}
                to{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-4xl  hover:text-button hover:underline'>
                  essays
                </span>{' '}
                and{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-4xl  hover:text-button hover:underline'>
                  personal projects
                </span>{' '}
                , your Big will guide you every step of the way. Pave your path
                to college in the way that&apos;s best for YOU.
              </p>
              <div className='flex w-auto flex-col items-center justify-center gap-5 text-xl'>
                <p> Book a consultation below to get started!</p>
                <ConsultationButton />
              </div>
            </div>
            <div className='flex w-2/5 flex-col gap-5'>
              <div data-aos='flip-left'>
                <div className='transform rounded-md bg-stone-100 p-3 text-xl shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg dark:bg-background-secondary'>
                  <h2 className='inline text-3xl font-bold'>Big</h2>
                  <p className='inline text-lg'> &bull; /big/</p>
                  <p className='italic'>noun - Informal</p>
                  <p>
                    Your mentor. They&apos;ll be ready 24/7 to guide you down a
                    path suited uniquely to yourself.{' '}
                  </p>
                </div>
              </div>
              <div data-aos='flip-left'>
                <div className='transform rounded-md bg-stone-100 p-3 text-xl shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg dark:bg-background-secondary'>
                  <h2 className='inline text-3xl font-bold'>Little</h2>
                  <p className='inline text-lg'> &bull; /&apos;lid(ə)l/</p>
                  <p className='italic'>noun - Informal</p>
                  <p>
                    The mentee - this will be you! Feels confident and secure in
                    their college pathway.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='h-[50vh] w-[75vw]'>
            <Image
              alt='splash_image'
              width={1500}
              height={1000}
              className='w-full'
              src='/blp-decor.png'
            />
          </div>
        </section>
        <section
          id='PJ'
          className='mb-20 flex flex-col items-center gap-4 pt-24 text-2xl'
        >
          <Image
            src='/pj-header.png'
            width={600}
            height={600}
            alt='big little program header'
          />
          <div className='mt-5 flex flex-col flex-wrap items-center justify-center gap-3 md:flex-row lg:w-4/5 '>
            <IconContext.Provider
              value={{ size: '70px', className: 'global-class-name' }}
            >
              {PJInfo1.map(info => {
                return (
                  <PJCard desc={info.desc} key={info.title} icon={info.icon}>
                    <h2 className='font-bold'>{info.title}</h2>
                  </PJCard>
                )
              })}
            </IconContext.Provider>
          </div>
          <p>Get started today by booking a consultation below!</p>
          <ConsultationButton />
        </section>

        <section id='WW' className='mt-10 flex w-5/6 flex-col py-24'>
          <div className='w-min'>
            <h1 className=' w-96 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-gray-700 py-4 pr-9 text-7xl font-bold '>
              Writing Wonders
            </h1>
          </div>
          <div className=' flex w-5/6 flex-row gap-4'></div>
          <div className='flex flex-col gap-8 lg:flex-row'>
            <div className='mt-5 flex w-full flex-col gap-3 px-3 lg:w-1/2'>
              {WWInfo.map(info => {
                return (
                  <WWPoint
                    key={info.title}
                    title={info.title}
                    desc={info.desc}
                  />
                )
              })}

              <ConsultationButton />
            </div>

            <table
              className='w-full rounded-lg text-left text-lg text-gray-500 shadow-lg dark:text-gray-400 lg:w-1/2 rtl:text-right'
              data-aos='flip-right'
            >
              <thead className='bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='rounded-s-lg px-6 py-3 text-2xl'>
                    Writing Wonders Add-On&apos;s
                  </th>
                  <th scope='col' className='px-6 py-3'></th>
                  <th scope='col' className='rounded-e-lg px-6 py-3'></th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white dark:bg-gray-800'>
                  <th
                    scope='row'
                    className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                  >
                    Lifelong Writing Skills
                  </th>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'>FREE</td>
                </tr>
                <tr className='bg-white dark:bg-gray-800'>
                  <th
                    scope='row'
                    className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                  >
                    24/7 Writing Help
                  </th>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'>FREE</td>
                </tr>
                <tr className='border-b bg-white dark:bg-gray-800'>
                  <th
                    scope='row'
                    className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
                  >
                    Personalized and tailordered feedback
                  </th>
                  <td className='px-6 py-4'></td>
                  <td className='px-6 py-4'>FREE</td>
                </tr>
              </tbody>
              <tfoot className='dark:bg-background-secondary'>
                <tr className='font-semibold text-gray-900 dark:text-white'>
                  <th scope='row' className='px-6 py-3 text-base'>
                    Total
                  </th>
                  <td className='px-6 py-3'></td>
                  <td className='px-6 py-3 text-button'>FREE</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </main>
      <style>{`
        div {
          box-sizing: border-box;
        }
        .program-wyr {
          font-size: 9vw;
        }
      `}</style>
    </>
  )
}
