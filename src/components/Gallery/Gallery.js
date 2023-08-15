/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './Gallery.module.scss';

import image1 from '../../images/gallery/1.jpeg';
import image2 from '../../images/gallery/2.jpeg';
import image3 from '../../images/gallery/3.jpeg';
import image4 from '../../images/gallery/4.jpeg';
import image5 from '../../images/gallery/5.jpeg';
import image6 from '../../images/gallery/6.jpeg';


const Gallery = () => {
    const imageFilenames = [image1, image2, image3, image4, image5, image6];

    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay
        infiniteLoop
        interval={2000}
        className={styles.imageSlider}
      >
        {imageFilenames.map((image, index) => (
          <div key={index} className={styles.sliderImageContainer}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className={styles.sliderImage}
            />
          </div>
        ))}
      </Carousel>
    );
}

export default Gallery;
