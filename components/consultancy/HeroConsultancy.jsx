import React from "react";
// import { Button } from '../../Button';
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/home/HeroSection.module.css";
import { Button } from "../button/Button.js";
import { motion } from "framer-motion";
import HeroImg from "../../assets/images/home/Saly-19.png";
import { Typewriter } from 'react-simple-typewriter'
function HeroConsultancy({
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className={`${styles.home__hero_section}`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.row} ${styles.home__hero_row}`}>
            <div className={`${styles.col}`}>
              <div className={`${styles.home__hero_text_wrapper}`}>
                {/* <div className={`${styles.top_line}`}>{topLine}</div> */}
                <h1 className="md:text-5xl  text-2xl font-bold text-blue-500 drop-shadow shadow-yellow-500 leading-snug title text-left">
                  {/* Doing Projects Made Easy, */}
                  <br />
                  <span className="text-grey-500 ">
                    {" "}
                    <Typewriter
                      words={[
                        "Codeate consultancy",    
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="|"
                      cursorColor="white"
                      typeSpeed={80}
                      deleteSpeed={60}
                      delaySpeed={1000}
                    />
                  </span>{" "}
                </h1>
              
                <p className={`${styles.home__hero_subtitle}`}>{description}</p>
              
              </div>
            </div>
            <div className={`${styles.col}`}>
              <div className={`${styles.home__hero_img_wrapper}`}>
                <Image src={HeroImg} width="500px" height="500px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroConsultancy;
