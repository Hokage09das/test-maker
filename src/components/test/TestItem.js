import { styled } from "@mui/material";
import React, { useState } from "react";
import QuestionForm from "./quation/QuestionForm";
import QuestionList from "./quation/QuestionList";

const TestItem = ({ testTitle, id, questions, number }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHadler = () => {
    setIsVisible((prevState) => !prevState);
  };
  return (
    <div>
      <TestLi>
        {testTitle}
        <button
          onClick={toggleHadler}
          style={{
            marginLeft: "20px",
            backgroundColor: "#B8A191",
            borderRadius: "7px",
            border: "none",
            fontSize: "1rem",
            padding: "7px 16px",
            cursor: "pointer",
          }}
        >
          add questions
        </button>
      </TestLi>

      {isVisible && (
        <>
          <QuestionForm id={id} />
          <QuestionList questions={questions} />
        </>
      )}
    </div>
  );
};

export default TestItem;

const TestLi = styled("li")(() => ({
  backgroundColor: "coral",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px 20px",
  borderRadius: "8px",
  padding: "10px 20px",
}));
