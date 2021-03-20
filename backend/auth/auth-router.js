const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const admin = require("../administrators/administrator-model");

router.post("/login", (req, res) => {
  let { email, password } = req.body;
  // console.log('this is running');

  if (!email || !password) {
    res.status(400).json({ errMsg: "Please enter email and password" });
  } else {
    admin
      .findAdminBy({ email })
      .then((administrator) => {
        if (
          administrator &&
          bcrypt.compareSync(password, administrator.password)
        ) {
          const token = generateToken(administrator);

          res.status(200).json({
            message: `Welcome ${administrator.name}`,
            account: {
              id: administrator.id,
              name: administrator.name,
              email: administrator.email,
            },
            token,
          });
        } else {
          res.status(401).json({ errMsg: "Invalid credentials" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "A server error has occurred" });
      });
  }
});

// token generation
function generateToken(admin) {
  const payload = {
    id: admin.id,
  };

  const secret = "top secret";

  const options = {
    expiresIn: "24h",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
