import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
export const sendmessage = async (req, res) => {
  const { message } = req.body;
  const { id: recieverId } = req.params;
  const userid = req.user._id;
  try {
    let findConversation = await Conversation.findOne({
      participants: { $all: [recieverId, userid] },
    });
    console.log(1, findConversation);
    if (!findConversation) {
      findConversation = await Conversation.create({
        participants: [recieverId, userid],
      });
    }
    console.log(2, findConversation);
    const createMeesage = await Message.create({
      sender: userid,
      reciever: recieverId,
      message: message,
    });

    findConversation.messages.push(createMeesage._id);
    await findConversation.save();
    res.status(201).send({
      status: "success",
    });
  } catch (err) {
    res.status(401).send({
      message: err.message,
    });
  }
};
