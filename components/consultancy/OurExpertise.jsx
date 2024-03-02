import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const StepIcon = ({ number }) => (
  <div className="flex justify-center text-3xl items-center w-full h-full bg-amber-500 text-white rounded-full font-bold">
    {number}
  </div>
);

const ExperienceCard = ({  title, content, date }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-clip-padding md:w-[80%] w-[90%] my-4 backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
  >
    <h3 className="text-pink-500 text-[24px] mb-4 text-center font-bold">{title}</h3>
    <p
      className="text-secondary text-[16px]  text-center font-[500]"
      style={{ margin: 0 }}
    >
      {content}
    </p>
  </motion.div>
);

const OurExpertise = ({ Heading }) => {
  const data = [
    {
      title: "MVP and Product Development",
      imgLink: "/images/learning.png",
      content:
        "We specialize in developing minimum viable products (MVPs) for startups and individuals. We have a proven track record of transforming ideas into functional and scalable products, ensuring that your clients' vision is translated into a successfull solution.",
      date: "27/01/2024",
    },
    {
      title: "Design and Prototyping",
      imgLink: "/images/project.png",
      content:
        "Our team offers comprehensice design services, including user interface (UI) and user experience (UX) design. You focus on creating intuitive, visually appealling, and engaging interfaces that enhance the user experience. You also excel in prototyping, allowing clients to visualize and test their product ideas before development.",
      date: "27/02/2024",
    },
    {
      title: "Business Modelling",
      imgLink: "/images/certifcate.png",
      content:
        "We have expertise in helping client define and refine their business models. We assist in identifying target markets, evaluating revenue streams, and optimizing value propositions. By leveraging your knowledge of market trends and customer needs, We guide clients in developing sustainable and profitable business models and GTM strategies.",
      date: "27/03/2024",
    },
    {
      title: "Community As Service",
      imgLink: "/images/idea.png",
      content:
        "We have a community to techies with 5000+ members and we help our clients to take leverage of community. We help them launch and test the product in our community, hire talent, run campaigns and what not.",
      date: "27/04/2024",
    },
  ];

  return (
    <div className="mx-4 md:mx-20 my-20">
      <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
        <div className="w-60 h-60 blur-3xl bg-blue-400 rounded-fu
        ll absolute group-hover:bg-blue-600 duration-1000 left-1 bottom-2 opacity-20"></div>
      <p className="text-4xl title md:text-5xl font-semibold mt-10 text-center">{Heading}</p>
      <div className="grid text-center grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-start">
          <Image src="/images/howitworks.png" alt="" height="1000px" width="1000px" />
        </div>
        <div className="mt-20 flex flex-col items-center justify-center">
          {data.map((item, index) => (
            <ExperienceCard
              key={index}
              className="my-20"
              title={item.title}
              
              content={item.content}
              // date={item.date}
            />
          ))}
        </div>
      </div>
       

      <p className="max-w-4xl text-center mx-auto  px-10 mt-[80px] text-[16px]"> 
        Codeate is a dynamic company that turns ideas into reality through exceptional product development. Our innovative approach and dedicated team allow us to solve complex problems and deliver cutting-edge solutions.
      </p>
      
    </div>
  );
};

export default OurExpertise;
