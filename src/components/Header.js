import React, { useState } from 'react';
import heropic from '../assets/heropic.png';
import buynow from '../assets/buynow.svg';

const MENU_ITEMS = [
  { name: 'Home', href: '#' },
  { name: 'Community', href: '#community' },
  { name: 'About', href: '#about' },
  { name: 'Tokenomics', href: '#tokenomics' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='bg-[#FC8DCF]'>
      <div className="flex flex-row justify-between py-5 px-10 bg-white rounded-b-[40px]">
      <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={heropic} alt="" className="w-10 rounded-full" />
      </a>

      <div className="hidden md:flex flex-row justify-between items-center">
        <div className="list text-[#FC8DCF] flex flex-row mr-10 justify-between">
          {MENU_ITEMS.map((item, index) => (
            <a href={item.href} className="frost text-3xl mx-3" key={index}>
              {item.name}
            </a>
          ))}
        </div>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=2hnFpwft7BRhh7fcbkqaLzXubn76jNJNSyTZwdtDpump" target="_blank" rel="noopener noreferrer">
          <img src={buynow} alt="" />
        </a>
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8 text-[#FC8DCF]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center transition duration-300">
          <button
            className="absolute top-5 right-5 focus:outline-none"
            onClick={closeMenu}
          >
            <svg
              className="w-8 h-8 text-[#FC8DCF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="list text-[#FC8DCF] flex flex-col items-center mb-5">
            {MENU_ITEMS.map((item, index) => (
              <a href={item.href} className="frost text-3xl my-3" key={index} onClick={closeMenu}>
                {item.name}
              </a>
            ))}
          </div>
          <a href="#" className="mt-5">
            <img src={buynow} alt="" />
          </a>
        </div>
      )}
    </div>
    </div>
  );
}

export default Header;
