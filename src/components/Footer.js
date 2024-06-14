import React from 'react'
import footer from '../assets/footer.svg'

function Footer() {
  return (
    <div className='bg-[#FC8DCF] flex flex-col lg:flex-row justify-center lg:justify-around items-center relative px-4 py-10 '>
      <img src={footer} alt="" />
    </div>
  )
}

export default Footer