import React, { useEffect, useState } from "react";
import "./paperSidebar.scss";
import Hero from "../Hero/Hero";
import About from "../About/About";

const PaperSidebar = () => {
  const [tilt, setTilt] = useState(false);

  useEffect(() => {
    const $window = document.getElementById("paper-window");
    const $paperFront = document.getElementById("paper-front");
    const $hamburger = document.querySelector(".hamburger");
    const $container = document.getElementById("container");

    const offset = 1800;
    const pageHeight = $paperFront.offsetHeight;

    const open = () => {
      setTilt(true);
      $hamburger.removeEventListener("click", open);
      $container.addEventListener("click", close);
      hamburgerFix(true);
      console.log("opening...");
    };

    const close = () => {
      setTilt(false);
      $container.removeEventListener("click", close);
      $hamburger.addEventListener("click", open);
      hamburgerFix(false);
      console.log("closing...");
    };

    const updateTransformOrigin = () => {
      const scrollTop = $window.scrollTop || document.documentElement.scrollTop;
      const equation = ((scrollTop + offset) / pageHeight) * 100;
      $paperFront.style.transformOrigin = `center ${equation}%`;
    };

    const hamburgerFix = (opening) => {
      if (opening) {
        $hamburger.style.position = "absolute";
        $hamburger.style.top = $window.scrollTop + 30 + "px";
      } else {
        setTimeout(() => {
          $hamburger.style.position = "fixed";
          $hamburger.style.top = "30px";
        }, 300);
      }
    };

    const bindEvents = () => {
      $hamburger.addEventListener("click", open);
      document.querySelector(".close").addEventListener("click", close);
      $window.addEventListener("scroll", updateTransformOrigin);
    };

    const init = () => {
      bindEvents();
      updateTransformOrigin();
    };

    init();

    return () => {
      $hamburger.removeEventListener("click", open);
      document.querySelector(".close").removeEventListener("click", close);
      $window.removeEventListener("scroll", updateTransformOrigin);
    };
  }, []);
  return (
    <>
      <div id='paper-back'>
        <nav>
          <div className='close'></div>
          {["Home", "About Us", "Projects", "Testimonials", "Contact"].map(
            (item, index) => {
              return (
                <a key={index} href='#'>
                  {item}
                </a>
              );
            }
          )}
        </nav>
      </div>
      <div id='paper-window' className={tilt ? "tilt" : ""}>
        <div id='paper-front'>
          <div className='hamburger'>
            <span></span>
          </div>
          <div className='header'>
            <span>Zeshan.</span>
          </div>
          <div id='container'>
            <section>
              <Hero />
            </section>
            <section>
              <About />
            </section>
            {/* More Section as Needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaperSidebar;
