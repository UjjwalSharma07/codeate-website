import React, { useRef } from "react";
import WhyWithUsCard from "./WhyWithUsCard";
import { motion } from "framer-motion";
import styles from "../../styles/WorkshopsCard.module.css";

const Card = (props) => {
  return (
    // <div className={`${styles.w__card} ${props.index===0? "":`${styles.not__first__card}`}`} id="im3">
    //     <Image src={props.imgLink} alt="ima" width={100} height={100}/>
    //     <div className={styles.w__reason}>{props.title}</div>
    //     <div className={styles.w__card__content}>
    //         {props.content}
    //     </div>
    // </div>
    <>
      <div>
        <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14 opacity-20"></div>
        <div className="w-60 h-60 blur-3xl bg-blue-500 rounded-full absolute group-hover:bg-blue-600 duration-1000 right-5 bottom-14"></div>

        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-6 -left-4 group-hover:blur-md group-hover:top-1 duration-1000 rounded-full"
        >
          <circle
            cx="47.7753"
            cy="47.7753"
            r="47.5"
            transform="rotate(38.7451 47.7753 47.7753)"
            fill="url(#paint0_linear_2_25)"
          />
          <circle
            cx="47.7753"
            cy="47.7753"
            r="47.5"
            transform="rotate(38.7451 47.7753 47.7753)"
            fill="url(#paint1_radial_2_25)"
            fillOpacity="0.4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_25"
              x1="27.2753"
              y1="35.7753"
              x2="47.7753"
              y2="95.2753"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7CB8FF" />
              <stop offset="1" stopColor="#4A51FA" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_2_25"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(32.0135 43.343) rotate(73.1167) scale(54.2715)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-64 h-full bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
        >
          {/* <Image src={props.imgLink} alt="ima" width={100} height={100}/> */}
          <div className="text-3xl font-bold text-center mt-5 mb-10 text-pink-500">
            {props.title}
          </div>
          <div className="mb-5 text-justify text-lg">{props.content}</div>
        </motion.div>
      </div>
    </>
  );
};
const data = [
  {
    title: "Community led learning programs",
    content:
      "Learn with the community and start building from day1 with our best curated resources.",
  },
  {
    title: "24x7 community supports",
    content:
      "Discuss and Collab with likemind and experts from our community to build projects.",
  },
  {
    title: "Best in class curated projects",
    content:
      "Our projects and curriculum help you achieve industry standard skills and experience.",
  },
  {
    title: "Earn skill badges and certificates",
    content:
      "Earn our badges and certificates that help you land internships,projects and jobs.",
  },
];

const WhyWithUs = (props) => {
  const { Heading } = props;
  return (
    <div>
      <p className="text-5xl font-semibold z-20 mt-10 text-center title">
        {Heading}
      </p>
      <div className={styles.Whatdrivesus}>
        <div className={styles.w__card__holder}>
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                index={index}
                title={item.title}
                imgLink={item.imgLink}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyWithUs;
