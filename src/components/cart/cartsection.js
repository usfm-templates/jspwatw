import React from "react";
import { connect } from "react-redux";
import MiniCard from "./minicard";
import CheckoutButton from "../checkout/button"

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

const CartSection = ({ cart }) => {
  return (
    <div className="w-max bg-gray-50 flex-grow">
      {console.log(cart)}
      {cart
        ? cart.map((data, index) => {
            return (
                <MiniCard Product={data} />
            );
          })
        : null}
              <CheckoutButton/>
    </div>
  );
};

export default connect(mapStateToProps)(CartSection);
