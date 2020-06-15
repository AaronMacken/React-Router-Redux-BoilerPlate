import { ADD_TODO } from "../actions/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      return state;
    default:
      return state;
  }
}
