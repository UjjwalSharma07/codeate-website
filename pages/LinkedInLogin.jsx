import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useGetAProjectQuery, useLoginMutation } from "../redux/features/allSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../redux/features/authSlice";
import qs from "query-string";
import { useEffect } from "react";

const LinkedInLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const params = qs.parse(window.location.search);
  console.log("the projectId param", params);
  let projectId = params.projectId;
  console.log("the projectId is", projectId);
  const { data } = useGetAProjectQuery(projectId);
  console.log("course data",data)
  const [loginFunction, loginResponse] = useLoginMutation();
  const handleLoginChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(login(""));
  },[])
  const handleLoginSubmit = async () => {
    const response = await loginFunction(loginData);
    console.log("Login Response", response.data);


    if (response?.data?.success) {
      dispatch(login(response.data));

      toast.success("Successfully Logged In!");

      if (response?.data?.user?.isAdmin) {
        // window.location.href = `https://www.codeate.in/Cer?coursename=${data?.project?.title}`;
        window.location.href = `http://localhost:3000/Cer?coursename=${data?.project?.title}`;
      }
      // Show Error message
    } else {
      toast.error(response?.error?.data?.message);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200"> {/* Updated */}
    <div className="w-96 h-96 bg-white rounded-lg shadow-md p-8">
      <h1 className="text-center text-3xl font-semibold mb-4">LOGIN</h1> {/* Updated */}
      <div className="mb-4">
        <TextField
          name="email"
          type="email"
          label="Email"
          onChange={handleLoginChange}
          fullWidth
          margin="dense"
        />
      </div>
      <div className="mb-6">
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={handleLoginChange}
          fullWidth
          margin="dense"
        />
      </div>
      <Button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200" onClick={handleLoginSubmit}>Submit</Button> {/* Updated */}
    </div>
  </div>

  );
};

export default LinkedInLogin;