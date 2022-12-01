import { expect } from "chai";
import { todos } from "../reducers";

describe("The todos reducer", () => {
  const fakeTodo = { text: "hello", isCompleted: false };
  const fakeAddAction = {
    type: "ADD_TODO",
    payload: [fakeTodo],
  };
  const originalState = { isLoading: false, data: [] };

  it("Adds a new todo when CREATE_TODO action is received", () => {
    const expected = { isLoading: false, data: [fakeTodo] };
    const actual = todos(originalState, fakeAddAction);
    expect(actual).to.deep.equal(expected);
  });

  it("change the todo on COMPLETE_TODO action", () => {
    const testTodo = todos(originalState, fakeAddAction);
    testTodo.data[0].id = 1;
    const fakeAction = {
      type: "COMPLETE_TODO",
      payload: testTodo.data[0],
    };
    originalState.data[0] = testTodo.data[0];
    const actual = todos(originalState, fakeAction);

    const expected = {
      isLoading: false,
      data: [{ text: "hello", isCompleted: false, id: 1 }],
    };
    expect(actual).to.deep.equal(expected);
  });
});
