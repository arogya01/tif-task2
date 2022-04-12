import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const slideUp = {
  name: "Slide Up",
  variants: {
    initial: {
      opacity: 0,
      top: "100vh",
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      top: "0vh",
      scale: 1,
    },
    exit: {
      opacity: [0.7, 0],
      top: "100vh",
      scale: [0.8, 0.4],
    },
  },
  transition: {
    duration: 0.7,
  },
};

const slideRight = {
  name: "Slide Right",
  variants: {
    initial: {
      opacity: 0,
      left: "-200px",
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      left: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      left: "200px",
      scale: 0.6,
    },
  },
  transition: {
    duration: 0.7,
  },
};

const fadeBack = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
      scale: 0.3,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: [0.6, 0],
      scale: 0.3,
    },
  },
  transition: {
    duration: 0.5,
  },
};

const Layout = (props) => {
  const router = useRouter();

  const url = `https://wallis.dev${router.route}`;

  return (
    <div>
      <motion.main
        key={url}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeBack.variants}
        transition={fadeBack.transition}
      >
        {props.children}
      </motion.main>
    </div>
  );
};

export default Layout;
