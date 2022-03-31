import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import { getRestaurantById, currency } from "./restaurants";
import { addToCart, useLoggedIn } from "cart/cart";

import useOnClickOutside from 'use-onclickoutside';


export default function RestaurantsContent() {
    const loggedIn = useLoggedIn();
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const [showAlert, setShowAlert] = useState(false);
    console.log(showAlert)

    const ref = React.useRef(null);
    useOnClickOutside(ref, () => setShowAlert(false));


    useEffect(() => {
        if (id) {
            getRestaurantById(id).then(setRestaurant);
        } else {
            setRestaurant(null);
        }
    }, [id]);

    if (!restaurant) return null;

    return (
        <div>
            { /* Login alert */ }
            {showAlert && (
                <div ref={ref} class="fixed top-32 right-0 bg-blue-600 z-5 flex w-full max-w-sm overflow-hidden rounded-lg shadow-md dark:bg-blue-600">
                    <div class="flex items-center justify-center w-12 bg-blue-600">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
                        </svg>
                    </div>

                    <div class="px-4 py-2 -mx-3">
                        <div class="mx-3">
                            <span class="font-semibold text-white">Notice</span>
                            <p class="text-sm text-white">Please log in</p>
                        </div>
                    </div>
                </div>
            )}

            { /* Background picture */ }
            <div class="w-full bg-center bg-cover h-screen" style={{ background: `url(${restaurant.image})` }}>
                <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                    <div class="text-center">
                        <h1 class="text-6xl font-semibold text-white uppercase lg:text-8xl">{restaurant.name}</h1>
                    </div>
                </div>
            </div>

            { /* Body */ }
            <div class="mt-8">
                {console.log(JSON.stringify(restaurant))}
                {restaurant.menu.map((item, index) => (
                    <div key={index}>
                        <div class="flex max-w-2xl m-4 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img class="object-cover object-center w-1/2 h-auto" src={item.image} alt={item.item}></img>
                            <div class="w-2/3 p-4 md:p-4">
                                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">{item.item}</h1>

                                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit</p>

                                <div class="flex mt-2 item-center">
                                </div>

                                <div class="flex justify-between mt-3 item-center">
                                    <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">{item.price} €</h1>
                                    <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600" onClick={() => loggedIn ? addToCart(item.id) : setShowAlert(true)}
                                        id={`addtocart_${item.id}`}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}