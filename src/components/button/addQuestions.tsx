import { get } from "http";
import { addQuestions, getQuestionsById } from "../../service/questionnaire";
import { useEffect } from "react";

function AddQuestionButton() {
  useEffect(() => {
    // @ts-ignore
    const result = [];
    for (let i = 0; i < 3; i++) {
      getQuestionsById(i).then((res) => {
        result.push(res);
      });
    }
    // @ts-ignore
    console.log(result);
  });
  
  const handleClick = async () => {
    const questions = [
      "我上本科目的態度",
      "我在課外研讀本科目的態度",
      "我上課的缺課次數大約",
    ];
    addQuestions(questions);
  };
  return (
    <>
      <button className="btn btn-info" onClick={handleClick}>
        add questions
      </button>
    </>
  );
}

export default AddQuestionButton;
