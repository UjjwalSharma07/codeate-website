import React from "react";
import styles from "../../styles/projects/Explorecategories.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Explorecategories = (props) => {
  return (
    <>
    
  <div className="items-center h-[500px] relative">
      
    <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14  opacity-20"></div>
         <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-1 top-4 opacity-20"></div>
       
         <motion.div
         whileHover={{ scale: 1.1 }}
         
         className="bg-clip-padding h-[100%] backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
       >
       {/* <Image src={props.imgLink} alt="ima" width={100} height={100}/> */}
       <Image src={`/images/projects/${props.image}.png`} alt="img" className="" width={400}
        height={230}
        objectFit="contain" />
         <div className="text-2xl text-center font-semibold mt-5 mb-5 text-pink-500">
         {props? props.topic.slice(0, 50) + "..." : ""}
         </div>
         <div className="mb-5 text-center"> {props? props.desc.slice(0, 120) + "..." : ""}</div>
            <Link href={`/projects?domain=${props.topic}`}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      
      {props.options && (
        <div className=" w-[350px] absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Link href={`/projects?type=${props?.topic}`} className="cursor-pointer cat-option">
          <p className="cursor-pointer bg-blue-500 rounded-full text-center p-4">Explore {props? props.topic.slice(0, 20) + "..." : ""}</p>
          </Link>
          
        </div>
      )}
       </motion.div>
       </div>
  
    </>
  );
};

export default Explorecategories;