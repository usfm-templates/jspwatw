import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CartStore from "./components/cart/cartstore";

import Home from "./pages/home";
import Checkout from "./pages/checkout";

var listyles = "inline-block p-12 hover:bg-gray-200";

var cartstyles = " hover:bg-gray-200";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="w-full text-center grid grid-cols-3">
          <div />
          <div>
            <ul>
              <li className={listyles}>
                <Link to="/">Home</Link>
              </li>
              <li className={listyles}>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </div>

          <div class="p-12 text-right">
            <CartStore />
          </div>

        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
