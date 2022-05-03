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
    icon: <MdOutlinePets size={60} color={"#2F4858"} />,
  },
  {
    name: "time",
    descriptionFront: "Quanto tempo estamos juntas?",
    descriptionBack: "4 anos",
    icon: <IoTimeOutline size={60} color={"#2F4858"} />,
  },
  {
    name: "proposal",
    descriptionFront: "Qual o lugar que a gente noivou?",
    descriptionBack: "São Carlos",
    icon: <GiIsland size={60} color={"#2F4858"} />,
  },
  {
    name: "food",
    descriptionFront: "Qual a nossa comida preferida?",
    descriptionBack: "Hamburguer",
    icon: <IoFastFoodOutline size={60} color={"#2F4858"} />,
  },
  {
    name: "activity",
    descriptionFront: "Qual a nossa atividade preferida?",
    descriptionBack: "Academia",
    icon: <CgGym size={60} color={"#2F4858"} />,
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
    <section style={{ paddingTop: "85vh" }}>
      <img className={styles.image} src="/front.png" alt="Main Photo" />

      <div className={styles.customShapeDivider}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <div className={styles.ourStory}>
        <h1 style={{ color: "#2F4858" }}>Nossa história</h1>
        <p style={{ width: "50%", fontSize: "1.3rem" }}>
          OUR STORY DANCE, DANCE, DANCE As a pair of determined designers,
          Daniela and Moe first got to know each other working late nights in
          design studio during grad school— brewing that third pot of coffee,
          sharing tasty treats, and exchanging upbeat bops. Yet it wasn’t until
          a group outing where they were left alone on the dance floor, grooving
          to funky soul beats, when they knew they were meant to be together.
        </p>
        <div className={styles.quizDiv}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gridRow: "1 / span 2",
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

                <Card
                  // onMouseLeave={() => flipCard(card.name, false)}
                  className={`${styles.quizCard} ${styles.backQuizCard}`}
                >
                  <h2 className={styles.backTxt}>{card.descriptionBack}</h2>
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
