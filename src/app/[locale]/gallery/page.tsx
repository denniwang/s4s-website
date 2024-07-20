import { useTranslations } from 'next-intl'
import { EmblaOptionsType } from 'embla-carousel'
import ProjectCarousel from '../components/ProjectCarousel'

export default function About() {
  const t = useTranslations('')

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = [
    {
      img: '/projects/texnology.png',
      title: 'teXnology',
      subtitle: 'a speech-to-latex editor',
      desc: 'do not try to mix old food with new one to fool me! burrow under covers, yet oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap for Gate keepers of hell',
      demo: 'https://github.com/hellolol2016/teXnology',
      little: '',
      big: ''
    },
    {
      img: '/projects/gymeater.png',
      title: 'gymeater',
      subtitle: 'a tool to make working out easier',
      desc: 'description',
      demo: 'https://github.com/LexTruong/gymeater',
      little: '',
      big: ''
    }
  ]
  return (
    <main>
      <h1>Project Gallery</h1>

      <ProjectCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  )
}
