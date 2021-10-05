import React from "react";
import { connect } from "react-redux";
import CartCard from "../components/checkout/total/card/cartcard";
import CalculateGT from "../utils/calculategt";
import BillingForm from "../components/checkout/forms/billing/billingform"


const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

const PreCheckout = ({ cart }) => {
  return (
    <div className="">
      {/* total */}
      {cart
        ? cart.map((data, index) => {
            return <CartCard cartdata={data} />;
          })
        : null}
      <CalculateGT />

      <BillingForm />
    </div>
  );
};

export default connect(mapStateToProps)(PreCheckout);
