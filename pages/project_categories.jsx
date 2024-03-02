import React from "react";
// import "../styles/Projectcat.css";

// import Newsletter from "../Projectpage/Newsletter";
import TalkToExperts from "../components/TalkToExperts";
import Explorecategories from "../components/project/Explorecategories";
import Image from "next/image";
import Newsletter from "../components/Newsletter";

const Projectcat = () => {
  // const urlquery = new URLSearchParams(window.location.search);
  // const level = urlquery.get("level");

  return (
    <div className="Projectcat bg-black text-white flex flex-start flex-col">
      
      <div className="Categories pt-12 mb-4">
        <h1 style={{color: "white",  fontWeight: "bold", paddingTop:"60px"}}>Explore Project Categories</h1>
        <div className="Category-holder">
          <Explorecategories
            topic={"Web Development"}
            image={"category3"}
            desc={"Explore our curated web development projects to work on different web development tech stacks and hone your skills in website development."}
            options={true}
          />
          <Explorecategories
            topic={"Android App Development"}
            image={"category2"}
            desc={"Explore different App development projects and build Apps and gain hands-on expertise and skills in App development."}
            options={true}
          />
          <Explorecategories
            topic={"Blockchain Development"}
            image={"category1"}
            desc={"Blockchain is the future, explore the projects and get hands-on with the blockchain technology."}
            options={true}
          />
          <Explorecategories
            topic={"Gen A.I, A.I/M.L/D.L, Data Science, Data Engineering, Data Analyst Development"}
            image={"category1"}
            desc={"Dive into the data-driven universe. Explore advanced projects in AI, Machine Learning, Deep Learning, Data Science, and Data Engineering. Shape the future of technology through data-driven innovation."}
            options={true}
          />
          <Explorecategories
            topic={"Cloud Computing Development"}
            image={"category1"}
            desc={"Transform your ideas into reality with Cloud Computing. Discover limitless possibilities in cloud-based solutions. Explore projects that leverage the power of cloud infrastructure and redefine the way we connect, collaborate, and innovate"}
            options={true}
          />
          <Explorecategories
            topic={"UI/UX Designing"}
            image={"category1"}
            desc={"Craft seamless user experiences and visually stunning interfaces. Immerse yourself in the world of UI/UX Designing. Work on projects that challenge creativity and enhance usability. Design the future of digital interactions."}
            options={true}
          />
        </div>
      </div>
      <TalkToExperts />
      {/* <Newsletter /> */}
    </div>
  );
};

export default Projectcat;