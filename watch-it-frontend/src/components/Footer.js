import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Section */}
        <div className="mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} Watch It. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <a href="/" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
