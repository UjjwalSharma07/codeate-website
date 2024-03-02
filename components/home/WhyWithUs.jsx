import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import WhyWithUsCard from "./WhyWithUsCard";
import styles from '../../styles/WorkshopsCard.module.css'
import biginnerImg from '../../assets/images/Saly-10.png'
import intermediateImg from '../../assets/images/Saly-16.png'
import expertImg from '../../assets/images/Saly-31.png'
import Link from 'next/link'
const Card = (props) => {
  return(
  <div className="mb-20">
        <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
        <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-fu
        ll absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"></div>
       
         <motion.div
         whileHover={{ scale: 1.1 }}
         
         className="w-[300px]  bg-clip-padding  backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
       >
        <div className="flex items-center justify-center">
       <Image src={props.imgLink} alt="ima" width={150} height={150}/>
       </div>
         <div className="text-2xl font-semibold mt-5 mb-10 text-pink-500 text-center capitalize">
           {props.title}
         </div>
        
         <div className="mb-5  text-center">{props.content}</div>
         <Link href={`./${props.title}`} className="cursor-pointer cat-option">
          <p className="cursor-pointer bg-blue-500 rounded-full text-center capitalize p-2">Explore {props.title}</p>
          </Link>
       </motion.div>
       </div>
  )
}
const data = [
  {
      title: "build",
      imgLink: biginnerImg,

      content: "Our build program offers project-based learning opportunities in most industry-relevant tech stacks. It helps you hone your skills and let you validate your skills with our certification."
  },
  {
      title: "learn",
      imgLink: intermediateImg,
      content:"We offer a wide range of cohort-based learning courses, which helps you gain extra edge on your learning with project-based experiential learning advantage."
  },
  {
    title: "community",
    imgLink: expertImg,

      content: "Join our peer-to-peer learning ecosystem to learn among peers, share skills, and collaborate on projects. Our events and workshops keep you up-to-date with the latest learning trends."
  }
]
const WhyWithUs = (props) => {
  const { Heading } = props
  return (
  
    <div className="mx-4 md:mx-20 my-20">
      <p className="text-5xl  font-semibold z-20 mt-10 text-center title capatalize">
      {Heading}
      </p>
      <div>
   
   <div className="py-12">
         <div className={styles.w__card__holder}>
             {data.map((item, index) => {
                 return <Card key={index} index={index} title={item.title} imgLink={item.imgLink} content={item.content} />
             })}
         </div>
     </div>
 </div>
    </div>
  );
};

export default WhyWithUs;
