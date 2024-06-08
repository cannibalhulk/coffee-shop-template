import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Toplinks() {
  return (
    <nav className="w-full flex justify-between items-center text-[#29474C] font-normal sm:px-[40px] border-b border-[#e9e9e9]">
        <div className='flex gap-4'>
            <p>+994 (12) 444 44 44</p>  
            <p>Кофе оптом</p>  
            <p>Контакты</p>  
        </div>

        <div className='flex items-center gap-4 py-2'>
            <FaFacebook />
            <FaInstagram/>
            <FaLinkedin/>
            <div className='rounded-[15px] font-medium bg-gray-100 px-2 py-1 flex justify-center items-center'>Az</div>
            <div className='rounded-[15px] font-medium bg-gray-100 px-2 py-1 flex justify-center items-center'>En</div>
        </div>
    </nav>
  )
}

export default Toplinks