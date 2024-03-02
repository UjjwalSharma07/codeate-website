import React, { useEffect } from "react";
import styles from "../../styles/Build/Howitworks.module.css";
import gsap from "gsap";
import Image from "next/image";

const AboutUs = (props) => {
  const { Heading, SideHeading, kickLine } = props;
  useEffect(() => {
    gsap.fromTo(
      ".step-number",
      { y: -40, opacity: 0, rotationZ: -127, scrollTrigger: ".step-number" },
      { duration: 1, stagger: 0.6, y: 0, opacity: 1, rotationZ: 0 }
    );
    gsap.fromTo(
      ".procede-description",
      { y: -40, opacity: 0 },
      { duration: 1, stagger: 0.7, y: 0, opacity: 1 }
    );
  }, []);

  return (
    // <div className={styles.Howitworks}>
    //   <div className={styles.Howitworks_head}>How it works</div>
    //   <div className={styles.procede_holder}>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>1</div>
    //       <div className={styles.procede_description}>Take challenge</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>2</div>
    //       <div className={styles.procede_description}>Start building</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>3</div>
    //       <div className={styles.procede_description}>Ask for help</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>4</div>
    //       <div className={styles.procede_description}>Submit</div>
    //     </div>
    //     <div className={styles.proced_step}>
    //       <div className={`step-number ${styles.step_number}`}>5</div>
    //       <div className={styles.procede_description}>
    //         Pay and earn the certificate
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="text-center relative">
      <h1 className="title text-5xl mt-10 font-semibold mb-10">{Heading}</h1>
      <p className="text-white/10 font-bold text-[9rem] drop-shadow-lg absolute top-40 cursor-default select-none left-0 -rotate-90">
        {SideHeading}
      </p>
     
      <p className="max-w-3xl mx-auto px-10 mt-5 text-xl">
       
      Get the company like experiential learning right from your college and Hone your skills like never before !
      </p>

      <div className="max-w-4xl mx-auto px-10 mt-20">
        <ol className="relative border-l border-white/30 drop-shadow-xl shadow-orange-300 space-y-16">
          <li className="mb-10 ml-6 group ">
            <span className="absolute flex items-center justify-center w-10 duration-300 group-hover:scale-150 aspect-square group-hover:shadow-xl group-hover:shadow-purple-200 bg-blue-200 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-800">
              <Image
                className=""
                src={"/images/icons/join.png"}
                layout="fill"
                alt=""
              />
            </span>
            <h3 className="mb-1 text-2xl font-medium ml-2 text-white">
            Learn industry-relevant skills live with mentors from the industry.
            </h3>
          </li>
          <li className="mb-10 ml-6 group">
            <span className="absolute flex items-center justify-center w-10 duration-300 group-hover:scale-150 aspect-square group-hover:shadow-xl group-hover:shadow-purple-200 bg-blue-200 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-100">
              <Image
                className=""
                src={"/images/icons/book.png"}
                layout="fill"
                alt=""
              />
            </span>
            <h3 className="mb-1 text-2xl font-medium ml-2 text-white">
            Build value-added projects and hone your skills.
            </h3>
          </li>
          <li className="mb-10 ml-6 group">
            <span className="absolute flex items-center justify-center w-10 duration-300 group-hover:scale-150 aspect-square group-hover:shadow-xl group-hover:shadow-purple-200 bg-blue-200 rounded-full -left-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-800">
              <Image
                className=""
                src={"/images/icons/target.png"}
                layout="fill"
                alt=""
              />
            </span>
            <h3 className="mb-1 text-2xl font-medium ml-2 text-white">
            Interact with professionals and growth togather.
            </h3>
          </li>
          
        </ol>
      </div>
    </div>
  );
};

export default AboutUs;
