import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/forms.module.css";

const forms = () => {
  return (
    <div className={styles.for12}>
      <h1>All Forms</h1>
      <div className={styles.for1}>
        <div className={styles.lin1}>
          <div className={styles.std__1}>
            <div className={styles.std__2}>
              <Link href="/student">Student Ambassador Program</Link>
            </div>
          </div>
          <div className={styles.men__1}>
            <div className={styles.men__2}>
              <Link href="/mentor">Mentor Form</Link>
            </div>
          </div>
          <div className={styles.ment__22}>
            <div className={styles.ment__11}>
              <Link href="/mentee">Mentee Form</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forms;
