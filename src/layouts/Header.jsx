import React from 'react';
import { images } from '../constants';
import { FiUser } from "react-icons/fi";
import { BiCartDownload } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    let navigate = useNavigate();

    return (
        <>
            <nav className='bg-white flex items-center justify-between px-14 py-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            {/* <input type="checkbox" id='switcher' className='d-none' /> */}
            {/* <label htmlFor="switcher" className='menu-icon' >&#9776;</label> */}
                {/* logo div */}
                <div className=''>
                    <img onClick={() => {navigate("/")}}src={images.logo} alt="" />
                </div>

                {/* links div */}
                <div className='links'>
                    <ul className='flex items-center gap-10'>
                        {/* <li onClick={() => {navigate('/')}} className='close'><VscClose size={30}/></li> */}
                        <li onClick={() => {navigate("/")}} className='flex items-center justify-between cursor-pointer text-[#333]'>
                            Home
                            {/* <div className='icon'><IoIosArrowForward/></div> */}
                        </li>
                        <li className='cursor-pointer text-[#333] text-[18px] '>Shop</li>
                        <li className='cursor-pointer text-[#333] text-[18px]'>Blog</li>
                        <li onClick={() => {navigate("/About")}} className='cursor-pointer text-[#333] text-[18px]'>About</li>
                        <li className='cursor-pointer text-[#333] text-[18px]'>Contact</li>
                    </ul>
                </div>

                {/* right div  */}
                <div className='flex items-center gap-10'>
                    <div><FiUser size={30} className='text-gray-500'/></div>
                    <div><BiCartDownload size={30} className='text-gray-500'/></div>
                </div>
            </nav>
            
        </>
    );
};

