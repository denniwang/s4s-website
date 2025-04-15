import { EmblaOptionsType } from 'embla-carousel'
import ProjectCarousel, { SlideType } from '../components/StudentCarousel'

function Gallery() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES: SlideType[] = [
    {
      img: 'alyssa-neu.png',
      title: 'Alyssa Diwale',
      school: 'Northeastern University',
      schoolLogo: 'neu',
      year: "'29",
      desc: 'placeholder testimony?',
      big: 'Dennis'
    },
    {
      img: 'love-berk.jpg',
      title: 'Love Afolabi',
      school: 'UC Berkeley',
      schoolLogo: 'cal',
      year: "'29",
      desc: 'description',
      big: 'Dennis'
    }
  ]
  return (
    <main className='overflow-hidden'>
      <ProjectCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  )
}

export default Gallery
