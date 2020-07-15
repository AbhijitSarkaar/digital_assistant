import React from 'react';
import Input from '../../shared/Input';
import styles from './index.module.css';

const TextInput = (props) => {
    return (
        <div className={styles.inputContainer}>
            <Input 
                getInput={props.getInput}
                inputText={props.inputText}
                onTextEnter={props.onTextEnter}
            />
        </div>
    );
};

export default TextInput;