import React from "react";
import Image from "next/image";
import styles from "../styles/Aboutus.module.css";
import aboutIMG from "../assets/images/about.png";

const About = () => {
  return (
    <div>
      <div className={styles.grid__container}>
        <div className={styles.grid__item}>
          <h1 className={styles.head1}>Who we are?</h1>

          <p className={styles.para}>
            Codeate is an experiential learning platform driven by the energy of
            code and ideas to harness the power of innovation in learners. We
            are building a culture to work on projects while getting upskilled
            with industry relevant learnings and experience.
          </p>
        </div>

        <div className={styles.im1}>
          <Image src={aboutIMG} />
        </div>
      </div>
    </div>
  );
};

export default About;
