import React from "react";
import { motion } from "framer-motion";
import data from "../../data";

const BGImage = ({ changeInfo, currentData }) => {
  return (
    <motion.img
      key={changeInfo}
      initial={{ scale: 1.2, opacity: 0.9 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.2, opacity: 0.9 }}
      transition={{ duration: 0.5 }}
      src={currentData.img}
      alt=''
    />
  );
};

export default BGImage;
