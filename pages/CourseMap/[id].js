import {
  useAllProjectsQuery,
  useEnrollAProjectMutation,
  useGetAEnrolledProjectMutation,
  useGetAProjectQuery,
  useGetEnrolledProjectsQuery,
  useSubmitAProjectMutation,
} from "../../redux/features/allSlice";
import styles from "../../styles/projects/projectdesc.module.css";
// import { useLinkedIn } from 'react-linkedin-login-oauth2';
import axios from "axios";
// import qs from 'query-string'

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import { Alert, Skeleton, Snackbar } from "@mui/material";
import PostForm from "../../Linkedin/LinkednModal";
import sendEmail from "../../email/Email";
import Sendemail from "../../email/Sendemail";
import SendemailToAdmin from "../../email/SendToAdmin";
import EmailOfValidation from "../../email/EmailOfValidation";
import SubmissionOfProjectToUser from "../../email/SubmissionOfProjectToUser";
import { useAProjectData } from "../../store1/store1";
import qs from "query-string";
import Link from "next/link";

const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);
const Coursedesc = () => {
  const router = useRouter();
  const projectId = "";
  const user = useSelector(userState);
  const { data, isLoading, refetch } = useGetAProjectQuery(projectId);

  const setProject = useAProjectData((state) => state.setaproject);

  useEffect(() => {
    refetch();
  }, []);

  const [msg, setMsg] = useState({ message: "", theme: "success" });
  const openMsg = (message, theme = "success") => {
    setMsg({
      message,
      theme: theme ? theme : "success",
    });

    handleClick();
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const allEnrolledProjects = useGetEnrolledProjectsQuery();

  // useEffect(() => {
  //   if (submitResponse?.isSuccess) {
  //     openMsg(submitResponse?.data?.message);
  //     allEnrolledProjects.refetch();
  //   }
  //   if (submitResponse?.error) {
  //     openMsg(submitResponse?.error?.data?.message, "error");
  //     allEnrolledProjects.refetch();
  //   }
  // }, [submitResponse]);

  const [dat, setDat] = useState({
    id: "",
    title: "",
    message: "",
    discord: "",
    registerLink: "",
    selectedFile: "",
  });

  let id = router.query.id;
  let url = window.location.pathname;
  let r = url.slice(11, 35);

  useEffect(() => {
    console.log("the id is", id);
    console.log("the url", r);
    const getd = async () => {
      try {
        const {data} = await axios.get(`https://backend.codeate.in/Course/${r}`)
        // const { data } = await axios.get(`${BASE_API_URL}/${r}`);
        console.log("====================================");
        console.log(data.course);
        console.log("====================================");
        setDat(data.course);
        console.log("the dat is ", dat);
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
    };
    getd();
  }, []);

  return (
    <div className="bg-black  flex items-center justify-center h-full pt-16 text-white">
      <div>
        <div>
          {/* <div>{dat.title}</div> */}
          <div>
            <div data-color-mode="dark" className="max-w-4xl mx-auto pt-10">
              <Markdown
                className="rounded-lg border shadow-lg py-5 px-10"
                source={dat.message}
              />
            </div>
          </div>

          <div className="text-center mt-5 pb-32">
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <div className="flex items-center gap-3 justify-between">
                <label htmlFor="githubLink">Discord</label>
                <a className="text-blue-500" href={dat.discord}>
                  {dat.discord}
                </a>
              </div>
              <div className="flex items-center gap-3 justify-between">
                <label htmlFor="deployedLink">Registration</label>
                <a className="text-blue-500" href={dat.registerLink}>
                  {dat.registerLink}
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center flex-col"></div>
            </div>
          </div>
        </div>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={msg.theme}
            sx={{ width: "100%" }}
          >
            {msg.message}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Coursedesc;
