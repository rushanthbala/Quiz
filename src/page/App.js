import React, { useEffect, useState } from "react";
import Question from "../api/question";
import QuizBox from "../component/quizBox";

function App() {
  const [questionBank, setQuestionBank] = useState([]);
  useEffect(() => {
    setQuestionBank(Question);
  }, []);
  console.log(questionBank);
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];
  return (
    <div className="app">
      {questionBank && questionBank.map((question, i) => (
         <QuizBox question={question.question} answer={question.answer} canswer={question.canswer} />
           ))}
    </div>
  );
}

export default App;
