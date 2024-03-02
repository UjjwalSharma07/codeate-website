import {
  useAllProjectsQuery,
  useEnrollAProjectMutation,
  useGetAEnrolledProjectMutation,
  useGetAProjectQuery,
  useGetEnrolledProjectsQuery,
  useSubmitAProjectMutation,
} from "../../redux/features/allSlice";
import styles from "../../styles/projects/projectdesc.module.css";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";
import qs from "query-string";
// import dotenv from 'dotenv'
// dotenv.config()
import { env } from "process";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import {
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  Skeleton,
  Snackbar,
  TextField,
} from "@mui/material";
import PostForm from "../../Linkedin/LinkednModal";
import sendEmail from "../../email/Email";
import Sendemail from "../../email/Sendemail";
import SendemailToAdmin from "../../email/SendToAdmin";
import EmailOfValidation from "../../email/EmailOfValidation";
import SubmissionOfProjectToUser from "../../email/SubmissionOfProjectToUser";
import { useAProjectData, useId, useToken } from "../../store1/store1";
import { Button } from "../../components/button/Button";
import EmailTemplate from "../../components/EmailTemplate";
import { Navbar } from "../../components/Navbar";

const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);
const Projectdesc = ({projectId}) => {
  const [opam, setOpam] = useState(false);
  const { id } = useId((state) => state.auth);
  const router = useRouter();
  const user = useSelector(userState);
  // const projectId = router?.params?.projectId;
  const [projectIdcode, setprojectIdCode] = useState()
  const { data, isLoading, refetch } = useGetAProjectQuery(projectId);
  const [sub, setSub] = useState(false)
  const [show , setShow] = useState(false);

const [submitData, setSubmitData] = useState({
  githubLink: "",
  deployedLink: "",
});
const [errors, setErrors] = useState({
  githubLink: '',
  deployedLink: '',
});

  let text = sub ? `Hello Everyone !\nExciting news! I'm thrilled to announce the successful completion of ${data?.project?.title} project by me on Codeate ! 🎉 \n\nIt's always a great feeling to accomplish a personal goal and take pride in the work I have done.\n\n{Add your project demo link: ...... } - If you want to !\n\n#projectcompletion #teamwork #success\n\nThankyou!` : 
   `Hello Everyone\n I am excited to share that I have enrolled in a ${data?.project?.title} project on Codeate. Enrolling in a project can be a great opportunity to learn new skills, collaborate with others, and challenge yourself to grow both personally and professionally.\n Thankyou`


  

 
  let TITLE = data;

  console.log(TITLE);

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
  const [enrollFunction, enrollResponse] = useEnrollAProjectMutation();
  const [submitFunction, submitResponse] = useSubmitAProjectMutation();

  const handleEnroll = async () => {
    if (user) {
      console.log("projectId",projectId)
      enrollFunction(projectId);

      let email = user?.user?.email;

      await sendEmail({
        to: email,
        subject: `Enrollment Confirmation - ${data?.project?.title} - ${user.user.name}`,
        message: `
         <p> 
         Dear ${user.user.name},\n\n <br/> <br/>

We are writing to confirm that you have successfully enrolled in the ${data?.project?.title} project.
We are delighted to have you at codeate fam.\n <br/>

We appreciate your commitment to improve your skills and expertise. <br/>

Please ensure that you stay up to date with all communication and notify us if you have any concerns or questions via contact.us@codeate.in.\n <br/> <br/>


We are always available to assist you in any way we can.\n <br/>

Thank you for your participation, and we look forward to a successful collaboration.
Let's keep building together 🚀🚀\n \n <br/>

Best regards, <br/>
Team Codeate
         </p>
       `,
      });

      await sendEmail({
        to: "contact.code8@gmail.com",
        subject: `Enrolled in Project`,
        message: `
         <p> 
         Dear Admin, \n\n <br/> <br/>
We are writing to confirm that ${user.user.name}  has successfully enrolled in the ${data?.project?.title}  project. \n\n <br/> <br/>

Best regards, <br/> 
Team Codeate
         </p>
       `,
      });
      
    }
  };

  const { title } = useAProjectData((state) => state.auth);

  useEffect(() => {
    if (enrollResponse?.isSuccess) {
      openMsg(enrollResponse?.data?.message);
      allEnrolledProjects.refetch();
    }
    if (enrollResponse?.error) {
      openMsg(enrollResponse?.error?.data?.message, "error");
      allEnrolledProjects.refetch();
    }
  }, [enrollResponse]);

  // Submit Form
  
  const githubUrlPattern = /^https?:\/\/github\.com\/[a-zA-Z0-9_-]+(?:\/[a-zA-Z0-9_-]+)?$/;

  const deployedUrlPattern = /^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})?(:[0-9]{1,5})?(\/\S*)?$/;

  const handleSubmitChange = (e) => {
    const { name, value } = e.target;
    setSubmitData(prev => ({ ...prev, [name]: value }));

      // Validate the input URL based on the name of the field
      let isValid = true;
      let errorMessage = '';
  
      if (value.trim() !== '') {
          if (name === 'githubLink') {
              isValid = githubUrlPattern.test(value);
          } else if (name === 'deployedLink') {
              isValid = deployedUrlPattern.test(value);
          }  
          errorMessage = isValid ? '' : `${name} is not a valid URL.`;
      }
     setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
  }));
  };
 
  // const buttonUrl = `http://localhost:3000/Cer?coursename=${data?.project?.title}`
  // const buttonUrl = `https://www.codeate.in/Cer?coursename=${data?.project?.title}`;
 
  // const logInUrl = `https://www.codeate.in/LinkedInLogin`;  // changes
  const logInUrl = `http://localhost:3000/LinkedInLogin?projectId=${projectId}`;  // changes

  const setProject = useAProjectData((state) => state.setProject);
  
  // Submit Project Function
 0
  const handleSubmitProject = async () => {

   // *********submit and earn certificate function*******

    if (!submitData.githubLink || !submitData.deployedLink) {
      // Display error message to the user
      alert("Please provide both GitHub Link and Deployed Link");
      return;
    }

    // setProject(data?.project?.title)
    const result = submitFunction({ ...submitData, projectId });
    console.log("submitFunction", result)

    let email = user?.user?.email;

    // if(result.data.success){
    //   setSub(true)
    //   toast.success("Your project has been submitted successfully. Please await the issuance of your certificate, which will be sent to your email shortly."); 
    // }
    setSub(true)

    
    await sendEmail({
      to: email,
      subject: `Project Submission Confirmation ${user.user.name}`,
      message: `
        <p> Dear ${user.user.name}, \n <br/> <br/>

We are writing to confirm that we have received your project submission ${data?.project?.title}. Thank you for your hard work and dedication in completing this project.\n <br/> <br/>

We understand the time and effort you have put into this project, and we assure you that it will be reviewed thoroughly and fairly.
We will get back to you with our feedback and evaluation as soon as possible.\n <br/> <br/>

In the meantime, please feel free to reach out to us if you have any questions or concerns regarding your project submission via <a>contact.us@codeate.in</a>.\n <br/> <br/>

Thank you again for your hard work, and we look forward to reviewing your project.
Keep building, keep learning with us at codeate.\n <br/> <br/>

Best regards, <br/> 
Team Codeate

        </p>
      `,
    });

    await sendEmail({
      to: "contact.code8@gmail.com",
      subject: `Project Submission Confirmation - ${user.user.name}`,
      message: `
      <p> Dear Admin,\n <br/> <br/>
      We are writing to confirm that we have received a project submission ${data?.project?.title} from ${user.user.name}. \n  <br/> 
      We request you to validate the project and provide the relevant feedback and confirm the certificate to be released from our end to the member or not.<br/> <br/>
              </p>
              <h3> GithubLink: <a href="${submitData.githubLink}">${submitData.githubLink} </a></h3>
              <h3> DeployedLink: <a href="${submitData.deployedLink}">${submitData.deployedLink} </a></h3>
              <a href="${logInUrl}"  style="display:inline-block; padding:10px 20px; background-color:#0070f3; color:#fff; text-decoration:none;">Validate</a>
              <p> <br/> <br/>
              Best regards, <br/>
              Team Codeate
              </p>
      
              <script>
              async function submitTrue() {
                console.log("tttttt");
                try {
                  const courseName = data?.project?.title;
                   const {data} =  await axios.post('https://backend.codeate.in/sendCertificate', {recipient,courseName,studentName})
                  console.log("the certificae", data);
                } catch (error) {
                  console.log(error);
                }
              }
               </script>

      `,
    });
    setShow(true);
  };


  
  useEffect(() => {
    if (submitResponse?.isSuccess) {
      openMsg(submitResponse?.data?.message);
      allEnrolledProjects.refetch();
    }
    if (submitResponse?.error) {
      openMsg(submitResponse?.error?.data?.message, "error");
      allEnrolledProjects.refetch();
    }
  }, [submitResponse]);


  const { globaltoken } = useToken((state) => state.auth);
  const setGlobalToken = useToken((state) => state.setGlobalToken);

  useEffect(() => {
    let prijecI = window.location.href
      .toString()
      .split(window.location.host)[1]
      .slice(10, 34);

    const urlObject = new URL(window.location.href);

    // Extract the project ID from the pathname
    const pathnameParts = urlObject.pathname.split('/');
    const projectIdcode = pathnameParts[pathnameParts.length - 1];
    console.log('mine', projectIdcode);
    setprojectIdCode(projectIdcode)

    console.log("====================================");
    console.log(prijecI);
    console.log("====================================");

    if (token) return;
    if (globaltoken) return;

    const params = qs.parse(window.location.search);
    console.log("the param", params);
    let code = params.code;
    console.log("the code is", code);

    // setCode(params.code)

    if (!params.code) return;

    async function getToken() {
      try {
        const response = await fetch('/api/authe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code:code, projectId: prijecI }),
        });

        if (!response.ok) {
          console.log(response);
        }

        const data = await response.json();


        console.log("the data is", data.token);
        console.log("the data is", data.linkedinId);
        setToken(data.token);
        setLinkedinId(data.linkedinId);
        setGlobalToken(data.token);

        if (data?.token) {
          setIsAuthorised(true);
        }
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
    }
    getToken();
  }, []);

  // const [code, setCode] = useState('')
  const [LisAuthorised, setIsAuthorised] = useState(false);

  const [token, setToken] = useState("");
  const [linkedinId, setLinkedinId] = useState("");
  const clientId = '86t7gxg7cp86q1'
  // let redirectUri = `http://localhost:3000/projects/${projectId}`;
  let redirectUri = `https://www.codeate.in/projects/${projectId}`;
  
  const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&state=random_state_string&scope=r_liteprofile%20r_emailaddress%20w_member_social`;

  const handliLinkedin = async () => {
    if (globaltoken) {
      setIsAuthorised(true);
      console.log("the global ------------------------------", globaltoken);
    } else {
      // console.log(token);
      window.location.href = authUrl;
      const params = qs.parse(window.location.search);
    }
  };

  const handleClose1 = () => {
    setIsAuthorised(false);
  };

  const handleSubmit = async (event) => {
    try {
      const response = await fetch("/api/poste", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, linkedinId:linkedinId, token:token }),
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log("====================================");
        console.log(data);
        console.log("====================================");
      } else {
        console.error("Failed to create LinkedIn post");
      }
    } catch (error) {
      console.log(error);
    }
    // setText("");
  };

  return (
    <div className="bg-black  flex items-center justify-center h-full pt-16 text-white">
      <div>
        <div>
          {/* <div>{data?.project?.title}</div> */}
          <div>
            {/* <button onClick={handleShareOnLinkedin}>Write LinkedIn Post</button> */}
            <div data-color-mode="dark" className="max-w-4xl mx-auto pt-10">
              <Markdown
                className="rounded-lg border shadow-lg py-5 px-10"
                source={data?.project?.description}
              />
            </div>
          </div>

          <div className="text-center mt-5 pb-32">
            {!allEnrolledProjects.data?.projects?.find(
              (p) => p?.projectId?._id == projectId
            ) ? (
              <button
                onClick={() => {
                  handleEnroll();
                }}
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-50 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>

                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Enroll & Accept The Challenge
                </span>
              </button>
            ) : (
              <div className="flex   flex-col gap-4 max-w-md mx-auto">
                <div className="flex flex-start flex-col items-center gap-3 justify-between">
                  <label htmlFor=" flex githubLink">Github Link</label>
                  <input
                    name="githubLink"
                    placeholder="Github Link"
                    type="text"
                    value={submitData.githubLink}
                    className="bg-transparent w-72 border rounded-full py-3 px-5 border-white/50"
                    onChange={handleSubmitChange}
                  />
                  <span className="w-72 text-red-500">{errors.githubLink}</span>
                 
                </div>
                <div className="flex flex-col items-center gap-3 justify-between">
                  <label htmlFor="deployedLink">deployed Link</label>
                  <input
                    name="deployedLink"
                    placeholder="Deployed Link"
                    type="text"
                    value={submitData.deployedLink}
                    className="bg-transparent w-72 border rounded-full py-3 px-5 border-white/50"
                    onChange={handleSubmitChange}
                  />
                  <span className="w-72  text-red-500">{errors.deployedLink}</span>
                </div>
                <div className="flex items-center gap-3 justify-center flex-col">
                 {!show && <button
                    onClick={() => {
                      // handleSubmitProjectToUser( user?.user?.name, user?.user?.email , data?.project?.title)
                      handleSubmitProject();
                    }}
                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-50 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group"
                  >
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>

                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                      Submit & Earn Certificate
                    </span>
                  </button>}
                  {show && <button
                    onClick={() => {
                      handliLinkedin();
                    }}
                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-50 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-600 group"
                  >
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>

                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                      Share On Linkedin
                    </span>
                  </button>}
                </div>
              </div>
            )}
          </div>
        </div>

        <Dialog
          open={LisAuthorised}
          // open={true}
          fullWidth={true}
          maxWidth="sm"
        >
          <DialogContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                <img
                className="h-7 w-7"
                  src="data:image/png;base64,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"
                  onClick={handleClose1}
                  style={{ cursor: "pointer" }}
                  alt="cross"
                />
              </span>
              <span style={{ display: "flex" }}>
                <div
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    marginRight: "18px",
                    fontSize: "16px",
                    lineHeight: "36px",
                    display: "flex",
                    alignItems: "center",
                    color: "#000000",
                  }}
                ></div>
                {/* <Button
              onClick={()=>{
                window.scrollTo(0,0)
                // setOpen1(false)
              }}
                buttonStyle="btn--primary sizee btn--mobile"
                buttonSize="btn--small"
              >
                Sign Up
              </Button> */}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <span
                style={{
                  margin: "10px 0px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "35px",
                  lineHeight: "72px",
                  display: "flex",
                  alignItems: "center",
                  color: "#000000",
                }}
              >
                Post on Linkedin
              </span>
            </div>

            <div>
              <textarea
                name="title"
                type="title"
                label="title"
                value={text}
                className="w-full h-60 bg-white"
                onChange={(e) => {
                  setText(e.target.value);
                }}
                // onChange={handleLoginChange}

                style={{ margin: "15px 0px" }}
              />
              {/* <TextField
              name="title"
              type="title"
              label="title"
              value={text}
              onChange={(e) => { setText(e.target.value) }}
              // onChange={handleLoginChange}
              fullWidth
              style={{ margin: "15px 0px" }}
            /> */}
              {/* <TextField
              name="description"
              type="description"
              label="description"
              // onChange={handleLoginChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            /> */}
              {/* <button
              // onClick={handleOpenForget}
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "15px",
                lineHeight: "36px",
                display: "flex",
                justifyContent: "end",
                color: "#407BFF",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </button> */}
            </div>
            <Button
              buttonStyle="btn--primary sizee"
              buttonSize="btn--small"
              stylee="stylee"
              onClick={() => {
                // handleLoginSubmit()
                handleSubmit();
                window.scrollTo(0, 0);
                setIsAuthorised(false);
              }}
            >
              Submit
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0px 0px 0px",
              }}
            ></div>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>

        {/* <PostForm ShowModal={LisAuthorised} setShowModal={setIsAuthorised} /> */}

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

export const getServerSideProps = (context) =>{
  console.log('====================================');
  console.log(context.params.projectId);
  console.log('====================================');
  return {
    props: {projectId: context.params.projectId}
  }
}

export default Projectdesc;