import React, { Component } from 'react';
import Header from './Header';
import ChatWindow from './ChatWindow';
import TextInput from './TextInput';
import {response} from './../shared/Utilities/utils';
import styles from './index.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      messages: [
      ]
    }
  }

  onTextEnter = () => {
    if(this.state.inputText.length) {
      let messages = [...this.state.messages];
      messages.push({
        fromUser: true,
        payload: this.state.inputText
      });
      messages.push({
        fromUser: false,
        payload: response(this.state.inputText)
      });
      this.setState({
        messages,
        inputText: ''
      });
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
          onTextEnter={this.onTextEnter}
        />
      </div>
    );
  }
}

export default App;
