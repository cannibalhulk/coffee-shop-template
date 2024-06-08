"use client"
import React from "react";
import type { Product } from "@/lib/product";
import { LuStar, LuMessageSquare } from "react-icons/lu";
import { AiOutlineHeart } from 'react-icons/ai';
import {MdOutlineDifference} from "react-icons/md"
import Image from "next/image";
import { FaManatSign } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { useState } from "react";

function ProductCard({description,discount_price,img,tag_price,title,use,weight}:Product) {
    const [counter, setCounter] = useState(1)
  return (
  <section className="">
    <div className="w-full flex justify-between mb-4">
        <div className="flex gap-3">
            <span className="flex"><LuStar className="mr-1" size={20} />4.5</span>
            <span className="flex"><LuMessageSquare className="mr-1"  size={20}/> 45</span>
        </div>

        <div className="flex gap-3">
            <AiOutlineHeart size={20}/>
            <MdOutlineDifference size={20}/>
        </div>
    </div>

    {/* card image */}
    <div className="w-full flex justify-center items-center border border-gray-200 sm:py-[30px]">
        <Image src={img} alt="product" width={300} height={300} />
    </div>
    <div className="p-4">
        <p className="text-[#61C4BF] font-medium">{use}</p>
        <h2 className="font-extrabold text-xl text-[#29474C]">{title}</h2>
        <p className="font-light text-[#29474C] mt-5">{description}</p>
        <p className="text-[#ccc] flex text-center font-normal">{tag_price} <span className="ml-3"><FaManatSign/></span></p>
        <div className="w-full flex justify-between">
            <p className="text-[#29474C] flex text-center font-bold text-3xl">{discount_price} <span className="ml-3"><FaManatSign/></span></p>

            <div className="flex gap-1">
                <button className="rounded-md px-3 py-1 bg-[#D9EEED] font-bold text-[#29474C]  ">{weight[0]}g</button>
                <button className="rounded-md px-3 py-1 font-bold text-[#29474C]  ">{weight[1]}g</button>
            </div>
        </div>

        <div className="mt-5 flex text-center">
            <button className="flex justify-center items-center bg-[#29474C] text-white text-center px-5 py-3 rounded-2xl">
                <span className="mr-2"><AiOutlineShopping size={18}/></span>
                <p className="">В корзину</p>
            </button>

            <div className=" flex items-center flex-row gap-3 text-center ml-6 text-lg">
                <button  onClick={()=>setCounter((prev)=> prev=prev-1)}>-</button>
                <p className="text-center flex">{counter}</p>
                <button onClick={()=>setCounter((prev)=> prev=prev+1)}>+</button>
            </div>
        </div>
    </div>
  </section>
)}

export default ProductCard;
