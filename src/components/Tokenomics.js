import React from 'react'
import totalsupptokenomic from '../assets/totalsupptokenomic.svg'
import taxtokenomics from '../assets/taxtokenomics.svg'
import liquidtokenomics from '../assets/liquidtokenomics.svg'
import tokenomics from '../assets/tokenomics.svg'
import roll from '../assets/roll.svg'

function Tokenomics() {
  return (
    <div className='bg-[#FFF1E8] flex flex-col lg:flex-row justify-center lg:justify-around items-center relative  py-10 '>

      <div className="bg-[#37AEE2] lg:w-11/12 w-full rounded-2xl flex flex-col  justify-start lg:justify-evenly lg:items-center items-start relative lg: mx-4 pt-14 overflow-hidden ">

        <img src={tokenomics} alt="" className='px-4 z-10  animate-bounce' />
        <div className=" flex flex-col lg:flex-row justify-start lg:justify-evenly lg:items-center items-start relative lg:mx-4 pb-28 px-4">
          <img src={totalsupptokenomic} alt="" className='lg: p-4' />
          <img src={taxtokenomics} alt="" className='lg: p-4  animate-pulse' />
          <img src={liquidtokenomics} alt="" className='lg: p-4' />
        </div>

        <img src={roll} alt="" className='absolute lg:w-full w-[200px] min-w-[1000px] bottom-6' />

      </div>

    </div>
  )
}

export default Tokenomics