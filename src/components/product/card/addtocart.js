import React, { Component } from "react";

export default class AddToCartButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onclick} className="p-2 m-2 bg-blue-200">
        Add To Cart
      </button>
    );
  }
}
