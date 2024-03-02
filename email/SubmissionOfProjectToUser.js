import { useState } from "react";
import sendEmail from "./Email";
import { useGetAProjectQuery } from "../redux/features/allSlice";
import { useSelector } from "react-redux";
import { userState } from "../redux/features/authSlice";

// const { data, isLoading, refetch } = useGetAProjectQuery(projectId);
// const user = useSelector(userState);

export default async function SubmissionOfProjectToUser(
  projectTitle,
  user,
  event
) {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  //  function handleSubmitProjectToUser(event) {

  // const [isLoamding, setIsLoamding] = useState(false);
  // const [isSent, setIsSent] = useState(false);

  // event.preventDefault();
  const UserEmail = user?.user?.email;
  // setIsLoamding(true);

  const success = await sendEmail({
    to: { UserEmail },
    subject: `Enrollment of ${projectTitle} on Codeate`,
    message: `
        <p> Dear ${user?.user?.name}, you have submitted the ${projectTitle}, kindly wait for theaporaval !!!</p>
      `,
  });
  // setIsLoamding(false);
  // setIsSent(success);
  console.log(success);
  // }

  // handleSubmit()

  return <div></div>;
}
