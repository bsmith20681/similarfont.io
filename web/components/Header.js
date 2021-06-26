import Link from "next/link";
import { useState } from "react";

const Header = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = (e) => setMobileMenu(!mobileMenu);
  return (
    <header>
      <div id="purpleBar"></div>
      <div className="container">
        {/* Actual Menu*/}
        <nav>
          <h3>
            <Link href="/">
              <a className="nav-logo">
                Similar<span style={{ color: "#7069fa" }}>Font</span>.io
              </a>
            </Link>
          </h3>
          <ul className={"nav-link-list " + (mobileMenu ? "open" : "")}>
            <li className="nav-link">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link href="/about">About Us</Link>
            </li>
            <li className="nav-link">
              <Link href="/submit-font">Submit a Font</Link>
            </li>
          </ul>
        </nav>
        {/*Mobile Menu Utilities*/}
        <div id="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          id="close-menu"
          className={mobileMenu ? "open" : ""}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
        </div>
        <a href="#" id={mobileMenu ? "overlay" : ""} onClick={toggleMenu}></a>
      </div>
    </header>
  );
};

export default Header;
