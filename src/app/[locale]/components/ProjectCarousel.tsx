'use client'
import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { VscTriangleRight } from 'react-icons/vsc'

type SlideType = {
  title: string
  img: string
  subtitle: string
  desc: string
  demo: string
  little: string
  big: string
  // Add other properties as needed
}

type PropType = {
  slides: SlideType[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className='embla w-screen '>
      <div className='embla__viewport ' ref={emblaRef}>
        <div className='embla__container flex flex-row'>
          {slides.map(slide => (
            <div
              className='embla__slide flex w-screen flex-col items-center justify-center gap-6 px-5 md:flex-row'
              key={slide.title}
            >
              <div className='relative size-full h-[45vh] object-cover md:h-[85vh] '>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='flex w-5/6 flex-col gap-3 md:w-1/4'>
                <h2 className='text-4xl font-bold'>{slide.title}</h2>
                <p className='italic'>{slide.subtitle}</p>
                <br></br>
                <p className=''>{slide.desc}</p>
                <a href={slide.demo} target='_blank'>
                  <div className='flex h-12 flex-row items-center gap-3 bg-blue-400 px-3'>
                    <p>See for yourself!</p>
                    <div className='flex-1'></div>
                    <div className='h-full  w-0.5 bg-gray-600'></div>
                    <div className='p-1'>
                      <VscTriangleRight />
                    </div>
                  </div>
                </a>
                {slide.big != '' && slide.little != '' && (
                  <div className='flex flex-col gap-3 bg-buttonSecondary p-3 text-left'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-10 w-10 overflow-hidden rounded-full'>
                        <Image
                          src={`/people/${slide.little}.png`}
                          width={50}
                          height={50}
                          alt={slide.little}
                        />
                      </div>
                      <p>By: Little {slide.little}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-10 w-10 overflow-hidden rounded-full'>
                        <Image
                          src={`/people/${slide.big}.png`}
                          width={50}
                          height={50}
                          alt={slide.big}
                        />
                      </div>
                      <p>Along with: Big {slide.big}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
