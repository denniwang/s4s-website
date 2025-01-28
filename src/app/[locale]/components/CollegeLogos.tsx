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
      <motion.div
        className='flex w-full justify-center overflow-hidden'
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
  )
}
