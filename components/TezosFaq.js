import React, { useState } from "react";
import FaqCard from "./FaqCard";
import Footer from "./Footer";

const TezosFaq = () => {
  const [open, setOpened] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpened(null);
    }

    setOpened(index);
  };
  const data = [
    {
        question: "How are the sessions structured?",
        answer: "The program features alternating sessions led by different experienced speakers. This diverse approach ensures comprehensive coverage of web development topics and perspectives."
      },
      {
        question: "Who is eligible to join the Web Dev Program?",
        answer: "Anyone with an interest in web development, regardless of their skill level, can join the program. Whether you're a beginner or an experienced developer, you're welcome!"
      },
    {
      question: "What is the duration of the Web Dev Program, and when does it start?",
      answer: "The Web Development Program by Codeate runs from October 1st, 2023, to November 12th, 2023."
    },
    
    {
      question: "What topics will be covered in the program?",
      answer: "The program covers a wide range of topics, including HTML, CSS, JavaScript, responsive design, and more. Participants will gain practical skills to build interactive and user-friendly websites."
    },
    {
      question: "What is the time commitment that the program requires?",
      answer: "It will be a 6 weeks program starting from mid of 1st October. It will take around 15-25 hours of your time per week. It's a self paced cum session based learning program. Being a student or a full-time employee is not a barrier. You can even complete it early as per your bandwidth, so that you can work more on the mentioned topics on a weekly basis."
    },
    {
      question: "How much does the program cost?",
      answer: "The program is available in a paid mode at Rs 299 per person."
    },
    {
      question: "Is the Web Dev Program conducted in-person or online?",
      answer: "The Web Development Program is completely online, allowing you to participate from the comfort of your own space."
    },
  
    {
      question: "Will there be practical assignments and assessments?",
      answer: "Yes, participants can expect a variety of assignments, quizzes, and projects throughout the program to reinforce their learning and practical skills."
    },
    {
      question: "Are internship opportunities available as part of the program?",
      answer: "Absolutely! By excelling in the program, participants will have the chance to stand out and gain valuable internship opportunities in the web development industry."
    },
    {
      question: "How do I register for the Web Dev Program?",
      answer: "Registering is easy! Simply visit our website and navigate to the registration form. Fill in your details and follow the prompts to complete your registration. Get ready to embark on your web development journey!"
    }
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

export default TezosFaq;
