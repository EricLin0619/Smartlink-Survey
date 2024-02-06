import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { Document } from "@langchain/core/documents";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableLambda, RunnableMap, RunnablePassthrough } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

const questions = [
  "你對課程的整體滿意度如何？",
  "講師的教學品質你滿意嗎？",
  "課程內容是否符合你的期待？",
  "教材內容是否符合你的期望？",
  "你覺得課程內容是否對你有幫助？"
];

let currentQuestionIndex = 0;
let mode = 'chat'; // 'chat' or 'questionnaire'
let answers = [];

const vectorStore = await HNSWLib.fromDocuments(
  [
    new Document({ pageContent: "本課程為陽明交通大學資訊工程學系所設立" }),
    new Document({ pageContent: "課程名稱為「大型語言模型之原理剖析」" }),
    new Document({ pageContent: "該課程為為李宏毅教授擔任授課老師" }),
  ],
  new OpenAIEmbeddings({
    openAIApiKey: "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"
  })
);
const retriever = vectorStore.asRetriever(1);

const prompt = ChatPromptTemplate.fromMessages([
  [
    "ai",
    `Answer the question based on only the following context and in Chinese:
  
{context}`,
  ],
  ["human", "{question}"],
]);

const model = new ChatOpenAI({
  openAIApiKey: "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",
  model: "gpt-3.5-turbo",
  maxTokens: 100,
});
const outputParser = new StringOutputParser();

const setupAndRetrieval = RunnableMap.from({
  context: new RunnableLambda({
    func: (input) =>
      retriever.invoke(input).then((response) => response[0].pageContent),
  }).withConfig({ runName: "contextRetriever" }),
  question: new RunnablePassthrough(),
});
const chain = setupAndRetrieval.pipe(prompt).pipe(model).pipe(outputParser);

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
    const response = await chain.invoke(inputText);
    return response;
  } else {
    return "無效的指令。請輸入 /questionnaire 或 /ask。";
  }
};

export default handleSendMessage;