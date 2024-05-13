import React from "react";
import "./portfolio.scss";
import { ArrowRight, ArrowLeft, Expand } from "lucide-react";

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='imgContainer'>
        <img
          src='https://images.pexels.com/photos/12189062/pexels-photo-12189062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />

        <div className='info'>
          <span>Beach Girl</span>
        </div>

        <div className='previewbtn'>
          <Expand color='white' />
        </div>
      </div>

      <div className='arrow'>
        <div className='left'>
          <ArrowLeft color='white' />
        </div>
        <div className='right'>
          <ArrowRight color='white' />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
