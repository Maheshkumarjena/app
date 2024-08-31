"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useState } from "react";
import ProfileSettings from "@components/ProfileSettings";

const Page = () => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const [editMode, setEditMode] = useState("false");

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-100 "}`}>
      <div>
        <div
          className={`relative overflow-hidden ${
            theme === "dark" ? "bg-gray-900" : "bg-sky-700"
          } pb-32`}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-y-0 inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0 ${
              theme === "dark" ? "dark" : ""
            }`}
          >
            <div
              className={`absolute inset-0 flex ${
                theme === "dark" ? "dark" : ""
              }`}
            >
              <div
                className={`h-full w-1/2 ${
                  theme === "dark" ? "bg-gray-800" : ""
                }`}
              ></div>
              <div
                className={`h-full w-1/2 ${
                  theme === "dark" ? "bg-gray-800" : ""
                }`}
              ></div>
            </div>
            <div className="relative flex justify-center">
              <svg
                className={`flex-shrink-0 ${
                  theme === "dark" ? "text-gray-400" : ""
                }`}
                width="1750"
                height="308"
                viewBox="0 0 1750 308"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
                  fill={theme === "dark" ? "#0a4f76" : "#0369a1"}
                ></path>
                <path
                  d="M1465.84 308L16.816 0H1750v308h-284.16z"
                  fill={theme === "dark" ? "#0a527b" : "#065d8c"}
                ></path>
                <path
                  d="M1733.19 0L284.161 308H0V0h1733.19z"
                  fill={theme === "dark" ? "#065d8c" : "#0a527b"}
                ></path>
                <path
                  d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
                  fill={theme === "dark" ? "#0a4f76" : "#0a4f76"}
                ></path>
              </svg>
            </div>
          </div>
          <header className="relative py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1
                className={`text-3xl font-bold tracking-tight ${
                  theme === "dark" ? "text-white" : "text-white"
                }`}
              >
                Settings
              </h1>
            </div>
          </header>
        </div>

        <main className={`relative -mt-32 ${theme === "dark" ? "dark" : ""}`}>
          <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
            <div
              className={`overflow-hidden rounded-lg ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              } shadow`}
            >
              <div
                className={`divide-y ${
                  theme === "dark" ? "divide-gray-700" : "divide-gray-200"
                } lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x`}
              >
                <aside
                  className={`py-6 lg:col-span-3 ${
                    theme === "dark" ? "bg-gray-900" : ""
                  }`}
                >
                  <nav className="space-y-1">
                    <a
                      href="#"
                      className={`bg-blue-50 border-blue-500 text-blue-700 hover:bg-blue-50 hover:text-blue-700 group border-l-4 px-3 py-2 flex items-center text-sm font-medium ${
                        theme === "dark" ? "text-blue-300" : ""
                      }`}
                      aria-current="page"
                    >
                      <svg
                        className={`text-blue-500 group-hover:text-blue-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6 ${
                          theme === "dark" ? "text-blue-300" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      <span className="truncate">Profile</span>
                    </a>

                    <a
                      href="#"
                      className={`border-transparent text-gray-200 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium ${
                        theme === "dark" ? "text-gray-400" : ""
                      }`}
                    >
                      <svg
                        className={`text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6 ${
                          theme === "dark" ? "text-gray-500" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                        ></path>
                      </svg>
                      <span className="truncate">Account</span>
                    </a>

                    <a
                      href="#"
                      className={`border-transparent text-gray-200 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium ${
                        theme === "dark" ? "text-gray-400" : ""
                      }`}
                    >
                      <svg
                        className={`text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6 ${
                          theme === "dark" ? "text-gray-500" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.278-.278.607-.49.962-.662M18 10.5v-2.25a3 3 0 00-3-3h-9m12 6v-2.25a3 3 0 00-3-3m-9 6V6.75a3 3 0 013-3m0 0h6.25a3 3 0 013 3m-3 0a3 3 0 01-3 3M6 10.5v-2.25a3 3 0 00-3-3H1.25a6 6 0 007.029 5.912c.563.097 1.159-.026 1.563-.43L11.5 6.75h2.25v2.25h2.25v-2.25h2.25"
                        ></path>
                      </svg>
                      <span className="truncate">Security</span>
                    </a>
                  </nav>
                </aside>

                <section
                  className={`space-y-6 px-4 py-6 sm:px-6 lg:col-span-9 lg:px-8 lg:py-8 ${
                    theme === "dark" ? "bg-gray-800" : ""
                  }`}
                >
                  <div className="flex flex-row justify-between">
                    <h2
                      className={`text-lg font-medium ${
                        theme === "dark" ? "text-gray-400" : "text-gray-900"
                      }`}
                    >
                      Profile
                    </h2>
                    {editMode ? (  <button
                        onClick={handleEditClick}
                        className={`mt-1  black_btn px-2 rounded-full ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <p>save</p>
                      </button> ) : (
                      <button
                        onClick={handleEditClick}
                        className={`mt-1 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        <p>Edit</p>
                      </button>
                    )}

                  </div>
                  <hr></hr>
               {   ( editMode ? (
                  <ProfileSettings />
                  ):(
                  <div>
                    <div
                      className={`w-[90%] xl:w-[80%] items-center flex flex-col sm:flex-row mx-auto gap-5 ${
                        theme === "dark"
                          ? "bg-gray-800 text-white"
                          : "bg-white text-gray-900"
                      }`}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="User Profile"
                        className={`xl:w-[10rem] xl:h-[10rem] w-[30vw] h-[30vw] xsm:w-[20vw] xsm:h-[20vw] outline outline-2 outline-offset-2 rounded-full ${
                          theme === "dark"
                            ? "outline-blue-400"
                            : "outline-blue-500"
                        }`}
                      />

                      <div className="flex items-center h-[100%]">
                        <p
                          className={`${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Personalized Content Recommendations:
                          <br />
                          Use Case: Suggest relevant alumni profiles, job
                          postings, and events.
                          <br />
                          How: Integrate an AI-powered recommendation system
                          using LLMs to analyze user interactions and
                          preferences to recommend content tailored to each
                          user.
                        </p>
                      </div>
                    </div>

                    <div
                      className={`xl:w-[80%] w-[90%] mx-auto flex flex-col gap-4 items-center ${
                        theme === "dark"
                          ? "bg-gray-800 text-gray-400"
                          : "bg-white text-gray-700"
                      }`}
                    >
                      <p
                        className={`w-fit text-md ${
                          theme === "dark" ? "text-gray-400" : "text-gray-700"
                        }`}
                      >
                        {user.bio}
                      </p>

                      <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                        <div className="w-full flex flex-col xsm:flex-row gap-2 justify-center">
                          <div className="w-full">
                            <dl
                              className={`divide-y ${
                                theme === "dark"
                                  ? "text-white divide-gray-700"
                                  : "text-gray-900 divide-gray-200"
                              }`}
                            >
                              <div className="flex flex-col pb-3">
                                <dt
                                  className={`mb-1 md:text-lg ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  First Name
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {user.name}
                                </dd>
                              </div>
                              {/* Other fields go here */}
                              <div className="flex flex-col py-3">
                                <dt
                                  className={`mb-1 md:text-lg ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Company
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {user.company}
                                </dd>
                              </div>
                              <div className="flex flex-col py-3">
                                <dt
                                  className={`mb-1 md:text-lg ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Gender
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {user.gender}
                                </dd>
                              </div>
                            </dl>
                          </div>

                          <div className="w-full">
                            <dl
                              className={`divide-y ${
                                theme === "dark"
                                  ? "text-white divide-gray-700"
                                  : "text-gray-900 divide-gray-200"
                              }`}
                            >
                              <div className="flex flex-col pb-3">
                                <dt
                                  className={`mb-1 md:text-lg ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Location
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {user.location}
                                </dd>
                              </div>
                              {/* Other fields go here */}
                              <div className="flex flex-col pt-3">
                                <dt
                                  className={`mb-1 md:text-lg ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  Website
                                </dt>
                                <dd className="text-lg font-semibold">
                                  {user.website}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div
                        className={`fixed right-2 bottom-20 flex flex-col rounded-sm ${
                          theme === "dark"
                            ? "bg-gray-200/80 text-gray-700"
                            : "bg-gray-200 text-gray-500"
                        } hover:text-gray-600 hover:dark:text-gray-400`}
                      >
                        {user.linkedin && (
                          <a href={user.linkedin}>
                            <div className="p-2 hover:text-primary hover:dark:text-primary">
                              <svg
                                className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                {/* SVG content */}
                              </svg>
                            </div>
                          </a>
                        )}
                        {/* Other social links go here */}
                      </div>
                    </div>
                  </div>
                  ) )}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
