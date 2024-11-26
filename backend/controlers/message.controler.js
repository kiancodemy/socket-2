import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { io } from "../socket/socket.js";
import { getReciever } from "../socket/socket.js";
export const sendmessage = async (req, res) => {
  const { message } = req.body;
  const { id: recieverId } = req.params;
  const userid = req.user._id;
  try {
    let findConversation = await Conversation.findOne({
      participants: { $all: [recieverId, userid] },
    });

    if (!findConversation) {
      findConversation = await Conversation.create({
        participants: [recieverId, userid],
      });
    }

    const createMeesage = await Message.create({
      sender: userid,
      reciever: recieverId,
      message: message,
    });

    findConversation.messages.push(createMeesage._id);
    const reciever = getReciever(createMeesage.reciever);
    if (reciever) {
      io.to(reciever).emit(
        "newMessage",

        createMeesage
      );
    }
    await findConversation.save();
    res.status(201).json(createMeesage);
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    const userid = req.user._id;
    const { id: recieverId } = req.params;
    let findConversation = await Conversation.findOne({
      participants: { $all: [recieverId, userid] },
    }).populate("messages");
    if (!findConversation) {
      return res.status(201).json([]);
    }
    res.status(201).json(findConversation.messages);
  } catch (err) {
    res.status(401).json({
      message: err.message,
    });
  }
};
