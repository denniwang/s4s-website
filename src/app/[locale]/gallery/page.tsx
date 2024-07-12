import { useTranslations } from 'next-intl'
import { EmblaOptionsType } from 'embla-carousel'
import ProjectCarousel from '../components/ProjectCarousel'

export default function About() {
  const t = useTranslations('')

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <main>
      <h1>Project Gallery</h1>
      
  
        <ProjectCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  )
}
