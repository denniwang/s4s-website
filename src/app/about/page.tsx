'use client'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function About() {
  const team = [
    {
      img: '/andrew.jpg',
      name: 'Andrew Chen',
      school: "UW Seattle '27",
      desc: "Andrew is a computer science TA and an applied math major at the University of Washington. Ever laughed or cringed at any of our TikToks? He's the guy to blame.",
      delay: 0
    },
    {
      img: '/keyon.jpg',
      name: 'Keyon Jazayeri',
      school: "UC Irvine '27",
      desc: 'Keyon is a stellar student at UCI, majoring in Computer Science. He loves to work on startups and practices jiu jitsu in his free time.',
      delay: 100
    },

    {
      img: '/darsh.jpg',
      name: 'Darsh Verma',
      school: "UCLA '27",
      desc: 'Darsh is a math and CS major at UCLA, and loves working out, playing cricket, and cooking in his free time. He is on track to solving the Riemann Hypothesis by the end of his career.',
      delay: 200
    },

    {
      img: '/dennis.jpg',
      name: 'Dennis Wang',
      school: "Northeastern University '27",
      desc: 'Dennis is a CS + Business major at NEU, he loves to play tennis and participate in hackathons. He aspires to be retired by 30.',
      delay: 300
    },
  ]
  function PersonCard({
    img,
    name,
    college,
    children,
    delay
  }: {
    img: string
    name: string
    college: string
    children: React.ReactNode
    delay: number
  }) {
    return (
      <div
        className='space-between animate-hidden flex w-4/5 flex-col items-center gap-5 lg:w-1/5 '
        data-aos='fade-right'
        data-aos-delay={delay}
      >
        <div className='shadow-md'>
          <Image
            src={img}
            width={500}
            height={200}
            alt={name}
            className='shadow-md'
          />
        </div>
        <div className='flex flex-col justify-center p-2'>
          <h2 className='text-2xl'>{name}</h2>
          <br></br>
          <p className='italic'>{college}</p>
          <br></br>
          <p className=''>{children}</p>
        </div>
      </div>
    )
  }

  function TableBlock({ check, text }: { check: boolean; text: string }) {
    return (
      <div className='flex w-full flex-row items-center gap-4 text-background-card dark:text-gray-400 md:w-3/4 md:px-3 '>
        {check ? (
          <svg
            className='h-6 w-6 text-green-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 16 12'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 5.917 5.724 10.5 15 1.5'
            />
          </svg>
        ) : (
          <svg
            className='h-6 w-6 text-red-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
        )}
        <p className='text-md w-full md:text-xl lg:text-2xl'>{text}</p>
      </div>
    )
  }
  function Table() {
    return (
      <div
        className='text-text flex w-full flex-row items-center justify-center'
        data-aos='flip-down'
        data-aos-delay='300'
      >
        <div className='w-full overflow-hidden  rounded-md shadow-lg xl:w-3/4'>
          <div className='grid grid-cols-2 gap-x-16 border-b border-t border-gray-200 bg-background-secondary p-4 px-6 text-lg font-medium text-primary dark:border-gray-700 dark:text-white md:text-2xl '>
            <div className='flex items-center'>Students 4 Students</div>
            <div>Big College Consulting Companies</div>
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-2 py-2 text-sm dark:border-gray-700 md:px-4  md:py-5'>
            <TableBlock check={true} text='Affordable Prices' />
            <TableBlock check={false} text='$$$ Difficult Prices' />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-2 py-2 text-sm dark:border-gray-700 md:px-4  md:py-5'>
            <TableBlock
              check={true}
              text='Up to date with the admissions process'
            />
            <TableBlock
              check={false}
              text='Ivy League Graduate... from decades ago'
            />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-2 py-2 text-sm dark:border-gray-700 md:px-4 md:py-5'>
            <TableBlock
              check={true}
              text='Feels like talking to an older sibling'
            />
            <TableBlock check={false} text='Impersonal, strictly business' />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-2 py-2 text-sm dark:border-gray-700 md:px-4 md:py-5'>
            <TableBlock
              check={true}
              text='SPECIFIC guidance with Project Jam'
            />
            <TableBlock check={false} text='Vague resources' />
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <main className='flex flex-row justify-center'>
      <div className='flex w-11/12 flex-col justify-center gap-8 lg:w-4/5'>
        <h1 className='mt-10 text-center text-5xl font-bold'>About S4S</h1>

        <h2 className='text-2xl font-bold md:text-4xl'>101 - Who Are We?</h2>
        <div className='flex flex-col justify-center gap-5 lg:flex-row'>
          <div className='flex flex-col items-center justify-center lg:w-2/5'>
            <p className=' md:text-xl'>
              <span>
                {' '}
                &bull; S4S was founded by FIVE{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-button  hover:underline '>
                  successful
                </span>{' '}
                university students!
              </span>
              <br></br>
              <br></br>
              <span>
                &bull; We want to help high schoolers get into their dream
                colleges by providing{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-button  hover:underline '>
                  relevant, up-to-date advice, specific resources, and diverse
                  networking.
                </span>
              </span>
              <br></br>
              <br></br>
              <span>
                &bull; College admissions are incredibly tough, especially for
                first-generation students, and we&apos;re here to help you{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-button hover:underline'>
                  ace
                </span>{' '}
                the process!
              </span>
            </p>
          </div>
          <div
            data-aos='zoom-in-left'
            className='h-min w-4/6 overflow-hidden rounded-lg shadow-[10px_10px_0px_0px_rgba(9,64,103,0.9)] lg:w-1/3'
          >
            <Image
              src='/whoarewe.jpg'
              width={1000}
              height={400}
              alt='who are we image'
            />
          </div>
        </div>

        <div className='flex flex-row justify-center py-10 '>
          <span className='text-bold text-6xl '>&ldquo;</span>
          <p className='pt-4 text-center text-3xl'>
            Our approach in one word? Comprehensive.
          </p>
          <span className='text-bold text-6xl'>&quot;</span>
        </div>

        <h2 className='text-2xl font-bold md:text-4xl'>
          102 - What makes us... different?
        </h2>
        <div className='flex flex-col items-center justify-center gap-8 lg:flex-row'>
          <div
            className=' relative mr-5 h-min w-5/6 overflow-hidden rounded-full shadow-[10px_10px_0px_0px_rgba(9,64,103,0.9)] md:w-1/2 lg:w-1/4 '
            data-aos='fade-right'
          >
            <Image
              src='/different.jpg'
              height={500}
              width={500}
              alt='who are we image'
            />
          </div>
          <div className='flex flex-col justify-center lg:w-1/2'>
            <p className=' md:text-xl'>
              <span>
                {' '}
                &bull; We&apos;re{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-button  hover:underline'>
                  more
                </span>{' '}
                than just college counselors!
              </span>
              <br></br>
              <br></br>
              <span>
                &bull; Our mission: help students discover their unique passions
                through their{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-button  hover:underline '>
                  local opportunities{' '}
                </span>
                and ours and use them to craft their best possible applications.
              </span>
              <br></br>
              <br></br>
              <span>
                &bull; Our mentors have recently navigated this process
                themselves and are determined to share their{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-button hover:underline '>
                  experiences
                </span>{' '}
                and{' '}
                <span className='transform font-bold transition-all duration-300 hover:text-button hover:underline'>
                  insights!
                </span>{' '}
              </span>
            </p>
          </div>
        </div>
        <h2 className='mt-10 text-center text-6xl font-bold'>TL;DR</h2>
        <Table />

        <h2 className='pt-10 text-4xl font-bold'>
          103 - Ok but... who are we <span className='underline'>REALLY</span>?
        </h2>
        <div className='flex flex-col items-center justify-center gap-5 md:flex-row md:items-start'>
          {team.map(person => {
            return (
              <PersonCard
                img={person.img}
                name={person.name}
                college={person.school}
                key={person.name}
                delay={person.delay}
              >
                {person.desc}
              </PersonCard>
            )
          })}
        </div>
      </div>
    </main>
  )
}
