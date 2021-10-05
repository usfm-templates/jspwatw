import React from "react";
import {
  addToCart,
  removeFromCart,
} from "../../redux/shopping/shopping-actions";
import { connect } from "react-redux";

const MiniCard = ({ Product, addToCart, removeFromCart }) => {
  return (
    <div>
      <img className="w-32 inline-block" src={Product.image} />{" "}
      <h1 class="inline-block"> {Product.title} </h1>
      <h2 class="inline-flex text-xl">{Product.price}</h2>
      <button
        onClick={() => removeFromCart(Product.id)}
        className="p-2 m-2 bg-blue-200"
      >
        Remove From Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(MiniCard);
