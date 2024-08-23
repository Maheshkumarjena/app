import "@styles/globals.css";
import React from 'react';
import Link from 'next/link';


const Page = () => {
  return (
    <div className="min-h-[90vh]  flex flex-col justify-center  sm:px-6 lg:px-8 blue_gr">
      
        <div className="flex justify-between ">
        <button id="StudentsBtn" class=" w-[100px] relative  inline-flex items-center justify-center px-5 py-1.5 text-sm font-support text-blue-700 border border-blue-700 rounded-tl-full  overflow-hidden transition-all duration-300 ease-linear bg-transparent group border-b-0">
  <span class="absolute inset-0 bg-blue-700 transform -translate-x-full transition-all duration-300 ease-linear group-hover:translate-x-0 z-0"></span>
  <span class="relative text-blue-700 group-hover:text-white z-10">
  Student
  </span>
</button>


        <button id="AlumniBtn" class=" w-[100px]   relative  inline-flex items-center justify-center px-5 py-1.5 text-sm font-support text-blue-700 border border-blue-700 rounded-tr-full  overflow-hidden transition-all duration-300 ease-linear bg-transparent group border-b-0">
        <span class="absolute inset-0 bg-blue-700 transform translate-x-full transition-all duration-300 ease-linear group-hover:translate-x-0 z-0"></span>
  <span class="relative text-blue-700 group-hover:text-white z-10">
  Alumni
  </span>
</button>

        </div>
      <div className=" border border-blue-600 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-b-lg sm:px-10">
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
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="outline_btn group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                <span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <Link href='#' className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" />
                </Link>
              </div>

              <div>
                <Link href='#' className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter" />
                </Link>
              </div>

              <div>
                <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="Google" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
