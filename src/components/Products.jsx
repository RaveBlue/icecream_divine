import React, { useState } from "react";
import "./Products.css";
//import icecream from "./icecream.png";
import GreenTea from "../images/GreenTea.png";
import Strawberry from "../images/Strawberry.png";
import Chocolate from "../images/Chocolate.png";
import BlueMint from "../images/BlueMint.png";
import Cookiescream from "../images/Cookiescream.png";
import PeanutButter from "../images/PeanutButter.png";
import Cake from "../images/Cake.png";

const products = [
  {
    id: 1,
    name: "Green Tea",
    price: 4.52,
    description:
      "A refreshing green tea flavored ice cream, high in antioxidants and protein. Perfect for a healthy treat!",
    calories: 310,
    protein: "20g",
    rating: "4.9 (437)",
    image: GreenTea,
  },
  {
    id: 2,
    name: "Strawberry Chocolate",
    price: 4.85,
    description:
      "A delicious blend of sweet strawberries and rich chocolate. A classic combination with a healthy twist!",
    calories: 309,
    protein: "20g",
    rating: "4.9 (430)",
    image: Strawberry,
  },
  {
    id: 3,
    name: "Choco-Loco",
    price: 4.75,
    description:
      "For the chocolate lovers! An intense chocolate flavor packed with protein to fuel your day. Chocolate ice cream with fudge swirls and chocolate chunks.",
    calories: 310,
    protein: "20g",
    rating: "4.8 (389)",
    image: Chocolate,
  },
  {
    id: 4,
    name: "Blue Mint Chip",
    price: 4.85,
    description:
      "A cool and refreshing blue mint ice cream with chocolate chips. Taste the chill with every bite!",
    calories: 319,
    protein: "20g",
    rating: "4.9 (412)",
    image: BlueMint,
  },
  {
    id: 5,
    name: "Cookies and Cream",
    price: 4.25,
    description:
      "Classic cookies and cream flavor reimagined as a healthy protein ice cream. Crunchy, creamy and delicious!",
    calories: 310,
    protein: "20g",
    rating: "4.9 (450)",
    image: Cookiescream,
  },
  {
    id: 6,
    name: "Peanut Butter Swirl",
    price: 4.85,
    description:
      "Rich peanut butter swirled into creamy ice cream. High in protein and absolutely irresistible!",
    calories: 310,
    protein: "20g",
    rating: "4.9 (438)",
    image: PeanutButter,
  },
  {
    id: 7,
    name: "Cake Flavor",
    price: 4.25,
    description:
      "Tastes just like birthday cake! A fun and festive flavor that satisfies your sweet tooth while staying healthy.",
    calories: 312,
    protein: "20g",
    rating: "4.8 (375)",
    image: Cake,
  },
];

const Products = ({ cart, addToCart }) => {
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

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
