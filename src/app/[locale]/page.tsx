import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Link from 'next/link'
import Image from 'next/image'

export default function DashboardPage({}) {
  function Card({
    stat,
    children
  }: {
    stat: string
    children: React.ReactNode
  }) {
    return (
      <div className='min-h-80 w-1/4 min-w-80 rounded-md bg-background-secondary p-10 shadow-md'>
        <h2 className='m-4 text-8xl font-extrabold'>{stat}</h2>
        {children}
      </div>
    )
  }
  const t = useTranslations('')
  return (
    <div className='flex flex-col self-center text-center '>
      <section className='pb-12 flex w-full xl:h-svh md:h-1/2 flex-col items-center bg-background '>
        <div className='flex flex-col-reverse pl-15 align-bottom md:flex-row h-full w-full justify-between'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='max-w-2xl text-center text-6xl font-extrabold leading-tight md:text-6xl xl:text-7xl'>
              {t('College started yesterday.')}
              {'  '}
            </h1>
            <p className="mx-10">
              {t(
                'You can start today. Get help with the whole admissions process, from start to end.'
              )}
            </p>

            <Link href={t('about_link')}>
              <Button rounded size='large' variant='secondary'>
                {t('Learn_More')}
              </Button>
            </Link>
          </div>
          <div className='max-w-3xl flex flex-col justify-center'>
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
      <section className='flex flex-row justify-center '>
        <div className='flex flex-col items-center justify-center gap-12 lg:flex-row'>
          <Card stat='80%'>
            <p className='text-lg'>
              of high school grads <span className='underline'>WISH</span> they
              started applications earlier
            </p>
          </Card>
          <Card stat=''>
            <h2 className='m-4 text-8xl font-extrabold'>
              4<span className='text-7xl'>x</span>
            </h2>
            <p className='text-lg'>
              students&apos; chances of getting accepted into top schools.{' '}
              <span>GUARANTEED</span>{' '}
            </p>
          </Card>
          <Card stat=''>
            <h2 className='m-4 text-8xl font-extrabold'>
              9<span className='text-5xl'>/10</span>
            </h2>
            <p className='text-lg'>
              of all competitive applications have done academic research or
              personal projects
            </p>
          </Card>
        </div>
      </section>
      <p className='pt-10'>
        want to be part of the statistics?{' '}
        <Link href={t('programs_link')}>
          <span className='underline'>Join Now</span>
        </Link>
      </p>

      <section className='mt-14 flex flex-col self-center bg-background-secondary px-10 py-12 md:px-24'>
        <h2 className='pb-8 text-5xl font-extrabold'>Student Spotlight </h2>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <div className='max-w-96 flex-1'>
            <Image
              width={1000}
              height={600}
              className='rounded-md shadow-md'
              src='/zitong.png'
              alt='student_spotlight'
            />
          </div>
          <div className='flex-1'>
            <p className='text-lg lg:text-2xl '>
              &quot;The Big Little Program was incredible. Going into my second year
              of high school, I was confused and honestly super stressed about
              college because I had no idea what I should be doing. I knew I had
              the ambition to get into a good college, but I just didn&apos;t know
              where to start.
              <br></br>
              <br></br>
              <span className='hidden lg:block'>
                My Big, Dennis, gave me invaluable advice for the whole process.
                He helped me find clubs, extracurriculars, and competitions that
                strengthened my profile. I felt so much more confident and
                secure going into college, and am proud to go to Univeristy of
                Washington for Computer Science.&quot;
              </span>
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
