import React, { useState, useEffect } from "react";
import { getRestaurants } from "../../restaurants/src/restaurants";
import { useNavigate } from "react-router-dom";

import ReactSearchBox from "react-search-box";

export default function Search() {
    const [restaurants, setRestaurants] = useState([])
    var searchRest = []
    var searchItem = []

    var navigator = useNavigate();

    useEffect(() => {
        getRestaurants().then(setRestaurants);

    }, []);

    if (restaurants.length > 1) {
        restaurants.forEach(item => {
            item.menu.forEach(menuItem => {
                searchItem.push({
                    "value": "🍝 " + menuItem.item,
                    "key": item.id
                })
            })
            searchRest.push({
                "value": "🛒 " + item.name,
                "key": item.id
            })
        })
    }

    const searchData = searchRest.concat(searchItem);
    //console.log(searchData);

    const handleChoice = (record) => {
        navigator("/restaurant/" + record.item.key)
    }

    return (
        <div>
            <ReactSearchBox
                placeholder="Search for restaurants, food"
                data={searchData}
                onSelect={record => handleChoice(record)}
                onFocus={() => {
                    console.log("This function is called when is focussed");
                }}
                onChange={(record) => console.log(record)}
                autoFocus
                leftIcon={<>🔎</>}
                iconBoxSize="48px"
            />
        </div>

    );
}
