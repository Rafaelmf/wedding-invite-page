import dynamic from "next/dynamic";
import React from "react";
import styles from "./Party.module.css";
import TimerCountDown from "./TimerCountDown";

import { IoLocationOutline } from "react-icons/io5";
import {
  AiFillFacebook,
  AiOutlineClockCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Divider, Avatar } from "antd";
import Link from "antd/lib/typography/Link";

const index = () => {
  const DynamicMapWithNoSSR = dynamic(
    () => import("./MapComponent"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return (
    <section style={{ backgroundColor: "#f2f2f2" }}>
      <div className={styles.SvgDivider}>
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

      <div className={styles.party}>
        <div className={styles.partyInternal}>
          <div style={{ textAlign: "center" }}>
            <h1 className={styles.titleParty}>Quando ?</h1>
            <p style={{ marginBottom: "0" }}>22/04/2023</p>
            <p>Início às 08h30</p>

            <div className={styles.timer}>
              <TimerCountDown />
            </div>
          </div>

          <Divider type="vertical" />

          <div>
            <h1 className={styles.titleParty}>Onde ?</h1>

            <div className={styles.locationContainer}>
              <div className={styles.avatarSpan}>
                <a
                  style={{ fontSize: "1.8em" }}
                  target="_blank"
                  href="https://www.google.com/maps/place/Armazem+de+Maria/@-22.0174671,-47.8582099,17z/data=!3m1!4b1!4m5!3m4!1s0x94b8769665c9da1b:0x1e70e60b33f58043!8m2!3d-22.01747!4d-47.8560005"
                >
                  Espaço Armazém de Maria
                </a>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/espacoarmazemdemaria/"
                >
                  <AiOutlineFacebook size={50} className={styles.icons} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/espacoarmazemdemaria/?hl=en"
                >
                  <AiOutlineInstagram size={50} className={styles.icons} />
                </Link>
              </div>

              {/* <img
                className={styles.armazemPicture}
                src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b3/db/5e/armazem-de-maria.jpg"
              /> */}

              <div className={styles.mapCenter}>
                <DynamicMapWithNoSSR />
              </div>

              {/* <div className={styles.socialDiv}>
                <div className={styles.socialMediaDiv}>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/espacoarmazemdemaria/"
                  >
                    <AiOutlineFacebook size={30} className={styles.icons} />
                  </Link>
                  <p className={styles.socialTxt}>/espacoarmazemdemaria</p>
                </div>
                <div className={styles.socialMediaDiv}>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/espacoarmazemdemaria/?hl=en"
                  >
                    <AiOutlineInstagram size={30} className={styles.icons} />
                  </Link>
                  <p className={styles.socialTxt}>@espacoarmazemdemaria</p>
                </div>
                <div className={styles.socialMediaDiv}>
                  <Link
                    target="_blank"
                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5516991580024%26app%3Dfacebook%26entry_point%3Dpage_cta&h=AT0SqEqnhGa-b8Ftd8mJf4W7o_ToZqEW3oGVxBoXPAG3nE19uvMmaLBu0QPd3UXBTayWzKTZkTRwHgIKPXRDUp5u6d5fzEGv5wVTZdQp7VSdsrGkp-MylRW2f9GNNKHRFrbkOXoHq_oDEFyNkuIbaCYDW9AeutMH2EVLpolUGYU"
                  >
                    <AiOutlineWhatsApp size={30} className={styles.icons} />
                  </Link>
                  <p className={styles.socialTxt}>+55 16 99158-0024</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
