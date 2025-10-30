import styles from "./Confirmation.module.css";
import { Input, Button, List, notification } from "antd";
import { useState } from "react";
import { IoSearch, IoSendOutline } from "react-icons/io5";
import { CloseOutlined } from "@ant-design/icons";
import CheckOutlined from "@ant-design/icons/CheckOutlined";
import emailjs from "@emailjs/browser";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGP2N0yooK_q29ERtPNmT76IWX4MaWEiU",
  authDomain: "giovanna-julia-weeding.firebaseapp.com",
  databaseURL: "https://giovanna-julia-weeding-default-rtdb.firebaseio.com",
  projectId: "giovanna-julia-weeding",
  storageBucket: "giovanna-julia-weeding.appspot.com",
  messagingSenderId: "824824671948",
  appId: "1:824824671948:web:541743d46607af2047dc69",
};
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const dbRef = ref(getDatabase());

interface Guest {
  Código?: string;
  Idade?: string;
  Nome?: string;
  Observações?: string;
  Sexo: string;
  Telefone?: string;
  confirmed?: boolean;
}

const index = () => {
  const [code, setCode] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const [list, setList] = useState<Guest[]>();

  const allConfirmed = list?.every((obj) => obj.hasOwnProperty("confirmed"));

  const handleSearchCode = async () => {
    get(child(dbRef, `/guest/${code}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const val = snapshot.val() as Guest | Guest[];
          if (Array.isArray(val)) {
            const allConfirm = val.every((obj) =>
              obj.hasOwnProperty("confirmed")
            );
            if (allConfirm)
              api.error({
                message: "Sua confirmaçao ja foi enviada.",
                description:
                  "Em caso de mudanças entre em contato diretamente neste e-mail: ",
              });
            else setList(val);
          } else {
            console.log(typeof val.confirmed);

            if (val.hasOwnProperty("confirmed"))
              api.error({
                message: "Sua confirmaçao ja foi enviada.",
                description:
                  "Em caso de mudanças entre em contato diretamente neste e-mail: ",
              });
            else setList([val]);
          }
        } else {
          api.error({
            message: "Código não encontrado.",
            description:
              "Verifique novamente se o código inserido está correto.",
          });
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleConfirm = async (guest: Guest, confirm: boolean) => {
    if (list) {
      const copy = [...list];
      copy.map((e) => {
        if (e.Nome === guest.Nome) guest.confirmed = confirm;
        return e;
      });
      setList(copy);
    }
  };

  const handleSubmitConfirmations = () => {
    // Uncomment to save the confirm to db
    set(child(dbRef, "guest/" + code), list);
    setList([]);
    if (!list) return;
    const getConfirmTxt = (bool: any) => {
      if (bool === undefined) return undefined;
      if (bool) return ": PRESENÇA Confirmada!!";
      else return ": AUSÊNCIA Confirmada :(";
    };
    let emailParams = { code: list[0].Código };
    list.forEach((guest, index) => {
      emailParams = {
        ...emailParams,
        [`guest${index}Name`]: `- ${guest.Nome}`,
        [`guest${index}Confirm`]: getConfirmTxt(guest.confirmed),
      };
    });

    emailjs
      .send(
        "service_44ssobe",
        "template_35n2aj6",
        emailParams,
        "Uxk454g_u9hrTkmnR"
      )
      .then(
        (result) => {
          api.success({
            message: "Sucesso.",
            description: "Confirmaçao enviada.",
          });
        },
        (error) => {}
      );
  };

  return (
    <>
      <div className={styles.location}>
        {contextHolder}
        <h1 className={styles.recommendationTitle}>
          Confirme aqui a sua presença!
        </h1>
        <div className={styles.locationInternal}>
          <div className={styles.recommendationCodeDiv}>
            <Input
              addonBefore="Insira aqui o seu código:"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Codigo"
              name="code"
              suffix={
                <Button
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  size="large"
                  onClick={handleSearchCode}
                >
                  <IoSearch />
                  Procurar
                </Button>
              }
            />
          </div>
          <div></div>
          <List
            bordered
            header={
              <div className={styles.headerGuestList}>
                <h2 style={{ display: "flex", alignItems: "center" }}>
                  Nome do Convidado
                </h2>
                <div className={styles.headerGuestListConfirm}>
                  <h2 className={styles.confirmTxt}>Confirmar</h2>
                  <h4>Presença</h4>
                  <h4>Ausência</h4>
                </div>
              </div>
            }
            footer={
              <Button
                htmlType="submit"
                size="large"
                className={allConfirmed ? styles.sendBtnReady : styles.sendBtn}
                disabled={!allConfirmed}
                onClick={handleSubmitConfirmations}
              >
                <IoSendOutline />
                Enviar
              </Button>
            }
            locale={{
              emptyText: "Utilize o código para buscar a lista de convidados",
            }}
            className={styles.guestListToConfirm}
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(guest: Guest) => (
              <List.Item
                style={
                  guest.confirmed
                    ? { backgroundColor: "rgba(50, 205, 50, 0.17)" }
                    : guest.confirmed === false
                    ? {
                        textDecoration: "line-through",
                        backgroundColor: "rgb(205 50 50 / 17%)",
                      }
                    : {}
                }
                key={guest.Nome}
                actions={[
                  <div style={{ width: "8rem", display: "flex", gap: "10px" }}>
                    <Button
                      onClick={() => handleConfirm(guest, true)}
                      size="large"
                      key="list-loadmore-edit"
                      shape="round"
                      icon={<CheckOutlined />}
                    />

                    <Button
                      danger
                      onClick={() => handleConfirm(guest, false)}
                      size="large"
                      shape="round"
                      key="list-loadmore-more"
                      icon={<CloseOutlined />}
                    />
                  </div>,
                ]}
              >
                <List.Item.Meta title={guest.Nome} />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default index;
