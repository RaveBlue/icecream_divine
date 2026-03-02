import React, { useState, useEffect } from "react";
import { getProducts } from "../api/index";
import "./Products.css";
import GreenTea from "../images/GreenTea.png";
import Strawberry from "../images/Strawberry.png";
import Chocolate from "../images/Chocolate.png";
import BlueMint from "../images/BlueMint.png";
import Cookiescream from "../images/Cookiescream.png";
import PeanutButter from "../images/PeanutButter.png";
import Cake from "../images/Cake.png";

// Map product IDs to images
const productImages = {
  1: GreenTea,
  2: Strawberry,
  3: Chocolate,
  4: BlueMint,
  5: Cookiescream,
  6: PeanutButter,
  7: Cake,
};

const Products = ({ cart = [], addToCart }) => {
  const [products, setProducts] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        // Add images to products
        const productsWithImages = data.map((product) => ({
          ...product,
          image: productImages[product.id],
        }));
        setProducts(productsWithImages);
      } catch (err) {
        setError("Failed to load products. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "4rem", fontSize: "2rem" }}>
        Loading products...
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

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="products-title">Our Ice Cream Flavors</h1>
        <p className="products-subtitle">
          High in protein, low in guilt. Choose your favorite flavor!
        </p>
        {cart.length > 0 && (
          <div className="cart-summary">
            🛒 {cart.reduce((total, item) => total + item.quantity, 0)} items in
            cart
          </div>
        )}
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
            </div>

            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>

              <div className="product-details">
                <span className="product-detail">
                  🔥 {product.calories} cal
                </span>
                <span className="product-detail">
                  💪 Protein {product.protein}
                </span>
                <span className="product-detail">⭐ {product.rating}</span>
              </div>

              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button
                  className={`add-to-cart-btn ${addedId === product.id ? "added" : ""}`}
                  onClick={() => handleAddToCart(product)}
                >
                  {addedId === product.id ? "Added! ✓" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
