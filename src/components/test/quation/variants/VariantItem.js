import { CheckCircle } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { testsActions } from "../../../../store/reducer/testsSlice";

const VariantItem = ({
  variant,
  testId,
  id,
  questionId,
  isCorrect,
  variants,
}) => {
  const dispatch = useDispatch();

  const DeleteHandler = () => {
    dispatch(testsActions.deleteVariant({ testId, id, questionId }));
  };
  return (
    <>
      <li
        style={{
          display: "flex",
          alignItems: "center",
          justifycontent: "center",
          gap: "20px",
        }}
      >
        <CheckCircle
          style={isCorrect ? { color: "red" } : {}}
          onClick={() =>
            dispatch(testsActions.getTrueAnswer({ testId, id, questionId }))
          }
        />
        {variant}{" "}
        <button
          style={{
            padding: "7px",
            fontSize: "1rem",
            borderRadius: "8px",
            backgroundColor: "#B8A191",
            border: "none",
          }}
          onClick={DeleteHandler}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default VariantItem;
