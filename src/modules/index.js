import React from 'react';
import Header from './Header';
import ChatWindow from './ChatWindow';
import TextInput from './TextInput';
import styles from './index.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <ChatWindow />
      <TextInput />
    </div>
  );
}

export default App;
