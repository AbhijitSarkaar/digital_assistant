import React from 'react';
import Header from './Header';
import ChatWindow from './ChatWindow';
import Input from './Input';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <ChatWindow />
      <Input />
    </div>
  );
}

export default App;
