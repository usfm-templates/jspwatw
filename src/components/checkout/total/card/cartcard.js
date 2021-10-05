import React, { Component } from "react";
import lodash from "lodash";

export default class CartCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.cartdata.title,
      price: this.props.cartdata.price,
      quantity: this.props.cartdata.qty,
      image: this.props.cartdata.image,
      itemsubtotal: lodash.round(
        this.props.cartdata.price * this.props.cartdata.qty,
        2
      ),
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.title}</div>
        <div>{this.state.price}</div>
        <div>{this.state.quantity}</div>
        <div className="text-2xl">{this.state.itemsubtotal}</div>
      </div>
    );
  }
}
