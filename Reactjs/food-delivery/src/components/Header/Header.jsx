import React, { useState } from "react";
import "./header.scss";
import { UserRound, Search, BaggageClaim } from "lucide-react";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className='header'>
      <div className='navbar'>
        <div className='logo'>Logo.</div>
        <div className='menu-items'>
          <ul>
            {["Home", "Menu", "About", "Shop"].map((item) => (
              <li key={item}>
                <a
                  href='#'
                  className={activeItem === item ? "active" : ""}
                  onClick={() => handleItemClick(item)}
                  role='button'
                  aria-current={activeItem === item ? "page" : undefined}
                >
                  <div className='arrow'></div>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='user-options'>
          <div className='search'>
            <Search />
          </div>
          <div className='cart'>
            <BaggageClaim />
          </div>
          <div className='user'>
            <UserRound color='white' size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
