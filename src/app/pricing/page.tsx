'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '../components/Button'
import Image from 'next/image'

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const features = [
    '1-on-1 Personalized Mentorship',
    'College Application Strategy',
    'Essay Review & Feedback',
    'Extracurricular Planning',
    'Project Development Support',
    'Weekly Check-ins',
    'Mock Interviews',
    'Portfolio Development'
  ]

  return (
    <main className='flex min-h-screen flex-col items-center px-4 py-16'>
      <div className='container mx-auto max-w-6xl'>
        <div className='mb-10 text-center'>
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>Pricing</h1>
          <p className='mx-auto max-w-2xl text-lg text-gray-600'>
            Simple, transparent pricing for our services. Zelle and Venmo
            accepted.
          </p>
        </div>

        <div
          data-aos='fade-up'
          className='relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-background-secondary to-background p-1'
        >
          <div className='absolute -right-20 -top-20 h-40 w-40 rounded-full bg-button opacity-10 blur-3xl'></div>
          <div className='absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl'></div>

          <div className='relative rounded-xl bg-background p-8 shadow-xl'>
            <div className='flex flex-col items-center justify-between gap-8 md:flex-row md:items-start'>
              <div className='flex-1 space-y-6'>
                <div className='space-y-2'>
                  <h2 className='text-text text-3xl font-bold'>
                    Big Little Program
                  </h2>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-4xl font-bold text-button'>89</span>
                    <span className='text-xl text-gray-500'>/month</span>
                  </div>
                </div>

                <ul className='text-text space-y-4'>
                  {features.map((feature, index) => (
                    <li key={index} className='flex items-center gap-3'>
                      <span className='bg-button/10 flex h-6 w-6 items-center justify-center rounded-full'>
                        <svg
                          className='h-4 w-4 text-button'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex flex-col items-center gap-6 md:w-72'>
                <div className='relative h-48 w-48 overflow-hidden rounded-xl'>
                  <Image
                    src='/s4s-trans.png'
                    alt='Students 4 Students'
                    fill
                    className='object-contain p-4'
                  />
                </div>
                <a
                  href='https://calendly.com/studs4students/15-min-free-intro-session'
                  target='_blank'
                  className='w-full'
                >
                  <Button
                    rounded
                    size='large'
                    className='w-full transform text-lg transition-all duration-300 hover:scale-105'
                  >
                    Book Free Consultation
                  </Button>
                </a>
                <p className='text-center text-sm text-gray-500'>
                  No commitment required. See if we&apos;re the right fit for
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 text-center'>
          <p className='text-text text-lg font-medium'>
            &quot;Real college help. From students, for students&quot;
          </p>
        </div>
      </div>
    </main>
  )
}
