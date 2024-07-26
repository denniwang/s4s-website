import Image from 'next/image'

export default function Spotlight() {
  return (
    <section className='mt-14 flex flex-col items-center self-center bg-background-secondary px-10 py-12 md:px-24 '>
      <div className='lg:w-3/4'>
        <h2 className='pb-8 text-5xl font-extrabold'>Student Spotlight </h2>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <div className='max-w-96 flex-1'>
            <Image
              width={1000}
              height={600}
              className='rounded-md shadow-md'
              src='/cambrian.PNG'
              alt='student_spotlight'
            />
          </div>
          <div className='h-0.5 w-60 bg-primary md:h-60 md:w-0.5'></div>
          <div className='flex-1'>
            <p className='inline-block text-lg lg:text-2xl '>
              &quot;The Big Little Program was incredible. Going into my final
              year of high school, I was confused and honestly super stressed
              about college because I had no idea what I should be doing.{' '}
              <span className='inline lg:hidden'>&quot;</span>
              <br></br>
              <br></br>
              <span className='hidden lg:block'>
                My Big, Dennis, gave me invaluable advice for the whole process.
                He helped me find clubs, extracurriculars, and competitions that
                strengthened my profile. I felt so much more confident and
                secure since we started meeting.&quot;
              </span>
            </p>

            <h2 className='pt-3 text-right text-xl font-bold'>
              - Cambria Nguyen, BHS&apos;25
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
