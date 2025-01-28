'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { InfiniteMovingCards } from './MovingCards'

const collegeLogos = [
  { image: '/logos/cal.png', alt: 'Cal' },
  { image: '/logos/ucla.svg', alt: 'UCLA' },
  { image: '/logos/uci.svg', alt: 'UCI' },
  { image: '/logos/yale.svg', alt: 'Yale' }
]

export const CollegeLogos = () => {
  return (
    <div className='w-full bg-white py-4 md:py-7'>
      <div className='flex flex-col items-center px-4 md:flex-row md:gap-[100px]'>
        <motion.h2
          className='font-outfit mb-4 whitespace-nowrap text-lg font-light text-black md:mb-0 md:ml-[150px] md:text-2xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Compatible with
        </motion.h2>
        <motion.div
          className='flex w-full justify-end'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <InfiniteMovingCards
            items={collegeLogos}
            direction='right'
            speed='normal'
          />
        </motion.div>
      </div>
    </div>
  )
}
