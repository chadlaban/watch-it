import React, { useState } from "react";

function Header() {
  const [isSidebarActive, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!isSidebarActive);
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-400">
            Watch It
          </a>
        </div>

        {/* Navigation Links for Desktop */}
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
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleSidebar}
        >
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

      {/* Sidebar for Mobile */}
      <div
        className={`fixed z-10 inset-y-0 left-0 w-64 bg-gray-800 transform ${
          isSidebarActive ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-bold">Watch It</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-200 hover:text-gray-400"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/search" className="hover:text-gray-400">
            Search
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
