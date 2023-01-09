import React from 'react'

function FoodCard({ name, src, profile }) {
  return (
    <div className='relative  h-auto w-auto md:h-auto md:w-auto lg:h-auto lg:w-auto cursor-pointer  transition duration-200
    transform ease-in hover:scale-105 hover:animate-pulse  justify-center'>
      {/* overflow-x p-3 relative*/}
      {/* <Image
    className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10'
    src={profile}
    width={40}
    height={40}
    layout="fixed"
    objectFit='cover'
    />
    <Image
    className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
    src={src}
    layout="fill"
    /> */}
      <img src={profile} className='h-10 absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 ml-3' />
      <img src={src} className='h-80 object-cover filter brightness-75 rounded-full lg:rounded-3xl'/>

      <p className=' ml-2 absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p>
    </div>
  )
}

export default FoodCard