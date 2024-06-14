import React from 'react'
import heropic from '../assets/heropic.png'
import buynow from '../assets/buynow.svg'

function Header() {
  return (
    <div className='flex flex-row justify-between p-5'>
      <img src={heropic} alt="" className='w-10 rounded-full' />

      <div className="list text-[#FC8DCF] flex flex-row">
        <a href="#" className='frost text-3xl'>
          Home
        </a>

        <a href="#" className='frost text-3xl'>
          Home
        </a>

        <a href="#" className='frost text-3xl'>
          Home
        </a>

      </div>
      <img src={buynow} alt="" />
    </div>
  )
}

export default Header