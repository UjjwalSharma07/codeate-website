import React from "react";
import Sidebar from "../../Admin/components/Sidebar";
import styles from "../../styles/admin/Learn.module.css";

import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import { useAuthStore } from "../../store1/store1";
const LearnAdd = () => {


  const user = useSelector(userState);
  const {username} = useAuthStore(state => state.auth)
  if (!user?.user?.isAdmin && !username) return null;
  
  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="px-10 ">
        <h1 className="flex justify-center text-center py-3 ">Learn </h1>
        <div>
          <h1 className="text-bold ">Course Name</h1>
          <div className="flex flex-col gap-2" type="form">
            <label htmlFor="course">
              <input
                type="text"
                placeholder="Course Name"
                className="bg-transparent border-black border rounded-[2px] px-2 py-1"
              />
            </label>

            <label htmlFor="course details">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="bg-transparent border-black border rounded-[2px] px-2 py-1"
              >
                Course Details
              </textarea>
            </label>
            <label htmlFor="addfile">
              <input
                type="file"
                className="bg-transparent border-black border rounded-[2px] px-2 py-1"
              />
            </label>
            <div className="flex flex-row gap-3">
              <label htmlFor="discord group">
                <input
                  type="text"
                  placeholder="Discord Group"
                  className="bg-transparent border-black border rounded-[2px] px-2 py-1"
                />
              </label>
              <label htmlFor="Registration link">
                <input
                  type="text"
                  placeholder="Registration Link"
                  className="bg-transparent border-black border rounded-[2px] px-2 py-1"
                />
              </label>
            </div>
          </div>

          <div className="flex flex-row gap-3 py-4 justify-center">
            <button className="bg-transparent border-black border rounded-[2px] px-2 py-1">
              Save
            </button>

            <button className="bg-transparent border-black border rounded-[2px] px-2 py-1">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAdd;