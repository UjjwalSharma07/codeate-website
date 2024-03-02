import react from "react"
import Image from "next/image"
import MentorImg from '../../assets/images/Vision.png'
import { motion } from "framer-motion";
import styles from '../../styles/Mentors.module.css'


const Card = (props) => {
    return(

    
    <div>
       
      <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14"></div>
      <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"></div>
       
       <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       className="w-56 flex flex-col bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
     >
     <Image src={props.imgLink} alt="ima" width={100} height={100} className="rounded"/>
       <div className="text-2xl text-center font-semibold mt-5 mb-10 text-pink-500">
         {props.title}
       </div>
       <div className="mb-5 text-center">{props.content}</div>
     </motion.div>
    </div>
    )
}
const data = [
    {
        title: "Mentor 1",
        imgLink: MentorImg,
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, neque"
    },
    {
        title: "Mentor 2",
        imgLink: MentorImg,
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, neque"
    },
    {
      title: "Mentor 3",
      imgLink: MentorImg,
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, neque"
    },
    {
      title: "Mentor 4",
      imgLink: MentorImg,
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, neque"
    }
]
const mentors = (props) => {
    const { Heading } = props
    return (
      <div>
         <p className="text-5xl font-semibold z-20 mt-10 text-center title">
        {Heading}
        </p>
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

export default mentors
