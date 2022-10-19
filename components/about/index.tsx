import { Card } from "antd";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IoFastFoodOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { GiBackpack, GiBarbecue, GiBigDiamondRing, GiConversation, GiIsland } from "react-icons/gi";
import styles from "./About.module.css";
import { CgGym } from "react-icons/cg";
import CarouselPhotos from "./Carousel"

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
      <div style={{width: "100%", height: "93vh"}}>
        <img className={styles.image} src="/front.png" alt="Main Photo" />
      </div>
      {/* <div className={styles.customShapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div> */}
      <div style={{position: "relative"}}>
              <img 
              style={{ zIndex: -1}}
               width={"100%"} 
               src="/quizBackgroundImg.png"
                alt="Quizz Back" 
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
            <span style={{ color: "#345870", fontFamily: "DreamAvenue", fontSize: "6em" }}>Quiz sobre o casal</span>
            <span style={{ color: "#345870", fontFamily: "JosefinSlab", fontSize: "1.5em" }}>
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
        <div style={{textAlign: "center"}}>
        <h1 style={{ color: "#345870", display: "flex", justifyContent: "center" }}>Nossa história</h1>
        <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
          Apesar de termos muitos amigos em comum desde o começo da graduação, o universo colocou uma no caminho da outra somente em 2018. Nos conhecemos, nos apaixonamos e desde então nos impulsionamos a ser a melhor versão de nós mesmas. 
Não poderíamos ter construído uma história tão cheia de amor, união e comprenssão sem os nossos amigos, colegas, mães, pais, irmãos e familiares ao nosso redor. 
Ficamos imensamente felizes em poder contar com a presença dessas pessoas no dia mais especial de nossas vidas.
        </p>
        </div>

        </div>

      </div>
    </section>
  );
};

export default index;
