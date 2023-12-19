const { messageModel } = require("../../models/message.model");

class MessageDao {
  async addMessage(newMessage) {
    try {
      await messageModel.create(newMessage);
    } catch (error) {
      console.log(error);
    }
  }

  async getMessages(limit) {
    if (limit) {
      return await messageModel.find.limit(limit);
    }
    return await messageModel.find();
  }

  async getMessageById(id) {
    return await messageModel.findById(id);
  }

  async updateMessage(id, updatedChat) {
    try {
      return await messageModel.findByIdAndUpdate(id, updatedChat);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteChat(id) {
    try {
      return await messageModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new MessageDao();
