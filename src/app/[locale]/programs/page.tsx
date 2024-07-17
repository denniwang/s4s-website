'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { MdWorkHistory } from 'react-icons/md'
import { FaHandHoldingHand } from 'react-icons/fa6'
import { TbTargetArrow } from 'react-icons/tb'
import { FaCalendarAlt } from 'react-icons/fa'
import { AiOutlineRise } from 'react-icons/ai'
import { FaHeartCircleBolt } from 'react-icons/fa6'
import { FaSmileWink } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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
      <div className='h-[30vh] max-w-80 rounded-lg bg-background-secondary p-3 shadow-md text-center flex flex-col items-center gap-3 p-3' >
        {icon}
        {children}
        <p className='md:text-md' >{desc}</p>
      </div>
    )
  }
  const PJInfo1 = [
    {
      icon: <MdWorkHistory />,
      title: 'Your Projects',
      desc: 'Work on the project you want and get it done when you need it.'
    },
    {
      icon: <FaHandHoldingHand />,
      title: 'Mentor-led',
      desc: "Get 1-on-1 advice from a mentor who's matched according to your technical needs."
    },
    {
      icon: <TbTargetArrow />,
      title: 'Relevant Tracks',
      desc: 'Simplify the decision making process by following one of our predesigned technical tracks.'
    },
    {
      icon: <FaCalendarAlt />,
      title: '10 Sessions',
      desc: 'Feel confident at every stage of your project with our 10 sessions, spaced according to your needs. '
    },
    {
      icon: <AiOutlineRise />,
      title: 'Application Boost',
      desc: 'Colleges prefer applicants with tangible experience. Demonstrate your expertise with a fully fleshed out project. '
    },
    {
      icon: <FaHeartCircleBolt />,
      title: 'Discover Passion',
      desc: 'Dive into a topic your passionate about or find new ones as you work on your unique app.'
    },
    {
      icon: <FaSmileWink />,
      title: 'Have Fun!',
      desc: "Take the projects you've always wanted to build and make them a reality!"
    }
  ]

  return (
    <>
      <main className='flex flex-col items-center gap-8'>
        <section className='items-flex-start flex h-[92vh] flex-row'>
          <div className='flex h-full w-1/2 flex-col justify-between'>
            <div className='program-selector group h-1/2'>
              <a href='#PJ'>
                <div className='flex h-full w-full flex-col justify-center bg-emerald-100 p-5 transition-colors duration-300 group-hover:bg-emerald-300'>
                  <h1 className='program-wyr text-9xl font-semibold text-emerald-500 transition-all duration-300 group-hover:text-8xl group-hover:text-white'>
                    PROJECT JAM
                  </h1>
                  <h2 className='text-l pl-5 font-semibold text-emerald-500 transition-all duration-300 group-hover:text-xl group-hover:text-white'>
                    10 Week Guide Project Intensive
                  </h2>
                </div>
              </a>
            </div>
            <div className='program-selector group h-1/2'>
              <div className='flex h-full w-full flex-col justify-center bg-rose-100 p-5 transition-colors duration-300 group-hover:bg-rose-300'>
                <h1 className='program-wyr text-9xl font-semibold text-rose-500 duration-300 group-hover:text-8xl group-hover:text-white'>
                  WRITING WONDERS
                </h1>
                <h2 className='text-l pl-5 font-semibold text-rose-500 transition-all duration-300 group-hover:text-xl group-hover:text-white'>
                  Essay Editing Workshops
                </h2>
              </div>
            </div>
          </div>
          <div className='group h-full w-1/2'>
            <a href='#BL'>
              <div className='flex h-full w-full flex-col justify-center bg-sky-100 p-5 transition-colors duration-300 group-hover:bg-sky-300'>
                <h1 className='program-wyr text-9xl font-semibold text-sky-500 duration-300 group-hover:text-8xl group-hover:text-white'>
                  BIG LITTLE PROGRAM
                </h1>
                <h2 className='text-l pl-5 font-semibold text-sky-500 transition-all duration-300 group-hover:text-xl group-hover:text-white'>
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

          <div className='flex flex-row gap-5'>
            <div className='flex w-3/5 flex-col'>
              <p className='text-lg md:text-2xl'>
                Get personalized 1-on-1 mentorship for all your college needs.
                From clubs and extracurriculars to essays and personal projects,
                your Big will guide you every step of the way. Pave your path to
                college in the way that&apos;s best for YOU.
              </p>
              <p> Book a consultation below to get started!</p>
              <a href='https://calendly.com/studs4students/15-min-free-intro-session' target='_blank'>
                <button className='rounded-md bg-green-200 p-3'>
                  Sign Up Now
                </button>
              </a>
            </div>
            <div className='flex w-2/5 flex-col gap-5'>
              <div className='rounded-md bg-blue-200 p-3  text-xl shadow-md'>
                <h2 className='text-2xl font-bold'>Big</h2>
                <p className='italic'>noun - Informal</p>
                <p>
                  Your mentor. They&apos;ll be ready 24/7 to guide you down a
                  path suited uniquely to yourself.{' '}
                </p>
              </div>
              <div className='rounded-md bg-yellow-200 p-3 text-xl shadow-md'>
                <h2 className='text-2xl font-bold'>Little</h2>
                <p className='italic'>noun - Informal</p>
                <p>
                  The mentee - this will be you! Feels confident and secure in
                  their college pathway.
                </p>
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
            height={500}
            alt='big little program header'
          />
          <div className='flex flex-col flex-wrap items-center justify-center gap-3 md:flex-row '>
            <IconContext.Provider
              value={{ size: '4rem', className: 'global-class-name' }}
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
          <a href='https://calendly.com/studs4students/15-min-free-intro-session' target='_blank'>
            <button className='rounded-md bg-green-200 p-3'>Sign Up Now</button>
          </a>
        </section>
      </main>
      <style>{`
        div {
          box-sizing: border-box;
        }
        .footer {
          display: none;
        }
        .program-wyr {
          font-size: 9vw;
        }
      `}</style>
    </>
  )
}
