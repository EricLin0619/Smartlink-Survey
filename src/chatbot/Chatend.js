import React from "react";

const Chatend = (props) => {
  const options = [
    {
      text: "沒問題，繼續回答問卷!",
      handler: props.actionProvider.chatEnd,
      id: 1,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="chat-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="chat-container">{optionsMarkup}</div>;
};

export default Chatend;