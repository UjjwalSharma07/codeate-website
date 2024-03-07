
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/projects/Explorecategories.module.css";

const CourseMap = ({
  id,
  title,
  description,
  image,
  onStartClick,
  onDiscussClick,
}) => (
  
<div className="items-center h-[500px] relative">
  <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
  <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-1 top-4 opacity-20"></div>

  <motion.div
    whileHover={{ scale: 1.1 }}
    className="bg-clip-padding h-[100%] backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10 relative" 
  >
    <Image src={image} alt="img" className="" width={400} height={230} objectFit="contain" />
    <div className="text-2xl items-center flex flex-row justify-center font-semibold mt-5 mb-5 text-pink-500">
      <div></div>
      {title}
    </div>
    <div className="mb-5 flex flex-row p-1 items-center justify-center">{description ? description.slice(0, 120) : ""}...</div>
    <Link href={`CourseMap/${id}`}>
      <a>
        <i className="fa-solid fa-arrow-right"></i>
      </a>
    </Link>
  </motion.div>

  {true && (
    <div className=" w-[400px] absolute bottom-4 left-1/2 transform -translate-x-1/2"> 
      <Link href={`CourseMap/${id}`} className="cursor-pointer cat-option">
        <a>
          <p className="cursor-pointer bg-blue-500 rounded-full text-center p-2">Learn More</p>
        </a>
      </Link>
    </div>
  )}
</div>


);

export default CourseMap;
