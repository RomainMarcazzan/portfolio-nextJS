import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Head from "next/head";

const AboutPage = () => {
  const animate = {
    y: 0,
    x: 0,
    transition: { duration: 0.5 },
  };

  const dragConstraints = {
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,
  };

  return (
    <div>
      <Head>
        <title>Romain Marcazzan | Développeur Freelance | Profil</title>
        <meta
          name="description"
          content="Développeur fullstack Web et applications mobiles Freelance basé à l'île de la Réunion (React, React Native, Next JS, NodeJS)"
        />
        <link rel="icon" href="/rm.ico" />
      </Head>

      <main className="aboutPage">
        <NavBar />
        <div className="aboutPage__container">
          <motion.div
            initial={{ x: 100 }}
            animate={animate}
            drag
            dragConstraints={dragConstraints}
            dragElastic={1}
            className="aboutPage__card"
          >
            BACKEND: Express, Sequelize, MySql, MongoDb, Firebase...
          </motion.div>
          <motion.div
            initial={{ y: 200, x: -100 }}
            animate={animate}
            drag
            dragConstraints={dragConstraints}
            dragElastic={1}
            className="aboutPage__card"
          >
            Je suis développeur, diplômé Bac+2, basé à Saint Denis de la
            Réunion. J<span>{"'"}</span>utilise des technologies JavaScript
            modernes pour la création de sites web et applications mobiles. N
            <span>{"'"}</span>hésitez pas à me contacter pour parler de votre
            projet.
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            animate={animate}
            drag
            dragConstraints={dragConstraints}
            dragElastic={1}
            className="aboutPage__card"
          >
            FRONTEND: React, NextJs, Redux, Context Api, hooks, React-Native,
            Sass, ThreeJS...
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
