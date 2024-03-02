import { useState } from "react";
import sendEmail from "./Email";
import { useGetAProjectQuery } from "../redux/features/allSlice";
import { useSelector } from "react-redux";
import { userState } from "../redux/features/authSlice";

export default function Sendemail(projectTitle) {
  // const { data, isLoading, refetch } = useGetAProjectQuery(projectId);
  const user = useSelector(userState);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoamding, setIsLoamding] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const UserEmail = user?.user?.email;

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoamding(true);

    const success = await sendEmail({
      to: { UserEmail },
      subject: `Enrollment of ${projectTitle} on Codeate`,
      message: `
        <p> Dear ${user?.user?.name}, you have enrolled in ${projectTitle}, kindly complete it !!!</p>
      `,
    });
    setIsLoamding(false);
    setIsSent(success);
  }

  handleSubmit();

  return <div></div>;
}
