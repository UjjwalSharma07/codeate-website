import React from "react";
import About from "../components/About";
import WhatWhy from "../components/WhatWhy.jsx";
import Whodrivesus from "../components/Whodrivesus.js";
import Mentorstats from "../components/Mentorstats.js";
import WhyWithUs from "../components/home/WhyWithUs";
import SAP from "../components/community/SAP";
import MobileSAP from "../components/community/MobileSAP";

const about = () => {
  return (
    <div className="build bg-black text-white">
      {/* Who we are*/}

      <SAP />
      <MobileSAP
        heading="About Codeate"
        description="Learn on the go with diverse community of techies and get ahead in your career.
We have created a cultured community of techies for you to leverage peer to peer learning, collaboration and help."
        button="Learn More"
      />

      <WhyWithUs Heading="Why Choose Us?" />
      <Whodrivesus />
      <WhatWhy />
      <Mentorstats />
    </div>
  );
};

export default about;
