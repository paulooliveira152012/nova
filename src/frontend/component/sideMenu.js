import React from "react";
import "../../style/style.css";

const SideMenu = ({ menuVisible, toggleMenu, menuSelection }) => {
  return (
    <div
      className={`sideMenu ${menuVisible ? "visible" : "hidden"}`}
      aria-hidden={!menuVisible}
    >
      {/* <button className="closeButton" onClick={toggleMenu}>
        Close
      </button> */}
      <ul>
        <li onClick={() => menuSelection("Home", "/")}>Home</li>
        <li onClick={() => menuSelection("About Us", "/aboutUs")}>About Us</li>
        <li onClick={() => menuSelection("Testimonials", "/testimonials")}>
          Testimonials
        </li>
        <li onClick={() => menuSelection("Blog", "/blog")}>Blog</li>
        <li onClick={() => menuSelection("Contact", "/contact")}>Contact</li>
      </ul>
    </div>
  );
};

export default SideMenu;
