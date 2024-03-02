import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const StepIcon = ({ number }) => (
  <div className="flex justify-center text-3xl items-center w-full h-full bg-amber-500 text-white rounded-full font-bold">
    {number}
  </div>
);

const ExperienceCard = ({  title, content, date }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-clip-padding md:w-[80%] w-[90%] my-4 backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
  >
    <h3 className="text-pink-500 text-[24px] mb-4 text-center font-bold">{title}</h3>
    <p
      className="text-secondary text-[16px]  text-center font-[500]"
      style={{ margin: 0 }}
    >
      {content}
    </p>
  </motion.div>
);

const HowItWorks = ({ Heading }) => {
  const data = [
    {
      title: "Ignite Your Learning",
      imgLink: "/images/learning.png",
      content:
        "Enroll in our cutting-edge, industry-tailored programs designed to propel your skills to new heights.",
      date: "27/01/2024",
    },
    {
      title: "Build Projects",
      imgLink: "/images/project.png",
      content:
        "Level up your skills, one project at a time! Dive into exciting challenges across different tech stacks. Each project you tackle is an opportunity to grow and become a true master in your field.",
      date: "27/02/2024",
    },
    {
      title: "Earn Certificates",
      imgLink: "/images/certifcate.png",
      content:
        "Get recognized for your hard work! Showcase your skills and expertise by submitting your completed projects and earning our skill-focused certifications. These valuable credentials will validate your abilities and set you apart from the competition.",
      date: "27/03/2024",
    },
    {
      title: "Land Opportunities",
      imgLink: "/images/idea.png",
      content:
        "Your proof of work is the key to unlocking exciting opportunities and jumpstarting your dream career. Employers value real-world experience, and your portfolio of completed projects will make you stand out from the crowd.",
      date: "27/04/2024",
    },
  ];

  return (
    <div className="mx-4 md:mx-20 my-20">
      <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
        <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-fu
        ll absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"></div>
      <p className="text-4xl title md:text-5xl font-semibold mt-10 text-center">{Heading}</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-start">
          <Image src="/images/howitworks.png" alt="" height="1000px" width="1000px" />
        </div>
        <div className="mt-20 flex flex-col items-center justify-center">
          {data.map((item, index) => (
            <ExperienceCard
              key={index}
              className="my-20"
              title={item.title}
              
              content={item.content}
              // date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
