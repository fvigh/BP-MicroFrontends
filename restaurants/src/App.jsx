import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.scss";

import Header from "home/Header";
import Restaurants from "./Restaurants";
import RestaurantsContent from "./RestaurantsContent";


const App = () => (
  <Router>
    <div className="">
      <Header />
      <Routes>
        <Route exact path="/" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RestaurantsContent />} />
      </Routes>
    </div>
  </Router>

);
ReactDOM.render(<App />, document.getElementById("app"));
