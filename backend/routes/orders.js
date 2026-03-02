const express = require("express");
const router = express.Router();
const pool = require("../db");
const authenticateToken = require("../middleware/auth");

// Place an order
router.post("/", authenticateToken, async (req, res) => {
  const { cart, total, shipping, name, email, address, city, zip } = req.body;
  const userId = req.user.id;

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const newOrder = await client.query(
      `INSERT INTO orders (user_id, total, shipping, name, email, address, city, zip)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [userId, total, shipping, name, email, address, city, zip]
    );

    const orderId = newOrder.rows[0].id;

    for (const item of cart) {
      await client.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES ($1, $2, $3, $4)`,
        [orderId, item.id, item.quantity, item.price]
      );
    }

    await client.query("COMMIT");

    res.status(201).json({
      message: "Order placed successfully!",
      order: newOrder.rows[0],
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Place order error:", error);
    res.status(500).json({ message: "Server error" });
  } finally {
    client.release();
  }
});

// Get user orders
router.get("/myorders", authenticateToken, async (req, res) => {
  const userId = req.user.id;

  try {
    const orders = await pool.query(
      `SELECT o.*, 
        json_agg(json_build_object(
          'name', p.name,
          'quantity', oi.quantity,
          'price', oi.price
        )) as items
       FROM orders o
       JOIN order_items oi ON o.id = oi.order_id
       JOIN products p ON oi.product_id = p.id
       WHERE o.user_id = $1
       GROUP BY o.id
       ORDER BY o.created_at DESC`,
      [userId]
    );

    res.json(orders.rows);
  } catch (error) {
    console.error("Get orders error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
