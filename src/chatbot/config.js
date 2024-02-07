// Config starter code
import { createChatBotMessage,createCustomMessage} from "react-chatbot-kit";
import LearningOptions from "./LearningOptions.js";
import React from "react";

const config = {
  initialMessages: 
  [
    createChatBotMessage(`Hi, I'm SmartLink Survey`), 
    createChatBotMessage("你是否再填寫教學評量問卷的時候，會擔心身分洩漏，因此不敢暢所欲言?",
    {
      withAvatar: true,
      delay: 500,
      widget: "learningOptions",
    }),
    createCustomMessage('Test', 'custom'),
  ],

  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },

  ],

  customComponents: {
    // Replaces the default header
    header: () => <div style={{ color: 'white', textAlign:'center',fontSize: '20px',backgroundColor:"black"}}>SmartLink Survey</div>,
  },
 };

export default config