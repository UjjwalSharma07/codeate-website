import React from 'react'
import styles from '../../styles/community/Partners.module.css'
import PartnersImage from './PartnersImage';
import Image from 'next/image';

function Partners() {
    console.log(PartnersImage)
  return (
    <div>
        <h1 className="title md:text-5xl text-3xl my-10">Our Community Partners</h1>
      <div className={`${styles.slider}`}>
        <div className={`${styles.slide_track}`}>
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {PartnersImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        
        </div>
      </div>
    </div>
  )
}

export default Partners
