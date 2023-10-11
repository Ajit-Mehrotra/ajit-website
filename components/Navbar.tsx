"use client";

import { useState } from 'react';
import Link from 'next/link';

//just used chatgpt to generate this. Way too lazy to do this fr. 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link className="flex items-center py-4 px-2" href="/">

                                <span className="font-semibold text-gray-500 text-lg ">Ajit Mehrotra</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link className="py-4 px-2 text-gray-500 border-b-4 hover:border-gray-600 transition duration-300" href="/#experience">
                                Experience
                            </Link>
                            <Link href="#takeaways" className="py-4 px-2 text-gray-500 border-b-4 hover:border-gray-600 transition duration-300">
                                Takeaways
                            </Link>
                            <Link className="py-4 px-2 text-gray-500 border-b-4 hover:border-gray-600 transition duration-300" href="#values">
                                Values
                            </Link>
                            <Link className="py-4 px-2 text-gray-500 border-b-4 hover:border-gray-600 transition duration-300" href="Me">
                                Hobbies
                            </Link>
                            <Link className="py-4 px-2 text-gray-500 border-b-4 hover:border-gray-600 transition duration-300" href="#contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                className="w-6 h-6 text-gray-500"
                                x-description="Heroicon name: outline/menu"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Link className={`block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300 `} href="#experience">
                        Experience
                    </Link>
                    <Link href="#takeaways" className={`block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300`}>
                        Takeaways
                    </Link>
                    <Link href="#values" className={`block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300 `}>
                        Values
                    </Link>
                    <Link className={`block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300 `} href="/Me">
                        Hobbies
                    </Link>
                    <Link className={`block py-2 px-4 text-sm hover:bg-gray-200 transition duration-300 `} href="#contact">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
