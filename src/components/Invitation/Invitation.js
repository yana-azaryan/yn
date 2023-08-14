import React from 'react';

import styles from './Invitation.module.scss';

const Invitation = () => {
    return (
        <section className="section w-details-area center-text">
            <div className="container">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                        <div className="heading">
                            <h2 className={styles.mainHeader}>We are waiting for you</h2>
                            <p>We invite you to be with us as we celebrate our engagement</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invitation;