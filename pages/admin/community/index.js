// import React, { useState } from "react";
// import Sidebar from "../.././../Admin/components/Sidebar";
// import styles from "../.././../styles/admin/Learn.module.css";
// import Link from 'next/link'

// import { useDispatch, useSelector } from "react-redux";
// import { userState } from "../.././../redux/features/authSlice";
// import { getEvent } from "../../../Admin/AdminBackend/controllers/Event";
// import ShowEvents from "./ShowEvents";
// import { useEffect } from "react";

// const Index = () => {

//   const user = useSelector(userState);
//   if (!user?.user?.isAdmin) return null;

//   const [learn, setLearn] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [addEvent, setAddEvent] = React.useState(false);

//   const addeventhandler = () => {
//     setAddEvent(true);
//   };

//   const closeeventhandler = () => {
//     setAddEvent(false);
//   };

//   addEvent && console.log("add event");

//   const [currentId, setCurrentId] = useState(null);
//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(getEvent())
//   }, [dispatch])
//   const posts = useSelector((state)=>state.events);

//   return (
//     <div className={styles.wrapper}>
//       <div>
//         <Sidebar />
//       </div>
//       <div className="px-10 ">
//       <h1 className="font-semibold text-4xl p-3">Community</h1>
//       <hr />

//         <div>
//           <h1 className="text-bold ">EVENT/ COURSES</h1>
//           <div className="flex flex-col ">

//            {posts.map((post)=>(
//             <ShowEvents key={post._id} post = {post} setCurrentId={setCurrentId}/>
//            ))}

//           </div>
//           <div>
//            <Link className="bg-blue-500 rounded-xl" href={{pathname:"./community/add" , query:{currentId:{currentId}, setCurrentId:{setCurrentId}}}} > Add Event</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;

import React from "react";
import Sidebar from "../.././../Admin/components/Sidebar";
import styles from "../.././../styles/admin/Learn.module.css";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { userState } from "../.././../redux/features/authSlice";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { deleteEvent } from "../../../actions/CommunityAct";
import {
  useAuthStore,
  useCurrentId,
  useEventInData,
  useInData,
} from "../../../store1/store1";
import { BASE_API_URL } from "../../../config/constants";
import CommunityCard from "../../../components/CommunityCard";
// import { currentId, setCurrentId } from "./globla";

const Index = () => {
  const [learn, setLearn] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [addEvent, setAddEvent] = React.useState(false);

  const user = useSelector(userState);
  const { username } = useAuthStore((state) => state.auth);

  const setCurrentI = useCurrentId((state) => state.setCurrentI);
  const { currentid } = useCurrentId((state) => state.auth);

  const setEvent = useEventInData((state) => state.setEvent);
  const { event } = useEventInData((state) => state.auth);

  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
     async function fetchData() {
      // const { data } = await axios.get('https://backend.codeate.in/Events')
      const { data } = await axios.get(`${BASE_API_URL}/Events`);  // changes
      console.log(data.Events);
      setEvent(data.Events);
      setIsDeleted(false);
    }
    fetchData();
  }, [event,isDeleted]);
  if (!user?.user?.isAdmin && !username) return null;
  const handleAdd = (post) => {
    setCurrentI(post._id);
    console.log("====================================");
    console.log(currentid);
    console.log("====================================");
  };

  const addeventhandler = () => {
    setAddEvent(true);
  };

  const closeeventhandler = () => {
    setAddEvent(false);
  };

  addEvent && console.log("add event");

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="px-10 ">
        {/* <h1 className="font-semibold text-4xl p-3">Community</h1> */}
        <h1 className="font-semibold text-4xl p-3 border mb-5">COMMUNITY EVENTS</h1>
        {/* <hr /> */}
        <div>
          {/* <h1 className="text-bold ">EVENT/ COURSES</h1> */}
          <div className="flex flex-col ">
            <div className="grid grid-cols-3 gap-2">
              {event?.map((post) => (
                <CommunityCard post={post} setCurrentI={setCurrentI} setIsDeleted={setIsDeleted}/>
              ))}
            </div>
          </div>
          <div>
            <Link
              className="bg-blue-500 rounded-xl"
              href={{
                pathname: "./community/add",
              }}
            >
              <button className="px-4 py-2 duration-300 font-medium text-white bg-sky-400 rounded-full hover:bg-sky-700 focus:outline-none focus:shadow-outline  mx-2 my-10">
                Add Event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;