import React from "react";
import styles from "./Cover.module.css";

const Cover = () => {
  return (
    <section style={{ position: "relative", paddingTop: "0" }}>
      <div >
        <img
          style={{ zIndex: -1 }}
          className={styles.image}
          src="./front.png"
          alt="Main Photo"
        />
        <img
          style={{ zIndex: -1 }}
          className={styles.imageMobile}
          src="./front_mobile.png"
          alt="Main Photo"
        />
      </div>

    </section>
  );
};

export default Cover;
