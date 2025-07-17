import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
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

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Offensive Security Analyst with hands-on experience in ethical hacking, vulnerability
        exploitation, and phishing simulations. Skilled in using tools like Burp Suite, Metasploit,
        Nmap, and SEToolkit to identify and exploit security flaws. Strong understanding of
        OWASP Top 10 and MITRE ATT&CK, with a focus on Red Team operations and
        simulating real-world attack scenarios to enhance defense strategies and improve
        overall security posture.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* ✅ Download Resume Button - Visible and Centered */}
      <div className='mt-12 flex justify-center'>
        <a
          href='/resume.jpg'
          download
          className='bg-[#915EFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7c4dff] transition duration-300'
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
