import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../../Admin/components/Sidebar";
import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import {
  DataGrid,
  GridToolbar,
  GridOverlay,
} from "@mui/x-data-grid";
import { useAllProjectsQuery, useGetAllUsersQuery } from "../../redux/features/allSlice";
import { Box, Collapse, CircularProgress, Button } from "@mui/material";
import { useAuthStore } from "../../store1/store1";
import Image from "next/image";
import dots from "../../assets/images/dots.png";
import styles from "../../styles/admin/Dashboard.module.css";

const DashboardMetric = ({ label, value }) => (
  <div className="bg-slate-800 text-white rounded-md shadow-md px-5 py-3">
    <p className="text-sm">{label}</p>
    <p className="text-5xl text-right">{value}</p>
  </div>
);
const Dashboard = () => {
  const projects = useAllProjectsQuery();
  const router = useRouter();
  const user = useSelector(userState);
  const { data: allUsers, isLoading, refetch } = useGetAllUsersQuery();
  const { username } = useAuthStore((state) => state.auth);

  if (!user?.user?.isAdmin && !username) {
    router.push("/");
    return null;
  }




  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },
    {
      field: "projects",
      headerName: "Enrolled Projects",
      width: 100,
      editable: true,
      valueGetter: (params) => `${params.row.projects?.length}`,
    },
    {
      field: "projects_submitted",
      headerName: "Submitted Projects",
      width: 100,
      editable: true,
      valueGetter: (params) =>
        `${params.row.projects?.filter((p) => p?.isSubmitted)?.length}`,
    },
    {
      field: "Projects",
      headerName: "Projects",
      sortable: false,
      width: 500,
      valueGetter: (params) =>
        `${params.row.projects
          .map((project) => project.projectId?.title)
          .join(", ")}`,
    },
    {
      field: "Actions",
      headerName: "Actions",
      type: "action",
      width: 150,
      renderCell: (params) => {
        const onClick = () => {
          router.push(`/admin/user/${params.row?._id}`);
        };

        return (
          <button
            className="bg-blue-500 px-4 py-2 rounded-md text-white"
            onClick={onClick}
          >
            View User
          </button>
        );
      },
    },
  ];

  console.log("Users", allUsers);



  return (
    <>
      <div className={styles.wrapperDashboard}>
        <div className={styles.left}>
          <Sidebar />
        </div>
        {/* <div className={styles.mainScreen}>
          <div className={styles.headBar}>
            <div className={styles.headRight}>
              <div className={styles.headText}>
                Welcome Back <span> Jimmy</span>{" "}
              </div>
            </div>
            <div className={styles.headLeft}>
              <Image
                src={profile}
                width={70}
                height={70}
                alt="profile"
                className={styles.profileImage}
              />
            </div>
          </div>
          <div className={styles.searchBar}>
            <input placeholder=" " className={styles.inputBar} />
            <button className={styles.searchButton}>Search</button>
          </div>
          <div className={styles.activity}>
            <button id={styles.student}>Enroll Student</button>
            <button id={styles.batch}>Enroll Batch</button>
            <button id={styles.project}>Assign Project</button>
          </div>
          <div className={styles.chartBox}>
            <div className={styles.boxHeading}>
              <div className={styles.temp}>
                <h1 className={styles.boxTitle}>Total Projects</h1>
              </div>
              <div>
                <Image src={dots} width={30} height={10} alt="3-dots" />
              </div>
            </div>
            <div className={styles.int}>
              <h1>46</h1>
            </div>
            <div className={styles.chart}>78%</div>
          </div>
          <div className={styles.boxHeading}>monthly analysis</div>
        </div> */}
        <div className={styles.right}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-8">
            <DashboardMetric
              label="Total Users"
              value={allUsers?.users?.filter((user) => !user.isAdmin)?.length}
            />
            <DashboardMetric
              label="Total Projects"
              value={projects?.data?.projects?.length}
            />
            <DashboardMetric
              label="Total Submitted Projects"
              value="21"
            />
            <DashboardMetric
              label="Total Admins"
              value={allUsers?.users?.filter((user) => user.isAdmin)?.length}
            />
            {/* <button
              onClick={() => router.push("/admin/Build")}
              className="bg-slate-800 text-white rounded-md shadow-md px-5 py-3 col-span-full md:col-span-2 lg:col-span-1"
            >
              <p>Upload Project</p>
            </button> */}
          </div>

          {isLoading ? (
            "Loading..."
          ) : (
            <div className={styles.DataGrid}>
               <DataGrid
                rows={allUsers?.users?.filter((user) => !user.isAdmin)}
                getRowId={(row) => row._id}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
                components={{ Toolbar: GridToolbar }}
                experimentalFeatures={{ newEditingApi: true }}
                
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
