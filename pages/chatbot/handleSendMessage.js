import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
// import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
// import { Document } from "@langchain/core/documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
// import { RunnableLambda, RunnableMap, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

const questions = [
  "你覺得課程中哪個章節對你來說最有幫助或最感興趣？",
  "你覺得課程中哪個章節對你來說最困難或最不感興趣？",
  "你是否覺得考試範圍的設計不夠合理？",
  "你是否滿意講師的教學方式以及教材設計？",
  "你是否滿意課堂中提供的資源以及課程網站？",
];

let currentQuestionIndex = 0;
let mode = 'chat'; // 'chat' or 'questionnaire'
let answers = [];

// const vectorStore = await HNSWLib.fromDocuments(
//   [
//     new Document({ pageContent: "本課程為陽明交通大學資訊工程學系所設立" }),
//     new Document({ pageContent: "課程名稱為「大型語言模型之原理剖析」" }),
//     new Document({ pageContent: "該課程為為李宏毅教授擔任授課老師" }),
//   ],
//   new OpenAIEmbeddings({
//     openAIApiKey: "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"
//   })
// );
// const retriever = vectorStore.asRetriever(1);

const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    `Answer the question based on only the following context and in Chinese:
    1. 本課程為陽明交通大學資訊工程學系所設立
    2. 課程名稱為「大型語言模型之原理剖析」
    3. 該課程為為李宏毅教授擔任授課老師
    4. 該課程總共有 6 個章節：
        Chapter 1: Introduction
        Chapter 2: Deep Learning
        Chapter 3: Seq2Seq
        Chapter 4: LSTM
        Chapter 5: Transformer
        Chapter 6: GPT-3
    5. 該課程總共有 2 個作業：
        Homework 1: Language Model
        Homework 2: GPT-3
    6. 該課程總共有 1 個期末考試：
        Range: Chapter 1 to Chapter 6
        Final Exam: 60% of the final grade
    7. 該課程總共有 1 個期中考試：
        Range: Chapter 1 to Chapter 4
        Midterm Exam: 40% of the final grade
    8. 該課程提供開放式課程網站，網址為 https://lihongyi.cool/
    9. 該課程提供學生 GPU 遠端運算資源，網址為 https://lihongyi.cool/gpu
    10. 講師的教學方式為以學生互動為主，並且提供時事議題以及新技術的討論，有時會邀請業界專家來分享最新的研究成果。`,
  ],
  ["human", "{question}"],
]);

const model = new ChatOpenAI({
  openAIApiKey: "your api key here",
  model: "gpt-3.5-turbo",
  maxTokens: 100,
});
const outputParser = new StringOutputParser();

// const setupAndRetrieval = RunnableMap.from({
//   context: new RunnableLambda({
//     func: (input) =>
//       retriever.invoke(input).then((response) => response[0].pageContent),
//   }).withConfig({ runName: "contextRetriever" }),
//   question: new RunnablePassthrough(),
// });
// const chain = setupAndRetrieval.pipe(prompt).pipe(model).pipe(outputParser);

const chain = prompt.pipe(model).pipe(outputParser);

const handleSendMessage = async (inputText) => {
  if (inputText === '/questionnaire') {
    mode = 'questionnaire';
    return questions[currentQuestionIndex];
  } else if (inputText === '/ask') {
    mode = 'chat';
    return "你現在在聊天模式，你可以問我任何問題。";
  } else if (mode === 'questionnaire') {
    answers.push(inputText);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      return questions[currentQuestionIndex];
    } else {
      return "問卷已完成，感謝你的回答！";
    }
  } else if (mode === 'chat') {
    const response = await chain.invoke({question: inputText});
    return response;
  } else {
    return "無效的指令。請輸入 /questionnaire 或 /ask。";
  }
};

export default handleSendMessage;