'use client'
import React, { useEffect, useState } from 'react'
import Button from './Button'

// Add props interface so the Modal can be controlled by its parent
interface ModalProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ showModal, setShowModal }: ModalProps) {
  const [delayDone, setDelayDone] = useState(false)

  useEffect(() => {
    // Check if the user has already dismissed the modal in this session.
    if (sessionStorage.getItem('modal') === 'false') {
      return
    }

    // Otherwise, delay showing the modal for 5 seconds.
    const timer = setTimeout(() => {
      setDelayDone(true)
      setShowModal(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [setShowModal])

  if (!delayDone || !showModal) return null

  function noModal() {
    setShowModal(false)
    sessionStorage.setItem('modal', 'false')
  }

  return (
    <>
      <button
        className='mb-1 mr-1 hidden rounded bg-pink-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal && (
        <>
          <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none'>
            <div
              className='relative mx-auto my-6 w-auto max-w-3xl'
              data-aos='fade-up'
              data-aos-duration='800'
            >
              {/* Modal content */}
              <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
                {/* Header */}
                <div className='border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5'>
                  <h3 className='text-3xl font-semibold'>
                    LIMITED TIME OFFERS
                  </h3>
                  <button
                    className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/* Body */}
                <div className='relative flex-auto p-6'>
                  <p className='text-blueGray-500 text-md leading-relaxed md:my-4 md:text-lg'>
                    Want to get a competitve edge in the college application
                    process? Book a{' '}
                    <span className='font-bold'>free 15-minute trial </span> on
                    us today!{' '}
                    <span className='font-bold'>Match with a mentor </span>who
                    has been through the process and can help you get into your
                    dream school.{' '}
                  </p>
                </div>
                {/* Footer */}
                <div className='border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-2 md:p-6'>
                  <button
                    className='background-transparent mb-1 mr-1 px-6 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none md:py-2'
                    type='button'
                    onClick={noModal}
                  >
                    Miss out
                  </button>
                  <a href='https://tinyurl.com/s4smentor' target='_blank'>
                    <Button
                      rounded
                      className='duration-400 mr-3 transform border transition-all hover:scale-110 hover:shadow-lg'
                    >
                      <p className='text-md md:text-xl'>Find a Mentor!</p>
                    </Button>
                  </a>
                  <a
                    href='https://calendly.com/studs4students/15-min-free-trial'
                    target='_blank'
                  >
                    <Button
                      rounded
                      className='duration-400 transform border transition-all hover:scale-110 hover:shadow-lg'
                    >
                      <p className='text-md md:text-xl'>Free Trial</p>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
        </>
      )}
    </>
  )
}
