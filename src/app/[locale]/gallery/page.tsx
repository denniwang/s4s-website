import { useTranslations } from 'next-intl'
import { EmblaOptionsType } from 'embla-carousel'
import ProjectCarousel from '../components/ProjectCarousel'

export default function About() {
  const t = useTranslations('')

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES = [
    {
      img: '/projects/texnology.png',
      title: 'teXnology',
      subtitle: 'a speech-to-latex editor',
      desc: 'teXnology allows users to turn spoken equations into LaTeX, greatly streamlining the process of typing scientific documents. Instead of having to constantly scan the docs and looking for the proper syntax, you can read a sentence to teXnology which does the hard work for you.',
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
