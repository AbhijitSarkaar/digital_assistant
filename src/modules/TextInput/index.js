import React from 'react';
import Input from '../../shared/Input';
import styles from './index.module.css';

const TextInput = () => {
    return (
        <div className={styles.inputContainer}>
            <Input />
        </div>
    );
};

export default TextInput;