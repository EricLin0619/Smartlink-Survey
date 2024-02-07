import handleSendMessage from './handleSendMessage';

let mode = 0; //mode=0, questionnaire ; mode=1, chat
class MessageParser {
  constructor(actionProvider, state, createChatBotMessage, modeChange) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.createChatBotMessage = createChatBotMessage;
    this.modeChange = modeChange;
  }

  async parse(inputText) {

    if(mode===1)
    {
      // Use the processor to get a reply
      const reply = await handleSendMessage(inputText);
      // Send the reply using the actionProvider
      this.actionProvider.chatWithBot(reply);
    }

  };


}

export const modeChange = (checkmode) =>{
  mode = checkmode;
  console.log(mode);
};

export default MessageParser;

