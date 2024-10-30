import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">
            Watch It
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/search" className="hover:text-gray-400">
                Search
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
