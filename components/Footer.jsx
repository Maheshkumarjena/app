import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
<>
<section class="pt-3 max-w-[1500px] pb-7 w-full p-6 ">
    <div class="mx-auto ">
      <div class="grid grid-cols-1 max-lg:gap-10 lg:grid-cols-12 lg:divide-x-2 divide-gray-200 pb-10 lg:pb-14 border-b-2 border-gray-200">
        <div class="lg:col-span-7 pr-9 xl:pr-16">
          <h5 class="text-lg font-medium text-gray-900 max-md:text-center mb-7">Contact</h5>
          <div class="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 pb-12 border-b-2 border-gray-200">
            <div class="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <Link className='flex flex-row h-5 items-center gap-3' href=''>
                <FontAwesomeIcon icon={faLocationDot} />
                <p class="text-base font-normal text-gray-400">61-A, Odisha, India.</p>
                </Link>
            </div>

            <div class="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
            <Link className='flex flex-row h-5 items-center gap-3' href=''>
            <FontAwesomeIcon icon={faPhone} />                <p class="text-base font-normal text-gray-400">+9xxxxxxxxx</p>
                </Link>
            </div>

            <div class="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
            <Link className='flex flex-row h-5 items-center gap-3' href=''>
            <FontAwesomeIcon icon={faEnvelope} />             
            <p class="text-base font-normal text-gray-400">alumnexus@gmail.com</p>
                </Link>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center max-lg:justify-between gap-8 lg:gap-14 xl:gap-24 pt-14 justify-between ">
            <div class="block">
              <h6 class="text-lg font-medium text-gray-900 mb-7 max-md:text-center">AlumnNexus</h6>
              <ul class="flex flex-col max-md:items-center gap-6">
                <li><Link href="/"
                    class="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Home</Link>
                </li>
                <li><Link href="About"
                    class="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">About</Link>
                </li>
                <li><Link href="Alumni"
                    class="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Alumni</Link>
                </li>
                <li><Link href="Events"
                    class="text-base font-normal text-gray-600 max-md:text-center transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Events</Link></li>
              </ul>
            </div>
            <div class="block">
              <h6 class="text-lg font-medium text-gray-900 max-md:text-center mb-7">Products</h6>
              <ul class="flex flex-col max-md:items-center gap-6">
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Figma
                    UI System</Link></li>
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Icons
                    Assets</Link></li>
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Responsive
                    Blocks</Link></li>
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Components
                    Library</Link></li>
              </ul>
            </div>
            <div class="block">
              <h6 class="text-lg font-medium text-gray-900 max-md:text-center mb-7">Resources</h6>
              <ul class="flex flex-col max-md:items-center gap-6">
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">FAQs</Link>
                </li>
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Quick
                    Start</Link></li>
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">Documentation</Link>
                </li>
                <li><Link href="javascritp:;"
                    class="text-base font-normal text-gray-600 transition-all duration-300 hover:text-emerald-800 focus-within:outline-0 focus-within:text-emerald-800">User
                    Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5  lg:pl-9 xl:pl-16 col-start-1 max-lg:row-start-1">
          <Link href="" class="mb-9 max-md:mx-auto max-md:flex max-md:w-full items-center justify-center">
          </Link>
          <h2 class="font-manrope font-semibold text-2xl max-md:text-center leading-9 text-gray-900 mt-9 mb-5">Join Our Newsletter for
            Exclusive Updates</h2>
          <p class="text-base font-normal text-gray-500 max-md:text-center mb-8">Subscribe to Our Exclusive Newsletter for the Latest
            Updates</p>
          <div class="relative max-w-xs max-md:max-w-full max-md:mx-auto  text-gray-500 focus-within:text-gray-900 mb-5">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            </div>
            <input type="text" id="default-search"
              class="block w-full md:max-w-xs pr-4 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
              placeholder="alumnnexus@gmail.com"/>
          </div>
          <button
            class="py-2.5 px-7 max-md:w-full max-md:text-center rounded-full max-md:mx-auto flex items-center justify-center bg-emerald-800 text-base font-semibold text-white mb-8 transition-all duration-500 hover:bg-emerald-900">Subscribe</button>
          <div class="flex items-center max-md:justify-center gap-5">
            <Link href="javascript:;"
              class="p-2 text-black rounded-full transition-all duration-500 hover:bg-emerald-800 focus-within:bg-emerald-800 focus-within:outline-0 hover:text-white focus-within:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13.5854 10.7242L19.79 3.66699H18.3197L12.9323 9.79466L8.62939 3.66699H3.6665L10.1733 12.9331L3.6665 20.3337H5.13687L10.8261 13.8626L15.3703 20.3337H20.3332L13.5851 10.7242H13.5854ZM11.5716 13.0147L10.9123 12.092L5.66666 4.75005H7.92505L12.1583 10.6753L12.8176 11.598L18.3204 19.2999H16.062L11.5716 13.0151V13.0147Z"
                  fill="currentColor" />
              </svg>
            </Link>
            <Link  href="javascript:;"
              class="p-2 h-10 w-10 flex items-center justify-center text-black rounded-full transition-all duration-500 hover:bg-emerald-800 focus-within:outline-0 focus-within:bg-emerald-800 hover:text-white focus-within:text-white">
              <p>
              <FontAwesomeIcon className='w-[23px] h-[23px]' icon={faFacebook}/>
              </p>
            </Link>
            <Link href="javascript:;"
              class="px-2 py-1.5 text-black rounded-full transition-all duration-500 hover:bg-emerald-800 focus-within:bg-emerald-800 focus-within:outline-0 hover:text-white focus-within:text-white">
              <p>
            <FontAwesomeIcon className='w-[23px] h-[23px]'  icon={faInstagram} />
              </p>
            </Link>
            <Link href="javascript:;"
              class="px-2 py-1.5 text-black group rounded-full transition-all duration-500 hover:bg-emerald-800 focus-within:bg-emerald-800 focus-within:outline-0 hover:text-white focus-within:text-white">
              <p>

             <FontAwesomeIcon className='w-[23px] h-[23px]'  icon={faYoutube} />
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center pt-7">
       <p class="text-sm font-normal text-gray-500"><Link href="https://pagedone.io/" >©AlumnNexus</Link> 2024, All rights reserved.</p>
      </div>
    </div>
  </section>
</> 
 )
}

export default Footer