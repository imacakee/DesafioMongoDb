const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
});

const chatModel = model("chats", chatSchema);

module.exports = { chatModel };
