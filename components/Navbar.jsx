"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faUser } from "@fortawesome/free-solid-svg-icons";
import { toggleTheme } from "@Lib/store/features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

useEffect(() => {
  
  return () => {
    const theme = useSelector((state) => state.theme);
    if(theme==='dark'){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("light");
    }
  };
}, []);

  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // This will update the theme in the store and localStorage
    document.documentElement.classList.toggle("dark", theme === "light");
  };
  
 
  
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


  const theme = useSelector((state) => state.theme);

  return (
    <div className="overflow-x-hidden sticky top-0 ">
      <nav
        className={`navbar ${
          theme === "light"
            ? "bg-white border-gray-200"
            : "bg-gray-900 border-gray-800"
        } w-[100vw] py-2.5 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between max-w-[1500px] px-[3px] md:px-4  mx-auto">
          <Link href="#" className="z-50 flex items-center">
            <img
              src="./assets/Images/logo.png"
              className="h-9 mr-3 sm:h-9"
              alt="AlumNexus Logo"
            />
            <span
              z-50
              className={`self-center hidden xsm:flex text-xl font-semibold whitespace-nowrap ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              AlumNexus
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <div
              className={` px-[2vw] flex justify-center items-center ${
                theme === "dark" ? "dark:bg-gray-900" : "bg-white"
              }`}
            >
              <button 
                onClick={handleThemeToggle}
                className={` rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center`}
              >
                <FontAwesomeIcon
                  icon={theme === "dark" ? faSun : faMoon}
                  className={`text-${
                    theme === "dark" ? "yellow-500" : "violet-700"
                  } transition-colors duration-300`}
                  size="lg"
                />
              </button>
            </div>


            <Link
              href="/Signup"
              className={` black_btn  hidden sm:flex  rounded-[20px] text-white ${
                theme === "light" ? " text-white" : "bg-blue-700 text-white"
              } hover:${
                theme === "light" ? "bg-gray-900" : "  text-white"
              } focus:ring-2  font-medium rounded-lg text-sm px-2 sm:px-4  lg:px-4 py-[1vw] md:py-1.5 sm:mr-2 lg:mr-0 focus:outline-none   `}
            >
              <p>
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-1 sm:mr-2 md:mr-3 h-[13px] w-[13px]"
                />{" "}
              </p>
              <p>Signup</p>
            </Link>

                {/* signIN */}

            
                <Link
              href="/Signin"
              className={`  fill_animation_btn  flex flex-row rounded-[30px] text-white ${
                theme === "light" ? " text-white" : "bg-blue-700 text-white"
              } hover:${
                theme === "light" ? "bg-gray-900" : "bg-blue-700"
              } focus:ring-2  font-medium rounded-lg text-sm px-[2vw]  sm:px-4  lg:px-4 py-[0.5vw] md:py-1.5 sm:mr-2 lg:mr-0 focus:outline-none  ml-0 sm:ml-4`}
            >
              <p>
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-1 sm:mr-2 md:mr-3 h-[13px] w-[13px]"
                />{" "}
              </p>
              <p>Signin</p>
            </Link>


            <button
              onClick={() => handleBurgerClick()}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-[200px] lg:hidden hover:bg-gray-100  dark:hover:bg-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="burger w-6 h-6" 
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden cross w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              onClick={() => {
                handleBurgerClick();
              }}
              className={`ulElement  flex hidden lg:flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0  removeAnimation ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              <li>
                <Link
                  href="/"
                  className={`block py-2 pl-3 pr-4 ${
                    theme === "light"
                      ? "text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] "
                      : "text-white border-gray-800 hover:bg-gray-700"
                  } hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="About"
                  className={`block py-2 pl-3 pr-4 ${
                    theme === "light"
                      ? "text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] "
                      : "text-white border-gray-800 hover:bg-gray-700"
                  } hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="Alumni"
                  className={`block py-2 pl-3 pr-4 ${
                    theme === "light"
                      ? "text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] "
                      : "text-white border-gray-800 hover:bg-gray-700"
                  } hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0`}
                >
                  Alumni
                </Link>
              </li>
              {/* student  */}
              {/* <li>
                <Link
                  href="Students"
                  className={`block py-2 pl-3 pr-4 ${
                    theme === "light"
                      ? "text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] "
                      : "text-white border-gray-800 hover:bg-gray-700"
                  } hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0`}
                >
                  Students
                </Link>
              </li> */}
              <li>
                <Link
                  href="Events"
                  className={`block py-2 pl-3 pr-4 ${
                    theme === "light"
                      ? "text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] "
                      : "text-white border-gray-800 hover:bg-gray-700"
                  } hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0`}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="Resources"
                  className={`block py-2 pl-3 pr-4 ${
                    theme === "light"
                      ? "text-gray-900 border-b border-gray-100 hover:bg-[#F8F8F8] "
                      : "text-white border-gray-800 hover:bg-gray-700"
                  } hover:bg-[#F8F8F8] lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-400 lg:p-0`}
                >
                  Resources
                </Link>
              </li>
              <li>
              <Link
              href="/Signup"
              className={` black_btn  flex sm:hidden  hover:text-white  rounded-[20px] text-white ${
                theme === "light" ? " text-white" : "bg-blue-700 text-white"
              } hover:${
                theme === "light" ? "bg-gray-900" : "bg-blue-700"
              } focus:ring-2  font-medium rounded-lg text-sm px-2 sm:px-4  lg:px-4 py-[1vw] md:py-1.5 sm:mr-2 lg:mr-0 focus:outline-none mx-3  `}
            >
              <p>
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-1 sm:mr-2 md:mr-3 h-[13px] w-[13px]"
                />{" "}
              </p>
              <p>Signup</p>
            </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
