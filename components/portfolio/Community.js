import React from 'react'
import styles from '../../styles/portfolio/Community.module.css'
import Image from 'next/image';

function Community(props) {
    const {comp}=props;
  return (
    <div className={`${styles.community}`}>
        <div className={`${styles.img}`}><Image  src={comp.img} alt="community"/></div>
        <div className={`${styles.title}`}>{comp.title}</div>
    </div>
  )
}

export default Community