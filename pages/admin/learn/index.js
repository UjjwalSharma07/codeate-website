import React from "react";
import Sidebar from "../.././../Admin/components/Sidebar";
import styles from "../.././../styles/admin/Learn.module.css";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { userState } from "../.././../redux/features/authSlice";
import { deleteCourse, getCourse } from "../../../actions/LearnAction";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  useAuthStore,
  useCurrentId,
  useInData,
  useIsAuth,
} from "../../../store1/store1";
import { BASE_API_URL } from "../../../config/constants";
import LearnCard from "../../../components/LearnCard";
const Index = () => {
  // const {isAuth} = useIsAuth(state=>state.auth)

  const user = useSelector(userState);
  const { username } = useAuthStore((state) => state.auth);

  const setCurrentI = useCurrentId((state) => state.setCurrentI);
  const { currentid } = useCurrentId((state) => state.auth);

  const setData = useInData((state) => state.setData);
  const { indata } = useInData((state) => state.auth);

  const [learn, setLearn] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [addEvent, setAddEvent] = React.useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      // const { data } = await axios.get(`https://backend.codeate.in`);  // changes
      const { data } = await axios.get(`${BASE_API_URL}/Course`);  // path nhi pata
      console.log(data.courses);
      setData(data.courses);
      setIsDeleted(false);
    }
    fetchData();
  }, [isDeleted]);

  if (!user?.user?.isAdmin && !username) return null;
  const addeventhandler = () => {
    setAddEvent(true);
  };

  const closeeventhandler = () => {
    setAddEvent(false);
  };

  addEvent && console.log("add event");

  // const [currentId, setCurrentId] = useState(null);
  // const [InData, setData] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="px-10 ">
        {/* <h1 className="font-semibold text-4xl p-3">Learn</h1> */}
        <h1 className="font-semibold text-4xl p-3 border mb-5">LEARN COURSES OR EVENTS</h1>
        {/* <hr /> */}
        <div>
          {/* <h1 className="text-bold ">EVENT/ COURSES</h1> */}
          <div className="flex flex-col ">
            <div className="grid grid-cols-3 gap-2">
              {indata?.map((post) => (
                <LearnCard post={post} setCurrentI={setCurrentI} setIsDeleted={setIsDeleted}/>
              ))}
            </div>
          </div>
         
          <div>
            <Link className="bg-blue-500 rounded-xl" href={{
                pathname: "./learn/add",
              }}>
              <button className="px-4 py-2 duration-300 font-medium text-white bg-sky-400 rounded-full hover:bg-sky-700 focus:outline-none focus:shadow-outline  mx-2 my-10">
                Add Course
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;