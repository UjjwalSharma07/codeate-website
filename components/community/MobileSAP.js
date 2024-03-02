import React from "react";
import styles from "../../styles/home/Community.module.css";
import { motion } from "framer-motion";
import Link from "next/link";


export default function MobileSAP(props) {
  const { heading, description, button, scrollToBottom } = props;

  return (
    <div className={`${styles.mobile_sap}`}>
      <div className="">
        <h1 className={`${styles.community_h1}`}>{heading}</h1>
        <div className={`${styles.community_aboutpg}`}>
          <div className="pb-10"></div>
          <p className="pb-10 text-justify">{description}</p>
        </div>

        <Link href="https://discord.com/invite/v4vZBMt9hQ" passHref>
          <a
            href="https://discord.com/invite/v4vZBMt9hQ"
            target="_blank"
            rel="noreferrer"
            className="mx-10"
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
                <button
                  onClick={() => {
                    scrollToBottom();
                  }}
                >
                  {button}
                </button>
              </span>
            </motion.div>
          </a>
        </Link>
      </div>
    </div>
  );
}
