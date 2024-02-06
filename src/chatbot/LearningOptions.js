import React from "react";

const LearningOptions = (props) => {
  const options = [
    {
      text: "1.非常不同意",
      handler: props.actionProvider.answer1,
      id: 1,
    },
    { text: "2.不同意", 
      handler:props.actionProvider.answer2, 
      id: 2,  
    },
    { text: "3.普通", handler: props.actionProvider.answer3, id: 3 },
    { text: "4.同意", handler: props.actionProvider.answer4, id: 4 },
    { text: "5.非常同意", handler: props.actionProvider.answer5, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;