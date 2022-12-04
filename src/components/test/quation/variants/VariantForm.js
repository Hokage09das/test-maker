import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { testsActions } from "../../../../store/reducer/testsSlice";

const VariantForm = ({ testId, id }) => {
  const [variantValue, setVariantValue] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const newVariant = {
      testId,
      questionId: id, /// question
      variant: variantValue, // variant
      id: Math.random().toString(),
    };
    if (variantValue.trim().length !== 0) {
      dispatch(testsActions.addVariant(newVariant)); /// testsActions // addVariant

      setVariantValue("");
    }
  };
  const variantChangeHandler = (e) => {
    setVariantValue(e.target.value);
  };
  return (
    <form
      style={{
        fontSize: "1rem",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#ACAAAB",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={submitHandler}
    >
      <input
        style={{
          padding: "5px 8px",
          outline: "none",
          border: "none",
          borderRadius: "8px",
        }}
        placeholder='add your variant'
        type='text'
        value={variantValue}
        onChange={variantChangeHandler} // variantChangeHandler
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
        Add variant
      </button>
    </form>
  );
};

export default VariantForm;
