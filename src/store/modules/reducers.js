import { ADD_CART } from "./actionTypes";
const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    default:
      return state;
  }
};

export default cartReducer;
