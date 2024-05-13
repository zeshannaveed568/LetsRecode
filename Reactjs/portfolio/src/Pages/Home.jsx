import React from "react";
import "./home.scss";
import { FaLinkedin, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className='container'>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='imgContainer'
      >
        <div className='model'>
          <img src={require("../assets/model.png")} alt='' />
        </div>
      </motion.div>
      <div className='introContainer'>
        <div className='introText'>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='name'
          >
            <span>Zeshan</span> Naveed
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            magni saepe voluptates adipisci hic itaque molestiae voluptas
            aliquam animi cupiditate.
          </motion.p>
        </div>
        <div className='socialIcons'>
          <motion.div
            variants={iconVariants}
            initial='hidden'
            animate='visible'
            className='icon'
          >
            <FaLinkedin size={28} />
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.2 }}
            className='icon'
          >
            <FaInstagram size={28} />
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.4 }}
            className='icon'
          >
            <FaGithub size={28} />
          </motion.div>
          <motion.div
            variants={iconVariants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 0.6 }}
            className='icon'
          >
            <FaYoutube size={28} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
