import { styled } from "@mui/material";
import React from "react";
import TestForm from "../test/TestForm";
import TestList from "../test/TestList";

const TestMaker = () => {
  return (
    <Box>
      <TestForm />
      <TestList />
    </Box>
  );
};

const Box = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "0 70px",
  justifyContent: "center",
  alignItems: "center",
  "& ul": {
    listStyle: "none",
  },
}));

export default TestMaker;
