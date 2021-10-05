import React from "react";
import { Component } from "react";
import { addToCart,  removeFromCart} from "../../../redux/shopping/shopping-actions";
import { connect } from "react-redux";

import AddToCartButton from "./addtocart"
import RemoveFromCart from "./removecart"


const ProductCard = ({ Product, addToCart, removeFromCart }) => {
  return (
    <div className="w-max bg-gray-50 mx-auto p-12 border-separate">
      <h1> {Product.title} </h1>
      <img className="w-64" src={Product.image} /> <h2>{Product.price}</h2>
    
      <AddToCartButton 
      onclick = {() => addToCart(Product.id)}
      
      />

<RemoveFromCart 
      onclick = {() => removeFromCart(Product.id)}
      
      />
{/* 
      <button
        onClick={() => addToCart(Product.id)}
        className="p-2 bg-blue-200"
      >
        Add To Cart
      </button> */}





    </div>
  );
};



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),

  };
};

export default connect(null, mapDispatchToProps)(ProductCard);
