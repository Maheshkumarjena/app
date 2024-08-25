"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Footer = () => {
    // Get the current theme from Redux state
    const theme = useSelector((state) => state.theme);

    return (
        <footer
            className={`pt-3  pb-7 w-full px-4 md:px-6 lg:px-8 mt-16 ${
                theme === "dark" ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}
        >
            <div className="mx-auto max-w-[1500px] ">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-12 lg:divide-x-2 ${
                        theme === "dark" ? 'divide-gray-600' : 'divide-gray-200'
                    } pb-10 lg:pb-14 border-b-2 ${
                        theme === "dark" ? 'border-gray-700' : 'border-gray-200'
                    }`}
                >
                    <div className="lg:col-span-7 pr-9 xl:pr-16">
                        <h5 className="text-lg font-medium mb-7 text-center lg:text-left">
                            Contact
                        </h5>
                        <div
                            className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                                theme === "dark" ? 'border-b-2 border-gray-700' : 'border-b-2 border-gray-200'
                            } pb-12`}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-2.5">
                                <Link className="flex items-center gap-3" href="#">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p className="text-base font-normal">
                                        61-A, Odisha, India.
                                    </p>
                                </Link>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-2.5">
                                <Link className="flex items-center gap-3" href="#">
                                    <FontAwesomeIcon icon={faPhone} />
                                    <p className="text-base font-normal">
                                        +9xxxxxxxxx
                                    </p>
                                </Link>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-2.5">
                                <Link className="flex items-center gap-3" href="#">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p className="text-base font-normal">
                                        alumnexus@gmail.com
                                    </p>
                                </Link>
                            </div>
                        </div>


                        <div
                            className={`flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14 xl:gap-24 ${
                                theme === "dark" ? 'text-gray-300' : 'text-gray-700'
                            } pt-14`}
                        >
                            <div className="block">
                                <h6 className="text-lg font-medium mb-7 text-center lg:text-left">
                                    AlumnNexus
                                </h6>
                                <ul className="flex flex-col items-center gap-6">
                                    <li>
                                        <Link
                                            href="/"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/About"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/Alumni"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            Alumni
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            <div className="block">
                                <h6 className="text-lg font-medium mb-7 text-center lg:text-left">
                                    AlumnNexus
                                </h6>
                                <ul className="flex flex-col items-center gap-6">
                                    <li>
                                        <Link
                                            href="/"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/About"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/Alumni"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            Alumni
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/*  */}
                            <div className="block">
                                <h6 className="text-lg font-medium mb-7 text-center lg:text-left">
                                    AlumnNexus
                                </h6>
                                <ul className="flex flex-col items-center gap-6">
                                    <li>
                                        <Link
                                            href="/"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/About"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/Alumni"
                                            className={`text-base font-normal transition-colors duration-300 ${
                                                theme === "dark"
                                                    ? 'text-gray-400 hover:text-[#25517e]'
                                                    : 'text-gray-600 hover:text-[#003d5e]'
                                            }`}
                                        >
                                            Alumni
                                        </Link>
                                    </li>
                                </ul>
                            </div>



                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-12 xl:pl-16">
                        <div className="flex flex-col items-center lg:items-start gap-4">
                            <h5 className="text-lg font-medium text-center lg:text-left">
                                Follow us
                            </h5>
                            <div className="flex gap-6">
                                <Link
                                    href="#"
                                    className={`text-base font-normal transition-colors duration-300 ${
                                        theme === "dark"
                                            ? 'text-gray-400 hover:text-[#25517e]'
                                            : 'text-gray-600 hover:text-[#003d5e]'
                                    }`}
                                >
                                    Facebook
                                </Link>
                                <Link
                                    href="#"
                                    className={`text-base font-normal transition-colors duration-300 ${
                                        theme === "dark"
                                            ? 'text-gray-400 hover:text-[#25517e]'
                                            : 'text-gray-600 hover:text-[#003d5e]'
                                    }`}
                                >
                                    Twitter
                                </Link>
                                <Link
                                    href="#"
                                    className={`text-base font-normal transition-colors duration-300 ${
                                        theme === "dark"
                                            ? 'text-gray-400 hover:text-[#25517e]'
                                            : 'text-gray-600 hover:text-[#003d5e]'
                                    }`}
                                >
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <p className="text-sm font-normal">
                                © 2024 AlumnNexus. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
