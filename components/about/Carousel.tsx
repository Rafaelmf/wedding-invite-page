import { Card, Carousel , Image} from "antd";
import React, { useState } from "react";
import styles from "./About.module.css";


const CarouselPhotos = () => {
  return (
    <div style={{  width: "55vw"}}>

    <Carousel autoplay>
      <div className={styles.contentStyle} >
        <Image
        width="100%"
        preview={false}
        height="100%"

        src="./photos/2.jpeg"
      />
      </div>
      <div className={styles.contentStyle} >
      <Image
        width="100%"
        preview={false}
        height="100%"
        src="./photos/3.jpeg"
      />      
      </div>
      <div className={styles.contentStyle} >
      <Image
        width="100%"
        preview={false}
        src="./photos/4.jpeg"
      />      
      </div>
      <div className={styles.contentStyle} >
      <Image
        width="100%"
        preview={false}
        src="./photos/0.jpeg"
      />      </div>
    </Carousel>
    </div>

  );
};

export default CarouselPhotos;
