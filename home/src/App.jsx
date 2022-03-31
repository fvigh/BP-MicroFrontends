import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";

import Header from "./Header";
import Restaurants from "restaurants/Restaurants";
import RestaurantsContent from "restaurants/RestaurantsContent";

const App = () => (
  <div class="dark:bg-gray-900">

    <Router>
      <div className="">
        <Header />
        <div className="">
          <Routes>
            <Route exact path="/" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<RestaurantsContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  </div>


);
ReactDOM.render(<App />, document.getElementById("app"));
