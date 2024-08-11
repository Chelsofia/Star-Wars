"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to handle menu closing
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#f59e0b] border-b border-amber-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Logo and Navigation Links */}
          <div className="flex flex-1 items-center justify-center md:justify-between">
            {/* Logo */}
            <Link className="flex flex-shrink-0 items-center" href="/">
              <span className="text-white text-3xl font-extrabold">
                STAR WARS
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2 ml-6">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-black" : ""
                } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold`}
              >
                HOME
              </Link>
              <Link
                href="/films"
                className={`${
                  pathname === "/films" ? "bg-black" : ""
                } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold`}
              >
                FILMS
              </Link>
              <Link
                href="/people"
                className={`${
                  pathname === "/people" ? "bg-black" : ""
                } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold`}
              >
                PEOPLE
              </Link>
              <Link
                href="/planets"
                className={`${
                  pathname === "/planets" ? "bg-black" : ""
                } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 font-bold`}
              >
                PLANETS
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="absolute inset-x-0 top-full mt-2 origin-top-left bg-amber-500 border border-amber-300 rounded-md shadow-lg"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "bg-black" : ""
                  } text-white block rounded-md px-3 py-2 text-base font-medium`}
                  onClick={handleLinkClick}
                >
                  HOME
                </Link>
                <Link
                  href="/films"
                  className={`${
                    pathname === "/films" ? "bg-black" : ""
                  } text-white block rounded-md px-3 py-2 text-base font-medium`}
                  onClick={handleLinkClick}
                >
                  FILMS
                </Link>
                <Link
                  href="/people"
                  className={`${
                    pathname === "/people" ? "bg-black" : ""
                  } text-white block rounded-md px-3 py-2 text-base font-medium`}
                  onClick={handleLinkClick}
                >
                  PEOPLE
                </Link>
                <Link
                  href="/planets"
                  className={`${
                    pathname === "/planets" ? "bg-black" : ""
                  } text-white block rounded-md px-3 py-2 text-base font-medium`}
                  onClick={handleLinkClick}
                >
                  PLANETS
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
