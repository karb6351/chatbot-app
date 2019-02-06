import { CHATBOT_CHATROOM_ID, CHATBOT_AVATAR, CHATBOT_NAME } from '../constant';
import uuid from 'react-native-uuid';

exports.bulidChatbotMessage = ({ message = '', create_at = new Date() }) => ({
  text: message,
  createdAt: create_at,
  user: {
    _id: CHATBOT_CHATROOM_ID,
    name: CHATBOT_NAME,
    avatar: CHATBOT_AVATAR,
  },
  _id: uuid.v1()
})