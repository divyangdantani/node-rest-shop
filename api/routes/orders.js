const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Order = require("../models/order");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "GET request from /orders"
  });
});

router.post("/", (req, res, next) => {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    product: req.body.productId
  });
  order
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
          error: err
      });
    });
});

router.get("/:orderId", (req, res, next) => {
  const id = req.params.orderId;
  res.status(200).json({
    message: "order with orderId",
    id: id
  });
});

module.exports = router;
