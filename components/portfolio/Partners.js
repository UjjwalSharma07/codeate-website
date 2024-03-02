import React from 'react'
import Partner from './Partner'
import styles from '../../styles/portfolio/Partners.module.css'
import basket from '../../assets/images/portfolio/lm-basket.png'
import clap from '../../assets/images/portfolio/c-clap-2.png'
import upan from '../../assets/images/portfolio/upanyas.png'
function Partners() {
  const info=[
    {
      img:clap,
      title:"Career Clap",
      info:"A career mentoring platform to help students find the right career based on psychometric analysis and industry analytics."
    },
    {
      img:upan,
      title:"Upanyas",
      info:"On a mission to digitize the literature while maintaining the cultural essence of it."
    },
    {
      img:basket,
      title:"LM Basket",
      info:"Mobile app that serves grocery needs of campus students."
    }
  ]
  return (
    <div className={`${styles.partners}`}>
        <div className={`${styles.card}`}>
            <div className={`${styles.heading}`}>Startup Partners</div>
            <div className={`${styles.cline}`} />

            <div className={`${styles.container}`}>
                <Partner info={info[0]} className={`${styles.p}`}/>
                <Partner info={info[1]} className={`${styles.p}`}/>
                <Partner info={info[2]} className={`${styles.p}`}/>
            </div>
        </div>
    </div>
  )
}

export default Partners