import styles from "./Gifts.module.css";
import { IoGiftSharp, IoSendOutline } from "react-icons/io5";
import { Card, Divider, Modal, Input, Button, message } from "antd";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Iframe from "react-iframe";
import Lottie from "react-lottie";
import * as animationData from "../../public/json/gift.json";
import * as loveAnimation from "../../public/json/loveAnimation.json";

const { Meta } = Card;
const { TextArea } = Input;

type Gift = {
  name: string;
  imgUrl: string;
  price?: number;
  qrCode: string;
};

const gifts: Gift[] = [
  {
    name: "Volta pelo ferry em Copenhagen",
    imgUrl: "./ferry-comp.jpeg",
    price: 50,
    qrCode: "./qr50.png",
  },
  {
    name: "Dois hot dogs dinamarqueses",
    imgUrl: "./hot-dog.jpeg",
    price: 75,
    qrCode: "./qr75.png",
  },
  {
    name: "Smørrebrød (sanduíche dinamarques)",
    imgUrl: "./sanduiche.jpeg",
    price: 100,
    qrCode: "./qr100.png",
  },

  {
    name: "Passeio pelo Tâmisa",
    imgUrl: "./Passeio_tamsia.jpeg",
    price: 125,
    qrCode: "./qr125.png",
  },
  {
    name: "Entrada no Tivoli Garden",
    imgUrl: "./garden.jpeg",
    price: 150,
    qrCode: "./qr150.png",
  },
  {
    name: "Brunch no Castelo Frederiksborg",
    imgUrl: "./castelo.jpeg",
    price: 200,
    qrCode: "./qr200.png",
  },
  {
    name: "Entrada na Legoland",
    imgUrl: "./lego-land.jpeg",
    price: 300,
    qrCode: "./qr300.png",
  },
  {
    name: "Volta na London Eye",
    imgUrl: "./london-eye.jpeg",
    price: 500,
    qrCode: "./qr500.png",
  },
  {
    name: "Qualquer valor",
    imgUrl: "./love.png",
    qrCode: "./qr.png",
  },
];

const index = () => {
  const [currGift, setCurreGift] = useState<Gift | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [messageTxt, setMessageTxt] = useState<string>("");
  const form = useRef<any>(null);

  
  const openModal = (gift: Gift) => {
    setCurreGift(gift);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_44ssobe",
        "template_iotmavq",
        form.current,
        "Uxk454g_u9hrTkmnR"
      )
      .then(
        (result) => {
          message.success("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Erro");
          message.error("Erro, tente novamente mais tarde.");
        }
      )
      .finally(() => {
        setLoading(false);
        setName("");
        setMessageTxt("");
      });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className={styles.gifts}>
        <h1 style={{ color: "#345870", textAlign: "center" }}>
          <Lottie height={140} width={100} options={defaultOptions} />
          {/* <IoGiftSharp className="icon" /> */}
          Lista de Presentes
        </h1>
        <p style={{ textAlign: "center" }}>
          A sua presença é o maior e melhor presente que poderíamos receber.{" "}
          <br />
          Deixamos aqui algumas sugestões de outros presentes, caso você queira
          e possa nos presentear.
          <br />
          <br />
        </p>
        <div className={styles.giftsGrid}>
          {gifts.map((g) => (
            <Card
              onClick={() => openModal(g)}
              key={g.name}
              hoverable
              style={{
                width: "18em",
                height: "28em",
                padding: "1em",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
              cover={
                <img
                  style={{ 
                    borderRadius: "20px 20px 0 0",
                    width: "100%",
                    height: "180px",
                    objectFit: "cover"
                  }}
                  alt={g.name}
                  src={g.imgUrl}
                />
              }
            >
              <div className={styles.cardContent}>
                <p>{g.name}</p>
                {g.price && (
                  <p>{`R$ ${g.price.toLocaleString("pt-br", {
                    minimumFractionDigits: 0,
                  })}`}</p>
                )}
                <Button
                  type="primary"
                  shape="round"
                  icon={<IoGiftSharp size={18} className="icon" />}
                >
                  Presentear
                </Button>
              </div>
            </Card>
            // <CardGift />
          ))}
        </div>
        {currGift && (
          <Modal
            // style={{ color: "#2F4858", backgroundColor: "#F9F9F9" }}
            footer={null}
            title={
              <h2 style={{ color: "#2F4858" }}>
                <IoGiftSharp className="icon" />
                {currGift.name}
              </h2>
            }
            visible={true}
            onCancel={() => setCurreGift(null)}
            width={900}
          >
            <div className={styles.modalContainer}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 className={styles.paymentDescription}>
                  Para realizar a transferência de{" "}
                  {currGift.price ? `R$ ${currGift.price}` : "qualquer valor"}{" "}
                  utilize a função 'Ler QRcode' do seu aplicativo de banco:
                </h2>
                <img
                  style={{ height: "15em", width: "15em" }}
                  src={currGift.qrCode}
                ></img>
                <p style={{ marginTop: "1em" }}>
                  ou, utilize a nossa chave pix (16) 98234-8909
                </p>
              </div>
              <Divider type="vertical" />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <h2 className={styles.paymentDescription}>
                  <Lottie
                    options={{
                      ...defaultOptions,
                      animationData: loveAnimation,
                    }}
                    height={70}
                    width={70}
                  />
                  Deixe uma mensagem para as noivas
                </h2>

                {/* <p style={{ fontSize: "1.7em", margin: 0 }}></p> */}
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                  <label>Nome:</label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="from_name"
                    placeholder="Nome"
                  ></Input>

                  <label>Mensagem:</label>
                  <TextArea
                    onChange={(e) => setMessageTxt(e.target.value)}
                    value={messageTxt}
                    name="message"
                    placeholder="Mensagem..."
                    rows={5}
                  />
                  <Button
                    htmlType="submit"
                    size="large"
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      color: "white",
                      backgroundColor: "#345870",
                      justifyContent: "center",
                    }}
                    loading={loading}
                  >
                    <IoSendOutline />
                    Enviar
                  </Button>
                </form>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
};

export default index;
