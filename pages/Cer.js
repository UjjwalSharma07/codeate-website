import axios from "axios";
import React, { useEffect, useState } from "react";
import { userState } from "../redux/features/authSlice";
import { useSelector } from "react-redux";
import { useAProjectData } from "../store1/store1";
import { useGetAProjectQuery } from "../redux/features/allSlice";
import { useRouter } from "next/router";
import qs from "query-string";
import sendEmail from "../email/Email";
import toast, { Toaster } from "react-hot-toast";

function Cer() {
  // const {title} = useAProjectData(state=> state.auth)
  const user = useSelector(userState);
  const studentName = user?.user?.name;
  const recipient = user?.user?.email;
  const [chooseone, setOne] = useState(false);

  // const recipient = "guptanirbhay541@gmail.com"

  

  const params = qs.parse(window.location.search);
  console.log("the param", params);
  let courseName = params.coursename;
  console.log("the code is", courseName);

  async function gerr() {
    setOne(true)
    try {
      toast.success("verified")
       const {data} =  await axios.post('https://backend.codeate.in/generate-certificate', {recipient,courseName,studentName})
      console.log("the certificae", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function reject(){
    setOne(true)
    toast.error("Rejected")
    await sendEmail({
      to: recipient,
      subject: `Important Notice Regarding Your Project Submission`,
      message: `
        <p> Dear ${studentName}, \n <br/> <br/>

        I hope this email finds you well. <br/> <br/>

I wanted to bring to your attention that we have received your project submission for the ${courseName}, but unfortunately, it appears that some essential details are either missing or incomplete. Due to this, we are unable to proceed with the evaluation process as of now.\n\n <br/> <br/>

Please review your project submission and make sure that all necessary information is provided.\n\n <br/> <br/>

We will provide you the points upon which we need further clarificatios in a separate mail. kindly address those issues accordingly.\n\n <br/> <br/>

Once you have made the necessary revisions, please resubmit your project at your earliest convenience. \n\n <br/> <br/>

Thank you for your understanding and cooperation in this matter. We appreciate your commitment to the project, and we are confident that with the required information, your project will have a successful evaluation.\n\n <br/> <br/>
 
We look forward to receiving your revised project submission soon. If you have any concerns or require further assistance, please reply to this email, and we will be happy to assist you.\n\n <br/> <br/>

Best Regards,\n\n <br/> <br/>

Team Codeate\n\n <br/> <br/>
+91-9182567700
        </p>
      `,
    })
  }

  // useEffect(() => {
   

  //   gerr();
  // }, [recipient, studentName]);

  // if(recipient != 'contact.code8@gmail.com'){
  //   return;
  // }

  return (
  <div className="mt-40 flex flex-col justify-center items-center">
     <h2 className="text-center p-4 w-[900px]">You have the option to either decline or approve this project, which will initiate the process of issuing a certificate to the user if the project is successful completed and validated.</h2>
     <Toaster />
    <button disabled={chooseone} className={chooseone ? "mr-10 bg-red-400 px-5 hover:scale-100 active:scale-95 rounded-lg font-bold text-white"  :"mr-10 bg-red-500 px-5 hover:scale-100 active:scale-95 rounded-lg font-bold text-white"}  onClick={reject} >Reject</button>
    <button disabled={chooseone} className={chooseone ? "bg-blue-300 px-5 rounded-lg hover:scale-100 active:scale-95 font-bold text-white" :"bg-blue-500 px-5 rounded-lg hover:scale-100 active:scale-95 font-bold text-white"} onClick={gerr}>Confirm</button>
  </div>)
}

export default Cer;
