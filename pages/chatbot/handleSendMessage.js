const handleSendMessage = async (inputText) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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', // Replace with your ChatGPT API key
    },
    body: JSON.stringify({
      max_tokens: 1000,
      model: 'gpt-3.5-turbo-0301',
      messages: [{ role: "system", content: inputText }],
    }),
  });
  
  const data = await response.json();
  console.log(data);
  return data.choices[0].message.content;
};

export default handleSendMessage;