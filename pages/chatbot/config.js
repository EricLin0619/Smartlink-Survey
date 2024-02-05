// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hi, I'm SmartLink Survey`)],
  botName: 'SmartLink Survey',
  customComponents: {
    // Replaces the default header
    header: () => <div style={{ color: 'black', textAlign:'left',fontSize: '20px'}}>&nbsp;SmartLink Survey</div>,
  },
 };

export default config