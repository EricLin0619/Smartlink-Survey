import handleSendMessage from './handleSendMessage';

class MessageParser {
  constructor(actionProvider, state, createChatBotMessage) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.createChatBotMessage = createChatBotMessage;
  }

  async parse(inputText) {

    console.log(inputText)
    // if (lowerCaseMessage.includes("非常不同意")) {
    //   this.actionProvider.handleJavascript(inputText);
    // }
  //   // Use the processor to get a reply
  //   const reply = await handleSendMessage(inputText);
    
  //   // Send the reply using the actionProvider
  //   this.actionProvider.sendBotResponse(reply);
  }
}


export default MessageParser