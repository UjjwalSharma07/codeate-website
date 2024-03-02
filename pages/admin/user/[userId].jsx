import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useGetAllUsersQuery } from "../../../redux/features/allSlice";

const UserDetails = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { data: allUsers, refetch, isLoading } = useGetAllUsersQuery();

  const user = allUsers?.users?.find((user) => user?._id == userId);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Project Title",
      width: 200,
      valueGetter: (params) => {
        console.log("Projects ", params.row);
        return params.row?.projectId?.title;
      },
    },
    {
      field: "isSubmitted",
      headerName: "Project Title",
      width: 200,
      valueGetter: (params) => {
        console.log("Projects ", params.row);
        return params.row?.isSubmitted ? "Submitted ✅" : "Not Submitted";
      },
    },
    {
      field: "githubLink",
      headerName: "Github Link",
      width: 200,
      renderCell: (params) => {
        console.log("Projects ", params.row);
        {
          return params.row?.githubLink ? (
            <a
              target="_blank"
              className="text-blue-500 underline"
              rel="noreferrer"
              href={params.row?.githubLink}
            >
              Github Link
            </a>
          ) : (
            "N/A"
          );
        }
      },
    },
    {
      field: "deployedLink",
      headerName: "Deployed Link",
      width: 200,
      renderCell: (params) => {
        console.log("Projects ", params.row);
        {
          return params.row?.deployedLink ? (
            <a
              target="_blank"
              className="text-blue-500 underline"
              rel="noreferrer"
              href={params.row?.deployedLink}
            >
              Deployed Link
            </a>
          ) : (
            "N/A"
          );
        }
      },
    },
  ];

  return (
    <div className="w-full bg-gray-800 h-screen pt-32">
      <div className="p-4 mx-auto border space-y-3 shadow-md shadow-white/10 bg-slate-800 text-white/80 rounded-lg border-white/20 max-w-4xl text-center">
        <p className="text-3xl font-semibold">{user?.name}</p>
        <p>Project Enrolled: {user?.projects?.length}</p>
        <p>
          Project Submitted:{" "}
          {user?.projects?.filter((p) => p.isSubmitted)?.length}
        </p>
        <p>Email: {user?.email}</p>
        {user?.projects?.length > 0 && (
          <div className="h-[20rem]">
            <DataGrid
              rows={user?.projects}
              getRowId={(row) => row._id}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
              components={{ Toolbar: GridToolbar }}
              experimentalFeatures={{ newEditingApi: true }}
              style={{ color: "white" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
