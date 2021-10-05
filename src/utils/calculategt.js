import React, { Component } from "react";
import { connect } from "react-redux";
import lodash from "lodash";

function CalculateGT({ cart }) {
  var grandtotal = lodash.round(lodash.sum(cart.map((x) => x.qty * x.price)), 2  );


  return <div className="text-4xl">Grand Total: {cart ? grandtotal: null}</div>;
}

const mapStateToProps = (state) => ({ cart: state.shop.cart });

export default connect(mapStateToProps)(CalculateGT);
