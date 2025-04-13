import { EmblaOptionsType } from 'embla-carousel'
import ProjectCarousel, {
  SlideType
} from '../../../src/app/components/ProjectCarousel'

function Gallery() {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES: SlideType[] = [
    {
      img: 'alyssa-neu.jpeg',
      title: 'Alyssa Diwale',
      subtitle: "Northeastern University '29 ",
      desc: 'placeholder testimony?',
      big: 'Dennis'
    },
    {
      img: 'love-berk.jpg',
      title: 'Love Afolabi',
      subtitle: '',
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
