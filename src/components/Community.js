import React from 'react'
import communitytextbg from '../assets/communitytextbg.svg'
import communitytextbg2 from '../assets/communitytextbg2.svg'
import mattcircleicon from '../assets/mattcircleicon.svg'
import twitter from '../assets/twitter.svg'
import tg from '../assets/tg.svg'
import contract from '../assets/contract.svg'

function Community() {
  return (
    <div className='flex flex-col justify-center items-center relative mx-4'>
      <img src={communitytextbg} alt="" className='-mb-8' />
      <img src={communitytextbg2} alt="" />
      <img src={mattcircleicon} alt="" className='z-10 lg:absolute right-0 w-32 lg:w-72 lg:mb-0 -mb-20 ' />

      <div className="bg-[#FFF1E8] lg:w-10/12 w-full rounded-2xl flex flex-col lg:flex-row justify-start lg:justify-evenly lg:items-center items-start relative lg:mx-4 py-28 px-4">
        <img src={tg} alt="" className='py-10' />
        <img src={twitter} alt="" className='py-10' />
        <img src={contract} alt="" className='py-10' />
      </div>
    </div>
  )
}

export default Community