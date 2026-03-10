const BASE_URL =
  (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api";

const getToken = () => localStorage.getItem("token");

// Register
export async function registerUser(username, email, password) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

// Login
export async function loginUser(username, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

// Get all products
export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

// Place order
export async function placeOrder(orderData) {
  const response = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(orderData),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

// Get my orders
export async function getMyOrders() {
  const response = await fetch(`${BASE_URL}/orders/myorders`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}
