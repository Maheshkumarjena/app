// app/Alumni/[id].jsx
"use client"
import React from 'react';  // Add this line
import Image from 'next/image';
import alumniProfiles from '@app/StaticData';
import { useSelector } from 'react-redux';
// import {logo} from '@public/assets/Images'
const AlumniProfile = ({ params }) => {
  const id = params.id;

  // Find the alumni by ID
  const alumni = alumniProfiles.find((alum) => alum.id === parseInt(id));

  if (!alumni) {
    return <p>Alumni not found.</p>;
  }

  const theme = useSelector((state) => state.theme);

  return (
    <>
      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img
            src={alumni.coverImage || "../../assets/Images/logo.png"}
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[18rem] md:h-[16rem] sm:h-[3vw] xs:h-[3rem]"
          />
        <hr className={`${theme==="light" ? " bg-blue-500":" text-bg-gray-500"}`}></hr>
          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex flex-row ">
            <img
              src={alumni.image}
              alt="User Profile"
              className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem] sm:mr-4"
            />

            <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif">
              {alumni.name} 
            </h1>
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
              {alumni.bio}
            </p>

            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        First Name
                      </dt>
                      <dd className="text-lg font-semibold">
                        {alumni.name}
                      </dd>
                    </div>
                    {/* ..... */}
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                Positon
                          </dt>
                      <dd className="text-lg font-semibold">{alumni.title}</dd>
                    </div>
                    {/* ..... */}
                    {/* ..... */}
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Company
                      </dt>
                      <dd className="text-lg font-semibold">{alumni.company}</dd>
                    </div>
                    {/* ..... */}
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Gender
                      </dt>
                      <dd className="text-lg font-semibold">{alumni.gender}</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Location
                      </dt>
                      <dd className="text-lg font-semibold">
                        {alumni.location}
                      </dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Phone Number
                      </dt>
                      <dd className="text-lg font-semibold">{alumni.phone}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="text-lg font-semibold">{alumni.email}</dd>
                    </div>
                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Website
                      </dt>
                      <dd className="text-lg font-semibold">
                        {alumni.website}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
              {alumni.linkedin && (
                <a href={alumni.linkedin}>
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
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </div>
                </a>
              )}
              {alumni.twitter && (
                <a href={alumni.twitter}>
                  <div className="p-2 hover:text-primary hover:dark:text-primary">
                    <svg
                      className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.95 8.928c-.277.117-.576.195-.887.232a1.696 1.696 0 0 0 .76-1.275 3.343 3.343 0 0 1-1.066.411 1.682 1.682 0 0 0-2.869 1.539c0 .131.015.259.044.38a4.767 4.767 0 0 1-3.452-1.755 1.684 1.684 0 0 0-.228.847c0 .585.297 1.097.751 1.397a1.671 1.671 0 0 1-.762-.21v.021c0 .814.575 1.491 1.336 1.641a1.676 1.676 0 0 1-.756.029c.214.668.84 1.153 1.577 1.166a3.379 3.379 0 0 1-2.092.72c-.137 0-.274-.007-.41-.023a4.757 4.757 0 0 0 2.573.753c3.085 0 4.774-2.553 4.774-4.774 0-.073-.002-.147-.004-.22a3.37 3.37 0 0 0 .825-.861z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              )}
              {alumni.github && (
                <a href={alumni.github}>
                  <div className="p-2 hover:text-primary hover:dark:text-primary">
                    <svg
                      className="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-gray-700 dark:text-gray-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path fillRule="evenodd"
                        d="M12 2.287a10.717 10.717 0 0 0-3.396.654C6.182 4.581 4.564 6.672 4.564 9.014c0 2.552 1.637 4.738 3.887 5.501a4.52 4.52 0 0 0-.409-1.375c-.35-1.16-1.095-2.108-2.021-2.771a3.59 3.59 0 0 1 .83-1.316c.873-.716 2.185-1.287 3.57-1.287 1.386 0 2.697.573 3.57 1.287a3.59 3.59 0 0 1 .83 1.316c-.926.663-1.671 1.611-2.021 2.771a4.52 4.52 0 0 0-.409 1.375c2.25-.763 3.887-2.949 3.887-5.501 0-2.342-1.618-4.433-4.04-5.073A10.717 10.717 0 0 0 12 2.287zm-1.646 6.313a1.37 1.37 0 1 1 2.743 0 1.37 1.37 0 0 1-2.743 0zm-2.453 3.426a1.464 1.464 0 1 1 1.464-1.464 1.464 1.464 0 0 1-1.464 1.464zm5.058 0a1.464 1.464 0 1 1 1.464-1.464 1.464 1.464 0 0 1-1.464 1.464z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AlumniProfile;
