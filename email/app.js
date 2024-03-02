const handleSubmit = () => {
  fetch("https://uomuwg8mrc.execute-api.us-east-1.amazonaws.com/sendEmail", {
    mode: "no-cors",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      senderName: "contact.code8@gmail.com",
      senderEmail: "guptanirbhay541@gmail.com",
      message: "Test message",
      date: new Date(),
      fileName: "TestFile",
    }),
  });
};
