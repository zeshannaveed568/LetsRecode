import React, { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import "./header.scss";
import { motion } from "framer-motion";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleDarkMode = () => {
    isDarkMode
      ? document.documentElement.setAttribute("data-theme", "light")
      : document.documentElement.setAttribute("data-theme", "dark");

    setIsDarkMode(!isDarkMode);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='header'
    >
      <div className='logo'>Zeshan.</div>
      <div className='menu'>
        <ul>
          {["Home", "About", "Skill", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <a
                className={activeItem === item ? "active" : ""}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='darkMode' onClick={handleDarkMode}>
        {isDarkMode ? (
          <RiMoonFill size={24} color='white' />
        ) : (
          <RiSunFill size={24} color='black' />
        )}
      </div>
    </motion.div>
  );
};

export default Header;
