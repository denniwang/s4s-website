import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('')

  const team = [
    {
      img: '/zitong.png',
      name: 'Andrew Chen',
      school: "UW Seattle '27",
      desc: 'Andrew is a top student at UW, studying Applied Mathematics, he is passionate about mentoring the next generation and learning new things'
    },
    {
      img: '/keyon.png',
      name: 'Keyon Jazayeri',
      school: "UC Irvine '27",
      desc: 'Keyon is a stellar student at UCI, majoring in Computer Science. He loves to work on startups and practices jiu jitsu in his free time'
    },

    {
      img: '/verma.png',
      name: 'Darsh Verma',
      school: "UC Los Angeles '27",
      desc: "I will ruin the couch with my claws i bet my nine lives on you-oooo-ooo-hooo so hiding behind the couch until lured out by a feathery toy, tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad but scratch my"
    },

    {
      img: '/wang.png',
      name: 'Dennis Wang',
      school: "Northeastern University '27",
      desc: 'Dennis is a CS + Business major at NEU, he loves to play tennis and participate in hackathons. He aspires to be retired by 30'
    }
  ]

  function TableBlock({ check, text }: { check: boolean; text: string }) {
    return (
      <div className='flex flex-row gap-4 text-gray-500 dark:text-gray-400  items-center '>
        {check ? (
          <svg
            className='h-4 w-4 text-green-500'
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
            className='h-4 w-4 text-red-500'
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
        <p className='md:text-sm text-lg'>
        {text}
</p>
      </div>
    )
  }
  function Table() {
    return (
      <div id='detailed-pricing' className='w-full overflow-x-auto '>
        <div className='min-w-max overflow-hidden'>
          <div className='grid grid-cols-2 gap-x-16 border-b border-t border-gray-200 bg-background-secondary p-4 text-sm md:text-xl font-medium text-gray-900 dark:border-gray-700 dark:text-white'>
            <div className='flex items-center'>Students 4 Students</div>
            <div>Big College Consulting Companies</div>
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm text-gray-700 dark:border-gray-700'>
            <TableBlock check={true} text='Affordable Prices' />
            <TableBlock check={false} text='$$$ Unreasonable Prices' />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm text-gray-700 dark:border-gray-700'>
            <TableBlock
              check={true}
              text='Up to date with the admissions process'
            />
            <TableBlock
              check={false}
              text='Ivy League Graduate... from decades ago'
            />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm text-gray-700 dark:border-gray-700'>
            <TableBlock
              check={true}
              text='Feels like talking to an older sibling'
            />
            <TableBlock check={false} text='Impersonal, strictly business' />
          </div>
          <div className='grid grid-cols-2 gap-x-16 border-b border-gray-200 px-4 py-5 text-sm text-gray-700 dark:border-gray-700'>
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
      <div className='flex w-1/4 flex-col items-center gap-5 '>
        <div className='shadow-md'>
          <Image src={img} width={500} height={200} alt={name} className='shadow-md'/>
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

  return (
    <main className='flex flex-row justify-center'>
      <div className='flex w-3/5 flex-col justify-center gap-8'>
        <h1 className='mt-10 text-center text-5xl font-bold'>About S4S</h1>

        <h2 className='text-4xl'>101 - Who Are We?</h2>
        <div className='flex flex-col justify-center gap-5 md:flex-row'>
          <div className='flex flex-col justify-center md:w-1/2'>
            <p className=' md:text-xl'>
              Students4Students was founded by four college students with the
              goal of helping high schoolers get into their dream colleges. We
              understand that college admissions are tough—we&quot;ve
              experienced it ourselves—which is why we&quot;re committed to
              helping applicants perfect the process. There are many different
              factors that can impact your admission, and we&quot;re here to
              help you ace them all.
            </p>
          </div>
          <div className='md:w-1/3'>
            <Image
              src='/zitong.png'
              width={500}
              height={200}
              alt='who are we image'
            />
          </div>
        </div>

        <div className='flex flex-row justify-center'>
          <span className='text-bold text-6xl '>&ldquo;</span>
          <p className='pt-4'>
            Sit by the fire. Tuxedo cats always looking dapper meowwww
          </p>
          <span className='text-bold text-6xl'>&quot;</span>
        </div>

        <h2 className='text-4xl'>102 - What makes us... different?</h2>
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
              At Students4Students, we&quot;re more than just college
              counselors. Our mission is to help students discover their unique
              passions and use them to craft their best possible applications.
              We take a comprehensive approach, guiding students through every
              aspect of the college admissions process—clubs, extracurriculars,
              essays, academics, and anything else that might impact their
              journey. Our mentors have recently navigated this process
              themselves and are determined to share their experiences and
              insights. When join join we guarantee that you&quot;ll feel
              confident in your path.
            </p>
          </div>
        </div>
        <h2 className='text-center text-6xl font-bold'>TL;DR</h2>
        <Table />

        <h2 className='text-4xl'>
          103 - Ok but... who are we <span className='underline'>REALLY</span>?
        </h2>
        <div className='flex flex-row justify-center gap-5'>
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
