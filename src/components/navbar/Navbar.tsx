'use client';
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <>
       <div className=' px-12 py-12 absolute z-50 top-0 w-[100%]'>
      <div className=' flex justify-between items-center  text-[#f0f0f0] '>
      <div className=' flex justify-start items-center gap-2 text-[#f0f0f0] w-[25%]'>
       <p className=' font- text-[14px] font-normal'>☎ 01302104188</p>
       <div className=' h-7 bg-slate-400 rounded-md opacity-65 w-[2px]'></div>
       <p className=' font- text-[14px] font-normal flex justify-center items-center gap-1'><MdOutlineMarkEmailUnread />
       mydul@gmail.com</p>
       </div>
       <div className=' flex justify-center items-center w-1/2 text-center'>
       <h1 className=' text-3xl'>HoTeL ReLaX</h1>
       </div>
       <div className='w-[25%] flex justify-end gap-12 items-center'>
        <ul className="float-end flex gap-4 justify-end  items-center ">
            <li><a href='#'><ImFacebook2 color="green" className=" rounded-md size-5" />
            </a></li>
            <li><a href='#'><FaSquareXTwitter  color="green" className=" rounded-md size-5" />
            </a></li>
            <li><a href='#'><FaWhatsappSquare color="green" className=" rounded-md size-5" />
            </a></li>
            <li><a href='#'><FaLinkedin color="green" className=" rounded-md size-5"/>
            </a></li>
    
        </ul>
        <div>
        <FaBarsStaggered />
        </div>
       </div>
      </div>
      <div className='  flex justify-center items-center mt-12'>
      <ul className=' flex justify-center text-[#f0f0f0] items-center gap-8 text-xl'>
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={"/hotels"}>Hotels</Link>
        </li>
        <li>
            <Link href={"blog"}>Blogs</Link>
        </li>
        <li>
            <Link href={"/rooms"}>Rooms</Link>
        </li>
        <li>
            <Link href={'/about'}>About</Link>
        </li>
        <li>
            <Link href={'/contact'}>Contact</Link>
        </li>
      </ul>
      </div>
       </div>
       </>
    );
}
