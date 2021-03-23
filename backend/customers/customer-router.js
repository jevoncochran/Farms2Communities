// endpoint for /api/customers

const express = require("express");
const router = express.Router();

const customers = require("./customer-model");

router.post("/", (req, res) => {
  let customer = req.body;
  customers
    .addNewCustomer(customer)
    .then((newCustomer) => {
      res.status(201).json(newCustomer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errMsg: "Unable to create customer" });
    });
});

module.exports = router;
