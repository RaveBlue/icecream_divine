import { placeOrder } from "../api/index";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";
import icecream from "../images/icecream.png";

const Cart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to place an order");
      navigate("/Login");
      return;
    }

    try {
      const orderData = {
        cart: cart,
        total: total,
        shipping: shipping,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zip: formData.zip,
      };

      await placeOrder(orderData);

      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      alert("Order failed: " + error.message);
      console.error(error);
    }
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="order-success-card">
          <div className="success-icon">🎉</div>
          <h1>Order Placed!</h1>
          <p>Thank you for your order! Your ice cream is on its way!</p>
          <p className="order-email">
            A confirmation will be sent to <strong>{formData.email}</strong>
          </p>
          <button
            className="continue-btn"
            onClick={() => navigate("/Products")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-card">
          <div className="empty-icon">🛒</div>
          <h2>Your cart is empty!</h2>
          <p>Looks like you haven't added any ice cream yet.</p>
          <Link to="/Products" className="shop-now-btn">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <img src={icecream} alt={item.name} />
              </div>

              <div className="cart-item-info">
                {/*<h3 className="cart-item-name">{item.name}</h3>*/}
                {/*<p className="cart-item-price">${item.price}</p>*/}
                <img
                  src={item.image || icecream} // ← Uses item.image if available, fallback to icecream
                  alt={item.name}
                />
              </div>

              <div className="cart-item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  −
                </button>
                <span className="quantity-number">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Right Side: Summary + Checkout */}
        <div className="cart-right">
          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {!isCheckingOut && (
              <button
                className="checkout-btn"
                onClick={() => setIsCheckingOut(true)}
              >
                Proceed to Checkout
              </button>
            )}
          </div>

          {/* Checkout Form */}
          {isCheckingOut && (
            <div className="checkout-form-container">
              <h2>Checkout</h2>
              <form onSubmit={handleCheckout} className="checkout-form">
                <h3 className="form-section-title">Shipping Info</h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="checkout-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="checkout-input"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address *"
                  value={formData.address}
                  onChange={handleFormChange}
                  required
                  className="checkout-input"
                />
                <div className="input-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleFormChange}
                    required
                    className="checkout-input"
                  />
                  <input
                    type="text"
                    name="zip"
                    placeholder="ZIP Code *"
                    value={formData.zip}
                    onChange={handleFormChange}
                    required
                    className="checkout-input"
                  />
                </div>

                <h3 className="form-section-title">Payment Info</h3>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number *"
                  maxLength="16"
                  value={formData.cardNumber}
                  onChange={handleFormChange}
                  required
                  className="checkout-input"
                />
                <div className="input-row">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY *"
                    maxLength="5"
                    value={formData.expiry}
                    onChange={handleFormChange}
                    required
                    className="checkout-input"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV *"
                    maxLength="3"
                    value={formData.cvv}
                    onChange={handleFormChange}
                    required
                    className="checkout-input"
                  />
                </div>

                <button type="submit" className="place-order-btn">
                  Place Order 🎉
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setIsCheckingOut(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
