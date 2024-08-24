"use client"
import "@styles/globals.css";
import React from 'react';
import Link from 'next/link';
import { useState, useEffect } from "react";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-m-r backdrop-blur-lg bg-white/30  from-green-100 to-black  ">

    <div className="min-h-[90vh] max-w-[330px] m-auto flex flex-col justify-center    ">
      
        <div className="flex justify-between rounded-tl-full rounded-tr-full  ">

        <button id="StudentsBtn" class=" glassmorphism  backdrop-blur-lg bg-gray-100 rounded-tl-full rounded-tr-full w-[150px] relative  inline-flex items-center justify-center px-5 py-1.5 text-sm font-support text-white border border-black   overflow-hidden transition-all duration-300 ease-linear bg-transparent group border-b-0">
  <span class="absolute inset-0 bg-violet-600 transform -translate-x-full transition-all duration-300 ease-linear group-hover:translate-x-0 z-0"></span>
  <span class="relative text-black group-hover:text-white z-10">
  <Link href='Login/Student'>
    Student Login
  </Link>
  </span>
</button>


        <button id="AlumniBtn" class=" glassmorphism rounded-tl-full rounded-tr-full w-[150px]   relative  inline-flex items-center justify-center px-5 py-1.5 text-sm font-support text-green-500 border border-black   overflow-hidden transition-all duration-300 ease-linear bg-transparent group border-b-0">
        <span class="absolute inset-0 bg-violet-600 transform translate-x-full transition-all duration-300 ease-linear group-hover:translate-x-0 z-0"></span>
  <span class="relative text-black group-hover:text-white z-10">
<Link href="Login/Alumni">Alumni Login</Link>
  </span>
</button>
    </div >


      <div className="  min-w-md  sm:mx-auto sm:w-full sm:max-w-md">
        <div className="   glassmorphism border-[1px] border-black  bg-gray-100  py-8 px-4 shadow sm:rounded-b-lg ">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-black focus:z-10 sm:text-sm bg-transparent"
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
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-green-600 hover:text-green-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="outline_btn group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign in
              </button>

            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 opacity-[122]  text-black">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <Link href='#' className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 glassmorphism hover:bg-gray-50">
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" />
                </Link>
              </div>

              <div>
                <Link href='#' className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 glassmorphism hover:bg-gray-50">
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter" />
                </Link>
              </div>

              <div>
                <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 glassmorphism hover:bg-gray-50">
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
