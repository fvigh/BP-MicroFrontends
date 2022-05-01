import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "home/Header";
import Login from "./Login";
import MiniCart from "./MiniCart";

const App = () => (
  <div className="mx-auto max-w-6x1">
    <Header />
      <div className="my-10">
        <Login />
        <MiniCart/>
      </div>
      </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
