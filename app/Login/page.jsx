"use client";
import "@styles/globals.css";
import React from 'react';
import { useSelector } from 'react-redux';
import Link from "next/link";

const Page = () => {
    const theme = useSelector((state) => state.theme);

    // Define the class names and colors based on the theme
    const containerClass = theme === 'dark' 
        ? " w-screen mx-w-[1500px] bg-gray-900  pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-800 sm:mx-auto  sm:rounded-lg sm:px-10"
        : " w-screen mx-w-[1500px] bg-white  pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto  sm:rounded-lg sm:px-10";

    const cardClass = theme === 'dark' 
        ? "bg-gray-900 shadow-md rounded-lg p-8 w-full "
        : "bg-white shadow-md rounded-lg p-8 w-full";

    const textColor = theme === 'dark' ? "text-white" : "text-gray-900";

    const buttonClassStudent = theme === 'dark' 
        ? "bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 transition"
        : "bg-[#0077b5] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#005582] transition";

    const buttonClassAlumni = theme === 'dark' 
        ? "bg-green-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-800 transition"
        : "bg-[#0077b5] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#005582] transition";

    const detailsTextColor = theme === 'dark' ? "text-gray-300" : "text-neutral-600";
    const summaryRotateClass = "transition group-open:rotate-180";
    const detailsAnimateClass = "group-open:animate-fadeIn";

    return (
        <div className={`   ${containerClass} max-w-[1500px] `}>
            <div className="mx-auto px-[2vw]  md:px-4 ">
                <div className={`max-w-xl m-auto ${cardClass}`}>
                    <h1 className={`text-2xl font-bold mb-6 ${textColor}`}>Login as</h1>
                    <div className="flex flex-col gap-4">
                    {/* Students */}
                      <div className="flex flex-col md:flex-row justify-between  gap-2 sm:gap-4 md:gap-6 lg:gap-10">
                        <Link href="Login/Student" 
                            className={` h-fit w-fit ${buttonClassStudent}`}
                        >
                            Student
                        </Link>
                        <div className="py-2">
                        <details className="group">
                            <summary className={`flex cursor-pointer list-none items-center justify-between font-medium  `}>
                                <span>Who should log in as student?</span>
                                <span className={summaryRotateClass}>
                                    <svg className="summaryRotateClass" fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className={`${detailsAnimateClass} mt-3 ${detailsTextColor}`}>
                                Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                      </div>
                      {/* alumni */}
                      <div className="flex flex-col md:flex-row justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-10">
                        <Link href="Login/Alumni " 
                            className={` h-fit w-fit ${buttonClassStudent}`}
                        >
                            Alumni
                        </Link>
                        <div className="py-2">
                        <details className="group">
                            <summary className={`flex cursor-pointer list-none items-center justify-between font-medium  `}>
                                <span>Who should log in as Alumni?</span>
                                <span className={summaryRotateClass}>
                                    <svg className="summaryRotateClass" fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className={`${detailsAnimateClass} mt-3 ${detailsTextColor}`}>
                                Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                      </div>
                    </div>
                </div>
    
                <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                  <div className="text-3xl font-bold py-5">Common questions asked  by users , <br/> Things to know before logging in</div>

                    <div className="py-5">
                        <details className="group">
                            <summary className={`flex cursor-pointer list-none items-center justify-between font-medium  `}>
                                <span>What do you need to Login?</span>
                                <span className={summaryRotateClass}>
                                    <svg className="summaryRotateClass" fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className={`${detailsAnimateClass} mt-3 ${detailsTextColor}`}>
                                Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    
                    <div className="py-5">
                        <details className="group">
                            <summary className={`flex cursor-pointer list-none items-center justify-between font-medium  `}>
                                <span>What do you need to Login?</span>
                                <span className={summaryRotateClass}>
                                    <svg className="summaryRotateClass" fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className={`${detailsAnimateClass} mt-3 ${detailsTextColor}`}>
                                Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    
                    <div className="py-5">
                        <details className="group">
                            <summary className={`flex cursor-pointer list-none items-center justify-between font-medium  `}>
                                <span>What do you need to Login?</span>
                                <span className={summaryRotateClass}>
                                    <svg className="summaryRotateClass" fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className={`${detailsAnimateClass} mt-3 ${detailsTextColor}`}>
                                Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    
                    <div className="py-5">
                        <details className="group">
                            <summary className={`flex cursor-pointer list-none items-center justify-between font-medium  `}>
                                <span>What do you need to Login?</span>
                                <span className={summaryRotateClass}>
                                    <svg className="summaryRotateClass" fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <p className={`${detailsAnimateClass} mt-3 ${detailsTextColor}`}>
                                Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.
                            </p>
                        </details>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Page;
