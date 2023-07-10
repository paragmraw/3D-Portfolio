import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' style={{ textAlign: 'justify' }}>
    Welcome to my portfolio website! I'm a Software Developer 
    with a strong fundamentals and a passion for creating impactful 
    solutions. I thrive on delivering high-quality work that 
    transforms the way we interact with software. With my quick 
    learning abilities and research-oriented mindset, I excel at 
    crafting purposeful and scalable code. I stay up-to-date with 
    the latest technological advancements to ensure my solutions 
    are always cutting edge. <br></br>
    Feel free to explore my portfolio and witness the projects I've crafted.<br></br>
    And sure enough, what you saw above was the BatPlane!! <br></br>
    <b>"All Men Have Limits ... I Ignore Mine"</b> ~ DC#663 

  </motion.p>
  <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
  </div>
  </>
  )
}

export default SectionWrapper(About, "about");