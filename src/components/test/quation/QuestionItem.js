import React from "react";
import { useDispatch } from "react-redux";
import { testsActions } from "../../../store/reducer/testsSlice";
import VariantForm from "./variants/VariantForm";
import VariantList from "./variants/VariantList";

const QuestionItem = ({ question, number }) => {
  const dispatch = useDispatch();

  const deleteQuationHandler = () => {
    dispatch(testsActions.deleteQuation(question));
  };
  return (
    <>
      <li
        style={{
          fontSize: "1rem",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#DCDCDC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ textDecoration: "underline" }}>
          <strong>{number}</strong>:{question.questionTitle}
        </p>
        <button
          style={{
            marginLeft: "20px",
            padding: "7px",
            fontSize: "1rem",
            borderRadius: "8px",
            backgroundColor: "#B8A191",
            border: "none",
          }}
          onClick={deleteQuationHandler}
        >
          delete questions
        </button>
      </li>
      <VariantForm {...question} />
      <VariantList {...question} />
    </>
  );
};

export default QuestionItem;
