import React from 'react'
import styles from '../styles/WhatWhy.module.css'
import { ParallaxProvider } from "react-scroll-parallax";
import Image from 'next/image'
import Link from 'next/link'
import Why from '../assets/images/illustration_why we do.png'
import What from '../assets/images/illus_3.png'

const WhatWhy = () => {
  return (
    <div className={styles.Whatwhy}>
      <div className={styles.what__card}>
        <div className={styles.what__card__image}>
          <Image src={Why}  alt="ima" />
        </div>
        <div className={styles.what__card__text}>
          <div className={styles.what__head}>
            <ParallaxProvider translateX={[100,-120]}><span>Why we do ?</span></ParallaxProvider>         
          </div>
          Projects and doing stuff in real world is a great way to get upskilled
          and we believe in providing such opportunities to students at their
          fingertips with a professional cult.
        </div>
      </div>
      <div className={styles.what__card}>
        <div className={styles.what__card__image}>
          <Image src={What} alt="" />
        </div>
        <div className={styles.what__card__text}>
          <div className={styles.what__head}>
          <ParallaxProvider translateX={[100,-120]}><span>What we do ?</span></ParallaxProvider>
          </div>
          We provide students, experiential learning opportunities with our
          build, lean and community programs to gain more industry relevent
          skills and exposure in order to become truely professional.
        </div>
      </div>
    </div>
  )
}

export default WhatWhy
