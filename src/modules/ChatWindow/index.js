import React from 'react';
import Message from './Message';
import styles from './index.module.css';

const ChatWindow = (props) => {
    const getMessages = () => {
        return props.messages.map(message => {
            return <Message 
                    payload={message.payload}
                    fromUser={message.fromUser}
                />
        });
    }
    return (
        <div className={styles.chatContainer}>
            {getMessages()}
        </div>
    );
};

export default ChatWindow;