import React from 'react'
import communitytextbg from '../assets/communitytextbg.svg'
import communitytextbg2 from '../assets/communitytextbg2.svg'
import mattcircleicon from '../assets/mattcircleicon.svg'
import twitter from '../assets/twitter.svg'
import tg from '../assets/tg.svg'
import contract from '../assets/contract.svg'

function Community() {
  const handleCopy = () => {
    const codeToCopy = '2hnFpwft7BRhh7fcbkqaLzXubn76jNJNSyTZwdtDpump';
    navigator.clipboard.writeText(codeToCopy).then(() => {
      alert('Code copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div id='community' className='flex flex-col justify-center items-center relative mx-4'>
      <img src={communitytextbg} alt="" className='-mb-8' />
      <img src={communitytextbg2} alt="" className=' animate-bounce' />
      <img src={mattcircleicon} alt="" className='z-10 lg:absolute right-0 w-32 lg:w-72 lg:mb-0 -mb-20  animate-spin' />

      <div className="bg-[#FFF1E8] lg:w-10/12 w-full rounded-2xl flex flex-col lg:flex-row justify-start lg:justify-evenly lg:items-center items-start relative lg:mx-4 py-28 px-4">
       <a href="https://t.me/hornybymatt" target="_blank" rel="noopener noreferrer">
       <img src={tg} alt="" className='py-10' />
       </a>
       <a href="https://x.com/hbmfofficial" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="" className='py-10' />
       </a>

       <div onClick={handleCopy} classNamse='mt-4 p-2 bg-blue-500 text-white rounded'>

        <img src={contract} alt="" className='py-10' />
       </div>


      </div>
    </div>
  )
}

export default Community