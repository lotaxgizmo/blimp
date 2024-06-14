import React from 'react'
import buybtnabout from '../assets/buybtnabout.svg'
import aboutus from '../assets/aboutus.svg'
import aboutimage from '../assets/aboutimage.svg'
import text from '../assets/text.svg'

function About() {
  return (
    <div id='about' className='flex flex-col lg:flex-row justify-center lg:justify-around items-center relative mx-4 py-10 '>
      <div className="left">
        <img src={aboutus} alt="" className='mb-5' />
        <img src={text} alt="" className='mb-5' />
        <img src={buybtnabout} alt="" className='mb-5' />
      </div>

      <div className="right">
        <img src={aboutimage} alt="" />
      </div>
    </div>
  )
}

export default About