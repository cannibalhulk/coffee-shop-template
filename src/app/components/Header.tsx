import React from 'react'
import Image from 'next/image'
import { IoIosSearch} from 'react-icons/io'
import { MdOutlineAccountCircle, MdOutlineDifference } from "react-icons/md";
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShopping } from "react-icons/ai";

function Header() {
  return (
    <nav className='w-full flex justify-between items-center text-[#29474C] text-xl font-medium py-[25px] sm:px-[40px] border-b border-[#e9e9e9]'>
        <div className='flex items-center gap-[40px]'>
            <Image src={'/logo.svg'} alt='logo' width={50} height={50} />
            <p>Купить</p>
            <p>Блог</p>
            <p>Награды</p>
            <p>Квиз</p>
        </div>


        <div className='flex gap-[20px]'>
            <IoIosSearch size={30} />
            <MdOutlineDifference size={30}/>
            <AiOutlineHeart size={30}/>
            <MdOutlineAccountCircle size={30}/>
            <AiOutlineShopping size={30}/>
        </div>
    </nav>
  )
}

export default Header