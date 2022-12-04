import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { testsActions } from "../../../store/reducer/testsSlice";

const QuestionForm = ({ id }) => {
  const [questionValue, setQuationValue] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newQuation = {
      questionTitle: questionValue,
      testId: id,
      id: Math.random().toString(),
      correctAnswer: null,
      variants: [],
    };
    if (questionValue.trim().length !== 0) {
      dispatch(testsActions.addQuation(newQuation));
      setQuationValue("");
    }
  };
  const questionChangeHandler = (e) => {
    setQuationValue(e.target.value);
  };
  return (
    <Form
      style={{ backgroundColor: "#738457", borderRadius: "8px" }}
      onSubmit={submitHandler}
    >
      <input
        style={{
          padding: "4px 8px",
          fontSize: "1rem",
          outline: "none",
          borderRadius: "8px",
          border: "none",
        }}
        placeholder='add your question'
        type='text'
        onChange={questionChangeHandler}
        value={questionValue}
      />
      <button
        style={{
          padding: "7px",
          fontSize: "1rem",
          borderRadius: "8px",
          backgroundColor: "#B8A191",
          border: "none",
        }}
        type='submit'
      >
        Add quation
      </button>
    </Form>
  );
};

export default QuestionForm;

const Form = styled.form`
  display: flex;
  padding: 20px;
`;
