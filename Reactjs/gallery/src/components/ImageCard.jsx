import React from "react";
import "./imgCard.scss";

const ImageCard = ({ data }) => {
  return (
    <div className='gallery'>
      {data.map((item, index) => {
        return <img src={item.img} alt='gallery' />;
      })}
    </div>
  );
};

export default ImageCard;
