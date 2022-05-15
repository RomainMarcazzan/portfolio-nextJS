import React, { useState, useRef } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import groupomania from "../public/assets/videos/groupomania.mp4";
import netflix_clone from "../public/assets/videos/netflix.mp4";
import uber from "../public/assets/videos/uber.mp4";
import ecommerce from "../public/assets/videos/ecommerce.mp4";

const ProjectsPage = () => {
  const videoRoutes = [
    {
      id: 0,
      title: "groupomania",
      ref: useRef(groupomania),
      technos: "React, Express, Sequelize, MySql...",
    },
    {
      id: 1,
      title: "netflix clone",
      ref: useRef(netflix_clone),
      technos: "React, Sass, Firebase, Stripe...",
    },
    {
      id: 2,
      title: "Uber Drive clone",
      ref: useRef(uber),
      technos: "React Native, Expo, Redux, GoogleMapsAPI...",
    },

    {
      id: 3,
      title: "Ecommerce",
      ref: useRef(ecommerce),
      technos: "NextJs, ContextApi, Paypal, MongoDb...",
    },
  ];
  const [selectedVideo, setSelectedVideo] = useState({
    video: null,
    key: null,
    init: "100%",
  });

  return (
    <div className="projectsPage">
      <Head>
        <title>Romain Marcazzan | Développeur Freelance | Projets</title>
        <meta
          name="description"
          content="Développeur fullstack Web et applications mobiles Freelance basé à l'île de la Réunion (React, React Native, Next JS, NodeJS)"
        />
        <link rel="icon" href="/rm.ico" />
      </Head>
      <NavBar isShown />
      <main className="projectsPage__container">
        <div className="projectsPage__container__top">
          <ul>
            {videoRoutes.map((videoRoute) => (
              <motion.li
                key={videoRoute.id}
                onMouseEnter={() => {
                  setSelectedVideo({
                    video: videoRoute.ref.current,
                    key: videoRoute.id,
                    init: "100%",
                    anim: "0%",
                  });
                }}
                onMouseLeave={() => {
                  setSelectedVideo({
                    video: videoRoute.ref.current,
                    key: videoRoute.id,
                    init: "0%",
                    anim: "100%",
                  });
                }}
                onClick={() => {
                  setSelectedVideo({
                    video: videoRoute.ref.current,
                    key: videoRoute.id,
                    init: "0%",
                    anim: "0%",
                  });
                }}
              >
                {videoRoute.title} <span>{videoRoute.technos}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="projectsPage__container__bottom">
          <video
            src={selectedVideo.video}
            type="video/mp4"
            autoPlay
            loop
            muted
          />
          <motion.div
            initial={{ height: selectedVideo.init }}
            animate={{
              height: selectedVideo.anim,
              transition: {
                ease: "easeInOut",
                duration: 0.5,
              },
            }}
            className="projectsPage__container__bottom--overlay"
          />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
