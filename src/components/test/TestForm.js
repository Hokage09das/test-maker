import { styled } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { testsActions } from "../../store/reducer/testsSlice";

const TestForm = () => {
  const [testValue, setTestValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newTest = {
      testTitle: testValue,
      id: Date.now().toString(),
      questions: [],
    };
    if (testValue.trim().length !== 0) {
      dispatch(testsActions.addTest(newTest));
      setTestValue("");
    }
  };
  const testChangeHandler = (e) => {
    setTestValue(e.target.value);
  };
  return (
    <MyForm onSubmit={submitHandler}>
      <input
        type='text'
        value={testValue}
        onChange={testChangeHandler}
        placeholder='add your test'
      />
      <button type='submit'> Add test</button>
    </MyForm>
  );
};

export default TestForm;

const MyForm = styled("form")(() => ({
  backgroundColor: "#ED793C",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  height: "40px",
  borderRadius: "7px",
  padding: "30px",

  "& input": {
    height: "30px",
    alignSelf: "center",
    borderRadius: "4px",
    border: "none",
    padding: "4px 8px",
    fontSize: "1rem",
  },
  "& input:focus": {
    border: "none",
    outline: "none",
  },
  "& button": {
    backgroundColor: "#B8A191",
    alignSelf: "center",
    marginLeft: "20px",
    fontSize: "1rem",
    padding: "7px 16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "7px",
  },
}));
