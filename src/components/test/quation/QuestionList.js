import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions }) => {
  console.log(questions, "dastan");
  return (
    <div>
      {questions.map((question, index) => (
        <QuestionItem
          key={question.id}
          question={question}
          number={index + 1}
        />
      ))}
    </div>
  );
};

export default QuestionList;
