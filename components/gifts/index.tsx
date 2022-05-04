import styles from "./Gifts.module.css";
import { IoGiftSharp, IoSendOutline } from "react-icons/io5";
import { Card, Divider, Modal, Input, Button, message } from "antd";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const { Meta } = Card;
const { TextArea } = Input;

type Gift = {
  name: string;
  imgUrl: string;
  price: number;
};

const gifts: Gift[] = [
  {
    name: "Conjunto de talheres",
    imgUrl:
      "https://static.ideallar7.com.br/public/ideallar7/imagens/produtos/jogo-talheres-preto-com-dourado-932.jpeg",
    price: 50,
  },
  {
    name: "Copos",
    imgUrl:
      "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/j/o/jogo-de-8-copos-opera-360ml-nadir_310371.jpg",
    price: 100,
  },
  {
    name: "Jogo de Pratos",
    imgUrl: "https://cf.shopee.com.br/file/878a49deb9ece4802354e08ceb57bfa5",
    price: 150,
  },

  {
    name: "Mala de Viagem",
    imgUrl:
      "https://cdn.leroymerlin.com.br/products/mala_viagem_primicia_abs_giro_360o_grande_prata_1567125283_8996_600x600.jpeg",
    price: 250,
  },
  {
    name: "Airfryer",
    imgUrl: "https://m.media-amazon.com/images/I/6143GQhK+IL._AC_SX679_.jpg",
    price: 400,
  },
  {
    name: "Viagem para praia",
    imgUrl:
      "https://www.viajali.com.br/wp-content/uploads/2020/04/praia-de-boa-viagem-8-730x730.jpg",
    price: 2000,
  },
  {
    name: "Viagem de Cruzeiro",
    imgUrl:
      "https://statig0.akamaized.net/bancodeimagens/2t/fo/k1/2tfok1ypgos9foso33xow5968.jpg",
    price: 3500,
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
        <h1 style={{ color: "#2F4858" }}>
          <IoGiftSharp className="icon" />
          Lista de Presentes
        </h1>
        <div className={styles.giftsGrid}>
          {gifts.map((g) => (
            <Card
              onClick={() => openModal(g)}
              key={g.name}
              hoverable
              style={{ width: 300, borderRadius: "15px" }}
              cover={
                <img
                  style={{ borderRadius: "15px 15px 0 0" }}
                  alt={g.name}
                  src={g.imgUrl}
                />
              }
              actions={[
                <span>
                  <IoGiftSharp className="icon" />
                  Presentear
                </span>,
              ]}
            >
              <Meta title={g.name} description={`R$ ${g.price.toFixed(2)}`} />
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
                Presentear {currGift.name}
              </h2>
            }
            visible={true}
            onCancel={() => setCurreGift(null)}
            width={900}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 30px 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <p style={{ fontSize: "24px" }}>
                  Deixe uma mensagem para nós :)
                </p>
                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                  <label>Nome</label>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name="from_name"
                    placeholder="Nome"
                  ></Input>

                  <label>Message</label>
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
                      color: "#C0975F",
                      backgroundColor: "#2F4858",
                      justifyContent: "center",
                    }}
                    loading={loading}
                  >
                    <IoSendOutline />
                    Enviar
                  </Button>
                </form>
              </div>

              <Divider type="vertical" />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "24px" }}>
                  Para realizar a transferência de R${currGift.price} utilize o
                  QRCode abaixo:
                </p>
                <img height={200} width={200} src="./qrcode.png"></img>
                <p style={{ marginTop: "10px" }}>
                  ou, utilize a nossa chave pix (11) 9961689816
                </p>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default index;
