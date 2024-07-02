export const Footer = () => {
  return (
    <div className="flex flex-row justify-center ">
    <div className='flex flex-col w-3/4 justify-around my-5 lg:flex-row'>
      <div className='flex flex-col'>
        <h2 className='text-2xl'>S4S</h2>
        <p className='text-sm'>© 2021 Students 4 Students</p>
        <p className='text-sm'>+1 949 864 9615</p>
        <p className='text-sm'>studs4students@gmail.com</p>
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl font-bold'>Programs</h2>
        <p className='text-sm'>by Littles</p>
        <p className='text-sm'>Project Jam</p>
        <h2 className="text-xl font-bold">Gallery</h2>
        <h2 className="text-xl font-bold">About</h2>
      </div>
      <div className='flex flex-col'>
        <div className="flex-grow"></div>
          <p>&quot;College started yesterday, but you can start today&quot;</p>
      </div>
    </div>
</div>
  )
}
