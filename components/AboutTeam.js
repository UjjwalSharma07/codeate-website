import React from 'react';
import { motion } from "framer-motion";
const mentorsData = [
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img1.png',
  },
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img2.png',
  },
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img3.png',
  },
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img4.png',
  },
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img4.png',
  },
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img4.png',
  },
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img4.png',
  },
  {
    name: 'Ojusvi Rastogi',
    position: 'Tech Lead',
    company: 'Tezos India',
    socials: [
      { platform: 'Twitter', url: 'https://twitter.com/OjuswiRastogi/' },
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/OjusWiZard/' },
      { platform: 'GitHub', url: 'https://github.com/OjusWiZard/' },
    ],
    imageSrc: '/images/img4.png',
  },
  // Add other mentor data objects here
];
const MentorCard = ({ name, position, company, socials, imageSrc }) => {
  return (
    <motion.div   
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
     className="bg-clip-padding backdrop-filter flex flex-col items-center justify-start  px-10 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10  mb-3 cursor-pointer">
      <div className="glassmorphism-card p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <img className="mentor-image w-32 h-32 rounded-full mx-auto mb-4" src={imageSrc} alt="" />
        <div className="mentor-details text-center">
          <p className="mentor-name text-lg font-semibold">{name}</p>
          <p className="mentor-position text-sm text-gray-600">{position}</p>
          <p className="mentor-company text-sm text-gray-600">{company}</p>
          <div className="mentor-socials mt-4 flex justify-center space-x-4">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="w-6 h-6"
                  src={`images/${social.platform.toLowerCase()}-white.png`}
                  alt={social.platform}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const MentorsSection = () => {
  return (
    <section id="h-full py-20" className="section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="title text-5xl" data-wow-delay="0.2s">
                Meet The Mentors
              </h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet, consectetur
              </p> */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-10 mt-10">
          {mentorsData.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
