import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../components/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8v83pvw",
        "template_rlh6eiq",
        form.current,
        "hKE-y5ErB1F-ZLKAD"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully");
          console.log(result.text);
          // Reset the form fields after successful email sending
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="bg-[#141824] h-full py-28 flex flex-col justify-center items-center p-8">
        <Toaster />
        <div className="text-center mb-8">
          <h1 className="text-5xl text-white font-bold">
            Get In{" "}
            <span className="text-gradient bg-gradient-to-r from-red-400 to-orange-300 via-yellow-200 to-green-300 via-teal-400 to-blue-500 via-indigo-600 to-purple-500 p-1 text-5xl font-bold">
              Touch
            </span>
          </h1>
          <h2 className="text-white text-lg my-4 font-semibold">
            Got questions or ideas? We&apos;d love to chat! Hit us up through
            our contact form or email, and we&apos;ll get back to you ASAP.
          </h2>
          <div className="flex items-center justify-center mt-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-white mr-2" />
            <a href="contact.us@codeate.in" className="text-white">
              contact.us@codeate.in
            </a>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="my-4">
                <label htmlFor="name" className="text-white font-semibold">
                  Name*:
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="border text-white rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="my-4">
                <label htmlFor="email" className="text-white font-semibold">
                  Email*:
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="border text-white rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="my-4">
                <label htmlFor="mobile" className="text-white font-semibold">
                  Mobile No*:
                </label>
                <input
                  type="mobile"
                  id="phone"
                  name="user_phone"
                  className="border text-white rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <div className="my-4">
                <label htmlFor="message" className="text-white font-semibold">
                  Message*:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="border text-white  rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
