import React, { Component } from 'react';
import Header from './Header';
import ChatWindow from './ChatWindow';
import TextInput from './TextInput';
import styles from './index.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      messages: [
        {
          fromUser: true,
          payload: 'Hi, How are you?'
        },
        {
          fromUser: false,
          payload: 'I am Fine. How are you?'
        }
      ]
    }
  }

  getInput = text => {
    this.setState({
      inputText: text
    });
  }

  render () {
    return (
      <div className={styles.App}>
        <Header />
        <ChatWindow 
          messages={this.state.messages}
        />
        <TextInput 
          inputText={this.state.inputText}
          getInput={this.getInput}
        />
      </div>
    );
  }
}

export default App;
