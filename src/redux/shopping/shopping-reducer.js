import * as actionsTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [],
  cart: [], //quantity, id, title, price, tag, image , id, sku, datecreated...//
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // check if item is in cart
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionsTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (removeditem) => removeditem.id !== action.payload.id
        ),
      };
    case actionsTypes.ADJUST_QTY:
      return {
        // ...state,
        // cart: state.cart.map(item => item.id ===action.payload.id ? {...item,qty: action.payload.qty})
      };
    case actionsTypes.LOAD_CURRENT_ITEM:
      return {};
    case actionsTypes.GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      return state;
  }
};

export default shopReducer;
