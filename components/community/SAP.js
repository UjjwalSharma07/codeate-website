import React from "react";
import Link from "next/link";
import { Button } from "../button/Button";
import styles from "../../styles/home/Community.module.css";
import "../../styles/home/Community.module.css";
import Image from "next/image";
import learn from "../../assets/images/Learn.jpeg";
import { motion } from "framer-motion";

export default function SAP() {
  return (
    <>
      {/* Student Ambassador Program*/}
      <div className="py-28 text-center ">
        <div className={`${styles.main_sap}`}>
          <h1 className="text-7xl font-bold text-blue-500 drop-shadow shadow-yellow-500 max-w-5xl mx-auto leading-snug title ">
            Learn, build and collaborate.
          </h1>
          <div className="text-center font-medium mx-auto text-lg my-5 max-w-xl">
            <p>
              Learn on the go with diverse community of techies and get ahead in
              your career.
            </p>
            <p>
              We have created a cultured community of techies for you to
              leverage peer to peer learning, collaboration and help.
            </p>
          </div>

          <Link href="https://discord.com/invite/v4vZBMt9hQ" passHref>
            <a
              href="https://discord.com/invite/v4vZBMt9hQ"
              target="_blank"
              className="mt-10"
              rel="noopener noreferrer nofollow"  
            >
              <motion.div
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group"
                style={{
                  boxShadow: "0px 4px 20px #543eff99",
                }}
                whileHover={{ scale: 1.1, x: 10 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="no</div>ne"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Join Our Community
                </span>
              </motion.div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
