import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('')

  const team = [
    {
      img: '/andrew.jpg',
      name: 'Andrew Chen',
      school: "UW Seattle '27",
      desc: 'Andrew is a top student at UW, studying Applied Mathematics, he is passionate about mentoring the next generation and learning new things.'
    },
    {
      img: '/keyon.jpg',
      name: 'Keyon Jazayeri',
      school: "UC Irvine '27",
      desc: 'Keyon is a stellar student at UCI, majoring in Computer Science. He loves to work on startups and practices jiu jitsu in his free time.'
    },

    {
      img: '/darsh.jpg',
      name: 'Darsh Verma',
      school: "UCLA '27",
      desc: 'Darsh is a math and CS major at UCLA, and loves working out, playing cricket, and cooking in his free time. He is on track to solving the Riemann Hypothesis by the end of his career.'
    },

    {
      img: '/dennis.jpg',
      name: 'Dennis Wang',
      school: "Northeastern University '27",
      desc: 'Dennis is a CS + Business major at NEU, he loves to play tennis and participate in hackathons. He aspires to be retired by 30.'
    },
    {
      img: '/kashish.jpg',
      name: 'Kashish Sachdeva',
      school: "UCLA '27",
      desc: 'Kashish is a Pre-Law student at UCLA, she is an expert in the college admissions process and loves to help students express themselves through writing.'
    }
  ]
  function PersonCard({
    img,
    name,
    college,
    children
  }: {
    img: string
    name: string
    college: string
    children: React.ReactNode
  }) {
    return (
      <div className='space-between flex w-4/5 flex-col items-center gap-5 lg:w-1/5 '>
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
      <div className='flex w-full w-full flex-row items-center gap-4  px-3 text-background-card dark:text-gray-400 md:w-3/4 '>
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
        <p className='w-full text-lg md:text-xl lg:text-2xl'>{text}</p>
      </div>
    )
  }
  function Table() {
    return (
      <div className='text-text flex w-full flex-row items-center justify-center'>
        <div className='w-full overflow-hidden  rounded-md shadow-lg lg:w-3/4'>
          <div className='grid grid-cols-2 gap-x-16 border-b border-t border-gray-200 bg-background-secondary p-4 px-6 text-xl font-medium text-primary dark:border-gray-700 dark:text-white md:text-2xl '>
            <div className='flex items-center'>Students 4 Students</div>
            <div>Big College Consulting Companies</div>
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm  dark:border-gray-700'>
            <TableBlock check={true} text='Affordable Prices' />
            <TableBlock check={false} text='$$$ Unreasonable Prices' />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm  dark:border-gray-700'>
            <TableBlock
              check={true}
              text='Up to date with the admissions process'
            />
            <TableBlock
              check={false}
              text='Ivy League Graduate... from decades ago'
            />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm dark:border-gray-700'>
            <TableBlock
              check={true}
              text='Feels like talking to an older sibling'
            />
            <TableBlock check={false} text='Impersonal, strictly business' />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm dark:border-gray-700'>
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

  return (
    <main className='flex flex-row justify-center'>
      <div className='flex w-11/12 flex-col justify-center gap-8 md:w-4/5'>
        <h1 className='mt-10 text-center text-5xl font-bold'>About S4S</h1>

        <h2 className='text-4xl font-bold'>101 - Who Are We?</h2>
        <div className='flex flex-col justify-center gap-5 md:flex-row'>
          <div className='flex flex-col justify-center md:w-1/2'>
            <p className=' md:text-xl'>
              Students4Students was founded by five college students with the
              goal of helping high schoolers get into their dream colleges. We
              understand that college admissions are tough—we&apos;ve
              experienced it ourselves—which is why we&apos;re committed to
              helping applicants perfect the process. There are many different
              factors that can impact your admission, and we&apos;re here to
              help you ace them all.
            </p>
          </div>
          <div className='md:w-1/2'>
            <Image
              src='/whoarewe.jpg'
              width={1000}
              height={400}
              alt='who are we image'
            />
          </div>
        </div>

        <div className='flex flex-row justify-center'>
          <span className='text-bold text-6xl '>&ldquo;</span>
          <p className='pt-4'>
            Our goal has always been to go that extra mile in helping our
            students present themselves at their very best, whether its through
            round-the-clock access to Bigs or
          </p>
          <span className='text-bold text-6xl'>&quot;</span>
        </div>

        <h2 className='text-4xl font-bold'>
          102 - What makes us... different?
        </h2>
        <div className='flex flex-col justify-center gap-5 md:flex-row'>
          <div className='md:w-1/3'>
            <Image
              src='/zitong.png'
              width={500}
              height={200}
              alt='who are we image'
            />
          </div>
          <div className='flex flex-col justify-center md:w-1/2'>
            <p className=' md:text-xl'>
              At Students4Students, we&apos;re more than just college
              counselors. Our mission is to help students discover their unique
              passions and use them to craft their best possible applications.
              We take a comprehensive approach, guiding students through every
              aspect of the college admissions process—clubs, extracurriculars,
              essays, academics, and anything else that might impact their
              journey. Our mentors have recently navigated this process
              themselves and are determined to share their experiences and
              insights. When join join we guarantee that you&apos;ll feel
              confident in your path.
            </p>
          </div>
        </div>
        <h2 className='text-center text-6xl font-bold'>TL;DR</h2>
        <Table />

        <h2 className='text-4xl font-bold'>
          103 - Ok but... who are we <span className='underline'>REALLY</span>?
        </h2>
        <div className='flex flex-col items-center justify-center justify-center gap-5 md:flex-row md:items-start'>
          {team.map(person => {
            return (
              <PersonCard
                img={person.img}
                name={person.name}
                college={person.school}
                key={person.name}
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
