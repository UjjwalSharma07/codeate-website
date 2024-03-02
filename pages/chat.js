import React from "react";
import Chatbotcomponent from '../components/chatbotcomponent/Chatbotcomponent'
import Footer from "../components/Footer";
const Chat = () => {
    return(
        <>
   <div className="flex items-center justify-center bg-gray-400 h-screen mt-10">
    <Chatbotcomponent/>
   </div>
    <Footer/>
   </>
    )
}

export default Chat;