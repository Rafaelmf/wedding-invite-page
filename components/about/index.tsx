import { Card } from "antd";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IoFastFoodOutline, IoTimeOutline } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { GiIsland } from "react-icons/gi";
import styles from "./About.module.css";
import { CgGym } from "react-icons/cg";

const quizCards = [
  {
    name: "pet",
    descriptionFront: "Qual o nome dos nossos pets?",
    descriptionBack: "Potter e Arya",
    icon: <MdOutlinePets style={{ fontSize: "3.5em" }} color={"#2F4858"} />,
  },
  {
    name: "time",
    descriptionFront: "Quanto tempo estamos juntas?",
    descriptionBack: "4 anos",
    icon: <IoTimeOutline style={{ fontSize: "3.5em" }} color={"#2F4858"} />,
  },
  {
    name: "proposal",
    descriptionFront: "Qual o lugar que a gente noivou?",
    descriptionBack: "São Carlos",
    icon: <GiIsland style={{ fontSize: "3.5em" }} color={"#2F4858"} />,
  },
  {
    name: "food",
    descriptionFront: "Qual a nossa comida preferida?",
    descriptionBack: "Hamburguer",
    icon: <IoFastFoodOutline style={{ fontSize: "3.5em" }} color={"#2F4858"} />,
  },
  {
    name: "activity",
    descriptionFront: "Qual a nossa atividade preferida?",
    descriptionBack: "Academia",
    icon: <CgGym style={{ fontSize: "3.5em" }} color={"#2F4858"} />,
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
      <img className={styles.image} src="/front.png" alt="Main Photo" />

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
      <div className={styles.ourStory}>
        <h1 style={{ color: "#2F4858" }}>Nossa história</h1>
        <p style={{ width: "80%", fontSize: "1.2rem" }}>
          DANCE, DANCE, DANCE <br />
          As a pair of determined designers, Daniela and Moe first got to know
          each other working late nights in design studio during grad school—
          brewing that third pot of coffee, sharing tasty treats, and exchanging
          upbeat bops. Yet it wasn’t until a group outing where they were left
          alone on the dance floor, grooving to funky soul beats, when they knew
          they were meant to be together.
        </p>
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
            <h1 style={{ color: "#2F4858" }}>Quiz sobre o casal</h1>
            <span style={{ color: "#2F4858" }}>
              Passe o mouse sobre os cards para ver a resposta!
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
    </section>
  );
};

export default index;
