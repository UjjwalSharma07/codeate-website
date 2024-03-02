
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/projects/Explorecategories.module.css";

const EventMap = ({
  id,
  title,
  description,
  onStartClick,
  onDiscussClick,
  image
}) => (
  <div className="items-center h-[500px]">
    {/* <Link href={`EventMap/${id}`}>

   <motion.div
   whileHover={{ scale: 1.1 }}
   whileTap={{ scale: 0.9 }}
  
   className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
 >

  <div className="flex flex-row justify-center items-center">
    <div></div>
 <Image src={image} className="rounded-full" alt="ima" width={100} height={100}/>
  </div>

   <div className="text-2xl px-1 font-semibold mt-5 mb-5 text-pink-500 flex flex-row items-center justify-center">
    {}
   {title}
   </div>

   <div className="flex flex-row justify-center items-center px-2">
<div></div>
   <div className="mb-5 ">{description}</div>
   </div>

   <Link href={`EventMap/${id}`}>
    <i className="fa-solid fa-arrow-right"></i>
  </Link>

  <div className="flex flex-row justify-center items-center">
    <div></div>
      <Link href={`EventMap/${id}`}>
        <button className="px-4 py-2 duration-300 font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline  mx-2 my-10">
          Know More
        </button>
      </Link>

      {/* <Link href="">
      <button
        onClick={onDiscussClick}
        className="px-4 py-2 font-medium text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
      >
        Discuss in Community
      </button>
     
      </Link> */}

    {/* </div> */}
{/* //  </motion.div> */}
{/* //  </Link> */} 

<div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14  opacity-20"></div>
         <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-1 top-4 opacity-20"></div>
       
         <motion.div
         whileHover={{ scale: 1.1 }}
         
         className="bg-clip-padding h-[100%] backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
       >
       {/* <Image src={props.imgLink} alt="ima" width={100} height={100}/> */}
       <Image src={image} alt="img" className=""   layout="fixed"
        width={400}
        height={230}
        objectFit="contain"
      />
       {/* <img src={image} alt="img" /> */}
         <div className="text-2xl items-center flex flex-row justify-center font-semibold mt-5 mb-5 text-pink-500">
          <div></div>
         {title}
         </div>
         <div className="mb-5 flex flex-row p-1 items-center justify-center">{} {description ? description.slice(0, 120) : "" }</div>
            <Link href={`EventMap/${id}`}>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      
      {true && (
        <div className={`${styles.Category_operations} `}>
          <Link href={`EventMap/${id}`} className="cursor-pointer cat-option">
          <p className="cursor-pointer bg-blue-500 rounded-full text-center p-2">Know More</p>
          </Link>
          {/* <button className="cat-option 😁">
            Join the community <i className="fa-solid fa-arrow-right"></i>{" "}
          </button> */}
        </div>
      )}
       </motion.div>
  



 </div>

);

export default EventMap;
