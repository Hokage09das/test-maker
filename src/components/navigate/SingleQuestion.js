import { styled } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SingleQuation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const params = useParams();

  const { tests } = useSelector((state) => state.tests);

  const singleTest = tests.find((single) => single.id === params.id);

  const handleAnswerOptionClick = (answeredId) => {
    if (answeredId === singleTest.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < singleTest?.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Div>
      {showScore ? (
        <>
          <div>You scored {score * 10}</div>
          <Link to={"/question"}>На главную</Link>
        </>
      ) : (
        <MainDivContainer>
          <QuationDiv>
            <div
              className='question-count'
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>{singleTest?.questions[currentQuestion].questionTitle}?</div>
              <span>
                Quations
                {currentQuestion + 1} /{singleTest?.questions.length}
              </span>
            </div>
            <div className='question-text'>
              {singleTest?.questions[currentQuestion].variant}
            </div>
          </QuationDiv>

          {singleTest?.questions[currentQuestion].variants.map(
            (variant, index) => (
              <AnswerButton
                key={variant.id}
                onClick={() => handleAnswerOptionClick(variant.id)}
              >
                {variant.variant}
              </AnswerButton>
            ),
          )}
          <div style={{ alignSelf: "flex-end", marginTop: "20px" }}>
            10 балл
          </div>
        </MainDivContainer>
      )}
    </Div>
  );
};

export default SingleQuation;

const Div = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
}));
const MainDivContainer = styled("div")(() => ({
  padding: "0 70px",
  display: "flex",
  flexDirection: "column",
}));

const QuationDiv = styled("div")(() => ({
  width: "300px",
  border: "1px solid",
  borderRadius: "2px",
}));

const AnswerButton = styled("button")(() => ({
  border: "1px red solid",
  backgroundColor: "transparent",
  marginTop: "10px",
  height: "20px",
  width: "100%",
  borderRadius: "5px",
}));
