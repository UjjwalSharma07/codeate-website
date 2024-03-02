import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Landing from "../assets/images/login/login-dashboard.png";
import styles from "../styles/admin/Login.module.css";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h1 className={styles.wrapperHeading}>Welcome</h1>
        <h2 className='text-blue-400 font-extrabold text-xl'>
          Please <span className='text-blue-400 font-extrabold text-xl'>Login</span> or{" "}
          <span className='text-blue-400 font-extrabold text-xl'>Sign-up</span> to continue
        </h2>
      </div>
      <div className={styles.loginSection}>
        <div>
          <Image src={Landing} alt="landing-image" />
        </div>
        <div className={styles.loginButton} >
          <Link href='/'>
          <button className={styles.btn}>
            Sign-Up <AiOutlineArrowRight />{" "}
          </button>
          </Link>

          <Link href='/Login/Login'>
          <button className={styles.btn}>
            Sign-In
            <AiOutlineArrowRight />{" "}
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
