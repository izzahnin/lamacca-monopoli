import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-40 sticky top-0 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <h1 className="text-navy px-2 rounded font-bold">Lamacca <span className="text-aqua">Monopoli</span></h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline gap-4">
                <Link to="/" className="text-navy hover:bg-gray-200 hover:text-navy px-3 py-2 rounded text-sm font-medium">
                  Beranda
                </Link>
                <Link to="/about" className="text-navy hover:bg-gray-200 hover:text-navy px-3 py-2 rounded text-sm font-medium">
                  Tentang Kami
                </Link>
                <Link to="/belajar" className="text-navy hover:bg-gray-200 hover:text-navy px-3 py-2 rounded text-sm font-medium">
                  Belajar
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded text-gray-400 hover:text-navy hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="flex flex-col gap-1 px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-navy hover:bg-gray-200 hover:text-navy block px-3 py-2 rounded text-base font-medium">
            Beranda
          </Link>
          <Link to="/about" className="text-navy hover:bg-gray-200 hover:text-navy block px-3 py-2 rounded text-base font-medium">
            Tentang Kami
          </Link>
          <Link to="/belajar" className="text-navy hover:bg-gray-200 hover:text-navy block px-3 py-2 rounded text-base font-medium">
            Belajar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
