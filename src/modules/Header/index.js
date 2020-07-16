import React from 'react';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';
import styles from './index.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <AssistantOutlinedIcon classes={{'root': styles.assistantIcon}} />
            <div className={styles.headerTextContainer}>
                <p className={styles.headerText}>
                    Digital Assistant
                </p>
            </div>
        </div>
    );
};

export default Header;