import Image from "next/image";
import React from "react";
import Newsletter from "../components/Newsletter";
import Explorecategories from "../components/project/Explorecategories";
import TalkToExperts from "../components/TalkToExperts";

const Domains = () => {
  return (
    <div className="Domainpage">
      <div className="Domainshead">
        <div className="domains-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          expedita dolorum sint tenetur voluptatibus sed ipsam eos maiores
          recusandae , necessitatibus voluptatem similique neque repudiandae
          esse facere magnam non aspernatur! Voluptates dolor corporis
          temporibus exercitationem similique recusandae deserunt numquam
          doloremque mollitia!
        </div>
        <div className="Domains-face">
          <Image
            src={"/images/projects/Projectpage3.png"}
            width="400"
            height="400"
            alt=""
          />
        </div>
      </div>
      <div className="Categories">
        <h1>Domains</h1>
        <div className="Category-holder">
          <Explorecategories
            topic={"Web Development"}
            image={"category3"}
            options={true}
          />
          <Explorecategories
            topic={"Android Development"}
            image={"category2"}
            options={true}
          />
          <Explorecategories
            topic={"Blockchain"}
            image={"category1"}
            options={true}
          />
        </div>
      </div>
      <TalkToExperts />
      <Newsletter />
    </div>
  );
};

export default Domains;
