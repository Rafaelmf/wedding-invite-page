import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import PartySection from "../components/party";
import GiftsSection from "../components/gifts";
import AboutUs from "../components/about";
import CityLocations from "../components/city";
import Confirmation from "../components/confirmation";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Julia e Giovana</title>
        <meta
          name="description"
          content="Página de convite do casamento de Júlia e Giovana"
        />
        <link rel="icon" href="/rings2.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ms+Madi&family=Square+Peg&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
        />
        <script
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
        ></script>

        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
        </style>
      </Head>

      <main className="main">
        <AboutUs />

        <PartySection />

        <div
          style={{ backgroundImage: "url(./layered-waves-haikei-top.svg)" }}
          className="spacer"
        ></div>

        <GiftsSection />

        <div
          style={{ backgroundImage: "url(./layered-waves-haikei.svg)" }}
          className="spacer"
        ></div> 

        {/* <Confirmation /> */}

        <CityLocations />
      </main>

      <footer className={styles.footer}>
        © por Júlia e Giovana
        <span className={styles.logo}>
          <img src="/rings2.ico" alt="rings" width={42} height={42} />
        </span>
      </footer>
    </div>
  );
};

export default Home;
