import { Card } from "antd";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { MdOutlinePets } from "react-icons/md";
import {
  GiBackpack,
  GiBarbecue,
  GiBigDiamondRing,
  GiConversation,
} from "react-icons/gi";
import styles from "./Quiz.module.css";

const quizCards = [
  {
    name: "pet",
    descriptionFront: "Qual o nome dos nossos pets?",
    descriptionBack: "Potter e Aria",
    icon: <MdOutlinePets style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "gossip",
    descriptionFront: "O que mais gostamos de fazer?",
    descriptionBack: "Fofocar hehe",
    icon: <GiConversation style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "proposal",
    descriptionFront: "Onde nós noivamos?",
    descriptionBack: "São Bento do Sapucaí - SP",
    icon: <GiBigDiamondRing style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "trip",
    descriptionFront: "Qual foi a nossa viagem mais marcante?",
    descriptionBack: "Paris, 2019",
    icon: <GiBackpack style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
  {
    name: "food",
    descriptionFront: "Qual a nossa comida favorita?",
    descriptionBack: "Churrasco",
    icon: <GiBarbecue style={{ fontSize: "3em" }} color={"#f2f2f2"} />,
  },
];

const Quiz: React.FC = () => {
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
    <section className={styles.quizDiv}>
      <div className={styles.quizTitleDiv}>
        <span className={styles.quizTitleHeading}>Quiz sobre o casal</span>
        <span className={styles.quizDescription}>Respostas nos cards</span>
      </div>

      {quizCards.map((card) => (
        <div
          key={card.name}
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
    </section>
  );
};

export default Quiz;
