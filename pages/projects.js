import { useRef, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

const groupomania = require("../public/assets/videos/groupomania.mp4");
const netflix_clone = require("../public/assets/videos/netflix.mp4");
const meal_app = require("../public/assets/videos/meal-app.mp4");

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
      title: "meal app",
      ref: useRef(meal_app),
      technos: "React Native, Expo, Redux...",
    },
  ];
  const [selectedVideo, setSelectedVideo] = useState({
    video: null,
    key: null,
    init: "100%",
  });

  return (
    <div>
      <Head>
        <title>Romain Marcazzan | Développeur Freelance</title>
        <meta
          name="description"
          content="Développeur fullstack Web et applications mobiles Freelance React, React Native, Next JS, NodeJS"
        />
        <link rel="icon" href="/rm.ico" />
      </Head>
      <main className="projectsPage">
        <NavBar />
        <div className="projectsPage__container">
          <div className="projectsPage__container__top">
            <ul>
              {videoRoutes.map((videoRoute) => (
                <motion.li
                  key={videoRoute.id}
                  onClick={() => {
                    setSelectedVideo({
                      video: videoRoute.ref.current,
                      key: videoRoute.id,
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
              type="video/mp4"
              src={selectedVideo.video}
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
                  duration: 0.8,
                },
              }}
              className="projectsPage__container__bottom--overlay"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
