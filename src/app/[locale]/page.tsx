import { useTranslations } from 'next-intl'
import Button from './components/Button'
import ProjectCarousel from './components/ProjectCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Link from 'next/link'
import Image from 'next/image'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
export default function DashboardPage({lang}) {
  function Card({ stat, children }) {
    return (
      <div className='min-h-80 max-w-80 rounded-md bg-background-secondary p-10 shadow-md'>
        <h2 className='m-4 text-8xl font-extrabold'>{stat}</h2>
        {children}
      </div>
    )
  }
  const t = useTranslations('')
  return (
    <div className='flex flex-col self-center'>
      <section className='flex flex-col items-center justify-center py-24'>
        <div className='flex flex-row'>
          <div className='flex flex-col items-center gap-5'>
            <h1 className='max-w-xl text-center text-7xl font-extrabold leading-tight'>
              {t('corny \n catchphrase')}{' '}
            </h1>
            <p>{t('hello')}</p>

<Link href={t("about_link")}> 
              <Button rounded size='large' variant='secondary'>
                {t('Learn_More')}
              </Button>
</Link>
          </div>
          <div>
            <Image width={400} height={400} className='rounded-md shadow-md' src='/zitong.png' />
          </div>
        </div>
      </section>
      <section className='flex flex-row justify-center '>
        <div className='flex flex-col gap-12 lg:flex-row'>
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

      <section className='mt-14 flex flex-col self-center bg-background-secondary px-24 py-12'>
        <h2 className='pb-5 text-3xl font-extrabold'>Student Spotlight </h2>
        <div className='flex flex-row justify-center gap-8'>
          <div className='min-w-56'>
            <Image width={500} height={500} className='rounded-md shadow-md' src='/zitong.png' />
          </div>
          <div className='grow'>
            <p className='text-xl'>
              Ultricies. Nonummy fusce torquent tristique pulvinar, dictum
              penatibus malesuada amet taciti. Sit aliquam senectus ipsum
              suscipit fusce sit porttitor curabitur tempor mi rutrum sed. Quam
              nonummy. Sapien potenti in elit lacinia congue sed taciti
              elementum Ante nascetur pharetra sapien. Facilisi pede fusce
              nostra dui.
             <br></br> 
             <br></br> 
               Congue sed lobortis montes elit conubia augue semper
              hendrerit libero netus neque primis magnis Conubia montes odio
              rutrum et netus posuere tellus parturient accumsan litora arcu
              ridiculus eros cras. Tempor morbi cras donec bibendum integer
              class ridiculus mi interdum a. Inceptos, fermentum, malesuada,
              ante vulputate porta. Ut purus primis integer erat at viverra
              vivamus ad. Bibendum.
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
