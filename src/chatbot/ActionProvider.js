let count = 0
const question2 = '您是否對教學評量結果感到懷疑?'
const question3 = '您是否認為Smartlink Survey系統使用起來便利?'
const end = '問題結束，謝謝回答'

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
  }

  sendBotResponse(message) {
      const botMessage = this.createChatBotMessage(message);
      this.updateChatbotState(botMessage);
  }

   answer1 = () => {
    const message1 = this.createChatBotMessage(
        "您回答: 非常不同意"
    );
    this.updateChatbotState(message1);
    count = count+1;
    if(count==1)
    {
        const message2 = this.createChatBotMessage(
        question2,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message2);
    } 
    if(count==2)
    {
        const message3 = this.createChatBotMessage(
        question3,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message3);
    } 
    if(count==3)
    {
        const message4 = this.createChatBotMessage(
        end,
        {
            withAvatar: true,
            delay: 500,
        });
        this.updateChatbotState(message4);
    } 
};

  answer2 = () => {
    const message1 = this.createChatBotMessage(
        "您回答: 不同意"
    );
    this.updateChatbotState(message1);
    count = count+1;
    if(count==1)
    {
        const message2 = this.createChatBotMessage(
        question2,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message2);
    } 
    if(count==2)
    {
        const message3 = this.createChatBotMessage(
        question3,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message3);
    } 
    if(count==3)
    {
        const message4 = this.createChatBotMessage(
        end,
        {
            withAvatar: true,
            delay: 500,
        });
        this.updateChatbotState(message4);
    } 
  };

  answer3 = () => {
    const message1 = this.createChatBotMessage(
        "您回答: 普通"   
    );
    this.updateChatbotState(message1);
    count = count+1;
    if(count==1)
    {
        const message2 = this.createChatBotMessage(
        question2,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message2);
    } 
    if(count==2)
    {
        const message3 = this.createChatBotMessage(
        question3,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message3);
    } 
    if(count==3)
    {
        const message4 = this.createChatBotMessage(
        end,
        {
            withAvatar: true,
            delay: 500,
        });
        this.updateChatbotState(message4);
    } 
  };

  answer4 = () => {
    const message1 = this.createChatBotMessage(
        "您回答: 同意"
    );
    this.updateChatbotState(message1);
    count = count+1;
    if(count==1)
    {
        const message2 = this.createChatBotMessage(
        question2,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message2);
    } 
    if(count==2)
    {
        const message3 = this.createChatBotMessage(
        question3,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message3);
    } 
    if(count==3)
    {
        const message4 = this.createChatBotMessage(
        end,
        {
            withAvatar: true,
            delay: 500,
        });
        this.updateChatbotState(message4);
    } 
  };

  answer5 = () => {
    const message1 = this.createChatBotMessage(
      "您回答: 非常同意"
    );
    this.updateChatbotState(message1);
    count = count+1;
    if(count==1)
    {
        const message2 = this.createChatBotMessage(
        question2,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message2);
    } 
    if(count==2)
    {
        const message3 = this.createChatBotMessage(
        question3,
        {
            withAvatar: true,
            delay: 500,
            widget: "learningOptions",
        });
        this.updateChatbotState(message3);
    } 
    if(count==3)
    {
        const message4 = this.createChatBotMessage(
        end,
        {
            withAvatar: true,
            delay: 500,
        });
        this.updateChatbotState(message4);
    } 
  };


  updateChatbotState(message) {
      this.setState(prevState => ({
          ...prevState, 
          messages: [...prevState.messages, message]
      }));
  }z
}

export default ActionProvider;