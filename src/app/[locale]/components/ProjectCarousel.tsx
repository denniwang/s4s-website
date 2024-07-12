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

type PropType = {
  slides: number[]
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
    <section className='embla w-screen'>
      <div className='embla__viewport ' ref={emblaRef}>
        <div className='embla__container flex flex-row'>
          {slides.map(index => (
            <div
              className='embla__slide flex w-screen flex-row items-center justify-center gap-6 bg-blue-200'
              key={index}
            >
              <div className='embla_slide_img'>
                <Image
                  src='/zitong.png'
                  width={500}
                  height={500}
                  alt='zitong'
                />
              </div>
              <div className='flex flex-col gap-3 w-1/4'>
                <h2 className='text-4xl font-bold'>Project Header</h2>
                <p className='italic'>Project Subtitle</p>
                <br></br>
                <p className=''>
                  Put butt in owners face step on your keyboard while youre
                  gaming and then turn in a circle . Damn that dog find a way to
                  fit in tiny box yet naughty running cat paw at beetle and eat
                  it before it gets away cat walks in keyboard{' '}
                </p>
                <a>
                  <div className='flex h-12 flex-row items-center gap-3 bg-blue-400 px-3'>
                    <p>See for yourself!</p>
                    <div className='flex-1'></div>
                    <div className='h-full  w-0.5 bg-gray-600'></div>
                    <div className='p-1'>
                      <VscTriangleRight />
                    </div>
                  </div>
                </a>

                <div className='flex flex-col gap-3 bg-blue-300 p-3 text-left'>
                  <div className='flex flex-row items-center gap-2'>
                    <div className='h-10 w-10 overflow-hidden rounded-full'>
                      <Image
                        src='/zitong.png'
                        width={50}
                        height={50}
                        alt='zitong'
                      />
                    </div>
                    <p>By: Little Ricky</p>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <div className='h-10 w-10 overflow-hidden rounded-full'>
                      <Image
                        src='/zitong.png'
                        width={50}
                        height={50}
                        alt='zitong'
                      />
                    </div>
                    <p>Along with: Big Dennis</p>
                  </div>
                </div>
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
