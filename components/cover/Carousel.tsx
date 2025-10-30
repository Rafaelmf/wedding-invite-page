import { Card, Carousel, Image } from "antd";
import React, { useState } from "react";
import styles from "./Carousel.module.css";

const CarouselPhotos = () => {
  return (
    <div className={styles.carouselDiv}>
      <Carousel autoplay dots={{ className: "dotsCarrousel" }}>
        <div className={styles.contentStyle}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./photos/4.jpeg"
          />
        </div>
        <div className={styles.contentStyle}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./photos/6.jpeg"
          />
        </div>
        <div className={styles.contentStyle}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./photos/1.jpeg"
          />
        </div>
        <div className={styles.contentStyle}>
          <Image
            width="100%"
            preview={false}
            height="100%"
            src="./photos/3.jpeg"
          />
        </div>
        <div className={styles.contentStyle}>
          <Image width="100%" preview={false} src="./photos/0.jpeg" />
        </div>
        <div className={styles.contentStyle}>
          <Image width="100%" preview={false} src="./photos/2.jpeg" />{" "}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPhotos;
