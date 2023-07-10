import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { textVariant } from "../utils/motion";

import {
  linkedin,
  instagram,
  grabcad,
  github1,
} from "../assets";

const Contact = () => {
  const buttons = [
    {
      icon: github1,
      label: "GitHub",
      onClick: () => {
        window.open("https://github.com/paragmraw");
      },
    },
    {
      icon: instagram,
      label: "Instagram",
      onClick: () => {
        window.open("https://www.instagram.com/prgxmndl/");
      },
    },
    {
      icon: grabcad,
      label: "GrabCAD",
      onClick: () => {
        window.open("mailto:mail@paragmandal.in");
      },
    },
    {
      icon: linkedin,
      label: "LinkedIn",
      onClick: () => {
        window.open("https://www.linkedin.com/in/paragmraw/");
      },
    },
  ];

  return (
    
    <div className="xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden">
      <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          If You Find This Interesting
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Connect
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
        © Parag Mandal, 2023
        </p>
        <div className="flex justify-center items-center">
          <motion.button
            className={styles.button}
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={buttons[0].onClick}
            style={{
              margin: "0.5rem",
            }}
          >
            <img
              src={buttons[0].icon}
              alt={buttons[0].label}
              className="w-14 h-13"
            />
          </motion.button>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={buttons[1].onClick}
            style={{
              margin: "0.5rem",
            }}
          >
            <img
              src={buttons[1].icon}
              alt={buttons[1].label}
              className="w-14 h-13"
            />
          </motion.button>
        </div>
        <div className="flex justify-center items-center">
          <motion.button
            className={styles.button}
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={buttons[2].onClick}
            style={{
              margin: "0.5rem",
            }}
          >
            <img
              src={buttons[2].icon}
              alt={buttons[2].label}
              className="w-14 h-13"
            />
          </motion.button>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={buttons[3].onClick}
            style={{
              margin: "0.5rem",
            }}
          >
            <img
              src={buttons[3].icon}
              alt={buttons[3].label}
              className="w-14 h-13"
            />
          </motion.button>
        </div>
      </motion.div>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex justify-center items-center xl:h-auto"
      >
        
        
        <EarthCanvas className="w-14 h-14" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "connect");
