"use client"
import "@styles/globals.css";
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux'; // Use 'useSelector' correctly

const Page = () => {
  const theme = useSelector((state) => state.theme); // Get the theme from Redux

  const isDarkMode = theme === 'dark';

  return (
    <div className={`w-screen h-screen bg-gradient-to-m-r backdrop-blur-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="min-h-[90vh] max-w-[330px] m-auto flex flex-col justify-center">
        <div className="flex justify-between rounded-tl-full rounded-tr-full">
          <button 
            id="StudentsBtn" 
            className={`glassmorphism w-full backdrop-blur-lg rounded-tl-full rounded-tr-full w-[150px] relative inline-flex items-center justify-center px-5 py-1.5 text-sm font-support text-white border border-black overflow-hidden transition-all duration-300 ease-linear ${isDarkMode ? 'bg-blue-600' : 'bg-gray-100'} group border-b-0`}>
            <span className={`absolute inset-0 transform -translate-x-full transition-all duration-300 ease-linear ${isDarkMode ? 'bg-blue-600' : 'bg-blue-600'} group-hover:translate-x-0 z-0`}></span>
            <span className={`relative z-10 ${isDarkMode ? 'text-white' : 'text-black'} group-hover:text-white`}>
              <Link href='Login/Student'>
                Alumni Login
              </Link>
            </span>
          </button>
        </div>

        <div className="min-w-md sm:mx-auto sm:w-full sm:max-w-md">
          <div className={`glassmorphism border-[1px] border-black py-8 px-4 shadow sm:rounded-b-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} placeholder-gray-500 ${isDarkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm`}
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} placeholder-gray-500 ${isDarkMode ? 'text-white' : 'text-gray-900'} focus:outline-none focus:ring-blue-500 focus:border-black focus:z-10 sm:text-sm bg-transparent`}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className={`h-4 w-4 ${isDarkMode ? 'text-blue-500' : 'text-blue-600'} focus:ring-blue-500 border-gray-300 rounded`}
                  />
                  <label htmlFor="remember_me" className={`ml-2 block text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="#" className={`font-medium ${isDarkMode ? 'text-blue-500' : 'text-blue-600'} hover:text-blue-500`}>
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`black_btn  group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[30px] text-white ${isDarkMode ? 'bg-blue-700 hover:bg-green-800' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-2 ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <Link href='#' className={`w-full flex items-center justify-center px-8 py-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} glassmorphism hover:bg-gray-50`}>
                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" />
                  </Link>
                </div>

                <div>
                  <Link href='#' className={`w-full flex items-center justify-center px-8 py-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} glassmorphism hover:bg-gray-50`}>
                    <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter" />
                  </Link>
                </div>

                <div>
                  <Link href="#" className={`w-full flex items-center justify-center px-8 py-3 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-md shadow-sm text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} glassmorphism hover:bg-gray-50`}>
                    <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="Google" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
