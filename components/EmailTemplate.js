import React from 'react';

const EmailTemplate = ({ user, submitData, studentName, recipient, courseName }) => {
 
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

  
  return (
    <div>
      <p>
        Dear Admin,<br /><br />
        We are writing to confirm that we have received a project submission {courseName} from {user.user.name}.<br />
        We request you to validate the project and provide the relevant feedback and confirm the certificate to be released from our end to the member or not.<br /><br />
      </p>
      <h3>GithubLink: <a href={submitData.githubLink}>{submitData.githubLink}</a></h3>
      <h3>DeployedLink: <a href={submitData.deployedLink}>{submitData.deployedLink}</a></h3>
      <button onClick={submitTrue} style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', textDecoration: 'none', border: 'none', cursor: 'pointer' }}>Validate</button><br /><br />
      <p>
        Best regards,<br />
        Team Codeate
      </p>
    </div>
  );
};

export default EmailTemplate;
