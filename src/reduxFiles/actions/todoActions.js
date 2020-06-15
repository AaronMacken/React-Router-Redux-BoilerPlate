import { ADD_TODO } from "./actionTypes";

export function addTodo(todo) {
  return function (dispatch) {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
}
