import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { offeringData } from '../../data/OfferingData';

import styles from '../../styles/home/Ouroffering.module.css'
import Link from 'next/link'

const OfferingCard=(props)=>{
    return(
      <div className={`${styles.Offering} offering`}>
        <div className={`${styles.Offer_head}`}>
          <img
            src={props.imgLink}
            alt='img'
          />
        </div>
        {/* <div className={`${styles.Offer_body}`}> */}
          <div className={`${styles.Offer_name}`}>{props.title}</div>
          <div className={`${styles.offer_content}`}>{props.content}</div>
        {/* </div> */}
        <div className={`${styles.Explore_more}`}> <Link href={props.linkpath} passHref>
          <a>
          {props.buttonTitle}
          <i className='fa-solid fa-angle-right'></i>
        </a>
        </Link></div>
      </div>
    )
}

export const Ouroffering = (props) => {
  const { Heading } = props
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      '.offering',
      { opacity: 0, y: 100, scale: 0.3 },
      {
        scrollTrigger: { trigger: '.offering' },
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.5,
        scale: 1
      }
    )
  }, [])

  return (
    <div className={`${styles.Ouroffering}`}>
      <div className={`${styles.what_we_offer}`}> {Heading} </div>
      <div className={`${styles.offerings_wrapper}`}>
      {offeringData.map((item, index) => {
        return (
          <OfferingCard key={index} {...item} />
        )
      })}
      </div>
    </div>
  )
}