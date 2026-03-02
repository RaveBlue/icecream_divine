import React, { useState, useEffect } from "react";
import { getMyOrders } from "../api/index";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/Login");
        return;
      }

      try {
        const data = await getMyOrders();
        setOrders(data);
      } catch (err) {
        if (err.message.includes("token")) {
          navigate("/Login");
        } else {
          setError("Failed to load orders. Please try again.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "4rem", fontSize: "2rem" }}>
        Loading your orders...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "4rem",
          fontSize: "2rem",
          color: "red",
        }}
      >
        {error}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="empty-orders">
        <h2>No Orders Yet</h2>
        <p>You haven't placed any orders yet.</p>
        <button onClick={() => navigate("/Products")} className="shop-btn">
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1 className="orders-title">My Orders</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div>
                <h3>Order #{order.id}</h3>
                <p className="order-date">
                  {new Date(order.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="order-status">
                <span className={`status-badge ${order.status}`}>
                  {order.status}
                </span>
              </div>
            </div>

            <div className="order-details">
              <div className="shipping-info">
                <h4>Shipping To:</h4>
                <p>{order.name}</p>
                <p>{order.address}</p>
                <p>
                  {order.city}, {order.zip}
                </p>
                <p>{order.email}</p>
              </div>

              <div className="order-items">
                <h4>Items:</h4>
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-footer">
              <div className="order-totals">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>${(order.total - order.shipping).toFixed(2)}</span>
                </div>
                <span>
                  $
                  {(
                    parseFloat(order.total) - parseFloat(order.shipping)
                  ).toFixed(2)}
                </span>
                <span>Shipping:</span>
                <span>${parseFloat(order.shipping).toFixed(2)}</span>
              </div>
              <div className="total-row order-total">
                <span>Total:</span>
                <span>${parseFloat(order.total).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
