import React, { useEffect, useState } from "react";
import {
  useAuthStore,
  useCurrentId,
  useInData,
  useIsChangeData,
  useUserCourse,
} from "../../../store1/store1";
import Sidebar from "../.././../Admin/components/Sidebar";
import styles from "../.././../styles/admin/Learn.module.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useDispatch, useSelector } from "react-redux";
import { userState } from "../.././../redux/features/authSlice";
import dynamic from "next/dynamic";
import { Alert, Snackbar } from "@mui/material";
import {
  createCourse,
  getCourse,
  updateCourse,
} from "../../../actions/LearnAction";
import convertToBase64 from "../../../helper/Convert";
import { useRouter } from "next/router";

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

const Add = ({ InData }) => {
  const user = useSelector(userState);
  const { username } = useAuthStore((state) => state.auth);
  

  const { currentid } = useCurrentId((state) => state.auth);
  const { indata } = useInData((state) => state.auth);
  // const setIsChange = useIsChangeData(state=>state.setIsChange)
  const setUserCourse = useUserCourse((state) => state.setUserCourse);

  const [value, setValue] = useState(``);

  const [addEvent, setAddEvent] = React.useState(false);


  const [file, setFile] = React.useState("");
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
    registerLink: "",
    discord: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("====================================");
    console.log(currentid);
    console.log("====================================");

    if (post) {
      setPostData(post);
      setFile(post.selectedFile);
      setValue(post.message);
    }
  }, [currentid, post]);

 
  useEffect(() => {
    setPostData((prev) => ({
      ...prev,
      message: value,
      selectedFile: file,
    }));
  }, [value, file]);

  const router = useRouter();
  if (!user?.user?.isAdmin && !username) return null;
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const addeventhandler = () => {
    setAddEvent(true);
  };

  const closeeventhandler = () => {
    setAddEvent(false);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  addEvent && console.log("add event");

  // const post = useSelector((state)=> currentid ? state.courses?.find((p)=>p._id === currentid) : null);
  const post = currentid ? indata.find((p) => p._id === currentid) : null;

 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentid) {
      dispatch(updateCourse(currentid, postData));
      setUserCourse("edited");
      router.push("/admin/learn");
    } else {
      // yaha tak theek hai 
      dispatch(createCourse(postData));
      setUserCourse("uploaded");
      router.push("/admin/learn");
    }
    clear();
  };

  const clear = () => {
    // setCurrentId(null)
    setPostData({
      title: "",
      message: "",
      selectedFile: "",
      registerLink: "",
      discord: "",
    });
    setValue("");
    setFile("");
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen w-full list-disc" data-color-mode="dark">
        <h1 className="font-semibold text-4xl p-5">Learn</h1>
        <hr />
        <div className="grid grid-cols-2 gap-10">
          <div className="px-10 py-5 flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center">
              <label htmlFor="" className="pr-10">
                Course Title{" "}
              </label>
              <input
                name="title"
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
                placeholder="Course Title..."
                type="text"
                className="bg-transparent w-72 border rounded-full px-5 py-2 border-black/50"
                // value={projectData.title}
                // onChange={handleChange}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="" className="pr-10">
                Join Discord Group
              </label>
              <input
                name="discord"
                value={postData.discord}
                onChange={(e) =>
                  setPostData({ ...postData, discord: e.target.value })
                }
                placeholder="Discord Link"
                type="text"
                className="bg-transparent w-72 border rounded-full px-5 py-2 border-black/50"
                // value={projectData.title}
                // onChange={handleChange}
              />
            </div>

            <div>
              <button
                className="bg-blue-500 text-white rounded-full px-4 py-1 hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Upload Course
              </button>
            </div>
          </div>

          <div className="px-10 py-5 flex flex-col gap-5 justify-between">
            <label htmlFor="" className="pr-10">
              Choose File
            </label>
            <label className="flex items-center">
              <span className="sr-only">Choose File</span>
              <input
                onChange={onUpload}
                type="file"
                className="block border rounded-full mr-5 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
            <div className="flex justify-between items-center">
              <label htmlFor="" className="pr-10">
                Registeration Link
              </label>
              <input
                name="registerLink"
                value={postData.registerLink}
                onChange={(e) =>
                  setPostData({ ...postData, registerLink: e.target.value })
                }
                placeholder="Registration Link"
                type="text"
                className="bg-transparent w-72 border rounded-full px-5 py-2 border-black/50"
                // value={projectData.title}
                // onChange={handleChange}
              />
            </div>

            {/* <form onSubmit={handleFileUpload}>
            <label htmlFor="" className="pr-10">Choose File</label>
            <label className="flex items-center">
              <span className="sr-only">Choose File</span>
              <input
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                className="block border rounded-full mr-5 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <button
                className="bg-blue-500 text-white rounded-full px-4 py-1 hover:bg-blue-600"
                type="submit"
              >
                Get URL
              </button>
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
          </form> */}

            <div className="flex items-center gap-3">
              {/* <Select options={Hotels} onChange={setHandle} isMulti /> */}
              {/* <div>{selectedOptions}</div> */}

              {/* <form onSubmit={handleTechSubmit}>
            <label htmlFor="" className="pr-10">Technologies Used</label>
              <input
                name="tech"
                value={tech}
                onChange={(e) => setTech(e.target.value.trim())}
                type="text"
                className="bg-transparent px-3 py-2 border border-black/50 rounded-md"
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
                    />
                  </div>
                ))}
              </div>
            </form> */}
            </div>
          </div>
        </div>

        <label htmlFor="" className="pl-10">
          Course Details:
        </label>
        <MDEditor height={"100%"} value={value} onChange={setValue} />
        <div>
          <Markdown source={value} />
        </div>
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
      {/* Previous Code */}
      {/* <div className={styles.mainscreen}>
      <div className={styles.buildHead}>
        <div className={styles.buildHeadLeft}>
          <div className={styles.buildHeadText}>Weclome Back Jimmy</div>
        </div>
        <div className={styles.buildHeadright}>
          <div className={styles.buildProfile}>
            <Image
              src={profile}
              width={70}
              height={70}
              alt="profile"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.buildSearch}>
            <input type="text" placeholder='Search' />
          </div>
        </div>
      </div>
      <div className={styles.Choose_holder}>
        <div className={styles.Choose_heading}>Choose Category</div>
        <div className={styles.Choose_box}>
          <div className={styles.Choose_head}>Existing Category</div>
          <hr />
          <div className={styles.Choices}>cat-1</div>
          <div className={styles.Choices}>cat-2</div>
          <div className={styles.Choices}>cat-3</div>
        </div>
        <div className={styles.Add_new}> Add new category </div>
      </div>
      <div className={styles.Bottom_buttons}>
        <button className={styles.Save}>Save</button>
        <button className={styles.Next}>Next</button>
      </div>
    </div> */}
    </div>
  );
};

export default Add;