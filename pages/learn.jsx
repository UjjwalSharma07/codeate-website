import { Button } from "../components/button/Button";
import AboutUs from "../components/learn/AboutUs";

import Link from "next/link";
import Image from "next/image";
import SAP from "../components/learn/SAP";
import MobileSAP from "../components/community/MobileSAP";

import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/learn.module.css";
import Features2 from "../components/Features/Features2";
import Features from "../components/Features/Features";
import Stats from "../components/home/Stats";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import CourseMap from "./CourseMap";

import {
  useCurrentId,
  useEventInData,
  useInData,
  useIsChangeData,
  useUserCourse,
} from "../store1/store1";
import { useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from './../config/constants';
import ProgramPage from "../components/learn/ProgramPage";
export default function Courses() {
  const { indata } = useInData((state) => state.auth);
  const setData = useInData((state) => state.setData);

  useEffect(() => {
    const getEvents = async () => {
      // const { data } = await axios.get('https://backend.codeate.in/Course')
      const { data } = await axios.get(`${BASE_API_URL}/Course`);    // changes
      setData(data.courses);
    };
    getEvents();
  }, []);
  return (
    <>
      <div className="bg-black text-white">
        <SAP />
        <MobileSAP
          heading="Learn, Build & Collaborate"
          description="Learn on the go with diverse community of techies and get ahead in your career.
We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help."
          button="Join Our Community"
        />
        <Features2 />

        {/* Courses */}

        <div
          className="text-center h-full p-10 my-16"
          style={{ background: "#000000" }}
        >
          <h1 className="md:text-5xl   title">Explore Courses</h1>

          <p className="mt-4 mb-8 text-lg">Explore a wide range of courses!!</p>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10">
            {indata?.map((eve) => (
              <CourseMap
                key={eve?._id}
                title={eve?.title}
                description={eve?.message}
                id={eve?._id}
                image={eve?.selectedFile}
              />
            ))}
          </div>
          <Link href="/projects">
            <div id={`${styles.testbutton}`}></div>
          </Link>
        </div>


        {/* <ProgramPage Heading="Explore Programs"/> */}
 
        <AboutUs
          Heading="How it works?"
          SideHeading="WORKS"
          kickLine="Get the company like experiential learning right from your college and Hone your skills like never before !"
        />

        {/* Why Codeate */}
        <div className="">
          <h3 className="title text-5xl mb-20 mt-36  font-bold">
            Why Us ?{/* <img src='/images/Codeate.png'></img> */}
          </h3>
        </div>
        <Features />

        <div className={`${styles.s2_hello}`}>
          <div className={`${styles.stats2_information}`}>
            <Stats />
          </div>
          <div className="">
            <div className={`${styles.mentor_text_info}`}>
              <p className="text-2xl font-semibold">
                The learning you need, the skills you want, the career you
                deserve.
              </p>
              <p className="max-w-3xl mx-auto mt-5">
                Join our community for free and kickstart your learning today.
              </p>
              <div className="mt-10">
                <a
                  href="https://discord.com/invite/v4vZBMt9hQ"
                  target="_blank"
                  rel="noreferrer"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
