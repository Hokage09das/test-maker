import { styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Questions = () => {
  const { tests } = useSelector((state) => state.tests);
  return (
    <div>
      {tests.map((test, index) => (
        <QuationDiv key={test.id}>
          <p style={{ padding: "0 30px" }}>
            <Link to={test.id}>
              {index + 1} Вопрос : {test.testTitle}
              <p>Пройти тест</p>
            </Link>
          </p>
        </QuationDiv>
      ))}
      <Link to='/'>Создать тест</Link>
    </div>
  );
};

export default Questions;

const QuationDiv = styled("div")({
  color: "white",
  width: "100%",
  backgroundColor: "red",

  borderRadius: "12px",
  margin: "50px 0",
  "& li": {
    listStyle: "none",
  },
});
