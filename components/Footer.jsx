import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const theme = useSelector((state) => state.theme); // Access theme state

  return (
    <section
      className={`pt-3 max-w-[1500px] pb-7 w-full px-[1px] md:px-4 lg:px-6 mt-[4vw] ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="mx-auto">
        <div className={`grid grid-cols-1 max-lg:gap-10 lg:grid-cols-12 lg:divide-x-2 divide-gray-200 pb-10 lg:pb-14 border-b-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="lg:col-span-7 pr-9 xl:pr-16">
            <h5 className="text-lg font-medium max-md:text-center mb-7">Contact</h5>
            <div className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 pb-12 border-b-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <Link className="flex flex-row h-5 items-center gap-3" href="">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="text-base font-normal text-gray-400">61-A, Odisha, India.</p>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <Link className="flex flex-row h-5 items-center gap-3" href="">
                  <FontAwesomeIcon icon={faPhone} />
                  <p className="text-base font-normal text-gray-400">+9xxxxxxxxx</p>
                </Link>
              </div>

              <div className="flex flex-col md:flex-row min-[1024px]:flex-col min-[1160px]:flex-row items-center gap-2.5">
                <Link className="flex flex-row h-5 items-center gap-3" href="">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <p className="text-base font-normal text-gray-400">alumnexus@gmail.com</p>
                </Link>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center max-lg:justify-between gap-8 lg:gap-14 xl:gap-24 pt-14 justify-between ">
              <div className="block">
                <h6 className="text-lg font-medium mb-7 max-md:text-center">AlumnNexus</h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li>
                    <Link
                      href="/"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="About"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="Alumni"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="Events"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="text-lg font-medium max-md:text-center mb-7">Products</h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Figma UI System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Icons Assets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Responsive Blocks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Components Library
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h6 className="text-lg font-medium max-md:text-center mb-7">Resources</h6>
                <ul className="flex flex-col max-md:items-center gap-6">
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Quick Start
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="javascritp:;"
                      className={`text-base font-normal transition-all duration-300 ${
                        theme === 'dark' ? 'hover:text-emerald-400' : 'hover:text-emerald-800'
                      }`}
                    >
                      User Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-9 xl:pl-16 col-start-1 max-lg:row-start-1">
            <Link href="" className="mb-9 max-md:mx-auto max-md:flex max-md:w-full items-center justify-center"></Link>
            <h2 className="font-manrope font-semibold text-2xl max-md:text-center leading-9 mt-9 mb-5">
              Join Our Newsletter for Exclusive Updates
            </h2>
            <p className="text-base font-normal max-md:text-center mb-8">
              Subscribe to Our Exclusive Newsletter for the Latest Updates
            </p>
            <div className="relative max-w-xs max-md:max-w-full max-md:mx-auto mb-5">
              <input
                type="text"
                id="default-search"
                className={`block w-full md:max-w-[280px] p-4 pl-2 pr-24 text-sm font-normal ${
                  theme === 'dark' ? 'bg-gray-700 text-white placeholder-gray-300 border-gray-600' : 'bg-white text-gray-900 placeholder-gray-400 border-gray-300'
                } rounded-full border-2 focus:ring-2 ${
                  theme === 'dark' ? 'focus:ring-emerald-400' : 'focus:ring-emerald-800'
                } outline-none`}
                placeholder="Enter Your Email"
                required
              />
              <button
                type="submit"
                className={`absolute right-2.5 bottom-[5px] ${
                  theme === 'dark' ? 'bg-emerald-400 text-white' : 'bg-emerald-800 text-white'
                } focus:ring-2 focus:outline-none focus:ring-emerald-800 font-medium rounded-full text-sm px-5 py-2`}
              >
                Subscribe
              </button>
            </div>
            <div className="flex gap-5 justify-center md:justify-start max-md:pt-12">
              <Link href="" className="rounded-full text-white bg-[#3b5998] text-lg h-[30px] w-[30px]">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="" className="rounded-full text-white bg-[#d62976] text-lg h-[30px] w-[30px]">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <p className="text-center text-sm font-normal text-gray-400">
            Copyright © 2024 Techical Education Department, Rajasthan, India. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
