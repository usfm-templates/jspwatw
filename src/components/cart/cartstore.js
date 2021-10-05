import React, { Component } from "react";

import Carticon from "../cart/carticon";
import CartSection from "./cartsection"

export default class CartStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isfocused: true };
    this.handleClick = this.handleClick.bind(this);
    
  }

  async handleClick() {
    await this.setState({ isfocused: !this.state.isfocused });
    await console.log(this.state);
  }

  

  render() {
    if (this.state.isfocused === true) {
      var showhidestyle = "invisible";
    }

    return (
      <div onClick={this.handleClick}>
        <Carticon />
        <div className="text-left absolute" id="cartdropdown">
          <div className={showhidestyle}>
            <div>
              <CartSection/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
