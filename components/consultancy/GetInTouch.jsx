import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
// import "../styles/Talktoexpert.css";
const GetInTouch = () => {
  const router = useRouter()
  return (
    <div className="Talktoexpers mx-auto ">
      <div className="Talktoexpert-desc">
        <h1>Get in Touch</h1>
        <div className="Expert-descriptions">
        Learn, Build and Conquer like a pro with us. Join the community of thousands of likemind professionals now for free.
        </div>
        <div className="flex gap-3 items-center">

            <button onClick={()=>{
            router.push("/contact")
            }} className=" bg-blue-600 p-2 transition-all hover:text-xl ">
            Contact Us<i className="fa-solid fa-chevron-right"></i> 
            </button>
           
        </div>
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

export default GetInTouch;
