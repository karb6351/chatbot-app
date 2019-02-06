import { createStackNavigator } from 'react-navigation';

import Chat from '../screens/Chat';
import Map from '../screens/Map';

const ChatNavigator = createStackNavigator({
  chat: {
    screen: Chat,
    title: "Chat",
  },
  Map: {
    screen: Map,
    title: "Chat",
  }
})

export default ChatNavigator