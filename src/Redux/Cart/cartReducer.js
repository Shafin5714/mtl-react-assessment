import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_INCREMENT_ITEM,
  CART_DECREMENT_ITEM,
  ORDER_SUCCESS,
} from "./cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);
      if (existItem) {
        existItem.qty = existItem.qty + 1;

        return {
          ...state,
          //   cartItems: [...state.cartItems, ...existItem],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_INCREMENT_ITEM:
      const product = state.cartItems.find((x) => x.id === action.payload);
      if (product) {
        product.qty = product.qty + 1;
        return {
          ...state,
          //   cartItems: [...state.cartItems, ...product],
        };
      }

    case CART_DECREMENT_ITEM:
      const product2 = state.cartItems.find((x) => x.id === action.payload);
      product2.qty = product2.qty - 1;

      if (product2.qty < 1) {
        product2.qty = 1;
      }

      return {
        ...state,
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };
    case ORDER_SUCCESS: {
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
};
