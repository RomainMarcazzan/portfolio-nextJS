import React from "react";
import AnimateLetters from "./AnimateLetters";
import { motion } from "framer-motion";
import portrait from "../public/assets/images/portrait.png";

const Banner = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className="banner">
      <div className="banner__left">
        <div className="banner__left__name">
          <AnimateLetters title={"Romain"} />
          <AnimateLetters title={"Marcazzan"} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.3 } }}
          className="banner__left__title"
        >
          <span>développeur</span>
          <span>Web</span> & <span>App</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.5 },
          }}
          className="banner__left__description"
        >
          Développeur web et mobile fullstack basé à La Réunion, spécialisé
          React et React Native pour le frontend et NodeJs pour le backend.
          Technologies qui permettent de créer des sites et applications
          modernes, dynamiques et performants.
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.8,
          transition: { delay: 0.5, duration: 1, ease: "easeOut" },
        }}
        className="banner__right"
      >
        <img src={portrait} alt="portrait" />
      </motion.div>
    </motion.div>
  );
};

export default Banner;
