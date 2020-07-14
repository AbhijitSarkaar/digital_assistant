import React, { Component } from 'react';
import Header from './Header';
import ChatWindow from './ChatWindow';
import TextInput from './TextInput';
import styles from './index.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
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
        <ChatWindow />
        <TextInput 
          inputText={this.state.inputText}
          getInput={this.getInput}
        />
      </div>
    );
  }
}

export default App;
