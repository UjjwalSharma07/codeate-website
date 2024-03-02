import React, {useState} from "react";
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Mentorstats.module.css'
import Reach from '../assets/images/Saly-44.png'
import Reach1 from '../assets/images/Saly-43.png'
import Reach2 from '../assets/images/Saly-32.png'
import Reach3 from '../assets/images/Saly-10.png'
import Reach4 from '../assets/images/Saly-31.png'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Mentorstats = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="my-20 flex items-center justify-center flex-col">
      <div className="${styles.Stats__head} title text-5xl">Stats</div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
      <div className={styles.Stats__holder}>
        <div className={`${styles.m__stat__block}`}>
          <Image src={Reach} alt=""/>
          <div>
          <div className={styles.MSdata}>{counterOn && (
                <CountUp start={0} end={150} duration={5} delay={0} />
              )}
              + </div>
          <div className={styles.MSmetadata}>Colleges</div>
          </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach1} alt=""/>
        <div>
          <div className={styles.MSdata}>{counterOn && (
                <CountUp start={0} end={5000} duration={5} delay={0} />
              )}
              +</div>
          <div className={styles.MSmetadata}>Community members</div>
        </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach2} alt=""/>
          <div>
          <div className={styles.MSdata}>{counterOn && (
                <CountUp start={0} end={1000} duration={5} delay={0} />
              )}
              +</div>
          <div className={styles.MSmetadata}>Opportunities created</div>
          </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach3} alt=""/>
          <div>
          <div className={styles.MSdata}>{counterOn && (
                <CountUp start={0} end={100} duration={5} delay={0} />
              )}
              +</div>
          <div className={styles.MSmetadata}>Projects Build</div>
          </div>
        </div>
        <div className={`${styles.m__stat__block}`}>
        <Image src={Reach4} alt=""/>
        <div>
          <div className={styles.MSdata}>{counterOn && (
                <CountUp start={0} end={30} duration={5} delay={0} />
              )}
              +</div>
          <div className={styles.MSmetadata}>Companies and Partners</div>
        </div>
        </div>
      </div>
        </ScrollTrigger>
    </div>
  );
};

export default Mentorstats;
