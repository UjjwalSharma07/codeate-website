import styles from '../../styles/WorkshopsCard.module.css'
import Icon1 from '../../assets/images/Saly-31.png'
import Icon2 from '../../assets/images/Saly-32.png'
import Icon3 from '../../assets/images/Saly-43.png'
import Icon4 from '../../assets/images/Saly-16.png'
import Image from 'next/image';
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
      <>
       <div>
      <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
      <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"></div>
     
       <motion.div
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.9 }}
       className="w-56 h-56 bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
     >
      <div className="relative flex items-center justify-center my-2">
       <Image src={props.imgLink} alt="ima" className='relative top-3' width={100} height={100}/>
       </div>
      
       <div className="mb-5 text-l text-center">{props.content}</div>
     </motion.div> 
     </div>
     </>
  )
}
const data = [
  {
      title: "Workshop 1",
      imgLink: Icon1,
      content: "Inovative Solutions"
  },
  {
      title: "Workshop 2",
      imgLink: Icon2,
      content:"Thriving on Challenges"
  },
  {
    title: "Workshop 3",
    imgLink: Icon3,
      content: "Seamless Experience"
  },
  {
    title: "Workshop 4",
    imgLink: Icon4,
      content: "Building Cool Products"
  }
]
const Whychooseus = () => {
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

export default Whychooseus