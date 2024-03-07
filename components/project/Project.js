
import { useId } from "../../store1/store1";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/projects/Explorecategories.module.css";
import { useGetAProjectQuery } from "../../redux/features/allSlice";
import Image from "next/image";

function Project({
    id,
    title,
    description,
    imageuri,
    technologies,
    onStartClick,
    onDiscussClick,
    type
  }) {

    const setId = useId(state => state.setId)
    // const { data, isLoading, refetch } = useGetAProjectQuery(id);
  return (

    <motion.div
     whileHover={{ scale: 1.1 }}
     
     className="relative bg-clip-padding w-[500px] h-[600px] flex flex-col  mt-4  items-center backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
   >
    {imageuri? (
    <Image  src={imageuri}
      alt="img" 
      className=""   
      width={400}
      height={230}
      objectFit="contain"
      />)
    :(
      <img
      alt="img" 
      className=""   
      objectFit="contain"
      width={300}
      height={300}
     
        src={"https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=170x170&k=20&c=2pHHE9QRsHC1pQhFpdnIBahYWO9WtjJYwHrJOSePB-Q="}
      />
    )}
     <div className="text-2xl font-semibold mt-5 mb-5 text-pink-500">
     {title}
     </div>
     <div className="text-center mb-5"> {description ? description.slice(0, 120) : "" }</div>
        <Link href={`projects/${id}`}>
      <i className="fa-solid fa-arrow-right"></i>
    </Link>
  
  <div className ="flex-col justify-center items-center absolute bottom-4 left-1/2 transform -translate-x-1/2">
      
      <div>
        <Link href={`projects/${id}`}>
          <button onClick={()=>{setId(id)}} className="px-20 py-2 duration-300 text-center font-medium text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline mx-2 mb-10">
            Start Building Project
          </button>
        </Link>
      </div>
   
      <div className="flex flex-row justify-center items-center">
        <Link href="https://discord.com/invite/v4vZBMt9hQ" target="_blank">
          <button
            onClick={onDiscussClick}
            className="px-10 mr-5 py-2 font-medium text-sm text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
          >
            Discuss in Discord Community
          </button>
        </Link>

        <Link target="_blank" href={`${type==='Web Development' ? 'https://chat.whatsapp.com/FAsUDFAsDIp3uW6uGitd8n' : type==='Android App Development' ? 'https://chat.whatsapp.com/KP4tvWCNK2OAYHcIR3xoz9' : type==='Blockchain Development' ? 'https://chat.whatsapp.com/IQAPPBodkoF1SZU7oPsd8t' : type==='A.I./M.L.' ? 'https://chat.whatsapp.com/LPTShGfUyVR1RjryrUHLBJ' : type==='Cloud Computing Development' ? 'https://chat.whatsapp.com/FML2eDFLuaJG0bzlB3Hmri': type==='UI/UX Designing' ? 'https://chat.whatsapp.com/Lm8PtGWXG2q9QJE3NRpD2A' : ''}`}>
        <button
          onClick={onDiscussClick}
          className="px-10 py-2 font-medium text-sm text-white bg-gray-500 rounded-full hover:bg-gray-700 focus:outline-none focus:shadow-outline"
        >
          Discuss in WhatsApp Community
        </button>
        </Link>
      </div>
  </div>

   </motion.div>

   
  )
}

export default Project