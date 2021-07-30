import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({ isShown }) => {
  const menu = [
    { title: "Home", path: "/" },
    { title: "Profil", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Contact", path: "/contact" },
  ];

  const router = useRouter();

  return (
    <motion.div
      initial={{ y: -180 }}
      animate={{
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 0.5,
        },
      }}
      className="navBar"
    >
      {menu.map((item, index) => {
        return (
          <Link key={index} href={item.path}>
            <a
              className={` ${
                router.pathname === item.path ? "localNav" : "activeNav"
              }`}
            >
              {item.title}
            </a>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default NavBar;
