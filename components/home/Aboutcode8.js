
import React from 'react'
import styles from '../../styles/home/Aboutcode8.module.css'

const Aboutcode8 = () => {
    return (
        <div className={`${styles.Aboutcode8} my-20`}>
            <div className={`${styles.About_heading}`}>
                Enabling community led peer to peer learning like never before..
            </div>
            <div className={`${styles.Aboutcode_Body}`}>
                <div className={`${styles.About_heading_2} ${styles.aboutcode_right}`}>
                Codeate is an experiential learning platform driven by the energy of code and ideas to harness the power of innovation in learners. We are building a culture to work on projects while getting upskilled with industry-relevant learnings and experience.

                </div>
                <div className={`${styles.aboutcode_left}`}>
                    <div className={`${styles.About_List}`}>
                        <div className={`${styles.About_list_item}`}><i className=" A1 fa-solid fa-magnifying-glass"></i><span>Learn industry-relevant skills live with mentors from the industry.</span> </div>
                        <div className={`${styles.About_list_item}`}><i className=" A2 fa-solid fa-hammer"></i><span>Build value-added projects and hone your skills.</span> </div>
                        <div className={`${styles.About_list_item}`}><i className=" A3 fa-solid fa-people-roof"></i><span>Interact with professionals and peers and build meaningful relations.</span> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutcode8