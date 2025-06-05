"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[90vw] mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={90}
                height={90}
                className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-xl"
            >
              About Us
            </Link>
            <Link
              href="/cars"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-xl"
            >
              Cars
            </Link>
            <button className="bg-text-700 text-white px-10 py-2 rounded-4xl text-xl hover:bg-text-700/90 transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-sm">
          <Link
            href="/about"
            className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base"
          >
            About
          </Link>
          <Link
            href="/cars"
            className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base"
          >
            Cars
          </Link>
          <button className="bg-gray-700 text-white block px-3 py-2 rounded-md text-base hover:bg-primary/90 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
