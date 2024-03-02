import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";
import Image from "next/image";
const contentData = [
  {
    title: "Interactive Sessions",
    description:
      "The students shall receive interactive sessions with mentors to learn about the various aspects of Blockchain. Along with that, they shall also receive resource information to  guide them along the learning process.",
    image: "/images/knowledge.png",
  },
  {
    title: "Mentorship Support",
    description:
      "Mentors will always be available to help with doubt-solving.",
    image: "/images/online-lesson.png",
  },
  {
    title: "NFTs and Swags",
    description:
      "After the end of the program, students shall receive certificates, and internship opportunities, and take home some amazing goodies.",
    image: "/images/project.png",
  },
  {
    title: "Project Building Assistance",
    description:
      "Validate your mastery by submitting your completed projects and earning skill-focused certifications. Showcase your practical expertise, proving your ability to deliver real-world solutions.",
    image: "/images/clipboard.png",
  },
  {
    title: "Learn and build on the Tezos Platform",
    description:
      "Access a vibrant community of peers and mentors, ready to support you throughout your journey. Collaborate, exchange ideas, and receive guidance, no matter the time or day.",
    image: "/images/24-hours.png",
  },
  {
    title: "Internship and PPO opportunities.",
    description:
      "Forge connections with industry professionals, expanding your network and accessing career opportunities. Tap into our extensive network of experts who can provide insights, mentorship, and potential job prospects.",
    image: "/images/developers.png",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="mx-4 md:mx-20 mt-20">
      <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
      <div
        className="w-60 h-60 blur-3xl bg-blue-400 rounded-fu
        ll absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"
      ></div>
      <div className={` rounded-2xl min-h-[100px]`}>
        <motion.div variants={textVariant()}>
          <p className=" title text-center md:text-5xl text-3xl font-bold">
            Why Choose Us !
          </p>
          <h2 className="text-center text-2xl font-semibold mt-4"></h2>
        </motion.div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 md:gap-8 p-8">
        {contentData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-clip-padding backdrop-filter flex flex-col items-center justify-start mb-6 px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
          >
            <Image src={item.image} alt="" width={100} height={100} />
            <h2 className="text-2xl font-bold mb-2 text-pink-500 text-center my-2">
              {item.title}
            </h2>
            <p className="text-[16px] mb-4 text-justify">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
