import React from 'react'
import Image from 'next/image'
import styles from '../../styles/portfolio/Companies.module.css'

import logo from "../../assets/images/portfolio/logo.png"
import del from '../../assets/images/portfolio/logo_1.png'
import ama from '../../assets/images/portfolio/logo_2.png'
import pay from '../../assets/images/portfolio/logo_3.png'
import cis from '../../assets/images/portfolio/logo_4.png'
import tcs from '../../assets/images/portfolio/logo_5.png'
import hita from '../../assets/images/portfolio/logo_6.png'
import cog from '../../assets/images/portfolio/logo_7.png'
import tez from '../../assets/images/portfolio/logo_8.png'

function Companies() {
    const info='We have partnered with mentors from top IT companies to help students through our platform:'
    const logos=[
        del,ama,pay,cis,
        tcs,hita,cog,tez
    ]
  return (
    <div className={`${styles.companies}`}>
        <div className={`${styles.title}`}>
            <div className={`${styles.title_logo}`}><Image alt="logo" src={logo}/></div>
            <div className={`${styles.heading}`}>OUR EXPERTS FROM COMPANIES:</div>
        </div>
        <div className={`${styles.card}`}>
            <div className={`${styles.info}`}>{info}</div>
            <div className={`${styles.logos}`}>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[0]} alt="img"/></div>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[1]} alt="img"/></div>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[2]} alt="img"/></div>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[3]} alt="img"/></div>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[4]} alt="img"/></div>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[5]} alt="img"/></div>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[6]} alt="img"/></div>
                <div className={`${styles.img_div}`}><Image className={`${styles.logo}`} src={logos[7]} alt="img"/></div>
            </div>
        </div>
    </div>
  )
}

export default Companies