import Image from 'next/image'

export default function Spotlight() {
  return (
      <section className='mt-14 flex flex-col self-center bg-background-secondary px-10 py-12 md:px-24'>
        <h2 className='pb-8 text-5xl font-extrabold'>Student Spotlight </h2>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <div className='max-w-96 flex-1'>
            <Image
              width={1000}
              height={600}
              className='rounded-md shadow-md'
              src='/zitong.png'
              alt='student_spotlight'
            />
          </div>
          <div className='flex-1'>
            <p className='text-lg lg:text-2xl '>
              &quot;The Big Little Program was incredible. Going into my second year
              of high school, I was confused and honestly super stressed about
              college because I had no idea what I should be doing. I knew I had
              the ambition to get into a good college, but I just didn&apos;t know
              where to start.
              <br></br>
              <br></br>
              <span className='hidden lg:block'>
                My Big, Dennis, gave me invaluable advice for the whole process.
                He helped me find clubs, extracurriculars, and competitions that
                strengthened my profile. I felt so much more confident and
                secure going into college, and am proud to go to Univeristy of
                Washington for Computer Science.&quot;
              </span>
            </p>
          </div>
        </div>
      </section>
  )
}