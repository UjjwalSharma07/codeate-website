import React from "react";
import styles from "../../styles/home/OurPartners.module.css";

function OurPartnersItem(props) {
  return (
    <div className={`${styles.item}`}>
      <div className={`${styles.img_div}`}>
        <img src={props.link} alt={props.name} />
      </div>
      <div className={`${styles.heading_div}`}>{props.name}</div>
    </div>
  );
}

export default function OurPartners() {
  return (
    <div className={`${styles.ourPartners}`}>
      <h2>Our Community Partners</h2>
      <div className={`${styles.container}`}>
        <div className={`${styles.col}`}>
          <h3>Community Partners</h3>
          <div className={`${styles.row}`}>
            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/amity-coding-club.jpeg?raw=true"
              name="Amity Coding Club"
            />
            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/befikra-community.jpeg?raw=true"
              name="Befikra Community"
            />

            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/cuvette.jpeg?raw=true"
              name="Cuvette"
            />
            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/gaming-geeks.jpeg?raw=true"
              name="Gaming Geeks"
            />

            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/tech-directive.jpeg?raw=true"
              name="Tech Directive"
            />
            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/tezos-india.jpeg?raw=true"
              name="Tezos India"
            />
          </div>
        </div>
        <div className={`${styles.col}`}>
          <h3>Startups</h3>
          <div className={`${styles.row}`}>
            <OurPartnersItem link="/images/Upanyas.jpeg" name="Upanyas" />
            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/career-clap.jpeg?raw=true"
              name="Career Clap"
            />
            <OurPartnersItem
              link="https://github.com/KapadiaShubham/Codeate-media/blob/master/home/Our%20Partners/lm-basket.jpeg?raw=true"
              name="LM Basket"
            />
            <OurPartnersItem link="/images/Careerbot.jpeg" name="Careerboat" />
          </div>
        </div>
      </div>
    </div>
  );
}
