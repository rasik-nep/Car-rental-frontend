"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { OpenWhatsappProfile } from "@/services/Whatsapp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is on the menu button
      const menuButton = (event.target as HTMLElement).closest("button");
      if (menuButton) return; // Don't close if clicking the menu button

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full max-h-[10vh]">
      <div className="max-w-[90vw] mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[10vh]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={70}
                height={70}
                className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link
              href="/about"
              className={`text-text-700 hover:text-text-300 px-3 py-1 rounded-md text-lg ${
                pathname === "/about" ? "underline" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/cars"
              className={`text-text-700 hover:text-text-300 px-3 py-1 rounded-md text-lg ${
                pathname === "/cars" ? "underline" : ""
              }`}
            >
              Cars
            </Link>
            <button
              className="bg-text-700 text-white px-6 py-1 rounded-4xl text-lg hover:bg-text-700/90 transition-colors cursor-pointer"
              onClick={() => OpenWhatsappProfile()}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-1 rounded-md text-text-700 hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-5 w-5`}
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
                className={`${isMenuOpen ? "block" : "hidden"} h-5 w-5`}
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
      <div
        ref={mobileMenuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden absolute w-full z-50 top-[10vh] left-0`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-sm shadow-lg">
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base ${
              pathname === "/about" ? "underline" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/cars"
            onClick={() => setIsMenuOpen(false)}
            className={`text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base ${
              pathname === "/cars" ? "underline" : ""
            }`}
          >
            Cars
          </Link>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              OpenWhatsappProfile();
            }}
            className="bg-gray-700 text-white block px-3 py-2 rounded-md text-base hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
