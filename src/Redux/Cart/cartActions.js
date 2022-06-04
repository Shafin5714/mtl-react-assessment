import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_INCREMENT_ITEM,
  CART_DECREMENT_ITEM,
  
} from "./cartConstants";

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
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
};

export const incrementItem = (id) => (dispatch, getState) => {
  console.log(id);
  dispatch({
    type: CART_INCREMENT_ITEM,
    payload: id,
  });
};

export const decrementItem = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_DECREMENT_ITEM,
    payload: id,
  });
};
