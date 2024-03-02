import React from "react";
import Image from "next/image";
import Ambassador from "../assets/images/mentor.jpeg";
import styles from "../styles/student.module.css";

const student = () => {
  return (
    <div className={styles.wraper}>
      <div className={styles.head1} id="hea23">
        <h1>Student Ambassador program</h1>
      </div>
      <div className={styles.back12}>
        <div className={styles.back1}>
          <Image src={Ambassador} alt="image" />
        </div>
      </div>
      <div>
        <form className={styles.ambassador}>
          <div className={styles.row}>
            <div className={styles.row1}>
              <input type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter last name" />
            </div>
          </div>
          <input type="email" placeholder="Enter Email ID" />
          <input type="date" placeholder="Enter Date of Birth" />
          <select className="form-group1" id="gen1">
            <option value="" disabled selected>
              Enter Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="transgender">Transgender</option>
          </select>
          <input type="text" placeholder="Enter contact" />
          <input type="text" placeholder="Enter College Name" />
          <select className="graduation" id="grad">
            <option value="" disabled selected>
              Enter Graduation Year
            </option>
            <option value="text">2022</option>
            <option value="text">2023</option>
            <option value="text">2024</option>
          </select>
          <textarea
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Why do you want to be a Student Ambassador ?"
          ></textarea>
          <div className={styles.last}>
            <h5>
              By submitting, I agree to terms & conditions and privacy policy
            </h5>
          </div>

          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default student;
