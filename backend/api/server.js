const express = require("express");
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const productRouter = require("../products/product-router");

const server = express();

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.post("/api/pay", cors(), async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Donation",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({ message: "Payment successful!", success: true });
  } catch (error) {
    console.log("Error", error);
    res.json({ message: "Payment failed!", success: false });
  }
});

server.use("/api/auth", authRouter);
server.use("/api/products", productRouter);

module.exports = server;
