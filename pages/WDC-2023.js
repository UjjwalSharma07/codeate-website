import React, { useEffect } from 'react'

import Faq from '../components/faq';
import Partners from '../components/community/Partners';
import TezosChooseUs from '../components/TezosChooseUs'
import HeroTezos from "../components/HeroTezos"
import AboutSection from "../components/AboutTezos"
import MentorsSection from '../components/AboutTeam';
import ScheduleSection from "../components/TezosSchedule";
import TezosFaq from '../components/TezosFaq';
import ChooseMentor from '../components/ChooseMentor';
import PriceBanner from '../components/PriceBanner';
import SpeakerSection from '../components/SpeakerPage';
import ResetPassword from './[resetPasswordToken]';
import { useRouter } from 'next/router';

const Tezos = () => {
  const router = useRouter()
  // if(true) {

  useEffect(()=>{
     router.push('/')
  },[])

  // }
   return (
    <div className="bg-black h-full text-white">
         {/* <HeroTezos/>
  //       <PriceBanner/>
  //       <AboutSection/>
  //       <ScheduleSection/>
  //       <PriceBanner/>
  //       <SpeakerSection/>
  //       {/* <MentorsSection/> */}
         {/* <ChooseMentor/> */}
         {/* <PriceBanner/> */}
         {/* <TezosChooseUs/> */}
         {/* <Partners/> */}
         {/* <TezosFaq/> */} 
  {/* //       <ResetPassword/> */}
    </div>
  )
}

export default Tezos