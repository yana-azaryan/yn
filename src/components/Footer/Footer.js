import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <h2>We are waiting for you</h2>
            <p className={styles.reply}>Grace us with your attendance plans – reply to this.</p>
        </section>
    );
}

export default Footer;