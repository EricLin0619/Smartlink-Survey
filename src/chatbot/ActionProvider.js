import {MessageParser, modeChange} from './MessageParser';

let count = 0;
const question1 = '1.你覺得課程中設計的教學章節對你來說是有幫助的嗎？';
const question2 = '2.你覺得課程中設計的教學章節對你來說是有困難的嗎？';
const question3 = '3.你是否滿意考試範圍的設計？';
const question4 = '4.你是否滿意講師的教學方式以及教材設計？';
const question5 = '5.你是否滿意課堂中提供的資源以及課程網站？';
const end = '問題結束，謝謝回答'

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    sendBotResponse(message) {
        const botMessage = this.createChatBotMessage(message);
        this.updateChatbotState(botMessage);
    }

    chatWithBot(message) {
        const botMessage = this.createChatBotMessage(
            message,
            {
                withAvatar: true,
                // delay: 500,
                widget: "chatEnd"
            });
        this.updateChatbotState(botMessage);
    }

    chat = () =>{
        const message1 = this.createClientMessage(
            "我有問題想問!"
        );
        this.updateChatbotState(message1);
        modeChange(1);
        const message2 = this.createChatBotMessage(
            "你現在在聊天模式，你可以問我任何問題!"
        );
        this.updateChatbotState(message2);
    }

    chatEnd = () =>{
        const text1 = this.createClientMessage(
            "我沒問題了!"
        );
        this.updateChatbotState(text1);
        modeChange(0);
        const text2 = this.createChatBotMessage(
            "那現在繼續回答問卷!"
        );
        this.updateChatbotState(text2);
        if(count==0)
        {
            const message1 = this.createChatBotMessage(
            question1,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions"
            });
            this.updateChatbotState(message1);
        } 
        if(count==1)
        {
            const message2 = this.createChatBotMessage(
            question2,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions"
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
            question4,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message4);
        } 
        if(count==4)
        {
            const message5 = this.createChatBotMessage(
            question5,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message5);
        } 
        if(count==5)
        {
            const message6 = this.createChatBotMessage(
            end,
            {
                withAvatar: true,
                delay: 500,
            });
            this.updateChatbotState(message6);
        } 
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
                widget: "learningOptions"
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
            question4,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message4);
        } 
        if(count==4)
        {
            const message5 = this.createChatBotMessage(
            question5,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message5);
        } 
        if(count==5)
        {
            const message6 = this.createChatBotMessage(
            end,
            {
                withAvatar: true,
                delay: 500,
            });
            this.updateChatbotState(message6);
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
            question4,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message4);
        } 
        if(count==4)
        {
            const message5 = this.createChatBotMessage(
            question5,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message5);
        } 
        if(count==5)
        {
            const message6 = this.createChatBotMessage(
            end,
            {
                withAvatar: true,
                delay: 500,
            });
            this.updateChatbotState(message6);
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
            question4,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message4);
        } 
        if(count==4)
        {
            const message5 = this.createChatBotMessage(
            question5,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message5);
        } 
        if(count==5)
        {
            const message6 = this.createChatBotMessage(
            end,
            {
                withAvatar: true,
                delay: 500,
            });
            this.updateChatbotState(message6);
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
            question4,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message4);
        } 
        if(count==4)
        {
            const message5 = this.createChatBotMessage(
            question5,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message5);
        } 
        if(count==5)
        {
            const message6 = this.createChatBotMessage(
            end,
            {
                withAvatar: true,
                delay: 500,
            });
            this.updateChatbotState(message6);
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
            question4,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message4);
        } 
        if(count==4)
        {
            const message5 = this.createChatBotMessage(
            question5,
            {
                withAvatar: true,
                delay: 500,
                widget: "learningOptions",
            });
            this.updateChatbotState(message5);
        } 
        if(count==5)
        {
            const message6 = this.createChatBotMessage(
            end,
            {
                withAvatar: true,
                delay: 500,
            });
            this.updateChatbotState(message6);
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