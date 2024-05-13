import React, { useState } from "react";
import "./home.scss";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data";
import BGImage from "../../component/BGImage/BGImage";

const Home = () => {
  const [changeInfo, setChangeInfo] = useState(0);

  const numImages = data.length;

  const nextImage = () => {
    setChangeInfo((changeInfo + 1) % numImages);
  };

  const prevImage = () => {
    setChangeInfo((changeInfo - 1 + numImages) % numImages);
  };

  const currentData = data[changeInfo];

  return (
    <div className='home-contianer'>
      <BGImage changeInfo={changeInfo} currentData={currentData} />
      <hr className='line' />
      <motion.div
        key={changeInfo}
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ x: 1000, y: 1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='home-content'
      >
        <div className='date-container'>
          <div className='bg-date'></div>
          <div className='date'>{currentData.date}</div>
        </div>

        <div className='title'>
          {currentData.title.split(" ").map((word, index) => {
            if (index === 1) {
              return (
                <React.Fragment key={index}>
                  {word}
                  <br />
                </React.Fragment>
              );
            } else {
              return <span key={index}>{word} </span>;
            }
          })}
        </div>

        <motion.div
          initial={{ x: -200, y: 50, opacity: 0, scale: 1 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='desc-container'
        >
          <div className='desc'>
            <span>{currentData.desc}</span>
            <div className='line'></div>
          </div>
        </motion.div>
      </motion.div>
      <div className='carousel-controller'>
        <div className='dots'>
          {data.map((item, index) => (
            <div
              key={index}
              className={changeInfo === index ? "dot active" : "dot"}
              onClick={() => {
                setChangeInfo(index);
              }}
            ></div>
          ))}
        </div>

        <div className='arrow'>
          <div className='left'>
            <ArrowLeft onClick={prevImage} />
          </div>
          <div className='right'>
            <ArrowRight onClick={nextImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
