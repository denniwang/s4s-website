'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Button from '@/src/app/components/Button'
import Image from 'next/image'
import { IoVideocamOutline } from 'react-icons/io5'
import { HiOutlinePencilSquare } from 'react-icons/hi2'

interface ServiceOption {
  name: string
  items: { description: string; price: string }[]
}

interface ServiceProps {
  title: string
  subtitle?: string
  price?: string
  period?: string
  features?: string[]
  options?: ServiceOption[]
  image: string
  buttonText: string
  buttonLink: string
  note: string
}

export default function Pricing() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const mentorshipProgram = {
    title: 'Big Little Program',
    price: '89',
    period: 'month',
    features: [
      '1-on-1 Personalized Mentorship',
      'College Application Strategy',
      'Essay Review & Feedback',
      'Extracurricular Planning',
      'Project Development Support',
      'Weekly Check-ins',
      'Mock Interviews',
      'Portfolio Development'
    ],
    image: '/s4s-trans.png',
    buttonText: 'Book Free Trial',
    buttonLink: 'https://calendly.com/studs4students/15-min-free-trial',
    note: "No commitment required. See if we're the right fit for you."
  }

  const essayReviewServices = {
    title: 'Asynchronous Essay Review',
    //subtitle: 'Recommended for rising seniors',
    options: [
      {
        name: 'Standard (72 hour turnover)',
        items: [
          { description: '650 words', price: '25' },
          { description: '350 words', price: '20' }
        ]
      }
    ],
    image: '/async-writing.png', // Placeholder image path
    buttonText: 'Request Essay Review',
    buttonLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSf71EVuxrz1iulyUxIAdJVfmUOYDj7KBwwadCaWyqkb2I2R_g/viewform',
    note: ''
  }

  const liveWritingHelp = {
    title: 'Live Writing Help',
    //subtitle: 'Real-time essay assistance',
    price: '25',
    period: '/hour',
    features: ['Real-time feedback and guidance', 'Brainstorming assistance'],
    image: '/sync-writing.png',
    buttonText: 'Schedule Live Session',
    buttonLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSf71EVuxrz1iulyUxIAdJVfmUOYDj7KBwwadCaWyqkb2I2R_g/viewform',
    note: ''
  }
  // Service Card Component
  const ServiceCard = ({
    service,
    type,
    icon,
    className = ''
  }: {
    service: ServiceProps
    type: 'standard' | 'options' | 'hourly'
    icon?: React.ReactNode
    className?: string
  }) => (
    <div
      data-aos='fade-up'
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-background-secondary to-background p-1 ${className}`}
    >
      <div className='absolute -right-20 -top-20 h-40 w-40 rounded-full bg-button opacity-10 blur-3xl'></div>
      <div className='absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-primary opacity-10 blur-3xl'></div>

      <div className='relative h-full rounded-xl bg-background p-8 shadow-xl'>
        {type === 'standard' ? (
          // Mentorship Program - Full width layout with bottom button
          <div className='flex flex-col'>
            {/* Header */}
            <div className='mb-6 flex flex-col items-center md:flex-row md:justify-between'>
              <div className='mb-4 md:mb-0'>
                <h2 className='text-text text-3xl font-bold'>
                  {service.title}
                </h2>
                <div className='mt-2 flex items-baseline gap-2'>
                  <span className='text-4xl font-bold text-button'>
                    {service.price}
                  </span>
                  <span className='text-xl text-gray-500'>
                    /{service.period}
                  </span>
                </div>
              </div>
              <div className='relative h-40 w-40 overflow-hidden rounded-xl'>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-contain p-4'
                />
              </div>
            </div>

            {/* Features */}
            {service.features && (
              <ul className='mb-8 grid gap-4 md:grid-cols-2'>
                {service.features.map((feature: string, index: number) => (
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
            )}

            {/* Button */}
            <div className='mt-auto'>
              <a href={service.buttonLink} target='_blank' className='block'>
                <Button
                  rounded
                  size='medium'
                  className='w-full transform text-lg transition-all duration-300 hover:scale-105'
                >
                  {service.buttonText}
                </Button>
              </a>
              <p className='mt-3 text-center text-sm text-gray-500'>
                {service.note}
              </p>
            </div>
          </div>
        ) : (
          // Other services - Original layout
          <div className='flex flex-col items-center justify-between gap-8 md:flex-row md:items-start'>
            <div className='flex-1 space-y-6'>
              <div className='space-y-2'>
                <h2 className='text-text text-2xl font-bold'>
                  {service.title}
                </h2>
                {service.subtitle && (
                  <p className='italic text-gray-500'>{service.subtitle}</p>
                )}
                {type === 'hourly' && (
                  <div className='mb-4 flex items-baseline gap-2'>
                    <span className='text-4xl font-bold text-button'>
                      ${service.price}
                    </span>
                    <span className='text-xl text-gray-500'>
                      {service.period}
                    </span>
                  </div>
                )}
              </div>

              {type === 'options' && service.options && (
                <div className='space-y-6'>
                  {service.options.map(
                    (option: { name: string; items: any[] }, idx: number) => (
                      <div key={idx} className='space-y-3'>
                        <h3 className='text-lg font-semibold'>{option.name}</h3>
                        <ul className='space-y-2 pl-2'>
                          {option.items.map((item, i) => (
                            <li
                              key={i}
                              className='flex justify-between border-b border-gray-100 pb-2'
                            >
                              <span>{item.description}</span>
                              <span className='font-semibold text-button'>
                                ${item.price}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}

              {type === 'hourly' && service.features && (
                <ul className='text-text space-y-4'>
                  {service.features.map((feature: string, index: number) => (
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
              )}
            </div>

            <div className='flex flex-col items-center gap-6 md:w-72'>
              {icon ? (
                <div className='bg-background-secondary/20 flex h-36 w-36 items-center justify-center rounded-full'>
                  <div className='text-text text-7xl'>{icon}</div>
                </div>
              ) : service.image ? (
                <div className='relative h-48 w-48 overflow-hidden rounded-xl'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-contain p-4'
                  />
                </div>
              ) : null}
              <a href={service.buttonLink} target='_blank' className='w-full'>
                <Button
                  rounded
                  size='medium'
                  className='w-full transform px-3 text-lg transition-all duration-300 hover:scale-105'
                >
                  {service.buttonText}
                </Button>
              </a>
              <p className='text-center text-sm text-gray-500'>
                {service.note}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )

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

        <div className='mb-16'>
          <h2 className='mb-8 text-center text-3xl font-bold'>Our Services</h2>

          <div className='flex flex-col gap-8 lg:flex-row'>
            {/* Left column - Mentorship Program */}
            <div className='w-full lg:w-1/2'>
              <ServiceCard
                service={mentorshipProgram}
                type='standard'
                className='h-full'
              />
            </div>

            {/* Right column - Writing Services */}
            <div className='flex w-full flex-col gap-6 lg:w-1/2'>
              <ServiceCard
                service={essayReviewServices}
                type='options'
                icon={<IoVideocamOutline />}
              />

              <ServiceCard
                service={liveWritingHelp}
                type='hourly'
                icon={<HiOutlinePencilSquare />}
              />
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
