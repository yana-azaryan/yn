import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <h2>We are waiting for you</h2>
            <p>Please reply to this message approving your attendance</p>
        </section>
    );
}

export default Footer;