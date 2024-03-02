import { useEffect, useState } from "react";
import Explorecategories from "../../components/project/Explorecategories";
import { useAllProjectsQuery } from "../../redux/features/allSlice";
import styles from "../../styles/projects/Projectpage.module.css";
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import { Button } from "../../components/button/Button";
import { useToken } from "../../store1/store1";
import qs from "query-string";
import Project from "../../components/project/Project";
import { useRouter } from "next/router";
const Projectpage = () => {
  const allProjects = useAllProjectsQuery();

  useEffect(() => {
    allProjects.refetch();
  }, []);
  const router = useRouter()
  const type = router.query.type
  console.log(type);
  return (
    <div className="bg-black text-white pt-20">
      <div className="flex flex-row justify-center items-center pt-6">
        <div></div>
        <h1 className="text-white font-bold text-4xl justify-center items-center">
          Explore Projects
        </h1>
      </div>
      <div className={`${styles.Projectpage}`}>
        <svg
          className="absolute right-0 -z-0 mt-32"
          width="518"
          height="609"
          viewBox="0 0 518 1109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_147_1030)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1030.5 479.599C989.131 216.712 742.485 37.1352 479.599 78.5024C216.712 119.87 37.1353 366.516 78.5025 629.402C119.87 892.289 366.516 1071.87 629.402 1030.5C892.289 989.131 1071.87 742.485 1030.5 479.599ZM471.909 29.6327C761.785 -15.9815 1033.75 182.032 1079.37 471.909C1124.98 761.785 926.969 1033.75 637.092 1079.37C347.216 1124.98 75.2471 926.969 29.6328 637.092C-15.9814 347.216 182.032 75.247 471.909 29.6327Z"
              fill="url(#paint0_radial_147_1030)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_147_1030"
              x="0.0976562"
              y="0.097229"
              width="1108.81"
              height="1108.81"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="11.5"
                result="effect1_foregroundBlur_147_1030"
              />
            </filter>
            <radialGradient
              id="paint0_radial_147_1030"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(674.359 189.06) rotate(74.043) scale(1430.04)"
            >
              <stop stopColor="#5FD6DA" />
              <stop offset="0.371298" stopColor="#2D9BFD" />
              <stop offset="0.701752" stopColor="#BA84FE" />
              <stop offset="1" stopColor="#FE5C97" />
            </radialGradient>
          </defs>
        </svg>
        <div className={`${styles.Projects_holder}`}>
          {allProjects?.data?.projects?.map((project) => (
            <Project
              key={project?._id}
              title={project?.title}
              description={project?.shortDescription}
              id={project?._id}
              imageuri={project?.thumbnail}
              technologies={project?.technologies}
              type={type}
            />
          ))}
        </div>

        <div className={`${styles.Categories}`}>
          <h1
            style={{ color: "white", fontWeight: "bold" }}
            className="text-white text-4xl font-bold"
          >
            Explore Project Categories
          </h1>
          <div className={`${styles.Category_holder}`}>
            <Explorecategories
              topic={"Web Development"}
              image={"category3"}
              desc={
                "Explore our curated web development projects to work on different web development tech stacks and hone your skills in website development."
              }
              options={true}
            />
            <Explorecategories
              topic={"Android Development"}
              image={"category2"}
              desc={
                "Explore different App development projects and build Apps and gain hands-on expertise and skills in App development."
              }
              options={true}
            />
            <Explorecategories
              topic={"Blockchain"}
              image={"category1"}
              desc={
                "Blockchain is the future, explore the projects and get hands-on with the blockchain technology."
              }
              options={true}
            />
            <Explorecategories
            topic={"Gen A.I, A.I/M.L/D.L, Data Science, Data Engineering, Data Analyst Development"}
            image={"category1"}
            desc={"Dive into the data-driven universe. Explore advanced projects in AI, Machine Learning, Deep Learning, Data Science, and Data Engineering. Shape the future of technology through data-driven innovation."}
            options={true}
          />
          <Explorecategories
            topic={"Cloud Computing Development"}
            image={"category1"}
            desc={"Transform your ideas into reality with Cloud Computing. Discover limitless possibilities in cloud-based solutions. Explore projects that leverage the power of cloud infrastructure and redefine the way we connect, collaborate, and innovate"}
            options={true}
          />
          <Explorecategories
            topic={"UI/UX Designing"}
            image={"category1"}
            desc={"Craft seamless user experiences and visually stunning interfaces. Immerse yourself in the world of UI/UX Designing. Work on projects that challenge creativity and enhance usability. Design the future of digital interactions."}
            options={true}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;