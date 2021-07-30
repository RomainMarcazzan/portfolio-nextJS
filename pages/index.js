import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";
import Banner from "../components/Banner";
import NavBarHome from "../components/NavBarHome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Romain Marcazzan | Développeur Freelance</title>
        <meta
          name="description"
          content="Développeur fullstack Web et applications mobiles Freelance React, ReactJS, NodeJS"
        />
        <link rel="icon" href="/rm.ico" />
      </Head>

      <main className="homePage">
        <Banner />
        <NavBarHome />
      </main>
    </div>
  );
}
