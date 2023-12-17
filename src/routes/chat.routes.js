const { Router } = require("express");
const { chatModel } = require("../models/chat.model");

const router = Router();

router.get("/", async (req, res) => {
  res.render("chat", {});
});

router.get("/messages", async (req, res) => {
  try {
    const messages = await chatModel.find();
    res.send(messages);
  } catch (err) {
    req.statusCode(500).send(err.essage);
  }
});

router.post("/", async (req, res) => {
  const message = req.body;
  const response = await chatModel.create(message);
  res.send(response);
});

module.exports = router;
