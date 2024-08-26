"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Alumni from "@components/Alumni";
import AlumniCard from "@components/AlumniCard";
import alumniProfiles from "@app/StaticData";

const SearchInput = () => {
  const theme = useSelector((state) => state.theme);
  const isDarkMode = theme === "dark";

  return (
    <>
      <div className="max-w-1500 px-[2vw] md:px-4 lg:px-6">
        <div
          className={`pt-[3vw] ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } outline-none focus:outline-none`}
        >
          <div className="relative flex">
            {/* drop down */}
            <div
              className={`justify-center items-center ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div className="dropdown inline-block relative">
                <button
                  className={`${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-300 text-gray-700"
                  } font-semibold py-2 px-4 rounded inline-flex items-center`}
                >
                  <span className="mr-1">Filter</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>

                <ul
                  className={`dropdown-menu min-w-fit-content glassmorphism absolute hidden ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  } pt-1`}
                >
                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                        <span className="flex gap-2">
                          <span>Prajwal Hallale</span>
                        </span>
                      </summary>

                      <article className="px-4 pb-4">
                        <ul className="flex flex-col gap-4 pl-2 mt-4">
                          <li className="flex gap-2">
                            <a href="http://127.0.0.1:8000/user/dashboard">
                              Dashboard
                            </a>
                          </li>
                          <li className="flex gap-2">
                            <a href="http://127.0.0.1:8000/user/study-lists">
                              Study Lists
                            </a>
                          </li>
                          <li className="flex gap-2">
                            <a href="http://127.0.0.1:8000/user/contribution">
                              Your contribution
                            </a>
                          </li>
                          <li className="flex gap-2">
                            <a href="http://127.0.0.1:8000/user/settings">
                              Settings
                            </a>
                          </li>
                          <form
                            action="http://127.0.0.1:8000/auth/logout"
                            method="POST"
                          >
                            <input
                              type="hidden"
                              name="_token"
                              value="ymEkCLBFpgkdaSbidUArRsdHbER5DkT6ByS3eJYb"
                            />
                            <button
                              type="submit"
                              className="text-red-500 text-sm px-2 py-1 hover:bg-red-200 rounded-md"
                            >
                              Log Out
                            </button>
                          </form>
                        </ul>
                      </article>
                    </details>
                  </li>

                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                        <span className="flex gap-2">
                          <span>Recent Documents</span>
                        </span>
                      </summary>
                      <article className="px-4 pb-4">
                        <ul className="flex flex-col gap-1 pl-2">
                          <li>
                            <a href="">Document title</a>
                          </li>
                          <li>
                            <a href="">Document title</a>
                          </li>
                          <li>
                            <a href="">Document title</a>
                          </li>
                        </ul>
                      </article>
                    </details>
                  </li>

                  <li>
                    <details className="group">
                      <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                        <span className="flex gap-2">
                          <span>Popular Courses</span>
                        </span>
                      </summary>
                      <article className="px-4 pb-4">
                        <ul className="flex flex-col gap-1 pl-2">
                          <li>
                            <a href="">Course title</a>
                          </li>
                          <li>
                            <a href="">Course title</a>
                          </li>
                          <li>
                            <a href="">Course title</a>
                          </li>
                        </ul>
                      </article>
                    </details>
                  </li>
                </ul>
              </div>
            </div>

            <input
              type="search"
              name="search"
              placeholder="Search"
              className={`h-10 flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-500 text-gray-900"
              }`}
              autoComplete="off"
              spellCheck="false"
              required
              step="any"
              autoCapitalize="none"
              autoFocus
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 mr-2 flex items-center px-2"
            >
              <FontAwesomeIcon
                icon={faSearch}
                className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
              />
            </button>
          </div>
        </div>
      </div>
      <Alumni renderAll="true" />
    </>
  );
};

export default SearchInput;
