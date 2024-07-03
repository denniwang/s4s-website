import { useTranslations } from 'next-intl'
import Button from './components/Button'
import ProjectCarousel from './components/ProjectCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Link from 'next/link'
import Image from 'next/image'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function DashboardPage({ lang }) {
  function Card({ stat, children }) {
    return (
      <div className='min-h-80 w-1/4 min-w-80 rounded-md bg-background-secondary p-10 shadow-md'>
        <h2 className='m-4 text-8xl font-extrabold'>{stat}</h2>
        {children}
      </div>
    )
  }
  const t = useTranslations('')
  return (
    <div className='mt-8 flex flex-col self-center text-center'>
      
      <section className='flex w-full flex-col items-center justify-center py-0 md:py-24 my-12'>
        <div className='flex flex-col-reverse md:flex-row align-bottom px-10'>
          <div className='flex flex-col items-center gap-5'>
            <h1 className='max-w-2xl text-center text-4xl font-extrabold md:text-6xl leading-tight xl:text-8xl'>
              {t('splash_catchphrase')}{' '}
            </h1>
            <p>{t('splash_subtitle')}</p>

            <Link href={t('about_link')}>
              <Button rounded size='large' variant='secondary'>
                {t('Learn_More')}
              </Button>
            </Link>
          </div>
          <div className='w-1/6'></div>
          <div>
            <Image
              alt='splash_image'
              width={700}
              height={700}
              className='rounded-md shadow-md'
              src='/zitong.png'
            />
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center '>
        <div className='flex flex-col gap-12 lg:flex-row justify-center items-center'>
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
        <p className='pt-10'>want to be part of the statistics? <Link href={t("programs_link")}><span className='underline'>Join Now</span></Link></p>

      <section className='mt-14 flex flex-col self-center bg-background-secondary md:px-24 px-10 py-12'>
        <h2 className='pb-8 text-5xl font-extrabold'>Student Spotlight </h2>
        <div className='flex flex-col md:flex-row justify-center gap-8 items-center'>
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
              Ultricies. Nonummy fusce torquent tristique pulvinar, dictum
              penatibus malesuada amet taciti. Sit aliquam senectus ipsum
              suscipit fusce sit porttitor curabitur tempor mi rutrum sed. Quam
              nonummy. Sapien potenti in elit lacinia congue sed taciti
              elementum Ante nascetur pharetra sapien. Facilisi pede fusce
              nostra dui.
              <br></br>
              <br></br>
              <span className='hidden lg:block'>
              Congue sed lobortis montes elit conubia augue semper hendrerit
              libero netus neque primis magnis Conubia montes odio rutrum et
              netus posuere tellus parturient accumsan litora arcu ridiculus
              eros cras. Tempor morbi cras donec bibendum integer class
              ridiculus mi interdum a. Inceptos, fermentum, malesuada, ante
              vulputate porta. Ut purus primis integer erat at viverra vivamus
              ad. Bibendum.
</span>
            </p>
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
