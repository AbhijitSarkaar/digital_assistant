import React, {useEffect, useRef} from 'react';
import Message from './Message';
import styles from './index.module.css';

const ChatWindow = (props) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [props.messages]);
    const getMessages = () => {
        return props.messages.map((message, index) => {
            return <Message 
                    key={message.payload}
                    payload={message.payload}
                    fromUser={message.fromUser}
                />
        });
    }
    return (
        <div className={styles.chatContainer}>
            {getMessages()}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatWindow;