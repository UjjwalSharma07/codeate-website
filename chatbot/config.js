import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "../components/LearningOptions/LearningOptions";
import BuildLinkList from "../components/LinkList/BuildLinkList";
import LearnLinkList from "../components/LinkList/LearnLinkList";
import CommunityLinkList from "../components/LinkList/CommunityLinkList";


const config = {
    botname: "LearningBot",
    initialMessages: [
        createChatBotMessage(`Welcome to Code8. Start exploring..`, { widget: "learningOptions" }),

    ],
    widgets: [
        {
            widgetName: "learningOptions",
            widgetFunc: (props) => <LearningOptions {...props} />,
        },
     
        {
            widgetName: "buildLinks",
            widgetFunc: (props) => <BuildLinkList {...props} />,
            
        },

        {
            widgetName: "learnLinks",
            widgetFunc: (props) => <LearnLinkList {...props} />,
            
        },

        {
            widgetName: "communityLinks",
            widgetFunc: (props) => <CommunityLinkList {...props} />,
            
        },
        
    ],
}

export default config
