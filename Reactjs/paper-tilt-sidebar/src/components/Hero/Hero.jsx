import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='blur'>
        <div className='text'>
          Zeshan Naveed.
          <span>
            I'm a full-stack <span>developer.</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
