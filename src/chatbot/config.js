// Config starter code
import { createChatBotMessage,createCustomMessage} from "react-chatbot-kit";
import LearningOptions from "./LearningOptions.js";
import Chatend from "./Chatend.js";
import React from "react";

const config = {
  initialMessages: 
  [
    createChatBotMessage(`Hi, I'm SmartLink Survey`), 
    createChatBotMessage("1.你覺得課程中哪個章節對你來說最有幫助或最感興趣？",
    {
      withAvatar: true,
      delay: 500,
      widget: "learningOptions",
    }),
  ],

  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "chatEnd",
      widgetFunc: (props) => <Chatend {...props} />,
    },
  ],

  customComponents: {
    // Replaces the default header
    header: () => <div style={{ color: 'white', textAlign:'center',fontSize: '20px', backgroundColor:'black'}}>&nbsp;SmartLink Survey</div>,
  },
 };

export default config