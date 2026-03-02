const express = require("express");
const router = express.Router();
const pool = require("../db");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM products ORDER BY id ASC");
    res.json(products.rows);
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get single product
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (product.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product.rows[0]);
  } catch (error) {
    console.error("Get product error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
