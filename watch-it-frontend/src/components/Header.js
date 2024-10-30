import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">Watch It</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/search">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
