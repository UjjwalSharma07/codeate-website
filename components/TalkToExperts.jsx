import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
// import "../styles/Talktoexpert.css";
const TalkToExperts = () => {
  const router = useRouter()
  return (
    <div className="Talktoexpers">
      <div className="Talktoexpert-desc">
        <h1>Talk to our Experts</h1>
        <div className="Expert-descriptions">
        Still not sure where to begin with? Talk to our experts now to guide you better. Contact Us Now.
        </div>
        <button onClick={()=>{
          router.push("/contact")
        }} className=" bg-blue-600 p-2 transition-all hover:text-xl ">
          Contact Us <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div className="Talktoexpert-face">
        <img
          className="overflow-visible h-[30rem]"
          src="/images/Experties.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TalkToExperts;
