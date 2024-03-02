import React from 'react'
import styles from '../styles/community/Partners.module.css'
import CompanyImage from './CompanyImage';
import Image from 'next/image';

function CompanyPartners() {
   
  return (
    <div>
        <h1 className=" my-10 md:text-5xl  text-3xl title">Our Company Partners</h1>
      <div className={`${styles.slider}`}>
        <div className={`${styles.slide_track}`}>
        {CompanyImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {CompanyImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {CompanyImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {CompanyImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {CompanyImage.map(image => {
                return (
                    <div className={`${styles.slide}`} key={image}>
                        <Image src={image} className={`${styles.img}`} alt="" />
                    </div>
                );
            })}
        {CompanyImage.map(image => {
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

export default CompanyPartners
