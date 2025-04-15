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

export type SlideType = {
  title: string
  img: string
  desc: string
  big: string
  year: string
  school: string
  schoolLogo: string
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
    <section className='embla w-1/3'>
      <div className='embla__viewport ' ref={emblaRef}>
        <div className='embla__container flex flex-row'>
          {slides.map(slide => (
            <div
              className='embla__slide flex w-screen flex-col items-center justify-center gap-6 px-5 md:flex-row'
              key={slide.title}
            >
              <div className='relative size-full h-[25vh] object-cover md:h-[45vh] '>
                <Image
                  src={'/success/' + slide.img}
                  alt={slide.title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='flex w-5/6 flex-col gap-3 md:w-3/4'>
                <h2 className='text-4xl font-bold'>{slide.title}</h2>
                <p className=''>{slide.desc}</p>
                {slide.school != '' && (
                  <div className='flex flex-col gap-3 bg-buttonSecondary p-3 text-left'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-10 w-10 overflow-hidden mt-3'>
                        <Image
                          src={`/logos/${slide.schoolLogo}.png`}
                          width={50}
                          height={50}
                          alt={slide.school}
                        />
                      </div>
                      <p>
                        <span className='font-extrabold'>
                          {slide.school}, {slide.year}
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                )}
                {slide.big != '' && (
                  <div className='flex flex-col gap-3 bg-buttonSecondary p-3 text-left'>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='h-10 w-10 overflow-hidden rounded-full'>
                        <Image
                          src={`/people/face/${slide.big}.png`}
                          width={50}
                          height={50}
                          alt={slide.big}
                        />
                      </div>
                      <p>
                        <span className='font-extrabold underline'>Big:</span>{' '}
                        {slide.big}
                      </p>
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
          <div className='scale-105 rounded-full transition-all duration-150 hover:bg-background-secondary'>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div className='scale-105 rounded-full p-1 transition-all duration-150 hover:bg-background-secondary'>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
