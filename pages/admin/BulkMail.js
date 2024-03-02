import React, { useState, useRef, useMemo } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import Sidebar from "../../Admin/components/Sidebar";
import { BASE_API_URL } from "../../config/constants";
import {toast, Toaster} from "react-hot-toast";

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

const BulkMail = () => {
  const editor = useRef(null);
  const [recipients, setRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState(``);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleSendBulkEmail = async () => {
    console.log("bulk mail");
    try {
      setIsLoading(true);

      console.log("try block");
      
      const response = await axios.post(`https://backend.codeate.in/send-bulk-email`, {
        recipients: recipients.split(",").map((email) => email.trim()), // Ensure recipients is an array
        subject,
        message,
      });
      
      toast.success("Mail Sent Successfully!");
      setContent(response.data.message);
    } catch (error) {
      console.log("err",error);
      console.log("err msg",error.message);
      toast.error(error.message);
      setContent("An error occurred while sending bulk emails.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-black min-h-screen flex pt-24">
    {/* Sidebar Component */}
    <div>
      <Sidebar />
    </div>
  
    {/* Toaster Component */}
    <Toaster />
  
    {/* Main Content */}
    <div className="flex-1 container mx-auto p-8 bg-white shadow-lg rounded-lg md:ml-8">
      <h1 className="text-3xl font-semibold mb-6 text-center ">Send Bulk Email</h1>
  
      <div className="mb-6">
        <label htmlFor="recipients" className="block text-gray-700 mb-2">
          Recipients (comma-separated) *
        </label>
        <textarea
          id="recipients"
          className="w-full p-2 border rounded  text-white  focus:outline-none focus:ring focus:border-blue-500"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          rows="3"
          placeholder="Enter recipients here..."
        />
      </div>
  
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-700 mb-2">
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          className="w-full p-2 border text-white rounded focus:outline-none focus:ring focus:border-blue-500"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter the subject..."
        />
      </div>
  
      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-700 mb-2">
          Content *
        </label>
        <MDEditor value={message} onChange={setMessage} />
      </div>
  
      <button
        className={`w-full bg-sky-500 text-white px-4 py-2 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-sky-600"
        }`}
        onClick={handleSendBulkEmail}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Bulk Email"}
      </button>
  
      {content && (
        <p className="mt-4 text-green-600 text-center">{content}</p>
      )}
    </div>
  </div>
  
  );
};

export default BulkMail;
