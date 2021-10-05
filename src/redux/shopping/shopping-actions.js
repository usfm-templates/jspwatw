import * as actionTypes from "./shopping-types";
import axios from "axios";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQty = (sku, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      sku: sku,
      qty: value,
    },
  };
};

export const getProducts = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get("/api/products");
      if (response.data) {
        dispatch({
          type: actionTypes.GET_PRODUCTS,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

// export const populatemain = () => {
//   return{
//       type: actionTypes.POPULATE_INITIAL_PRODUCTS,
//       payload: item,
//   }
// }
