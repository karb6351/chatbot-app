import React from "react";
import { GiftedChat } from "react-native-gifted-chat";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello Mother Fucker",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar:
              "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiYx5X1iojgAhUCO3AKHc_sCZsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F618893173767195294%2F&psig=AOvVaw04AbyyE_Q59uwBykQPWCzO&ust=1548475841881305"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1
        }}
      />
    );
  }
}

export default Example;
