// import React, { useEffect } from 'react'
// import Link from 'next/link'
//  import Image from 'next/image'
// import styles from '../styles/Ourofferings.module.css'
// import { gsap } from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'

// const OfferingCard=(props)=>{
//   return(
//     <div className={styles.Offering}>
//       <div className={styles.Offer__head}>
//         <Image
//           src={props.imgLink}
//           alt=''
//         />
//       </div>
//       <div className={styles.Offer__body}>
//         <div className={styles.Offer__name}>{props.title}</div>
//         <div className={styles.offer__content}>{props.content}</div>
//       </div>
//       <div className={styles.Explore__more}> <Link to={props.linkpath}>{props.buttonTitle}<i className='fa-solid fa-angle-right'></i></Link></div>
//     </div>
//   )
// }
// const data = [
//   {
//     title: 'Project based experiential learning',
//     imgLink:'https://github.com/KapadiaShubham/Codeate-media/blob/master/home/img/illus_4.png?raw=true',
//     content: 'Our build program offers project-based learning opportunities in most industry-relevant tech stacks. It helps you hone your skills and let you validate your skills with our industry-standard certification.',
//     buttonTitle: 'Explore build',
//     linkpath:"/built"
//   },
//   {
//     title: 'Learn what makes you truly industry ready',
//     imgLink:'https://github.com/KapadiaShubham/Codeate-media/blob/master/home/img/illus_5.png?raw=true',
//     content: 'We offer a wide range of cohort-based learning courses, which helps you gain extra edge on your learning with project-based experiential learning advantage.',
//     buttonTitle: 'Explore learn',
//     linkpath:"/learn"
//   },
//   {
//     title: 'Learn on the go',
//     imgLink:'https://github.com/KapadiaShubham/Codeate-media/blob/master/home/img/illustration_about.png?raw=true',
//     content: 'Community-driven peer-to-peer learning ecosystem Where you learn among peers from different colleges, share skills, collaborate on projects. Our events, boot camps, and workshops keep you all updated with the latest learning trends and skills.',
//     buttonTitle: 'Join community',
//     linkpath:"/community"
//   }
// ];
// const Ourofferings = props => {
//    const { Heading } = props
//    useEffect(() => {
//      gsap.registerPlugin(ScrollTrigger)
//      gsap.fromTo(
//        '.Offering',
//        { opacity: 0, y: 100, scale: 0.3 },
//        {
//          scrollTrigger: { trigger: '.Offering' },
//          duration: 1,
//          opacity: 1,
//          y: 0,
//          stagger: 0.5,
//          scale: 1
//        }
//      )
//    }, [])

//   return (
//     <div className={styles.Ouroffering}>
//       <div className={styles.what__we__offer}> {Heading} </div>
//       <div className={styles.offerings__wrapper}>
//       {data.map((item, index) => {
//         return (
//           <OfferingCard key={index} {...item} />
//         )
//       })}
//       </div>
//     </div>
//   )
// }

// export default Ourofferings
