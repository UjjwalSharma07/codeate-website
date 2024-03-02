import React, { useState } from "react";
import FaqCard from "../components/FaqCard";
import Footer from "../components/Footer";

const Faqs = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };
  const data = [
    {
      question: "What is Codeate?",
      answer:
        "Codeate is a community-led experiential learning platform that offers project-based upskilling programs. We focus on providing industry-relevant projects and opportunities to help students enhance their skills.",
    },
    {
      question: "How does Codeate help students in upskilling?",
      answer:
        "Codeate facilitates upskilling through a project-based learning approach. We offer programs that involve working on real-world projects, enabling students to gain practical experience and develop valuable skills.",
    },
    {
      question: "What makes Codeate different from other learning platforms?",
      answer:
        "Codeate stands out by emphasizing a community-driven approach. Our platform not only provides learning materials but also fosters a supportive community. Through this network, students can leverage industry connections and opportunities.",
    },
    {
      question: "What kind of upskilling programs does Codeate offer?",
      answer:
        "Codeate offers a diverse range of upskilling programs that are tailored to meet industry demands. These programs cover various technologies and domains.",
    },
    {
      question: "How does working on projects with Codeate validate my skills?",
      answer:
        "By completing projects on Codeate, you showcase your abilities to solve real-world challenges. This practical experience serves as concrete evidence of your skills and makes your profile more appealing to potential employers.",
    },
    {
      question: "Does Codeate help with job placement or career opportunities?",
      answer:
        "Yes, Codeate aims to assist students in landing career opportunities. Through our industry network, we connect students with potential employers, increasing their chances of securing relevant job placements.",
    },
    {
      question: "Is Codeate suitable for beginners with no prior experience?",
      answer:
        "Absolutely! Codeate welcomes learners of all levels, including beginners with no prior experience. Our learning programs are designed to cater to diverse skill levels, ensuring that everyone can benefit from our platform.",
    },
    {
      question: "How do I get started with Codeate?",
      answer:
        "Getting started with Codeate is simple. You can visit our website and explore the available upskilling programs. Choose the one that aligns with your interests and goals, and then follow the registration process to join the community.",
    },
    {
      question:
        "Are there any prerequisites for enrolling in Codeate's programs?",
      answer:
        "While some programs may have specific prerequisites, many are beginner-friendly and don't require prior experience. Each program's details, including prerequisites, will be clearly mentioned on the course page.",
    },
    {
      question: "Are there any fees associated with using Codeate's platform?",
      answer:
        "Codeate may offer both free and paid programs. The pricing details for each program will be mentioned on the respective course pages. Some projects might require additional resources or tools, which might incur extra costs.",
    },
    {
      question: "Can I collaborate with other learners on projects?",
      answer:
        "Yes, collaboration is encouraged on Codeate. You can work with other learners from the community on projects, fostering teamwork and networking opportunities.",
    },
    {
      question:
        "How can I get support or assistance while working on projects?",
      answer:
        "Codeate offers a support system where you can interact with mentors, instructors, and fellow learners. You can ask questions, seek guidance, and share ideas through forums, chat platforms, or dedicated support channels.",
    },
    {
      question: "Is there a certificate provided upon completing a program?",
      answer:
        "Yes, Codeate provides certificates upon successful completion of the upskilling programs. These certificates validate your achievement and the skills you've gained during the project-based learning journey.",
    },
    {
      question:
        "Is there a limit to the number of programs I can enroll in simultaneously?",
      answer:
        "Generally, there is no limit to the number of programs you can enroll in simultaneously. However, it is essential to manage your time effectively to ensure you can fully participate and benefit from each program.",
    },
    {
      question: "What are industry-oriented bootcamps offered by Codeate?",
      answer:
        "Codeate's industry-oriented bootcamps are intensive and immersive learning programs focused on specific industries or technology domains. These bootcamps are designed to equip participants with hands-on skills and knowledge relevant to current industry demands.",
    },
    {
      question:
        "How long do the bootcamps typically last, and what is the time commitment?",
      answer:
        "The duration of Codeate's bootcamps may vary depending on the program's complexity and content. Participants should be prepared to dedicate a significant amount of time during the bootcamp period to complete projects and assignments effectively.",
    },
    {
      question:
        "Are the bootcamps instructor-led, and will I receive personalized guidance?",
      answer:
        "Yes, Codeate's bootcamps are often instructor-led, and participants can expect personalized guidance from experienced mentors and industry experts throughout the learning journey.",
    },
    {
      question: "What are hackathons, and how do they benefit participants?",
      answer:
        "Hackathons are intensive events where participants collaborate to create innovative solutions or projects within a limited timeframe. They offer a great opportunity to apply skills, solve real-world problems, network, and sometimes even win prizes or recognition.",
    },
    {
      question:
        "Are hackathons open to all, or do I need specific skills to participate?",
      answer:
        "Hackathons organized by Codeate are typically open to participants with diverse skill levels. Some hackathons may have themes or technology preferences, but there are often challenges suitable for participants with various backgrounds.",
    },
    {
      question:
        "How do hackathons contribute to career growth and networking opportunities?",
      answer:
        "Hackathons offer a unique platform to showcase your problem-solving skills, creativity, and teamwork. Participating in hackathons can impress potential employers and expand your professional network within the industry.",
    },
    {
      question: "Are there any prizes or incentives for winners of hackathons?",
      answer:
        "Yes, Codeate's hackathons often come with exciting prizes, including cash rewards, internship opportunities, mentorship, or valuable industry connections.",
    },
  ];

  return (
    <>
      <div className="bg-black h-full py-20">
        <div className="py-16 mx-auto w-full px-4 max-w-7xl">
          <h3 className="mb-12 title text-5xl ">FAQs</h3>
          <hr className="border-0 border-gray-100" />
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {data.map((item, index) => {
              return (
                <FaqCard
                  key={index}
                  open={index === open}
                  title={item.question}
                  desc={item.answer}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
