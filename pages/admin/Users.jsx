import React from "react";
import Sidebar from "../../Admin/components/Sidebar";
import styles from "../../styles/admin/Users.module.css";

import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
const Users = () => {
  const user = useSelector(userState);
  if (!user?.user?.isAdmin) return null;
  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div>
        <h1>Users</h1>
      </div>
    </div>
  );
};

export default Users;