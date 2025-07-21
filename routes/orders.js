const express = require("express");
const Order = require("../models/Order");
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, items, totalPrice } = req.body;
  const order = await Order.create({ userId, items, totalPrice });
  res.status(201).json(order);
});

router.get("/me", async (req, res) => {
  const { userId } = req.query;
  const orders = await Order.find({ userId });
  res.json(orders);
});

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;
