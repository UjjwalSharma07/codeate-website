import React from "react";
import styles from "../../styles/Build/Buildbycode.module.css";

const Buildbycode = () => {
  return (
    <div className={styles.builtbycode8}>
      <div className={styles.builtbycode8_left}>
        <img src="/images/Build/built_by_code8.png"></img>
      </div>

      <div className={styles.builtbycode8_right}>
        <h1 className={styles.builtbycode_right_head}>
          Build like a software engineer.
          {/* <img src="https://github.com/KapadiaShubham/Codeate-media/blob/master/Logo.png?raw=true" style={{height:"10%",width:"20%"}}></img> */}
        </h1>
        <p className={styles.Buildbycode_right_body}>
          Go zero to one From an idea to fully develop MVP. Build MVP while
          working in a team. One on one realtime mentoring and project building
          experience like a tech company.
        </p>
      </div>
    </div>
  );
};

export default Buildbycode;
