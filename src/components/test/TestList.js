import { styled } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TestItem from "./TestItem";

const TestList = () => {
  const { tests } = useSelector((state) => state.tests);
  return (
    <MainContainer>
      {tests.map((test) => (
        <TestItem key={test.id} {...test} />
      ))}
    </MainContainer>
  );
};

export default TestList;

const MainContainer = styled("ul")(() => ({
  borderRadius: "12px",
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  gap: "50px",
  rowGap: "50px",
}));
