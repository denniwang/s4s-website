import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { SiLinktree } from 'react-icons/si'
import { FaTiktok } from 'react-icons/fa'
export const Footer = () => {
  return (
    <div className='footer mt-10 flex flex-row justify-center bg-gradient-to-t from-background-secondary to-background pb-12'>
      <div className='my-5 flex w-3/4 flex-col justify-around lg:flex-row'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-4xl'>S4S</h2>
          <p className='text-lg'>© 2024 Students 4 Students</p>
          <p className='text-lg'>+1 949 864 9615</p>
          <p className='text-lg'>studs4students@gmail.com</p>
          <div className='h-2'></div>
          <div className='flex flex-row gap-2'>
            <a
              href='https://www.instagram.com/students.4students/'
              target='_blank'
              className='hover:bg-b rounded-full bg-background-secondary p-2 transition-colors duration-150 hover:bg-blue-400'
            >
              <FaInstagram size='20px' />
            </a>
            <a
              href='https://linktr.ee/stu4stu'
              target='_blank'
              className='hover:bg-b rounded-full bg-background-secondary p-2 transition-colors duration-150 hover:bg-blue-400'
            >
              <SiLinktree size='20px' />
            </a>
            <a
              href='https://www.tiktok.com/@students.4students'
              target='_blank'
              className='hover:bg-b rounded-full bg-background-secondary p-2 transition-colors duration-150 hover:bg-blue-400'
            >
              <FaTiktok size='20px' />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-1'>

          <Link href={'/about'}>
            <h2 className='mb-4 text-3xl font-bold transition-colors duration-200 hover:text-button'>
              About
            </h2>
          </Link>
        </div>
        <div className='flex flex-col'>
          <div className='flex-grow'></div>
          <p className='text-lg'>
            &quot;Real college help. From students, for students&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
