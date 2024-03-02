import React from "react";
import Sidebar from "../.././../Admin/components/Sidebar";
import styles from "../.././../styles/admin/Learn.module.css";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { userState } from "../.././../redux/features/authSlice";
// import { deleteCourse, getCourse } from "../../../actions/LearnAction";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {
  useAuthStore,
  useBuildInData,
  useCurrentId,
  useInData,
  useIsAuth,
} from "../../../store1/store1";
import { useRouter } from "next/router";
import BuildCard from "../../../components/BuildCard";

const BuildSee = () => {
  const router = useRouter();
  const setCurrentI = useCurrentId((state) => state.setCurrentI);
  const { currentid } = useCurrentId((state) => state.auth);

  const setBuild = useBuildInData((state) => state.setBuild);
  const { build } = useBuildInData((state) => state.auth);

  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const {data} =  await axios.get('https://backend.codeate.in/projects')
      // const { data } = await axios.get("${BASE_API_URL}projects");
      console.log(data.projects);
      setBuild(data.projects);
      setIsDeleted(false);
    }
    fetchData();
  }, [isDeleted]);

  const user = useSelector(userState);
  const { username } = useAuthStore((state) => state.auth);
  if (!user?.user?.isAdmin && !username) return null;

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="px-10 ">
        <h1 className="font-semibold text-4xl p-3 border mb-5">BUILD PROJECTS</h1>
        {/* <hr /> */}
        <div>
          {/* <h1 className="text-bold ">PROJECTS</h1> */}
          <div className="flex flex-col ">
            <div className="grid grid-cols-3 gap-2">
              {build?.map((post) => (
                <BuildCard post={post} setCurrentI={setCurrentI} setIsDeleted={setIsDeleted} />
              ))}
            </div>
          </div>
          <div>
            <Link href="/admin/Build">
              <button className="px-4 py-2 duration-300 font-medium text-white bg-sky-400 rounded-full hover:bg-sky-700 focus:outline-none focus:shadow-outline  mx-2 my-10">
                Add Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildSee;