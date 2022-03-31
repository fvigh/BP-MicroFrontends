import { useEffect, useState } from "react";
import * as React from "react";

import { cart, clearCart } from "./cart";

import useOnClickOutside from 'use-onclickoutside';

export default function MiniCart() {

    const ref = React.useRef(null);
    useOnClickOutside(ref, () => setShowCart(!showCart));

    const [items, setItems] = useState(undefined);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        setItems(cart.value?.cartItems);
        return cart.subscribe((c) => {
            setItems(c?.cartItems);
        });
    }, []);

    if (!items) return null;

    return (
        <>
            { /* Cart button */ }
            <span onClick={() => setShowCart(!showCart)} id="showcart_span">
                {items.length > 0 && (<button class={"ml-4 h-4 w-4 rounded-full bg-blue-600 text-xs text-center text-gray-200 dark:text-gray-200"}>{items.length}</button>)}

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="6" cy="19" r="2"></circle>
                    <circle cx="17" cy="19" r="2"></circle>
                    <path d="M17 17h-11v-14h-2"></path>
                    <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
            </span>


            { /* Shopping cart content */ }
            {showCart && (
                <div ref={ref} className="fixed inset-y-0 right-0 rounded-xl w-96">
                    <div class="flex flex-col w-full h-full max-w-md overflow-y-scroll px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div class="flex items-start justify-between">
                            <h2 class="text-lg font-medium text-gray-900 dark:text-white" id="slide-over-title">Shopping cart</h2>
                            <div class="ml-3 flex h-7 items-center">
                                <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => setShowCart(!showCart)}>
                                    <span class="sr-only">Close panel</span>
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="mt-8">
                            <div class="flow-root">
                                <ul role="list" class="-my-6 divide-y divide-gray-200">

                                    {items.map((item, index) => (
                                        <React.Fragment key={item.id}>
                                            <li class="flex py-6">
                                            {console.log("MCart"+item.id)}
                                            {console.log(item)}
                                                <div class="h-1/4 w-1/4 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                    <img src={item.image} alt={item.item}></img>
                                                </div>

                                                <div class="ml-4 flex flex-1 flex-col">
                                                    <div>
                                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                                            <h3>
                                                                <a class="dark:text-white" href="#">{item.item}</a>
                                                            </h3>
                                                            <p class="ml-4 dark:text-white">{item.price}€</p>
                                                        </div>
                                                    </div>
                                                    <div class="flex flex-1 items-end justify-between text-sm">
                                                        <p class="text-gray-500">Qty {item.quantity}</p>

                                                    </div>
                                                </div>
                                            </li>
                                        </React.Fragment>
                                    ))}

                                </ul>
                            </div>
                        </div>

                        <div class="border-t border-gray-200 mt-6 py-6 px-4 sm:px-6">
                            <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                                <p>Subtotal</p>
                                {items.reduce((a, v) => a + v.quantity * v.price, 0)} €
                            </div>
                            <p class="mt-0.5 text-sm text-gray-500">Shipping calculated at checkout.</p>
                            <div class="mt-6">
                                <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                            </div>
                            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                <p>
                                    or <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={clearCart}>clear cart<span aria-hidden="true"> &rarr;</span></button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}