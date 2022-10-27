import styles from "./Gifts.module.css";
import { IoGiftSharp, IoSendOutline } from "react-icons/io5";
import { Card, Divider, Modal, Input, Button, message } from "antd";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Iframe from "react-iframe";

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
    name: "Jogo de taças de vidros de sobremesa",
    imgUrl: "/sobremesa.png",
    price: 50,
    qrCode: "/qr50.png",
  },
  {
    name: "Jogo de Frigideiras",
    imgUrl: "/frigideira.png",
    price: 75,
    qrCode: "/qr75.png",
  },
  {
    name: "Ferro de passar a vapor",
    imgUrl: "/ferro.png",
    price: 100,
    qrCode: "/qr100.png",
  },

  {
    name: "Panela de pressão",
    imgUrl: "/panela.png",
    price: 125,
    qrCode: "/qr125.png",
  },
  {
    name: "Fruteira com tampo de granito",
    imgUrl: "/fruteira.png",
    price: 150,
    qrCode: "/qr150.png",
  },
  {
    name: "Forno elétrico",
    imgUrl: "/oven.png",
    price: 200,
    qrCode: "/qr200.png",
  },
  {
    name: "Conjunto Mondial",
    imgUrl: "/mondial.png",
    price: 300,
    qrCode: "/qr300.png",
  },
  {
    name: "Jogo de panelas",
    imgUrl: "/jogo-panela.png",
    price: 500,
    qrCode: "/qr500.png",
  },
  {
    name: "Qualquer valor",
    imgUrl: "/love.png",
    qrCode: "/qr.png",
  },
];

const index = () => {
  const [currGift, setCurreGift] = useState<Gift | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [messageTxt, setMessageTxt] = useState<string>("");
  const form = useRef<any>();
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

  return (
    <>
      <div className={styles.gifts}>
        <h1 style={{ color: "#345870" }}>
          <IoGiftSharp className="icon" />
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
                height: "24em",
                padding: "1em",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
              cover={
                <img
                  height={170}
                  // width={50}
                  style={{ borderRadius: "20px 20px 0 0" }}
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
                {currGift.price && (
                  <p style={{ fontSize: "1.5em" }}>
                    Para realizar a transferência de R${currGift.price} utilize
                    o QRCode abaixo:
                  </p>
                )}
                <img
                  style={{ height: "15em", width: "15em" }}
                  src={currGift.qrCode}
                ></img>
                <p style={{ marginTop: "1em" }}>
                  ou, utilize a nossa chave pix (11) 9961689816
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
                <p style={{ fontSize: "1.7em", margin: 0 }}>
                  Deixe uma mensagem
                </p>
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
      </div>
    </>
  );
};

export default index;
