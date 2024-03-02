import { useState } from "react";
import sendEmail from "./Email";
import { useGetAProjectQuery } from "../redux/features/allSlice";
import { useSelector } from "react-redux";
import { userState } from "../redux/features/authSlice";
import sendCertificateEmail from "./SendCertificateEmail";

export default function EmailOfValidation(gitHubLink, deployed) {
  // const { data, isLoading, refetch } = useGetAProjectQuery(projectId);
  const user = useSelector(userState);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoamding, setIsLoamding] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const UserEmail = user?.user?.email;
  const UserName = user?.user?.name;

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoamding(true);

    const success = await sendEmail({
      to: { UserEmail },
      subject: `Enrollment of ${projectTitle} on Codeate`,
      message: `
        <p> Dear Admin, ${UserName} have submitted  ${projectTitle}, kindly check it !!!</p>
        <p> the github link is ${gitHubLink}</p>
        <p> the deployed link is ${deployed}</p>
        <button onClick={sendCertificateEmail()}>Validate</button>
      `,
    });
    setIsLoamding(false);
    setIsSent(success);
  }

  const handldeClick = () => {
    sendCertificateEmail();
  };

  handleSubmit();

  return (
    <div>
      <button onClick={handldeClick}>Validate</button>
    </div>
  );
}
