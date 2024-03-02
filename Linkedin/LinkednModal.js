// import { Description } from '@headlessui/react/dist/components/description/description';
import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
// import { useLinkedIn } from 'react-linkedin-sdk';
// import ShareLinkedin from 'react-share-linkedin';
// import axios from './axios'

function PostForm({}) {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postUrl, setPostUrl] = useState("");
  //   const { isAuthorized, logout } = useLinkedIn();

  let isAuthorized;
  let logout;

  const handleSubmit = async (event) => {
    try {
      // const { data } = await axios.post("https://backend.codeate.in/poste", { text })
      const { data } = await axios.post(`${BASE_API_URL}poste`, { text });
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    } catch (error) {
      console.log(error);
    }
    setText("");
  };

  //   if (!isAuthorized) {
  //     return (
  //     //   <div>
  //     //     <LinkedInLoginButton onClick={() => login()}>
  //     //       Log in with LinkedIn
  //     //     </LinkedInLoginButton>
  //     //   </div>
  //     );
  //   }

  const [showModal, setShowModal] = useState(true);
  const [title, setTItle] = useState("");
  const [desc, setDesc] = useState("");
  const [text, setText] = useState("");
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
                {/*header*/}
                <div className="flex  justify-between p-5 border-b items-center border-solid border-slate-200 rounded-t text-black">
                  <h3
                    className="text-3xl font-semibold text-red-300"
                    style={{ color: "black" }}
                  >
                    Share on Linkedin
                  </h3>
                  <button
                    style={{ color: "black" }}
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span
                      style={{ color: "black" }}
                      className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                    >
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* <label for="first" className='text-black flex-col mr-2 mb-1' style={{ color: 'black' }}>Title:</label> */}
                  <TextField
                    className="bg-white rounded-md"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    name="Title"
                    label="Title"
                    fullWidth
                    style={{ margin: "15px 0px" }}
                  />
                  <TextField
                    className="bg-white rounded-md"
                    // value={desc}
                    //  onChange={(e) => { setDesc(e.target.value) }}
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                    name="Description"
                    label="Description"
                    fullWidth
                    style={{ margin: "15px 0px" }}
                  />
                  {/* <input type="text" style={{ color: 'black' }} className='mb-2 bg-white border-solid w-full mt-1 text-black border-black' value={text} onChange={(e) => { setText(e.target.value) }} id="first" name="first" /> */}
                  {/* <br /> */}
                  {/* <label for="last" className='mr-2 mb-1' style={{ color: 'black' }}>Description:</label> */}
                  {/* <input type="text" className='bg-white text-black w-full mt-1' style={{ color: 'black' }} value={desc} onChange={e => setDesc(e.target.value)} id="last" name="last" /> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-blue-600 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Share Your Achievment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>

    // {/* // <div classNameName='block'>
    // //   {/* <form onSubmit={handleSubmit} classNameName='bg-black flex-col'> */}
    // //     <label htmlFor="post-title">Title:</label>
    // //     <input */}
    // //       type="text"
    // //       id="post-title"
    // //       value={postTitle}
    // //       onChange={(event) => setPostTitle(event.target.value)}
    // //       required
    // //     />

    // //     <label htmlFor="post-description">Description:</label>
    // //     <textarea
    // //       id="post-description"
    // //       value={postDescription}
    // //       onChange={(event) => setPostDescription(event.target.value)}
    // //       required
    // //     ></textarea>

    // //     <label htmlFor="post-url">URL:</label>
    // //     <input
    // //       type="url"
    // //       id="post-url"
    // //       value={postUrl}
    // //       onChange={(event) => setPostUrl(event.target.value)}
    // //       required
    // //     />

    // //     <button type="submit">Share on LinkedIn</button>
    // //   {/* </form> */}
    // // </div>
  );
}

export default PostForm;
