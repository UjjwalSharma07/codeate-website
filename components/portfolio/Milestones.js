import React from 'react'
import styles from '../../styles/portfolio/Milestones.module.css'

/*
line is hardcoded 
to add content ...check and change the height of line
*/
function Milestones() {
  return (
    <div className={`${styles.milestones}`}>
        <div className={`${styles.heading}`}> Code 8 in Numbers</div>
        <div className={`${styles.cline}`}/>
        <div className={`${styles.background}`}>
            <div className={`${styles.line}`}></div>
            <div className={`${styles.left} ${styles.block} `}>
                <div className={`${styles.text}`}>10+ projects and communities</div>
                <div className={`${styles.shape}`} /></div>
            <div className={`${styles.right} ${styles.block} `}>
                <div className={`${styles.text}`}>100+ students benefitted</div>
                <div className={`${styles.shape}`} /></div>
            <div className={`${styles.left}  ${styles.block} `}>
                <div className={`${styles.text}`}>200+ community members</div>
                <div className={`${styles.shape}`} /></div>
            <div className={`${styles.right}  ${styles.block} `}>
                <div className={`${styles.text}`}>5+ events and workshops</div>
                <div className={`${styles.shape}`} /></div>
            <div className={`${styles.left}  ${styles.block} `}>
                <div className={`${styles.text}`}>3+ startups founded</div>
                <div className={`${styles.shape}`} /></div>
        </div>
        <div className={`${styles.end}`}>TO BE CONTINUED ...</div>
    </div>
  )
}

export default Milestones