"use client"

import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const  handleBurgerClick =()=>{
        console.log('handle burger click')
        const menu = document.querySelector('.ulElement');
        console.log(menu)
        menu.classList.toggle('addAnimation');
        menu.classList.toggle('removeAnimation');
        document.querySelector(".cross").classList.toggle("hidden")
        document.querySelector(".burger").classList.toggle("hidden")
        if(menu.classList.contains("hidden")){
                menu.classList.remove('hidden')
                
        }
        else if(!menu.classList.contains("hidden")){
            setTimeout(() => {
                menu.classList.add('hidden')
            }, 200);
        }
       
    }

  return (
    <div className='overflow-x-hidden '>
        <nav className=" navbar bg-white w-[100vw] border-gray-200 py-2.5 bg-gray-200 color-gray-900">
    <div className="flex  flex-wrap items-center justify-between max-w-[1500px] px-[1px] md:px-4 lg:px-6 mx-auto">
        <Link href="#" className=" z-50 flex items-center">
            <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-9 mr-3 sm:h-9" alt="AlumNexus Logo"/>
            <span z-50 className="self-center hidden xsm:flex text-xl font-semibold whitespace-nowrap text-gray-900">AlumNexus</span>
        </Link>
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>
            
            <Link href="Login"
                
               className=" outline_btn text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-4 py-2 lg:py-1.5 sm:mr-2 lg:mr-0 focus:outline-none">
               <p>
               <FontAwesomeIcon icon={faUser} className=' mr-3 h-[13px] w-[13px]' />                 </p>

               
               
                <p>
                    Login
                </p>

        </Link>
            
         


            <button onClick={()=>handleBurgerClick()} data-collapse-toggle="mobile-menu-2" type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-[200px] lg:hidden hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                <svg className=" burger w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"></path>
                </svg>
                <svg className="hidden cross w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
        <div className="items-center   justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul onClick={()=>{handleBurgerClick()}} className=" ulElement flex hidden lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 removeAnimation">
                <li>
                    <Link href="/"
                       className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Home</Link>
                </li>
                <li>
                    <Link href="About"
                       className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">About</Link>
                </li>
                <li>
                    <Link href="Alumni"
                       className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Alumni</Link>
                </li>
                <li>
                    <Link href="Students"
                       className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Students</Link>
                </li>
                <li>
                    <Link href="Events"
                       className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Events</Link>
                </li>
                <li>
                    <Link href="Resources"
                       className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0">Resources</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}

export default Navbar