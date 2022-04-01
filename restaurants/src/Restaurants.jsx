import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getRestaurants, currency } from "./restaurants";



export default function HomeContent() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants().then(setRestaurants);
  }, []);

  return (
    <div class="flex items-center justify-center">
      <div className="grid w-4/5 mt-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <Link to={`/restaurant/${restaurant.id}`}>
              <div class="max-w-xs m-2 mb-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover object-center w-full h-40" src={`https://static-bpmf.herokuapp.com/${restaurant.id}-sm.jpg`} alt={restaurant.name}></img>

                <div class="flex items-center px-6 py-3 bg-gray-700">
                  <h1 class="mx-3 text-lg font-semibold text-white">~ {restaurant.delivery_estimate} min</h1>
                </div>

                <div class="px-6 py-4">
                  <h1 class="text-xl font-semibold text-gray-800 dark:text-white">{restaurant.name}</h1>
                  <p class="py-2 text-gray-700 dark:text-gray-400">{restaurant.description}</p>

                  <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <h1 class="text-sm pr-4">{restaurant.pricerange}</h1>

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stars" width={16} height={16} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                      <path d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                      <path d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                    </svg>
                    <h1 class="text-sm pl-1">{restaurant.rating}</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}