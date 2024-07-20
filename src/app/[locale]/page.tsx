import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Link from 'next/link'
import Image from 'next/image'
import Testimony from './components/Testimony'

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
    <div className='mt-10 flex flex-col self-center text-center md:mt-1'>
      <section className='flex w-full flex-col items-center bg-background pb-12  md:h-1/2 xl:h-svh '>
        <div className='pl-15 flex h-full w-full flex-col-reverse justify-between align-bottom md:flex-row'>
          <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='max-w-2xl text-center text-6xl font-extrabold leading-tight md:text-6xl xl:text-7xl'>
              {t('College started yesterday.')}
              {'  '}
            </h1>
            <p className='mx-10 text-lg'>
              {t(
                'You can start today. Get help with the whole admissions process, from start to finish.'
              )}
            </p>

            <Link href={t('about_link')}>
              <Button rounded size='large' variant='secondary'>
                {t('Learn_More')}
              </Button>
            </Link>
          </div>
          <div className='flex max-w-3xl flex-col justify-center'>
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
      <p className='py-10 '>
        want to be part of the statistics?{' '}
        <Link href={t('programs_link')}>
          <span className='underline'>Join Now</span>
        </Link>
      </p>

      <Testimony />
    </div>
  )
}
