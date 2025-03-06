import { EmblaOptionsType } from 'embla-carousel'
import ProjectCarousel from '../../../src/app/components/ProjectCarousel'

function Gallery() {
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
    <main className='overflow-hidden'>
      <ProjectCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  )
}

export default Gallery
