import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SideMenu from "./sideMenu";
import "../../style/style.css";

const Header = () => {
  const location = useLocation(); // Get current location
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState(""); // Tracks the current selection
  const [menuVisible, setMenuVisible] = useState(false); // Tracks menu visibility

  useEffect(() => {
    // Update selectedMenu based on current pathname
    switch (location.pathname) {
      case "/":
        setSelectedMenu("Home");
        break;
      case "/aboutUs":
        setSelectedMenu("About Us");
        break;
      case "/testimonials":
        setSelectedMenu("Testimonials");
        break;
      case "/blog":
        setSelectedMenu("Blog");
        break;
      case "/contact":
        setSelectedMenu("Contact");
        break;
      default:
        setSelectedMenu("");
        break;
    }
  }, [location.pathname]);

  const menuSelection = (menu, path) => {
    setSelectedMenu(menu); // Update selected menu
    navigate(path); // Navigate to the specified path
    setMenuVisible(false); // Close the menu
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev); // Toggle menu visibility
  };

  return (
    <>
      <div className="header">
        <div className="logoContainer"></div>
        <div className="rightChild">
          <ul>
            <li
              className={selectedMenu === "Home" ? "active" : ""}
              onClick={() => menuSelection("Home", "/")}
            >
              Home
            </li>
            <li
              className={selectedMenu === "About Us" ? "active" : ""}
              onClick={() => menuSelection("About Us", "/aboutUs")}
            >
              About Us
            </li>
            <li
              className={selectedMenu === "Testimonials" ? "active" : ""}
              onClick={() => menuSelection("Testimonials", "/testimonials")}
            >
              Testimonials
            </li>
            <li
              className={selectedMenu === "Blog" ? "active" : ""}
              onClick={() => menuSelection("Blog", "/blog")}
            >
              Blog
            </li>
            <li
              className={selectedMenu === "Contact" ? "active" : ""}
              onClick={() => menuSelection("Contact", "/contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        <div
          className="burgerMenu"
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuVisible}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <SideMenu
        menuVisible={menuVisible}
        toggleMenu={toggleMenu}
        menuSelection={menuSelection}
      />
    </>
  );
};

export default Header;
