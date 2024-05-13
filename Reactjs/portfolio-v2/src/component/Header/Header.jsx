import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div className='header'>
      <div className='left'>
        <div className='circle'>
          <div className='cir1'></div>
          <div className='cir2'></div>
        </div>
        <span>Zeshan.</span>
      </div>
      <div className={` ${(menuOpen && "open") || "center"}`}>
        <ul>
          {["Home", "About", "Portfolio", "testimonials", "contact"].map(
            (item, index) => {
              return (
                <li
                  className={active === item ? "active" : ""}
                  onClick={() => handleClick(item)}
                  key={index}
                >
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </li>
              );
            }
          )}
        </ul>

        <div className='menuContainer'>
          <div className='imgBack'>
            <img
              src='https://images.pexels.com/photos/2830831/
              pexels-photo-2830831.jpeg?auto=compress&cs=
              tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </div>
        </div>
        <div className='centerOverlayImage'>
          <div className='box1'></div>
          <div className='box2'>
            <img
              src='https://images.pexels.com/photos/2922441/
              pexels-photo-2922441.jpeg?auto=compress&cs=
              tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </div>
        </div>
      </div>
      <div
        className={`right ${menuOpen && "open"}`}
        onClick={() => {
          setMenuOpen(!menuOpen);
          console.log(menuOpen);
        }}
      >
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </div>
  );
};

export default Header;
