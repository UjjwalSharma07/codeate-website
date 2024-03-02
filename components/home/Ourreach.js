import React from "react";
import styles from "../../styles/home/Ourreach.module.css"

const Ourreach = () => {
  return (
    <div className={`${styles.Ourreach}`}>
      <div className={`${styles.Ourreach_head}`}>Our reach</div>
      <div className={`${styles.reach_holder}`}>
        <div className={`${styles.reaches}`}>
          <img src="/images/ourreach/reach1.png" />
          <div className={`${styles.reach_data}`}>
            <h1 className={`${styles.reach_card_head}`}>2K+</h1>
            <h3 className={`${styles.reach_card_p}`} style={{ width: "80px" }}>
              Community members
            </h3>
          </div>
        </div>
        <div className={`${styles.reaches}`}>
          <img src="/images/ourreach/reach2.png" />
          <div className={`${styles.reach_data}`}>
            <h1 className={`${styles.reach_card_head}`}>500+</h1>
            <h3 className={`${styles.reach_card_p}`} style={{ width: "120px" }}>
             Opportunities created
            </h3>
          </div>
        </div>
        <div className={`${styles.reaches}`}>
          <img src="/images/ourreach/reach3.png"/>
          <div className={`${styles.reach_data}`}>
            <h1 className={`${styles.reach_card_head}`}>50+</h1>
            <h3 className={`${styles.reach_card_p}`} style={{ width: "80px" }}>
              Projects build
            </h3>
          </div>
        </div>
        <div className={`${styles.reaches}`}>
          <img src="/images/ourreach/reach4.png"/>
          <div className={`${styles.reach_data}`}>
            <h1 className={`${styles.reach_card_head}`}>10+</h1>
            <h3 className={`${styles.reach_card_p}`} style={{ width: "80px" }}>
              Companies
            </h3>
          </div>
        </div>
        <div className={`${styles.reaches}`}>
          <img src="/images/ourreach/reach5.png"/>
          <div className={`${styles.reach_data}`}>
            <h1 className={`${styles.reach_card_head}`}>50+</h1>
            <h3 className={`${styles.reach_card_p}`} style={{ width: "120px" }}>
              Colleges
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourreach;
