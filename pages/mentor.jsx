import React from "react";
import Image from "next/image";
import Mentor from "../assets/images/student.jpeg";
import styles from "../styles/mentor.module.css";

const mentor = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.head1}>
        <h1>Mentor Mentee program</h1>
      </div>
      <div className={styles.back2}>
        <div className={styles.back3}>
          <Image src={Mentor} alt="image" />
        </div>
      </div>
      <div>
        <form className={styles.ambassador}>
          <div className={styles.container}>
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
          </div>
          <h3>Choose yourself :</h3>
          <div className={styles.rad1}>
            <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
            <label htmlFor="html">Mentor</label>
            <input
              type="radio"
              id="css"
              name="fav_language"
              value="CSS"
            />  <label htmlFor="css">Mentee</label>
          </div>
        </form>
      </div>

      <form className={styles.amb1}>
        <h1>Hello Mentor,</h1>
        <input type="text" placeholder="Enter Company Name" />
        <input type="text" placeholder="Enter current job title" />
        <select className="graduation" id="grad">
          <option value="" disabled selected>
            Enter years of work experience
          </option>
          <option value="text">0</option>
          <option value="text">1</option>
          <option value="text">2</option>
          <option value="text">3</option>
          <option value="text">4</option>
        </select>
        <select className="graduation" id="grad">
          <option value="" disabled selected>
            Enter years of mentoring experience
          </option>
          <option value="text">0</option>
          <option value="text">1</option>
          <option value="text">2</option>
          <option value="text">3</option>
          <option value="text">4</option>
        </select>
        <select className="graduation" id="grad">
          <option value="" disabled selected>
            Enter years of mentoring experience
          </option>
          <option value="text">0</option>
          <option value="text">1</option>
          <option value="text">2</option>
          <option value="text">3</option>
          <option value="text">4</option>
        </select>
        <select className="graduation" id="grad">
          <option value="" disabled selected>
            Enter your domain
          </option>
          <option value="text">UI/UX Designer</option>
          <option value="text">Blockchain Developer</option>
          <option value="text">web developer</option>
          <option value="text">App developer</option>
        </select>
        <input type="text" placeholder="Enter Linkedln URL" />
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          placeholder="Why do you want to be a Mentor ?"
        ></textarea>
        <div className={styles.last}>
          <h5>
            By submitting, I agree to terms & conditions and privacy policy
          </h5>
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
};

export default mentor;
