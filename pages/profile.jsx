import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetEnrolledProjectsQuery, useLoginMutation } from "../redux/features/allSlice";
import { login, logout, updateUser, userState } from "../redux/features/authSlice";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import Buttonn from '../components/button/Button'
import axios from "axios";
import Link from 'next/link'


const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(userState);

  const [uploadedFile, setUploadedFile] = useState(null);


  const [prevResumeInfo, setPrevResumeInfo] = useState({
    name: localStorage.getItem('prevResumeName') || '',
    lastUpdated: localStorage.getItem('prevResumeLastUpdated') || ''
  });

  const [prevProfileInfo, setPrevProfileInfo] = useState({
    name: localStorage.getItem('prevProfileName') || '',
    lastUpdated: localStorage.getItem('prevProfileLastUpdated') || ''
  });


  useEffect(() => {
    localStorage.setItem('prevResumeName', prevResumeInfo.name);
    localStorage.setItem('prevResumeLastUpdated', prevResumeInfo.lastUpdated);
  }, [prevResumeInfo]);

  useEffect(() => {
    localStorage.setItem('prevProfileName', prevProfileInfo.name);
    localStorage.setItem('prevProfileLastUpdated', prevProfileInfo.lastUpdated);
  }, [prevProfileInfo]);


  const handleDownload = async () => {
    try {

      const imageUrl = myuser.profile;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "ProfilePic.jpg"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const allEnrolledProjects = useGetEnrolledProjectsQuery();

  const buttonStyle = {
    display: "block",
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);
  
  useEffect(() => {
    allEnrolledProjects.refetch();
  }, []);

  
  const [open, setOpen] = useState(false)
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully Logged Out!")
    router.push("/");
  };

  const [registerData, setRegisterData] = useState({
    profile: user?.user?.profile ,
    github: user?.user?.github,
    linkedin: user?.user?.linkedin,
    name: user?.user?.name ,
    role: user?.user?.role,
    portfolio: user?.user?.portfolio,
    resume: user?.user?.resume,
    email: user?.user?.email
  });
  const [view,setView] =useState(false);
  const [resume,setResume] =useState(null);
  const [img,setImg] =useState(null);
  const [imgShow,setImgShow] =useState(null);
  const [myuser, setMyuser] = useState(
    // {
    // profile: "",
    // github: "",
    // linkedin: "",
    // name: user?.user?.name,
    // role: "",
    // portfolio: "",
    // resume: "",
    // email: user?.user?.email
  // }
  );

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      setPrevProfileInfo({
          name: selectedFile.name,
          lastUpdated: new Date().toISOString().split('T')[0]
      });

    }
    if (selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const uri = event.target.result;
        console.log('uri', uri);
        
        // Copying current registerData to a temporary variable
        const updatedData = { ...registerData };
        
        // Updating only the profile field in the temporary variable
        updatedData.profile = uri;
        
        // Setting the updated temporary variable to registerData
        setRegisterData(updatedData);
        setImg(selectedFile.name);
      };
      fileReader.readAsDataURL(selectedFile);
      alert("Profile upload successfull.")
    }
  };
  


// const handleChangeResume = (e) => {
//   const selectedFile = e.target.files[0];
//   // console.log("selectedFile",selectedFile);
  
  
//   if (selectedFile) {
//     const fileReader = new FileReader();
//     fileReader.onload = (event) => {
//       const uri = event.target.result;
//       setRegisterData((prev) => ({
//         ...prev,
//         resume: uri, // Update the hidden input field value
//       }));
//       setResume(selectedFile.name)
//     };
//     fileReader.readAsDataURL(selectedFile);
//     alert("Resume upload successfull.")
//   }
// };

  const handleChangeResume = (e) =>{
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      setPrevResumeInfo({
          name: selectedFile.name,
          lastUpdated: new Date().toISOString().split('T')[0]
      });
    }
      if (selectedFile) {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          const uri = event.target.result;
          console.log('uri', uri);
          // Copying current registerData to a temporary variable
        const updatedData = { ...registerData };
        
        // Updating only the profile field in the temporary variable
        updatedData.resume = uri;

          setUploadedFile(uri);
          setRegisterData(updatedData);
        };
        fileReader.readAsDataURL(selectedFile);
      }
  }

  useEffect(() => {
    const getUser = async() =>{
      try {
        const myuser = await axios.get(`https://backend.codeate.in/users/${user?.user?._id}`)
        // const myuser = await axios.get(https://backend.codeate.in/users/${user?.user?._id})
        if(myuser.status === 200){
          setMyuser(myuser.data)
        }
        console.log("data",myuser.data);
        if(myuser?.data?.resume){
          setView(true);
        }
        if(myuser?.data?.profile)
        setImgShow(true);
      } catch (error) {
        
        console.log(error);
      }
    }
    
    getUser()
  }, [registerData.resume,registerData.profile]);

  const handleRegisterChange = async (e) => {
    const fieldName = e.target.name.toLowerCase();
    const value = e.target.value;
    setRegisterData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const [loginFunction, loginResponse] = useLoginMutation();

  // name, email, github, portfolio, role, linkedin, resume

  const handleSubmit = async(registerData) =>{
    try {
      const resp = await axios.put(`https://backend.codeate.in/users/${user?.user?._id}`, {
      // const resp = await axios.put(https://backend.codeate.in/users/${user?.user?._id}, {
        name: registerData.name,
        email: registerData.email,
        github: registerData.github,
        portfolio: registerData.portfolio,
        role: registerData.role,
        linkedin: registerData.linkedin,
        resume: registerData.resume,
        profile: registerData.profile,
      })
      console.log('====================================');
      console.log(resp.data);
      console.log('====================================');

      if(resp.status === 200){
        try {
          // const updatedUser = { ...user, ...resp.data };
          dispatch(updateUser(resp.data));
          // const myuser = await axios.get(https://backend.codeate.in/users/${user?.user?._id})
          const myuser = await axios.get(`https://backend.codeate.in/users/${user?.user?._id}`)
          if(myuser.status === 200){
            setRegisterData(myuser.data);
            setMyuser(myuser.data)
          }
          console.log('my user data is',myuser.data);
        } catch (error) {
          console.log(error);
        }
      }

    } catch (error) {
      console.log(error);
    }
      
  }
  const handleDownloadImage = async () => {
    try {
        const imageUrl = myuser.profile;
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        // Download the image
        const link = document.createElement("a");
        link.href = url;
        link.download = "ProfilePic.jpg"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Open image in a new tab
        window.open(url, '_blank');
    } catch (error) {
        console.error("Error downloading image:", error);
    }
  };

  const openPdfInNewTab = () => {
    const pdfDataUri = myuser.resume;
    // console.log("myuser",myuser)
    // console.log("pdfDataUri",pdfDataUri)
    const byteCharacters = window.atob(pdfDataUri.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const pdfBlob = new Blob([new Uint8Array(byteNumbers)], { type: 'application/pdf' });

    // Create a URL for the blob
    const pdfObjectURL = URL.createObjectURL(pdfBlob);

    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = pdfObjectURL;
    link.download = 'downloaded-pdf.pdf';
    link.click();

    // Clean up the object URL
    URL.revokeObjectURL(pdfObjectURL);
    // window.open(pdfObjectURL, '_blank');
    // if(typeof window != undefined){
      // window.open(pdfDataUri);
    // }
  };

  if (!user) {
    return null;
  }



  return (
    <div className="bg-black pt-10">
      <Toaster />
      <section className="pt-5">
        <div className="md:w-5/12 w-full px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 pb-10 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full p-4 flex justify-center">
                  <div className="relative z-10 w-56 h-56 text-center mx-auto">
                    <img
                      alt="Profile"
                      src={myuser?.profile  ? myuser.profile : "https://img.freepik.com/free-icon/user_318-875902.jpg?w=200"}
                      className="shadow-xl rounded-full w-56 h-56 align-middle border-none absolute hover:scale-105 hover:shadow-2xl duration-300 ease-in-out mx-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-semibold leading-normal mt-5 mb-2">
                  {myuser?.name ? myuser.name : myuser?.name} {user?.user?.isAdmin && "| Admin"}
                </h3>
                <h3 className="text-xl font-semibold leading-normal mt-2 mb-2">
                  {myuser?.email ? myuser.email : myuser?.name?.email}
                </h3>

                <h3 className="text-xl font-semibold leading-normal mt-2 mb-2">
                  {myuser?.role  &&  `Role:${ myuser?.role}`}
                </h3>
                <h3 className="text-xl font-semibold leading-normal mt-2 mb-2">
                  {myuser?.github  && (<a href={`${myuser.github}`}>Github: {myuser.github}</a>) }
                </h3>
                <h3 className="text-xl font-semibold leading-normal mt-2 mb-2">
                  {myuser?.linkedin  && (<a href={`${myuser.linkedin}`}>linkedin: {myuser.linkedin}</a>) }
                </h3>
                <h3 className="text-xl font-semibold leading-normal mt-2 mb-2">
                  {myuser?.portfolio  && (<a href={`${myuser?.portfolio}`}>Portfolio: {myuser?.portfolio}</a>)}
                </h3>
                <h3 className="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                  {myuser?.resume  && (<button onClick={openPdfInNewTab}>Resume</button>) }
                </h3>
                {/* <div className="mb-2 text-blueGray-600 mt-2">
                  Full Stack Developer
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div> */}
              </div>
              <div className="flex items-center justify-evenly">
                {user?.user?.isAdmin && (
                  <button
                    onClick={() => {
                      router.push("/admin/Dashboard");
                    }}
                    className="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-4 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                  >
                    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                    <span className="relative z-20 flex items-center text-sm">
                      <svg
                        className="relative w-5 h-5 -ml-3 mr-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      Admin Panel
                    </span>
                  </button>
                )}

                <button
                  onClick={() => { setOpen(true) }}
                  className="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-sm">
                    <svg
                      className="relative w-5 h-5 -ml-3 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    Edit Profile
                  </span>
                </button>
                <button
                  onClick={handleLogout}
                  className="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-sm">
                    <svg
                      className="relative w-5 h-5 -ml-3 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center text-white">
        <div className="flex flex-col justify-center">
          {allEnrolledProjects?.data?.projects?.length > 0 && (
            <h1 className="text-2xl font-semibold mb-5">Enrolled Projects</h1>
          )}
          <div className="m-10">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 lg:grid-cols-4">
              {allEnrolledProjects?.data?.projects?.map((project) => (
                <Link  href={`https://www.codeate.in/projects/${project?.projectId?._id}`}>
                <motion.div
                  key={project._id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-clip-padding backdrop-filter px-6 py-4 backdrop-blur-xl bg-opacity-60 border border-white/10 bg-gradient-to-tl to-amber-800/10 group duration-500 rounded-3xl card-animation hover:border-black/80 via-slate-900 from-black/10"
                >
                  <h1 className="text-2xl font-bold text-yellow-200 mb-2">{project?.projectId?.category}</h1>{" "}
                  <h1 className="text-2xl font-semibold">{project?.projectId?.title}</h1>{" "}
                  <h1>{project?.projectId?.level}</h1>
                </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>



      <Dialog
        open={open}
        onClose={() => { setOpen(false) }}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="backdrop-blur-lg"
          >
            <span>
              {/* <button
                onClick={() => { setOpen(false) }}
                className="text-gray-500 hover:text-gray-700"
              >
                X
              </button> */}
               <img
                      src="https://freesvg.org/img/close-button.png"
                      // src="https://github.com/KapadiaShubham/Codeate-media/blob/master/images/x-mark%201.png?raw=true"
                      onClick={() => { setOpen(false) }}
                      style={{ cursor: "pointer" }}
                      alt="cross"
                      className="h-12 w-12"
                  />
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
              Edit Your Profile
            </span>
          </div>

          <div>

            <TextField
              name="name"
              type=""
              label="Full Name"
              value={registerData.name}
              onChange={handleRegisterChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            />

            {/* <TextField
              name="email"
              type=""
              label="email"
              onChange={handleRegisterChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            /> */}

            {/* <label className="font-semibold text-lg mr-3">Profile:</label>
            <input
              name="Profile"
              type="file"
              label="Profile Pic"
              accept="image/*"
              // value={registerData.profile}
              onChange={handleChange}
              fullWidth
              style={{ margin: "15px 0px" }}
            /> */}
            {prevProfileInfo && (
              <button style={buttonStyle} onClick={handleDownload}>
                  {prevProfileInfo.name} (Last updated: {prevProfileInfo.lastUpdated})
              </button>
          )}
            <label className="font-semibold text-lg mr-3">Profile: </label>
            <input
              id="Profile"
              name="Profile"
              type="file"
              label="Profile"
              accept="image/*"
              onChange={handleChange}
              fullWidth
              style={{ margin: "15px 0px" }}
              hidden
            />
            <label
            htmlFor="Profile"
            className="font-semibold text-lg mr-3"
            >
            <p  className="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-8 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">Choose Profile</p>
          </label>
            {/* {!imgShow && <p></p>}
            {imgShow &&  <button className=" cursor-pointer text-blue-500" disabled={img ? true : false}  onClick={handleDownloadImage}> {img ? img :"view current profile"}</button>} */}
         
            <TextField
              name="Github"
              type=""
              value={registerData.github}
              label="Github Profile"
              onChange={handleRegisterChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            />
            <TextField
              name="Portfolio"
              type=""
              value={registerData.portfolio}
              label="Portfolio Link"
              onChange={handleRegisterChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            />

            <TextField
              name="Linkedin"
              type=""
              label="Linkedin Profile Link"
              value={registerData.linkedin}
              onChange={handleRegisterChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            />

            <TextField
              name="Role"
              type=""
              label="Role"
              value={registerData.role}
              onChange={handleRegisterChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            />

            {/* <TextField
              name="resume"
              type=""
              label="resume"
              onChange={handleRegisterChange}
              fullWidth
              style={{ margin: "15px 0px 25px 0px" }}
            /> */}
          {prevResumeInfo && (
              <button style={buttonStyle} onClick={openPdfInNewTab}>
                  {prevResumeInfo.name} (Last updated: {prevResumeInfo.lastUpdated})
              </button>
          )}
          <label className="font-semibold text-lg font-[20px] mr-3">Resume: </label>
            <input
              id="Resume"
              name="Resume"
              type="file"
              label="Resume"
              accept='.pdf, .doc, .docx'
              onChange={handleChangeResume}
              fullWidth
              style={{ margin: "15px 0px" }}
              hidden
            />
            <label
            htmlFor="Resume"
            className="font-semibold text-lg mr-3"
          >
            <p  className="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-8 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">Upload Resume</p>
          </label>
          {/* {view &&  <button className=" cursor-pointer text-blue-500" disabled={resume ? true : false} onClick={openPdfInNewTab}> {resume ? resume :"view current profile"}</button>} */}

          </div>
          <div className="flex flex-row justify-center items-center">
<div></div>
          <button
                  onClick={()=>{
                    handleSubmit(registerData)
                    setOpen(false)
                  }}
                  className="box-border relative z-30 inline-flex items-center justify-center mt-5 w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
                >
                  <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                  <span className="relative z-20 flex items-center text-sm">
                    <svg
                      className="relative w-5 h-5 -ml-3 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                    Submit
                  </span>
                </button>
          </div>
          {/* <Buttonn
              buttonStyle="btn--primary sizee"
              buttonSize="btn--small"
              stylee="stylee"
              onClick={() => {
                
              }}
            >
              Login
            </Buttonn> */}
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



    </div>
  );
};

export default Profile;