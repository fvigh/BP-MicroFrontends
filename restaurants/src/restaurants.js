const API_SERVER = "http://localhost:8080";

export const getRestaurants = () =>
  fetch(`${API_SERVER}/restaurants`).then((res) => res.json());

export const getRestaurantById = (id) =>
  fetch(`${API_SERVER}/restaurants/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});