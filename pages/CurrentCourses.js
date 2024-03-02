// import { useEffect } from "react";
// import Explorecategories from "../../components/project/Explorecategories";
// import Projects from "../../components/project/projects";
// import { useAllProjectsQuery } from "../../redux/features/allSlice";
import styles from "../styles/projects/Projectpage.module.css";
import { useCurrentId, useEventInData, useInData, useIsChangeData, useUserCourse } from "../store1/store1";
import { useEffect } from "react";
import axios from "axios";
import CourseMap from "./CourseMap";
import { BASE_API_URL } from "../config/constants";


const CurrentEvents = () => {

    const {indata} = useInData(state=>state.auth)
    const setData = useInData(state => state.setData)

    const { currentid } = useCurrentId(state => state.auth)

    const {usercourse} = useUserCourse(state=>state.auth)
    // const setUserCourse = useUserCourse(state => state.setUserCourse)
    
    useEffect(()=>{
      const getEvents = async ()=>{
        // const { data } = await axios.get('https://backend.codeate.in/Course')
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}Course`)
        setData(data.courses)
      
        // setUserCourse(indata)
      }
      getEvents()
    }, [])
  
  return (
    <div className="bg-black h-screen text-white py-24 flex items-center justify center">
    <div className={`${styles.Projectpage}`}>
    <svg
        className="absolute right-0 -z-0"
        width="518"
        height="609"
        viewBox="0 0 518 1109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_147_1030)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1030.5 479.599C989.131 216.712 742.485 37.1352 479.599 78.5024C216.712 119.87 37.1353 366.516 78.5025 629.402C119.87 892.289 366.516 1071.87 629.402 1030.5C892.289 989.131 1071.87 742.485 1030.5 479.599ZM471.909 29.6327C761.785 -15.9815 1033.75 182.032 1079.37 471.909C1124.98 761.785 926.969 1033.75 637.092 1079.37C347.216 1124.98 75.2471 926.969 29.6328 637.092C-15.9814 347.216 182.032 75.247 471.909 29.6327Z"
            fill="url(#paint0_radial_147_1030)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_147_1030"
            x="0.0976562"
            y="0.097229"
            width="1108.81"
            height="1108.81"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="11.5"
              result="effect1_foregroundBlur_147_1030"
            />
          </filter>
          <radialGradient
            id="paint0_radial_147_1030"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(674.359 189.06) rotate(74.043) scale(1430.04)"
          >
            <stop stopColor="#5FD6DA" />
            <stop offset="0.371298" stopColor="#2D9BFD" />
            <stop offset="0.701752" stopColor="#BA84FE" />
            <stop offset="1" stopColor="#FE5C97" />
          </radialGradient>
        </defs>
      </svg>
      <div className="">
      <div className={`${styles.Projects_holder}`}>
        {indata?.map((eve) => (
          <CourseMap
            key={eve?._id}
            title={eve?.title}
            description={eve?.message}
            id={eve?._id}
            image={eve?.selectedFile}
          />
        ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default CurrentEvents;
