import React from 'react';
import styles from './index.module.css';

const Message = (props) => {
    return (
        <div className={props.fromUser ? `${styles.messageContainer} ${styles.userMessage}`: styles.messageContainer}>
            <div className={props.fromUser ? `${styles.messageBody} ${styles.userMessageColor}` : `${styles.messageBody}`}>
                <p className={styles.messageBodyText}>
                    {props.payload}
                </p>
            </div>
        </div>
    );
};

export default Message;