import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')
  return (
    <>
      <section className="flex flex-row h-screen items-flex-start">
        <div className="flex flex-col w-1/2 items-flex-start">
          <div className="group h-1/2 program-selector">
            <div className="flex flex-col justify-center p-5 h-full w-full bg-emerald-100 group-hover:bg-emerald-300 transition-colors duration-300">
              <h1 className="text-9xl font-semibold text-emerald-500 group-hover:text-white duration-300 group-hover:text-8xl transition-all program-wyr">PROJECT JAM</h1>
              <h2 className='text-l pl-5 font-semibold text-emerald-500 group-hover:text-white duration-300 group-hover:text-xl transition-all'>10 Week Guide Project Intensive</h2>
            </div>
          </div>
          <div className="group h-1/2 program-selector">
          <div className="flex flex-col justify-center p-5 h-full w-full bg-rose-100 group-hover:bg-rose-300 transition-colors duration-300">
            <h1 className="text-9xl font-semibold text-rose-500 group-hover:text-white duration-300 group-hover:text-8xl program-wyr">WRITING WONDERS</h1>
            <h2 className='text-l pl-5 font-semibold text-rose-500 group-hover:text-white duration-300 group-hover:text-xl transition-all'>Essay Editing Workshops</h2>
          </div>
        </div>
        </div>
        <div className="group w-1/2">
          <div className="flex flex-col justify-center p-5 h-full w-full bg-sky-100 group-hover:bg-sky-300 transition-colors duration-300">
            <h1 className="text-9xl font-semibold text-sky-500 group-hover:text-white duration-300 group-hover:text-8xl program-wyr">BIG LITTLE PROGRAM</h1>
            <h2 className='text-l pl-5 font-semibold text-sky-500 group-hover:text-white duration-300 group-hover:text-xl transition-all'>Our Classic Mentorship Program</h2>
          </div>
        </div>
      </section>
      <style>{`
        .footer {
          display: none;
        }
        .program-wyr {
          font-size: 9vw;
        }
        .layout-body {
          overflow-y: hidden;
        }
        .program-selector {
          height: 45%;
        }
      `}</style>
    </>
  )
}
