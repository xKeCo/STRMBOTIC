import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import s from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={s.container}>
      <Head>
        <title>STRMBOTIC®</title>
        <meta name="description" content="STRMBOTIC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={s.heroSection}>
        <div className={s.heroSection__details}>
          <h1 className={s.heroSection__details__mainText}>
            Space Turtle Silicone Case
          </h1>
          {/* <p className={s.heroSection__details__subText}>
            100% Silicone Case w/ a space design
          </p> */}
          <div className={s.shopButton}>Shop Now</div>
        </div>
        <div className={s.heroSection__image}>
          <img src="/hero-image.png" alt="hero-image" width="100%" />
        </div>
      </main>

      <section>
        <img src="/cell.png" alt="cell" width="100%" />
      </section>

      <footer className={s.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={s.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
