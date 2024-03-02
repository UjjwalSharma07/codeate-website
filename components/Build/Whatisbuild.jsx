import { motion } from "framer-motion";
import React from "react";
import styles from "../../styles/Build/Whatisbuild.module.css";
import { Link } from 'react-scroll';
const Whatisbuild = () => {
  return (
    <div className="pb-20 pt-28  text-center">
      <div className={`${styles.buildmain}`}>
        <div className="">
          <div className="text-7xl font-bold text-blue-500 drop-shadow shadow-yellow-500 max-w-5xl mx-auto leading-snug title">
            Master your skill, <br /> one project at a time !
          </div>
          <div className="text-center font-medium mx-auto text-lg mt-5 max-w-xl">
            We have created a wide range of build programs where you can hone
            your skill while working on projects.
          </div>
          <a className="my-5" href="#FindNextProject">
            <motion.div
              className="relative my-10 inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-white transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black group"
              style={{
                boxShadow: "0px 4px 20px #543eff99",
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
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
              <Link to="project" smooth={true} duration={500}>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Start Building Project
              </span>
              </Link>
            </motion.div>
          </a>
        </div>
        {/* <img className="max-w-3xl mx-auto mt-5" src="./images/illu1.png" /> */}
      </div>
    </div>
  );
};

export default Whatisbuild;
