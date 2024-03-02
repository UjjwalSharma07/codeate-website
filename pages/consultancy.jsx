import React from "react";
import Ourcommunity from "../components/home/OurCommunity";
import MobileSAP from "../components/community/MobileSAP";
import SAP from "../components/community/SAP";
import styles from "../styles/home/Community.module.css";
import Features from "../components/community/Features";
import Mentorstats from "../components/Mentorstats";
import WorkshopsCard from "../components/community/WorkshopsCard";
import Mentors from "../components/community/mentors";
import CommunityPartners from "../components/CommunityPartners";
import Events from "../components/community/Events";
import Partners from "../components/community/Partners";
import BuiltTop from "../components/community/BuiltTop";

import CurrentEvents from "./CurrentEvents";
import { homeObjThree } from "../data/HomeData";
import { useRef } from "react";
import Footer from "../components/Footer";
import CompanyPartners from "../components/CompanyPartners";

import HeroConsultancy from "../components/consultancy/HeroConsultancy";
import Whychooseus from "../components/consultancy/Whychooseus";
import Aboutus from "../components/consultancy/Aboutus";
import OurExpertise from "../components/consultancy/OurExpertise";
import GetInTouch from "../components/consultancy/GetInTouch";
import portfolioImage from '../assets/images/portfolio.png';
import Image from "next/image";

// var Scroll = require('react-scroll');

const Consultancy = () => {
  const bottomRef = useRef();
  // Function to scroll to the bottom of the screen
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="bg-black text-white">
        <HeroConsultancy  {...homeObjThree} />
        <Aboutus Heading="About Us" SideHeading="ABOUT" />
        <div className="">
          <h3 className="title text-5xl mb-20 mt-36  font-bold">
            Why Choose Codeate ?{/* <img src='/images/Codeate.png'></img> */}
          </h3>
        </div>
        <Whychooseus />
        <OurExpertise Heading = "Our Expertise "/>
        <div className="flex flex-col justify-center items-center w-screen">
          <h3 className="title text-5xl mb-20   font-bold">
            Our Portfolio of Success 
          </h3>
            <Image
                height={"400px"}
                width={"900px"}
                src="/images/portfolio.png"
                alt="Portfolio" 
                onResize={"cover"}
            />

          {/* <img className="w-[300px] h-[300px]" src={portfolioImage} alt="Portfolio" /> */}
        </div>
        <GetInTouch />

      {/* <MobileSAP
        heading="Learn, Build & Collaborate"
        description="Learn on the go with diverse community of techies and get ahead in your career.
We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help."
        button="Join Our Community"
        scrollToBottom={scrollToBottom}
      /> */}
      {/* <Features /> */}
      {/* <Mentors Heading = "Our Mentors" /> */}
      {/* <WorkshopsCard Heading="Our Workshops"/> */}

      {/* <EventsDiv /> */}
      {/* <div className="flex flex-row justify-center">
        <div></div>
        <h1 className="title events-h1 text-5xl font-extrabold">
          Upcoming Events
        </h1>
      </div> */}
      {/* <CurrentEvents />

      <CompanyPartners/>
      <Mentorstats />
      <Partners /> */}
      
      {/* <CommunityPartners /> */}
      {/* <Events />
      <div ref={bottomRef}></div>
      <Ourcommunity bottomRef={bottomRef} /> */}
      <Footer />
    </div>
  );
};

export default Consultancy;
