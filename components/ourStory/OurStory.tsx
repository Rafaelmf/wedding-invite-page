import React from "react";
import styles from "./OurStory.module.css";
import CarouselPhotos from "../cover/Carousel";
import Lottie from "react-lottie";
import * as animationData from "./love.json";

const OurStory: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className={styles.ourStory}>
      <div className={styles.twoColumn}>
        <CarouselPhotos />
        <div className={styles.ourStoryDiv}>
          <Lottie height={300} width={120} options={defaultOptions} />

          <h1 className={styles.ourStoryTitle}>Nossa história</h1>
          <p
            style={{
              fontFamily: "DreamAvenue",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            Apesar de termos muitos amigos em comum desde o começo da
            graduação, o universo colocou uma no caminho da outra somente em
            2018. Nos conhecemos, nos apaixonamos e desde então nos
            impulsionamos a ser a melhor versão de nós mesmas. Não poderíamos
            ter construído uma história tão cheia de amor, união e comprenssão
            sem os nossos amigos, colegas, mães, pais, irmãos e familiares ao
            nosso redor. Ficamos imensamente felizes em poder contar com a
            presença dessas pessoas no dia mais especial de nossas vidas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
