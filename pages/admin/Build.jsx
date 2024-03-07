import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "../../Admin/components/Sidebar";
import styles from "../../styles/admin/Build.module.css";
import profile from "../../assets/images/profile.png";
import { BiSearchAlt } from "react-icons/bi";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useAddProjectMutation } from "../../redux/features/allSlice";
import { Alert, Snackbar } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { userState } from "../../redux/features/authSlice";
import Select from "react-select";
import { uploadFile } from "../../redux/features/fileUploadSlice";
import {
  useAuthStore,
  useBuildInData,
  useCurrentId,
} from "../../store1/store1";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);
const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);
const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);

const Build = () => {
  const router = useRouter();
  const [value, setValue] = useState(``);
  const [file, setFile] = useState();
  const [url, setUrl] = useState("");
  const user = useSelector(userState);
  const [techArray, setTechArray] = useState([]);
  const [tech, setTech] = useState("");
  const { currentid } = useCurrentId((state) => state.auth);
  const { build } = useBuildInData((state) => state.auth);
  const [open, setOpen] = useState(false);
  const { username } = useAuthStore((state) => state.auth);
  const [addProjectFunction, addProjectResponse] = useAddProjectMutation();
  const [msg, setMsg] = useState({ message: "", theme: "success" });
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    shortDescription: "",
    technologies: [],
    thumbnail: ""
  });

  useEffect(() => {
    console.log("====================================");
    console.log(currentid);
    console.log("====================================");

    if (post) {
      setProjectData(post);
      setFile(post.selectedFile);
      setValue(post.description);
      setTechArray(post.technologies);
    }
  }, [currentid, post]);

  useEffect(() => {
    setProjectData((prev) => ({
      ...prev,
      description: value,
    }));
  }, [value]);

  useEffect(() => {
    setProjectData((prev) => ({
      ...prev,
      technologies: techArray,
    }));
  }, [techArray]);

  console.log("Tech Array", techArray);

  useEffect(() => {
    if (addProjectResponse.isSuccess) {
      openMsg("Project Uploaded Succesfully!");
      setProjectData({
        title: "",
        category: "",
        description: "",
        level: "",
        shortDescription: "",
        technologies: [],
        thumbnail: ""
      });
      setTechArray([]);
      setTech("");
      setValue("");
      setFile("");
    } else if (addProjectResponse.isError) {
      openMsg(addProjectResponse.error?.data?.message, "error");
      console.log(addProjectResponse);
    }
  }, [addProjectResponse]);
  
  if (!user?.user?.isAdmin && !username) return null;
  
  const post = currentid ? build.find((p) => p._id === currentid) : null;

  const handleSubmit = async () => {
    if (
      !projectData.title ||
      !projectData.category ||
      !projectData.level ||
      !projectData.shortDescription ||
      !projectData.technologies.length ||
      !projectData.thumbnail
    ) {
      toast.error("All fields are mandatory to fill.");
      return; // Prevent submission
    }
    if (currentid) {
      const { data } = await axios.patch(`https://backend.codeate.in/${currentid}` , projectData)
      // const { data } = await axios.patch(
      //   `${BASE_API_URL}${currentid}`,
      //   projectData
      // );
      console.log("====================================");
      console.log(data.projects);
      console.log("====================================");
      router.push("/admin/learn/BuildSee");
    } else {
      addProjectFunction(projectData);
      router.push("/admin/learn/BuildSee");
    }
  };
  const handleChange = (e) => {
    setProjectData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log("Project Data: ", projectData);

  const openMsg = (message, theme = "success") => {
    setMsg({
      message,
      theme: theme ? theme : "success",
    });

    handleClick();
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleTechSubmit = (e) => {
    e.preventDefault();
    if (!tech) return;
    setTechArray((prev) => [...prev, tech]);
    setTech("");
  };

  const handleFileUpload = async (e) => {
    setUrl("");
    e.preventDefault();
    if (file) {
      await dispatch(uploadFile({ file: file, folder: "project" })).then(
        (response) => {
          console.log("response: ", response);
          if (response?.payload?.status == 200) {
            setFile();
            setUrl(response?.payload?.data?.url);
            openMsg("File Uploaded Successfully!");
          } else {
            openMsg(response?.payload, "error");
          }
        }
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen w-full list-disc" data-color-mode="dark">
        <h1 className="font-semibold text-4xl p-5">Build</h1>
        <hr />
        <div className="grid grid-cols-2 gap-10">
          <div className="px-10 py-5 flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center">
              <label htmlFor="" className="pr-10">
                Title{" "}
              </label>
              <input
                name="title"
                placeholder="Title"
                type="text"
                className="bg-transparent w-72 border rounded-full px-5 py-2 border-black/50"
                value={projectData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center gap-3 justify-between">
              <label htmlFor="" className="pr-10">
                Project Category
              </label>
              <select
                name={"category"}
                id="category"
                className="bg-transparent border border-black/50 rounded-md px-5 py-2 w-56"
                value={projectData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="WEB_DEVELOPMENT">Web Development</option>
                <option value="APP_DEVELOPMENT">App Development</option>
                <option value="BLOCKCHAIN">Blockchain</option>
                <option value="BLOCKCHAIN">AI/ML</option>
                <option value="BLOCKCHAIN">Cloud Computing Development</option>
                <option value="BLOCKCHAIN">UI/UX Designing</option>
              </select>
            </div>

            <div className="flex items-center gap-3 justify-between">
              <label htmlFor="" className="pr-10">
                Project Level
              </label>
              <select
                name={"level"}
                id="level"
                className="bg-transparent border border-black/50 rounded-md px-5 py-2 w-44"
                defaultValue={projectData.level}
                onChange={handleChange}
                required
              >
                {/* https://Codeate-s3.s3.ap-south-1.amazonaws.com/Logo/LOGO+HORIZONTAL+blue+grad.png */}
                <option value="">Select Level</option>
                <option value="BEGINNER">Beginner</option>
                <option value="INTERMEDIATE">Intermediate</option>
                <option value="ADVANCED">Expert</option>
              </select>
            </div>

            <div>
              <button
                className="bg-blue-500 text-white rounded-full px-4 py-1 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Upload Project
              </button>
            </div>
          </div>

          <div className="px-10 py-5 flex flex-col gap-5 justify-between">
            <label htmlFor="" className="pr-10">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              placeholder="Short Description..."
              type="text"
              className="bg-transparent w-96 border rounded-md px-5 py-3 border-black/50"
              value={projectData.shortDescription}
              onChange={handleChange}
              required
            />

            <form onSubmit={handleFileUpload}>
              <label htmlFor="" className="pr-10">
                Choose File
              </label>
              <label className="flex items-center">
                <span className="sr-only">Choose File</span>
                <input
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        const dataUri = e.target.result;
                        setProjectData(prevState => ({
                          ...prevState,
                          thumbnail: dataUri
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                    setFile(e.target.files[0])
                  }}
                  required
                  type="file"
                  className="block border rounded-full mr-5 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                {/* <button
                  className="bg-blue-500 text-white rounded-full px-4 py-1 hover:bg-blue-600"
                  type="submit"
                >
                  Get URL
                </button> */}
              </label>

              {url && (
                <div>
                  <span className="text-blue-600 underline cursor-pointer">
                    {url}
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                    }}
                    className="bg-green-500 text-white rounded-full px-4 py-1 hover:bg-green-600"
                  >
                    Copy
                  </button>
                </div>
              )}
            </form>

            <div className="flex items-center gap-3">
              {/* <Select options={Hotels} onChange={setHandle} isMulti /> */}
              {/* <div>{selectedOptions}</div> */}

              <form onSubmit={handleTechSubmit}>
                <label htmlFor="" className="pr-10">
                  Technologies Used
                </label>
                <input
                  name="tech"
                  value={tech}
                  onChange={(e) => setTech(e.target.value.trim())}
                  type="text"
                  className="bg-transparent px-3 py-2 border border-black/50 rounded-md"
                  required
                />

                <button
                  className="inline-block py-2 text-sm text-white bg-gray-800 pr-4 pl-3 ml-4 hover:bg-gray-700 rounded-xl"
                  type="submit"
                >
                  + Add
                </button>

                <div className="font-semibold flex mt-2">
                  {techArray?.map((t, i) => (
                    <div key={i}>
                      <label
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                        htmlFor={t}
                      >
                        {t}
                      </label>
                      <input
                        onClick={(e) => {
                          setTechArray((prev) => {
                            const index = prev.indexOf(e.target.name);
                            if (index > -1) {
                              prev.splice(index, 1);
                            }
                            return [...prev];
                          });
                        }}
                        type="checkbox"
                        name={t}
                        id={t}
                        className="hidden"
                        required
                      />
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>
        </div>

        <label htmlFor="Desctiption" className=" ml-6 mb-6">
          Desctiption:
        </label>

        {/* <MDEditor height={"100%"} value={value} onChange={setValue} />
        
        <div style={{ paddingTop: 50 }} className="mt-10">
          <Markdown source={value} />
        </div> */}

        <div  style={{ display: "flex", margin:"10px" , borderRadius:"10px", flexDirection: "column",  overflowY: "auto" }}>
          <MDEditor value={value} onChange={setValue} />
        </div>
          {/* <div className="ml-6 mr-6">
            <MDEditor value={value} onChange={setValue} />
         </div> */}
      </div>

      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={msg.theme}
          sx={{ width: "100%" }}
        >
          {msg.message}
        </Alert>
      </Snackbar> */}
    </div>
  );
};

export default Build;