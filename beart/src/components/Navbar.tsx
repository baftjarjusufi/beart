"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-black px-2 py-3 fixed top-0 left-0 w-full z-50 shadow-lg">
            {/* Wave Background in Navbar */}
            {/* First Wave for Medium and Larger Devices */}
            <div className="absolute top-0 left-0 w-full">
                <img
                    src="/wavenav.svg"
                    alt="Navbar Wave"
                    className="hidden sm:block w-full h-[120px] object-cover"
                />
                {/* Second Wave for Small Devices */}
                <img
                    src="/wavenavsmall.svg"
                    alt="Navbar Wave Small"
                    className="sm:hidden w-full h-[90px] object-cover"
                />
            </div>

            {/* Navbar Content */}
            <div className="container mx-auto flex justify-between items-center relative z-30">
                {/* Logo - Positioned in the top-left corner */}
                <h1 className="absolute top-0 left-4 text-2xl font-extrabold text-black">
                    Beart
                </h1>

                {/* Navbar Links Container (Dropdown on small screens) */}
                <div className="flex justify-between w-full items-center relative">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-grow justify-center space-x-6">
                        <Link href="/beart/public" className="hover:text-gray-400">Home</Link>
                        <Link href="/portfolio" className="hover:text-gray-400 transition">Portfolio</Link>
                        <Link href="/services" className="hover:text-gray-400 transition">Services</Link>
                        <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
                    </div>

                    {/* Hamburger Menu - Positioned more above */}
                    <div className="md:hidden flex items-center absolute right-4 top-2">
                        <button onClick={toggleMenu}>
                            {/* Hamburger Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu - Positioned in the top-right corner */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black text-white px-6 py-4 mt-12 right-4 w-48`}>
                <Link href="/beart/public" className="block py-2">Home</Link>
                <Link href="/portfolio" className="block py-2">Portfolio</Link>
                <Link href="/services" className="block py-2">Services</Link>
                <Link href="/contact" className="block py-2">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
