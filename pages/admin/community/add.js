import React, { useEffect, useState } from "react";
import Sidebar from "../.././../Admin/components/Sidebar";
import styles from "../.././../styles/admin/Learn.module.css";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useDispatch, useSelector } from "react-redux";
import { userState } from "../.././../redux/features/authSlice";
import dynamic from "next/dynamic";
import { Alert, Snackbar } from "@mui/material";
import FileBase from "react-file-base64";
import { createEvent, updateEvent } from "../../../actions/CommunityAct";
// import { currentId } from "./globla";
import { uploadFile } from "../../../redux/features/fileUploadSlice";
import convertToBase64 from "../../../helper/Convert";
import {
  useAuthStore,
  useCurrentId,
  useEventInData,
  useInData,
} from "../../../store1/store1";
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

const Add = ({}) => {
  const user = useSelector(userState);
  const [learn, setLearn] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [addEvent, setAddEvent] = React.useState(false);
  const { username } = useAuthStore((state) => state.auth);
  const { currentid } = useCurrentId((state) => state.auth);
  const { event } = useEventInData((state) => state.auth);
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
    registerLink: "",
    discord: "",
  });

  const dispatch = useDispatch();

  const [url, setUrl] = useState("");

  const [value, setValue] = useState(``);

  const [file, setFile] = React.useState("");
  useEffect(() => {
    console.log(currentid);
    if (post) {
      setPostData(post);
      setFile(post.selectedFile);
      setValue(post.message);
    }
  }, []);

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

  const handleMessage = () => {
    setValue;
    setPostData({ ...postData, message: value });
  };

  console.log(value);



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

  // const post = useSelector((state)=> currentId ? state.events.find((p)=>p._id === currentId) : null);
  const post = currentid ? event.find((p) => p._id === currentid) : null;

 

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

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentid) {
      dispatch(updateEvent(currentid, postData));
      router.push("/admin/community");
    } else {
      dispatch(createEvent(postData));
      router.push("/admin/community");
    }
    clear();
  };

  const clear = () => {
    // setCurrentI(null)
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
        <h1 className="font-semibold text-4xl p-5">Community</h1>
        <hr />
        <div className="grid grid-cols-2 gap-10">
          <div className="px-10 py-5 flex flex-col justify-between gap-5">
            <div className="flex justify-between items-center">
              <label htmlFor="" className="pr-10">
                Event Title{" "}
              </label>
              <input
                name="title"
                placeholder="Event Title..."
                value={postData.title}
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
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
                Upload Event
              </button>
            </div>
          </div>

          {/* 
        <form onSubmit={handleFileUpload}>
        <div className="px-10 py-5 flex flex-col gap-5 justify-between">
        <label htmlFor="" className="pr-10">Choose File</label>
              <label className="flex items-center">
                <span className="sr-only">Choose File</span>
                <input
                value={postData.selectedFile}
                  type="file"
                  multiple={false}
                  className="block border rounded-full mr-5 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                 {/* <FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})}></FileBase> */}
          {/* </label>
                </div>
                <div className="flex justify-between items-center">
            <label htmlFor="" className="pr-10">Registeration Link</label>
            <input
              name="registerLink"
              value={postData.registerLink}
              onChange={e=>setPostData({...postData, registerLink: e.target.value})}
              placeholder="Registration Link"
              type="text"
              className="bg-transparent w-72 border rounded-full px-5 py-2 border-black/50"
              // value={projectData.title}
              // onChange={handleChange}
            />
          </div>
        </form> */}

          <form onSubmit={handleFileUpload}>
            <label htmlFor="" className="pr-10">
              Choose File
            </label>
            <label className="flex items-center">
              <span className="sr-only">Choose File</span>
              <input
                type="file"
                onChange={onUpload}
                className="block border rounded-full mr-5 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>

            <div className="flex justify-between items-center mt-4">
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
          </form>

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
        {/* </div> */}

        <label htmlFor="" className="pl-10">
          Event Details:
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