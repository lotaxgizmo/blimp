import React from 'react'
import heropic from '../assets/heropic.png'
import headertext1 from '../assets/headertext1.svg'
import headercrazy from '../assets/headercrazy.svg'
import heroca from '../assets/heroca.svg'

function Home() {
  return (
    <div className='bg-[#FC8DCF] d flex flex-col justify-center items-center relative px-4'>
      <img src={heropic} alt="" className='my-10 w-[700px]' />
      <img src={heroca} alt="" className='mb-10 z-10'/>

   <img src={headertext1} alt="" className='absolute right-0 mr-6 w-20 top-8 lg:top-auto lg:w-auto animate-pulse' />
         <img src={headercrazy} alt="" className='absolute left-0 ml-6 lg:-bottom-14 -bottom-7 hidden lg:flex sw-20 animate-pulse' />
    </div>
  )
}

export default Home