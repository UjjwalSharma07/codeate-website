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
import EventsDiv from "../components/community/EventsDiv";
import Partners from "../components/community/Partners";
import BuiltTop from "../components/community/BuiltTop";
import axios from "axios";

import EventMap from "./EventMap";
import { useEffect } from "react";
import Link from "next/link";
import {
  useCurrentId,
  useEventInData,
  useInData,
  useIsChangeData,
  useUserCourse,
} from "../store1/store1";

import CurrentEvents from "./CurrentEvents";

import { useRef } from "react";
import Footer from "../components/Footer";
import CompanyPartners from "../components/CompanyPartners";

// var Scroll = require('react-scroll');

const Community = () => {
  const { indata } = useInData((state) => state.auth);
  const setData = useInData((state) => state.setData);
  const bottomRef = useRef();
  // Function to scroll to the bottom of the screen
  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get('https://backend.codeate.in/Events')
      // const { data } = await axios.get(`${BASE_API_URL}/Events`);    // changes
      setData(data.Events);
    };
    getEvents();
  }, []);
  return (
    <div className="bg-black text-white">
      <SAP />

      <MobileSAP
        heading="Learn, Build & Collaborate"
        description="Learn on the go with diverse community of techies and get ahead in your career.
We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help."
        button="Join Our Community"
        scrollToBottom={scrollToBottom}
      />
      <Features />
      {/* <Mentors Heading = "Our Mentors" /> */}
      {/* <WorkshopsCard Heading="Our Workshops"/> */}

      {/* <EventsDiv /> */}
      {/* <div className="flex flex-row justify-center">
        <div></div>
        <h1 className="title events-h1 text-5xl font-extrabold">
          Upcoming Events
        </h1>
      </div> */}

      <div
          className="text-center h-full p-10 mt-10"
          style={{ background: "#000000" }}
        >
          <h1 className="md:text-5xl   title">Events</h1>

          <div className=" mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10">
            {indata?.map((eve) => (
              <EventMap
                key={eve?._id}
                title={eve?.title}
                description={eve?.message}
                id={eve?._id}
                image={eve?.selectedFile}
              />
            ))}
          </div>
          <Link href="/projects">
            <div id={`${styles.testbutton}`}></div>
          </Link>
        </div>
      {/* <CurrentEvents /> */}

      <CompanyPartners/>
      <Mentorstats />
      <Partners />
      
      {/* <CommunityPartners /> */}
      <Events />
      <div ref={bottomRef}></div>
      <Ourcommunity bottomRef={bottomRef} />
      <Footer />
    </div>
  );
};

export default Community;