import { createSlice } from "@reduxjs/toolkit";
import { findById } from "../../utils/helpers";

const initialState = {
  tests: [
    {
      id: "el1",
      testTitle: "dastan",
      questions: [
        {
          testId: "el1",
          id: "a1",
          questionTitle: "how old are dastan",
          correctAnswer: null,
          variants: [
            {
              testId: "el1",
              questionId: "a1",
              id: "d1",
              variant: "21",
            },
            {
              testId: "el1",
              questionId: "a1",
              id: "21",
              variant: "22",
            },
            {
              testId: "el1",
              questionId: "a1",
              id: "31",
              variant: "23",
            },
          ],
        },
      ],
    },
  ],
};

const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    addTest(state, { payload }) {
      state.tests.push(payload);
    },
    addQuation(state, { payload }) {
      const testItem = findById(state.tests, payload.testId);
      testItem.questions.push(payload);
    },
    deleteQuation(state, { payload }) {
      const testItem = findById(state.tests, payload.testId);
      testItem.questions = testItem.questions.filter(
        (quation) => quation.id !== payload.id,
      );
    },
    addVariant(state, { payload }) {
      const testItem = findById(state.tests, payload.testId);
      const questionItem = findById(testItem.questions, payload.questionId);
      questionItem.variants.push(payload);
    },
    deleteVariant(state, { payload }) {
      const testItem = findById(state.tests, payload.testId);
      const questionItem = findById(testItem.questions, payload.questionId);
      questionItem.variants = questionItem.variants.filter(
        (variant) => variant.id !== payload.id,
      );
    },
    getTrueAnswer(state, { payload }) {
      console.log(payload, "sadas");
      const testItem = findById(state.tests, payload.testId);
      const questionItem = findById(testItem.questions, payload.questionId);
      questionItem.correctAnswer = payload.id;
    },
  },
});

export default testsSlice;
export const testsActions = testsSlice.actions;
