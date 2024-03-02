import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../Styles'
import Carousel from 'react-multi-carousel'
import profile from '../../assets/download (1).png'
import 'react-multi-carousel/lib/styles.css'
const FeedbackCard = ({
  index,
  description,
  name,
  organization,
  image_url,
}) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-clip-padding mx-4 backdrop-filter flex flex-col justify-between h-full px-6 py-6 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
  >
    <div>
      <p className="text-white font-black text-[48px]">&quot;</p>
      <p className="text-white tracking-wider text-[18px]">{description}</p>
    </div>

    <div className="flex justify-end items-end mt-4 gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">{organization}</p>
      </div>
      <img
        src={image_url}
        alt={`feedback-by-${name}`}
        className="w-12 h-12 rounded-full object-cover"
      />
    </div>
  </motion.div>
)

const data = [
  {
    name: 'Aman',
    organization: 'Team Upanyaas',
    image_url: 'https://i.imgur.com/oHXxXRI.jpg',
    description:
      'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad that we at upanyas decided to work with you.',
  },
  {
    name: 'Gurtaran Singh',
    organization: 'Gaming Geeks',
    image_url: 'https://i.imgur.com/AUTr7Ym.jpg',
    description:
      'Working with Codeate was very amazing and informative.  Gaming Geeks collaborated with Codeate on the Web Game Dev Bootcamp that took place from February 24 to March 2, 2022.',
  },
  {
    name: 'Aaditya',
    organization: 'Befikra Community',
    image_url: 'https://i.imgur.com/r3oBDMR.jpg',
    description:
      'My experience with Codeate have been amazing and the founders are so cool and they have helped us grow in our domain in the ecosystem they provide. ',
  },
  {
    name: 'Vikas Rai',
    organization: 'Student',
    image_url: 'https://i.imgur.com/rifOyjI.jpg',
    description: `Hello everyone, I'm Vikas Rai. Recently I attended TezIndia Blockchain Bootcamp 1.0. The Bootcamp was amazing. I didn't have any previous knowledge about Web 3.0. `,
  },
  {
    name: 'Karthik Karamsetty',
    organization: 'FinoBird',
    image_url: '/images/testi5.jpg',
    description: `Codeate has made my journey as a first time founder so easy. 
    I could completely concentrate on business improvement with Codeate on my side as project handlers.
    They always had time for any discussion/clarification. So grateful to find them. I defenitely recommend.`,
  },
  {
    name: 'Girish Nair',
    organization: 'Arthlex Research',
    image_url: 'data:image/png;base64,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',
    description: `Codeate has been project managing the build of our AI based product - VIKRAM and we are absolutely delighted by their commitment for the product. Right from hiring the best talent to planning the schedules and taking constant updates from the developers as well as providing their unique perspectives - their approach has been systematic and result oriented.`,
  },
]

const Testimonial = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={` rounded-2xl min-h-[100px]`}>
        <motion.div variants={textVariant()}>
          <p className="title text-center md:text-5xl text-3xl  font-bold">
            What Other&apos;s Say
          </p>
          <h2 className="text-center text-2xl font-semibold mt-4">
            Testimonials !
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.padding}  pb-14 justify-center`}>
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={false}
          autoPlaySpeed={2000}
          autoPlay={true}
          keyBoardControl={false}
          transitionDuration={500}
          arrows={true}
        >
          {data.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonial
