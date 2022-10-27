import { Card } from "antd";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IoFastFoodOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import {
  GiBackpack,
  GiBarbecue,
  GiBigDiamondRing,
  GiConversation,
  GiIsland,
} from "react-icons/gi";
import styles from "./About.module.css";
import { CgGym } from "react-icons/cg";
import CarouselPhotos from "./Carousel";

const quizCards = [
  {
    name: "pet",
    descriptionFront: "Qual o nome dos nossos pets?",
    descriptionBack: "Potter e Aria",
    icon: <MdOutlinePets style={{ fontSize: "3em" }} color={"#345870"} />,
  },
  {
    name: "gossip",
    descriptionFront: "O que mais gostamos de fazer?",
    descriptionBack: "Fofocar hehe",
    icon: <GiConversation style={{ fontSize: "3em" }} color={"#345870"} />,
  },
  {
    name: "proposal",
    descriptionFront: "Onde nós noivamos?",
    descriptionBack: "São Bento do Sapucaí - SP",
    icon: <GiBigDiamondRing style={{ fontSize: "3em" }} color={"#345870"} />,
  },
  {
    name: "trip",
    descriptionFront: "Qual foi a nossa viagem mais marcante?",
    descriptionBack: "Paris, 2019",
    icon: <GiBackpack style={{ fontSize: "3em" }} color={"#345870"} />,
  },
  {
    name: "food",
    descriptionFront: "Qual a nossa comida favorita?",
    descriptionBack: "Churrasco",
    icon: <GiBarbecue style={{ fontSize: "3em" }} color={"#345870"} />,
  },
];

const index = () => {
  const [isFlipped, setIsFlipped] = useState<{ [key: string]: boolean }>({
    pet: false,
  });

  const flipCard = (key: string, flip: boolean) => {
    setIsFlipped((prev) => {
      return {
        ...prev,
        [key]: flip,
      };
    });
  };

  return (
    <section style={{ paddingTop: "0" }}>
      {/* <div style={{ width: "100%", height: "93vh" }}></div> */}
      <div style={{ position: "relative" }}>
        <img
          style={{ zIndex: -1 }}
          className={styles.image}
          src="/front.png"
          alt="Main Photo"
        />

        <div className={styles.quizDiv}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gridRow: "1 / span 3",
            }}
          >
            <span
              style={{
                color: "#345870",
                fontFamily: "DreamAvenue",
                fontSize: "5em",
                textAlign: "center",
              }}
            >
              Quiz sobre o casal
            </span>
            <span
              style={{
                color: "#345870",
                fontFamily: "JosefinSlab",
                fontSize: "1.5em",
              }}
            >
              Respostas nos cards
            </span>
          </div>
          {quizCards.map((card) => (
            <div
              onMouseEnter={() => flipCard(card.name, true)}
              onMouseLeave={() => flipCard(card.name, false)}
            >
              <ReactCardFlip isFlipped={isFlipped[card.name]}>
                <Card className={styles.quizCard}>
                  <div className={styles.quizCardBody}>
                    {card.icon}
                    {card.descriptionFront}
                  </div>
                </Card>

                <Card className={`${styles.quizCard} ${styles.backQuizCard}`}>
                  <p className={styles.backTxt}>{card.descriptionBack}</p>
                </Card>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ourStory}>
        <div className={styles.twoColumn}>
          <CarouselPhotos />
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                color: "#345870",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Nossa história
            </h1>
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
      </div>
    </section>
  );
};

export default index;
