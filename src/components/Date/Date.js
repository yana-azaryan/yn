import React from 'react';
import invitation from '../../images/invite.png';

import styles from './Date.module.scss';

const Date = () => {
    return (
        <div className={styles.mainHeader}>
            <img className={styles.invite} src={invitation} alt='invitation'/>
		</div>
    );
}

export default Date;