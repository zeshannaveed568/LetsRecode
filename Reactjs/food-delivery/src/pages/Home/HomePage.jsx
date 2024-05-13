import React from "react";
import "./home.scss";
import { data } from "../../utils/data";

const HomePage = () => {
  return (
    <div className='home-container'>
      <div className='hero-section'>
        <div className='title'>
          Delicious Layers of Flavor: Explore the World of Lasagna
        </div>
        <div className='subtitle'>
          Indulge in Layers of Flavor: Discover Classic and Creative Lasagna
          Recipes to Satisfy Your Cravings!
        </div>

        <div className='btn-container'>
          <div className='order'>
            <span>Order Now</span>
          </div>
          <div className='menu'>
            <span>View Menu</span>
          </div>
        </div>
      </div>

      <div className='dishes-bottom'>
        {data.map(({ image }, index) => (
          <div key={index} className='card'>
            <div className='arrow'></div>
            <img src={image} alt='food Image' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
