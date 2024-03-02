import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "./utils/motion";
import Image from "next/image";
const contentData = [
  {
    title: "Interactive Sessions",
    description:
      "To learn about the various facets of Front-End web development, the students will participate in interactive sessions with mentors. Additionally, they will receive resource information to aid them in their learning.",
    image: "/images/knowledge.png",
  },
  {
    title: "Mentorship Support",
    description:
      "Mentors will always be accessible to assist in clearing up doubts.",
    image: "/images/online-lesson.png",
  },
  {
    title: "Certificates and Swags",
    description:
      "Students will earn certificates, have the chance to apply for internships, and leave with some incredible goodies when the program is through.",
    image: "/images/project.png",
  },
  {
    title: "Project Building Assistance",
    description:
      "By submitting your finished projects and obtaining certificates that are skill-specific, you may demonstrate your competence. Display your practical knowledge to demonstrate your capacity to offer solutions for real-world problems.",
    image: "/images/clipboard.png",
  },
  {
    title: "Learn and Build practically",
    description:
      "Access a thriving network of mentors and peers who are prepared to help you along the way. Work together, share ideas, and get direction whenever you want.",
    image: "/images/24-hours.png",
  },
  {
    title: "Internship and PPO opportunities.",
    description:
      "Make contacts with experts in the field to grow your network and gain access to job prospects. Use our broad network of professionals to get insights, mentorship, and career opportunities.",
    image: "/images/developers.png",
  },
];

const TezosChooseUs = () => {
  return (
    <div className="mx-4 md:mx-20 mt-20">
      {/* <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div> */}
      {/* <div
        className="w-60 h-60 blur-3xl bg-blue-400 rounded-fu
        ll absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"
      ></div> */}
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

export default TezosChooseUs;
