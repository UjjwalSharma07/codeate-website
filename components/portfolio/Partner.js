import React from 'react'
import styles from '../../styles/portfolio/Partner.module.css'
import Image from 'next/image';

function Partner(props) {
  const {info}=props;
  return (
    <div className={`${styles.p}`}>
      <div className={`${styles.partner}`}>
        <div className={`${styles.img_div}`}>
          <div className={`${styles.img}`}><Image src={info.img} alt="partner"/></div>
        </div>
        <div className={`${styles.title}`}>{info.title}</div>
        <div className={`${styles.about}`}>{info.info}</div>
      </div>
    </div>
  )
}

export default Partner