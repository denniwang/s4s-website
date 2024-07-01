import { useTranslations } from 'next-intl'
import Button from './components/Button'
import ProjectCarousel from './components/ProjectCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function DashboardPage() {
  function Card({ stat, children }) {
    return (
      <div className='min-h-80 max-w-80 rounded-md bg-gray-200 p-10 shadow-md'>
        <h2 className='m-4 text-8xl font-extrabold'>{stat}</h2>
        {children}
      </div>
    )
  }
  const t = useTranslations('')
  return (
    <div className='flex flex-col self-center'>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('An')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('Booster')}
          </span>
          <br />
          {t('to_Your_NextJS_Apps')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t('hello world')}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Use_Template')}
            </Button>
          </a>
          <a href='/about'>
            <Button rounded size='large' variant='secondary'>
              {t('Learn_More')}
            </Button>
          </a>
        </div>
      </section>
      <section className='flex flex-row justify-center'>
        <div className='flex flex-row gap-9'>
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

      <section className='flex flex-col self-center mt-14 bg-gray-50 px-24 py-12'>
        <h2 className='font-extrabold text-3xl pb-5'>Student Spotlight </h2>
        <div className='flex flex-row justify-center gap-8'>
          <div className='min-w-56'>
            <img className='rounded-md shadow-md' src='/zitong.png' />
          </div>
          <div className='grow'>
            <p> good job andwer we are so proud of you</p>
          </div>
        </div>
      </section>

      <section>
        <ProjectCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Add_components_without_sending_additional_client_side_JavaScript_Built_on_the_latest_React_features'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Versatile')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Automatic_Image_Font_and_Script_Optimizations_for_improved_UX_and_Core_Web_Vitals'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Performant')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'A_rich_incredibly_adoptable_template_that_scales_between_a_small_showcase_website_and_a_full_size_app'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
