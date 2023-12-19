const { Router } = require("express");
const chatDao = require("../daos/dbManager/message.dao");

const router = Router();

router.get("/", async (req, res) => {
  res.render("chat", {});
});

router.get("/messages", async (req, res) => {
  try {
    const messages = await chatDao.getMessages();
    res.send(messages);
  } catch (err) {
    req.statusCode(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const message = req.body;
  const response = await chatDao.addMessage(message);
  res.send(response);
});

module.exports = router;
