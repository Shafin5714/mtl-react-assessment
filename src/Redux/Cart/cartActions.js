import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartConstants";

export const addToCart = (product, qty) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      category: product.category,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
