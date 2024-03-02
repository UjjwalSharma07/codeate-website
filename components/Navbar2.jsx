import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/Codeate.png";
import styles from "../styles/Navbar.module.css";
import { Button } from "./button/Button";
const Navbar2 = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <div className="logos">
          <Image src={Logo} alt="logo" />
        </div>
      </Link>

      <div>
        <ul className={styles.nav__container}>
          <li className={styles.nav__items}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.nav__items}>
            <Link href="/build">
              <a>Build</a>
            </Link>
          </li>
          <li className={styles.nav__items}>
            <Link href="/learn">
              <a>Learn</a>
            </Link>
          </li>
          <li className={styles.nav__items}>
            <Link href="/community">
              <a>Community</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="butn ">
        <Button buttonStyle="btn--primary btn--mobile" buttonSize="btn--medium">
          Login
        </Button>
        <Button buttonSize="btn--medium" buttonColor="blue">
          Sign Up
        </Button>
        {/* <button className="primary btn--primary">Login</button>
          <button className="primary btn--primary">Sign Up</button> */}
      </div>
    </div>
  );
};

export default Navbar2;

