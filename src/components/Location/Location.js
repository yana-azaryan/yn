/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import styles from './Location.module.scss';

const Location = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Ceremony Details</h2>
					</div>
					
					<div className="engagement-details margin-bottom">
						<div className="w-detail right">
							<h4 className="title">Felice Restaurant</h4>
							<p className={styles.location}>Bagrevand 111</p>
                            <p>Saturday, September 9th, 2023</p>
							<p>Time: 7PM Onwards</p>
						
							<div class="mapouter" className={styles.map}>
								<div class="gmap_canvas">
									<iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=110 	Bagrevand St, Yerevan 0067&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
									</iframe>
								</div>
							</div>

						</div> 
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Location;