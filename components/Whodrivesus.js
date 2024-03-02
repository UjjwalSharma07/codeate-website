import React from 'react'
import styles from '../styles/Whodrivesus.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Vision from '../assets/images/Vision.png'
import Mission from '../assets/images/Mission.jpg'
import { motion } from "framer-motion";


const Card = (props) => {
    return (
        // <div className={`${styles.w__card} ${props.index===0? "":`${styles.not__first__card}`}`} id="im3">
        //     <Image src={props.imgLink} alt="ima" width={100} height={100}/>
        //     <div className={styles.w__reason}>{props.title}</div>
        //     <div className={styles.w__card__content}>
        //         {props.content}
        //     </div>
        // </div>
         <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         className=" bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
       >
       <Image src={props.imgLink} alt="ima" width={100} height={100}/>
         <div className="text-2xl font-semibold mt-5 mb-10 text-pink-500">
           {props.title}
         </div>
         <div className="mb-5 text-center">{props.content}</div>
       </motion.div>
    )
}
const data = [
    {
        title: "Vision",
        imgLink: Vision,
        content: "To provide industry relevant skills and exposure to every engineer in making."
    },
    {
        title: "Mission",
        imgLink: Mission,
        content: "Upskilling young geniuses to create a better world through technology."
    }
]
const Whodrivesus = () => {
  return (
    <div>
      <div className={styles.Whatdrivesus}>
            <div className={styles.w__card__holder}>
                {data.map((item, index) => {
                    return <Card key={index} index={index} title={item.title} imgLink={item.imgLink} content={item.content} />
                })}
            </div>
        </div>
    </div>
  )
}

export default Whodrivesus
