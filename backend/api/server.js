const express = require("express");
const cors = require("cors");

const authRouter = require("../auth/auth-router");

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/auth", authRouter);

module.exports = server;
