import React, { useEffect } from "react";
import styles from "../styles/Build/Howitworks.module.css";
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

    <div className="text-center top-12 relative">
      <h1 className="title text-5xl mt-10 font-semibold mb-10">{Heading}</h1>
      <p className="text-white/10 font-bold text-[9rem] drop-shadow-lg absolute top-40 cursor-default select-none left-0 -rotate-90">
        {SideHeading}
      </p>
      <p className="max-w-3xl mx-auto px-10 mb-5">
      <b className="text-xl mb-2">{kickLine}</b><br />
      </p>
      <p className="max-w-4xl text-center mx-auto px-10 mt-5 text-[16px]">
       
      Codeate is a community-led experiential learning platform.
       We provide experiential learning opportunities through our build & learn programs with our community to gain more industry relevant skills and exposure in order to become truly industry ready. With us students learn with industry professionals and build value added projects to hone their skills.
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
            <h3 className="mb-1 text-2xl font-medium text-center ml-4  text-white">
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
            <h3 className="mb-1 text-2xl text-center font-medium ml-4 text-white">
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
            <h3 className="mb-1 text-2xl font-medium text-center ml-4 text-white">
            Interact with professionals and growth togather.
            </h3>
          </li>
          
        </ol>
      </div>
    </div>
  );
};

export default AboutUs;
