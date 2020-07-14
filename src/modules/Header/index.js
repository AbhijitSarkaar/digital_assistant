import React from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import styles from './index.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <MenuRoundedIcon classes={{'root': styles.menuIcon}} />
            <div className={styles.headerTextContainer}>
                <p className={styles.headerText}>
                    Digital Assistant
                </p>
            </div>
        </div>
    );
};

export default Header;